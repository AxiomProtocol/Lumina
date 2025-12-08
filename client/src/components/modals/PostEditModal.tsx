import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { PostWithAuthor } from "@shared/schema";

interface PostEditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: PostWithAuthor;
}

export function PostEditModal({ open, onOpenChange, post }: PostEditModalProps) {
  const { toast } = useToast();
  const [content, setContent] = useState(post.content || "");

  useEffect(() => {
    if (open) {
      setContent(post.content || "");
    }
  }, [open, post.content]);

  const updateMutation = useMutation({
    mutationFn: async (data: { content: string }) => {
      const response = await apiRequest("PATCH", `/api/posts/${post.id}`, data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Post updated",
        description: "Your post has been updated successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/posts", post.id] });
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/users", post.author?.username] });
      onOpenChange(false);
    },
    onError: () => {
      toast({
        title: "Failed to update",
        description: "Could not update your post. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate({ content: content.trim() });
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setContent(post.content || "");
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit2 className="h-5 w-5" />
            Edit Post
          </DialogTitle>
          <DialogDescription>
            Make changes to your post caption. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="content">Caption</Label>
              <Textarea
                id="content"
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] resize-none"
                data-testid="input-edit-content"
              />
            </div>

            {post.mediaUrl && (
              <div className="rounded-lg overflow-hidden border">
                {post.postType === "video" ? (
                  <div className="relative aspect-video bg-black">
                    {post.thumbnailUrl ? (
                      <img
                        src={post.thumbnailUrl}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        Video preview
                      </div>
                    )}
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Video
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={post.mediaUrl}
                    alt="Post media"
                    className="w-full h-auto max-h-[200px] object-cover"
                  />
                )}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={updateMutation.isPending}
              data-testid="button-cancel-edit"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={updateMutation.isPending}
              data-testid="button-save-edit"
            >
              {updateMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
