import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Search, Heart, Play } from "lucide-react";
import type { MusicTrackWithCreator } from "@shared/schema";

const GENRES = ["All", "Electronic", "Hip Hop", "Rock", "Pop", "Jazz", "Classical", "R&B", "Folk", "Ambient"];

function TrackCard({ track }: { track: MusicTrackWithCreator }) {
  return (
    <Link href={`/music/track/${track.id}`}>
      <div className="group rounded-xl border bg-card hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
        <div className="relative aspect-square bg-muted">
          {track.coverArtUrl ? (
            <img src={track.coverArtUrl} alt={track.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Music className="w-12 h-12 text-muted-foreground opacity-30" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-5 h-5 text-black ml-0.5" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className="font-semibold text-sm truncate">{track.title}</p>
          <p className="text-xs text-muted-foreground truncate">
            {track.creator.displayName ?? track.creator.username}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {track.genre && (
              <Badge variant="secondary" className="text-xs px-1.5 py-0">
                {track.genre}
              </Badge>
            )}
            <span className="text-xs text-muted-foreground flex items-center gap-0.5 ml-auto">
              <Heart className="w-3 h-3" />
              {track.likeCount ?? 0}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function MusicPage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const { data: tracks = [], isLoading } = useQuery<MusicTrackWithCreator[]>({
    queryKey: ["/api/music/tracks", { status: "published" }],
    queryFn: () =>
      fetch("/api/music/tracks?status=published&limit=50").then((r) => r.json()),
  });

  const filtered = tracks.filter((t) => {
    const matchesSearch =
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      (t.creator.displayName ?? t.creator.username).toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === "All" || t.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Music className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold">Music</h1>
        </div>
        <Link href="/music/catalog">
          <Button variant="outline" size="sm">
            My Catalog
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Search tracks and artists…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Genre filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {GENRES.map((g) => (
          <Button
            key={g}
            size="sm"
            variant={selectedGenre === g ? "default" : "outline"}
            className="whitespace-nowrap flex-shrink-0"
            onClick={() => setSelectedGenre(g)}
          >
            {g}
          </Button>
        ))}
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <Music className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <p className="text-lg">No tracks found</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
    </div>
  );
}
