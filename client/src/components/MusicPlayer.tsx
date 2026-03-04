import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react";

interface MusicPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  coverArtUrl?: string;
  className?: string;
  onEnded?: () => void;
}

export function MusicPlayer({
  src,
  title,
  artist,
  coverArtUrl,
  className,
  onEnded,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const isHls = src.includes(".m3u8");

    if (isHls && Hls.isSupported()) {
      hlsRef.current?.destroy();
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(audio);
      hlsRef.current = hls;
    } else {
      audio.src = src;
    }

    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onEnded]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch((err: Error) => {
        setPlaybackError(err.message ?? "Playback blocked by browser");
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const handleVolume = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = value[0];
    setVolume(value[0]);
  };

  const formatTime = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const skipBack = () => {
    const audio = audioRef.current;
    if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (audio) audio.currentTime = Math.min(duration, audio.currentTime + 10);
  };

  return (
    <div className={cn("bg-card border rounded-xl p-4 flex flex-col gap-3", className)}>
      <audio ref={audioRef} preload="metadata" />

      <div className="flex items-center gap-3">
        {coverArtUrl ? (
          <img
            src={coverArtUrl}
            alt={title}
            className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
            <Volume2 className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{title ?? "Untitled"}</p>
          <p className="text-xs text-muted-foreground truncate">{artist ?? ""}</p>
        </div>
      </div>

      {/* Playback error */}
      {playbackError && (
        <p className="text-xs text-destructive">{playbackError}</p>
      )}

      {/* Seek bar */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="w-8 text-right">{formatTime(currentTime)}</span>
        <Slider
          value={[currentTime]}
          max={duration || 1}
          step={1}
          onValueChange={handleSeek}
          className="flex-1"
        />
        <span className="w-8">{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={skipBack}>
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button variant="default" size="icon" className="h-10 w-10 rounded-full" onClick={togglePlay}>
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={skipForward}>
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleMute}>
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.05}
            onValueChange={handleVolume}
            className="w-20"
          />
        </div>
      </div>
    </div>
  );
}
