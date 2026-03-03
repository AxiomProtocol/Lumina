import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useWallet } from "@/lib/walletContext";
import { Heart, Music, ArrowLeft, User, Lock, Eye } from "lucide-react";
import { useState } from "react";
import type { MusicTrackWithCreator } from "@shared/schema";

export default function MusicTrackPage() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { address, isConnected, connect } = useWallet();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [gateChecking, setGateChecking] = useState(false);
  const [previewEnded, setPreviewEnded] = useState(false);

  const { data: track, isLoading, error } = useQuery<MusicTrackWithCreator>({
    queryKey: [`/api/music/tracks/${id}`],
    queryFn: () => fetch(`/api/music/tracks/${id}`).then((r) => r.json()),
    enabled: !!id,
  });

  const likeMutation = useMutation({
    mutationFn: () => apiRequest("POST", `/api/music/tracks/${id}/like`),
    onSuccess: () => toast({ title: "Liked!" }),
    onError: () => toast({ title: "Please log in to like tracks", variant: "destructive" }),
  });

  async function checkGatedAccess() {
    if (!address || !track) return;
    setGateChecking(true);
    try {
      const message = `Access track ${track.id} with wallet ${address}`;
      const signature = await (window as any).ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });
      const res = await fetch(`/api/music/tracks/${track.id}/gate-check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress: address, signature, message }),
      });
      const data = await res.json();
      setHasAccess(data.hasAccess);
      if (!data.hasAccess) {
        toast({ title: "Access denied", description: data.reason ?? "No NFT found", variant: "destructive" });
      }
    } catch {
      toast({ title: "Could not verify access", variant: "destructive" });
    } finally {
      setGateChecking(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !track) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Music className="w-16 h-16 text-muted-foreground opacity-30" />
        <p className="text-muted-foreground">Track not found.</p>
        <Link href="/music">
          <Button variant="outline">Back to Music</Button>
        </Link>
      </div>
    );
  }

  const accessMode = track.accessMode ?? "public";
  const isGated = accessMode === "gated";
  const isPreviewGated = accessMode === "preview_gated";
  const streamSrc = track.streamUrl ?? track.sourceFileUrl ?? "";

  // Determine if audio should be shown
  const showPlayer =
    accessMode === "public" ||
    isPreviewGated ||
    (isGated && hasAccess === true);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link href="/music">
        <Button variant="ghost" size="sm" className="mb-6 -ml-2">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
      </Link>

      {/* Cover art */}
      <div className="relative mb-6">
        {track.coverArtUrl ? (
          <img
            src={track.coverArtUrl}
            alt={track.title}
            className="w-full aspect-square object-cover rounded-2xl shadow-lg"
          />
        ) : (
          <div className="w-full aspect-square bg-muted rounded-2xl flex items-center justify-center">
            <Music className="w-24 h-24 text-muted-foreground opacity-30" />
          </div>
        )}
      </div>

      {/* Title + actions */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold">{track.title}</h1>
          <Link href={`/profile/${track.creator.username}`}>
            <span className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 mt-1 text-sm">
              <User className="w-4 h-4" />
              {track.creator.displayName ?? track.creator.username}
            </span>
          </Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => likeMutation.mutate()}
          disabled={likeMutation.isPending}
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Metadata badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {track.genre && <Badge variant="secondary">{track.genre}</Badge>}
        {track.bpm && <Badge variant="outline">{track.bpm} BPM</Badge>}
        {track.keySignature && <Badge variant="outline">{track.keySignature}</Badge>}
        <Badge variant="outline">{track.likeCount ?? 0} likes</Badge>
        <Badge variant="outline">{track.playCount ?? 0} plays</Badge>
        {isGated && (
          <Badge variant="destructive" className="flex items-center gap-1">
            <Lock className="w-3 h-3" /> Gated
          </Badge>
        )}
        {isPreviewGated && (
          <Badge variant="outline" className="flex items-center gap-1">
            <Eye className="w-3 h-3" /> Preview
          </Badge>
        )}
      </div>

      {/* Gated access section */}
      {isGated && hasAccess !== true && (
        <div className="border rounded-lg p-4 mb-6 text-center">
          <Lock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
          <p className="font-medium mb-3">This track requires NFT ownership to play</p>
          {!isConnected ? (
            <Button onClick={connect}>Connect Wallet to Access</Button>
          ) : (
            <Button onClick={checkGatedAccess} disabled={gateChecking}>
              {gateChecking ? "Checking..." : "Verify Access"}
            </Button>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            <Link href={`/music/drop/${id}`} className="underline">Get an NFT for this track</Link>
          </p>
        </div>
      )}

      {/* Player */}
      {showPlayer && streamSrc && (
        <>
          <MusicPlayer
            src={streamSrc}
            title={track.title}
            artist={track.creator.displayName ?? track.creator.username}
            coverArtUrl={track.coverArtUrl ?? undefined}
            className="mb-6"
          />
          {isPreviewGated && !previewEnded && track.previewSeconds && (
            <p className="text-xs text-muted-foreground -mt-4 mb-6 text-center">
              Preview: first {track.previewSeconds}s — <Link href={`/music/drop/${id}`} className="underline">Buy NFT to hear full track</Link>
            </p>
          )}
          {isPreviewGated && previewEnded && (
            <div className="border rounded-lg p-4 mb-6 text-center">
              <p className="font-medium">Preview ended</p>
              <p className="text-sm text-muted-foreground mb-3">Buy an NFT to hear the full track</p>
              <Link href={`/music/drop/${id}`}>
                <Button size="sm">Buy NFT to hear full track</Button>
              </Link>
            </div>
          )}
        </>
      )}

      {/* Description */}
      {track.description && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{track.description}</p>
      )}

      {/* Rights info */}
      {track.rightsDeclaration && (
        <div className="border rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Rights</p>
          <p className="text-muted-foreground capitalize">
            {track.rightsDeclaration.rightsType} &mdash;{" "}
            {track.rightsDeclaration.licenseType.replace(/_/g, " ")}
          </p>
          {track.rightsDeclaration.originalArtist && (
            <p className="text-muted-foreground">
              Original: {track.rightsDeclaration.originalArtist}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
