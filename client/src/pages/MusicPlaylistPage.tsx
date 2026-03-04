import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ArrowLeft, Music, User, Play } from "lucide-react";
import { useState } from "react";
import type { MusicPlaylistWithTracks, MusicTrack } from "@shared/schema";

export default function MusicPlaylistPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTrack, setActiveTrack] = useState<MusicTrack | null>(null);

  const { data: playlist, isLoading, error } = useQuery<MusicPlaylistWithTracks>({
    queryKey: [`/api/music/playlists/${id}`],
    queryFn: () => fetch(`/api/music/playlists/${id}`).then((r) => r.json()),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !playlist) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Music className="w-16 h-16 text-muted-foreground opacity-30" />
        <p className="text-muted-foreground">Playlist not found.</p>
        <Link href="/music">
          <Button variant="outline">Back to Music</Button>
        </Link>
      </div>
    );
  }

  const tracks = playlist.tracks ?? [];
  const activeSrc = activeTrack ? (activeTrack.streamUrl ?? activeTrack.sourceFileUrl ?? "") : "";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link href="/music">
        <Button variant="ghost" size="sm" className="mb-6 -ml-2">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
      </Link>

      {/* Header */}
      <div className="flex gap-5 mb-6">
        {playlist.coverArtUrl ? (
          <img
            src={playlist.coverArtUrl}
            alt={playlist.title}
            className="w-32 h-32 rounded-xl object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-32 h-32 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
            <Music className="w-12 h-12 text-muted-foreground opacity-40" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold mb-1">{playlist.title}</h1>
          <Link href={`/profile/${playlist.creator.username}`}>
            <span className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              <User className="w-3 h-3" />
              {playlist.creator.displayName ?? playlist.creator.username}
            </span>
          </Link>
          {playlist.description && (
            <p className="text-sm text-muted-foreground mt-2">{playlist.description}</p>
          )}
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary">{tracks.length} tracks</Badge>
          </div>
        </div>
      </div>

      {/* Player for active track */}
      {activeTrack && activeSrc && (
        <MusicPlayer
          src={activeSrc}
          title={activeTrack.title}
          coverArtUrl={activeTrack.coverArtUrl ?? undefined}
          className="mb-6"
        />
      )}

      {/* Track list */}
      <div className="flex flex-col divide-y divide-border rounded-xl border overflow-hidden">
        {tracks.length === 0 && (
          <div className="py-10 text-center text-muted-foreground text-sm">
            This playlist is empty.
          </div>
        )}
        {tracks.map(({ track }, idx) => (
          <div
            key={track.id}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-muted/40 cursor-pointer transition-colors ${
              activeTrack?.id === track.id ? "bg-muted" : ""
            }`}
            onClick={() => setActiveTrack(track)}
          >
            <span className="w-6 text-xs text-muted-foreground text-right">{idx + 1}</span>
            {track.coverArtUrl ? (
              <img src={track.coverArtUrl} alt={track.title} className="w-9 h-9 rounded object-cover" />
            ) : (
              <div className="w-9 h-9 rounded bg-muted flex items-center justify-center">
                <Music className="w-4 h-4 text-muted-foreground" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{track.title}</p>
              {track.genre && <p className="text-xs text-muted-foreground">{track.genre}</p>}
            </div>
            <Play className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
