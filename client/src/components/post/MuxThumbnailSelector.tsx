import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Loader2, Wand2, Grid3X3, Upload, Check, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { getCsrfToken } from "@/lib/queryClient";

interface MuxThumbnailSelectorProps {
  muxPlaybackId: string;
  videoDuration: number;
  defaultThumbnailUrl: string;
  onThumbnailSelect: (thumbnailUrl: string) => void;
  onSkip?: () => void;
  className?: string;
}

export function MuxThumbnailSelector({
  muxPlaybackId,
  videoDuration,
  defaultThumbnailUrl,
  onThumbnailSelect,
  onSkip,
  className,
}: MuxThumbnailSelectorProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"auto" | "select" | "upload">("auto");
  const [isUploading, setIsUploading] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);
  const [customThumbnail, setCustomThumbnail] = useState<string | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<string>(defaultThumbnailUrl);

  const getMuxThumbnailUrl = (time: number) => {
    return `https://image.mux.com/${muxPlaybackId}/thumbnail.jpg?time=${time}&width=640&height=360`;
  };

  const presetTimes = videoDuration > 0 
    ? [0, Math.floor(videoDuration * 0.25), Math.floor(videoDuration * 0.5), Math.floor(videoDuration * 0.75), Math.floor(videoDuration - 1)]
    : [0, 2, 5, 10, 15];

  const handleCustomUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file",
        description: "Please select an image file",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Thumbnail must be under 10MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const headers: Record<string, string> = {};
      const csrfToken = await getCsrfToken();
      if (csrfToken) {
        headers["X-CSRF-Token"] = csrfToken;
      }

      const response = await fetch("/api/objects/upload-proxy", {
        method: "POST",
        body: formData,
        credentials: "include",
        headers,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setCustomThumbnail(data.objectPath);
      setSelectedThumbnail(data.objectPath);
      toast({
        title: "Thumbnail uploaded",
        description: "Custom thumbnail is ready!",
      });
    } catch (error: any) {
      console.error("Custom upload error:", error);
      toast({
        title: "Failed to upload thumbnail",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirm = () => {
    let thumbnailUrl: string;

    switch (activeTab) {
      case "auto":
        thumbnailUrl = defaultThumbnailUrl;
        break;
      case "select":
        thumbnailUrl = getMuxThumbnailUrl(selectedTime);
        break;
      case "upload":
        thumbnailUrl = customThumbnail || defaultThumbnailUrl;
        break;
      default:
        thumbnailUrl = defaultThumbnailUrl;
    }

    onThumbnailSelect(thumbnailUrl);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          Choose Thumbnail
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="auto" className="gap-2" data-testid="tab-mux-auto">
              <Wand2 className="h-4 w-4" />
              <span className="hidden sm:inline">Auto</span>
            </TabsTrigger>
            <TabsTrigger value="select" className="gap-2" data-testid="tab-mux-select">
              <Grid3X3 className="h-4 w-4" />
              <span className="hidden sm:inline">Select</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="gap-2" data-testid="tab-mux-upload">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Upload</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="auto" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Use the auto-generated thumbnail from your video
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={defaultThumbnailUrl}
                alt="Auto-generated thumbnail"
                className="w-full h-full object-cover"
                data-testid="img-mux-auto-thumbnail"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                Default
              </div>
            </div>
          </TabsContent>

          <TabsContent value="select" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Choose a frame from your video
            </p>
            
            <div className="grid grid-cols-5 gap-2">
              {presetTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "relative aspect-video rounded-md overflow-hidden border-2 transition-all",
                    selectedTime === time ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-muted-foreground/50"
                  )}
                  data-testid={`button-frame-${time}`}
                >
                  <img
                    src={getMuxThumbnailUrl(time)}
                    alt={`Frame at ${formatTime(time)}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-1 py-0.5 text-center">
                    {formatTime(time)}
                  </div>
                  {selectedTime === time && (
                    <div className="absolute top-1 right-1 bg-primary text-primary-foreground rounded-full p-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Custom time:</span>
                <span className="font-medium">{formatTime(selectedTime)}</span>
              </div>
              <Slider
                value={[selectedTime]}
                onValueChange={(v) => setSelectedTime(v[0])}
                max={Math.max(videoDuration - 1, 1)}
                min={0}
                step={1}
                className="w-full"
                data-testid="slider-thumbnail-time"
              />
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={getMuxThumbnailUrl(selectedTime)}
                alt={`Preview at ${formatTime(selectedTime)}`}
                className="w-full h-full object-cover"
                data-testid="img-mux-preview"
              />
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {formatTime(selectedTime)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upload" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Upload your own custom thumbnail image
            </p>
            
            {customThumbnail ? (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={customThumbnail}
                  alt="Custom thumbnail"
                  className="w-full h-full object-cover"
                  data-testid="img-mux-custom"
                />
                <div className="absolute top-2 right-2">
                  <label className="cursor-pointer">
                    <Button size="sm" variant="secondary" asChild>
                      <span>
                        <RefreshCw className="h-4 w-4" />
                      </span>
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCustomUpload}
                      className="hidden"
                      data-testid="input-replace-thumbnail"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <label className="cursor-pointer">
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Uploading...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Click to upload custom thumbnail
                      </span>
                      <span className="text-xs text-muted-foreground">
                        JPG, PNG, GIF up to 10MB
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomUpload}
                  disabled={isUploading}
                  className="hidden"
                  data-testid="input-upload-thumbnail"
                />
              </label>
            )}
          </TabsContent>
        </Tabs>

        <div className="flex gap-2 pt-2">
          {onSkip && (
            <Button
              variant="outline"
              onClick={onSkip}
              className="flex-1"
              data-testid="button-skip-thumbnail"
            >
              Skip
            </Button>
          )}
          <Button
            onClick={handleConfirm}
            className="flex-1"
            data-testid="button-confirm-thumbnail"
          >
            <Check className="h-4 w-4 mr-2" />
            Use This Thumbnail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
