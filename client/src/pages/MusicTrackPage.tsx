import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Heart, Music, ArrowLeft, User } from "lucide-react";
import type { MusicTrackWithCreator } from "@shared/schema";

export default function MusicTrackPage() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

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

  const streamSrc = track.streamUrl ?? track.sourceFileUrl ?? "";

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
      </div>

      {/* Player */}
      {streamSrc && (
        <MusicPlayer
          src={streamSrc}
          title={track.title}
          artist={track.creator.displayName ?? track.creator.username}
          coverArtUrl={track.coverArtUrl ?? undefined}
          className="mb-6"
        />
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
