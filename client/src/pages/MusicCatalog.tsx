import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MoreHorizontal, Plus, Music, Loader2 } from "lucide-react";
import type { MusicTrack } from "@shared/schema";

const STATUS_TABS = ["all", "draft", "scheduled", "published", "archived"] as const;
type StatusTab = (typeof STATUS_TABS)[number];

const STATUS_COLORS: Record<string, string> = {
  draft: "secondary",
  scheduled: "outline",
  published: "default",
  archived: "destructive",
};

function formatDate(d: string | Date | null | undefined) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString();
}

interface TrackFormData {
  title: string;
  description: string;
  genre: string;
  coverArtUrl: string;
  sourceFileUrl: string;
  bpm: string;
  keySignature: string;
}

const EMPTY_FORM: TrackFormData = {
  title: "",
  description: "",
  genre: "",
  coverArtUrl: "",
  sourceFileUrl: "",
  bpm: "",
  keySignature: "",
};

export default function MusicCatalog() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<StatusTab>("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTrack, setEditingTrack] = useState<MusicTrack | null>(null);
  const [form, setForm] = useState<TrackFormData>(EMPTY_FORM);

  const statusFilter = activeTab === "all" ? undefined : activeTab;

  const { data: tracks = [], isLoading } = useQuery<MusicTrack[]>({
    queryKey: ["/api/music/catalog", statusFilter],
    queryFn: () =>
      fetch(`/api/music/catalog${statusFilter ? `?status=${statusFilter}` : ""}`, {
        credentials: "include",
      }).then((r) => r.json()),
  });

  const createMutation = useMutation({
    mutationFn: (data: Partial<MusicTrack>) =>
      apiRequest("POST", "/api/music/tracks", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/music/catalog"] });
      setDialogOpen(false);
      setForm(EMPTY_FORM);
      toast({ title: "Track created" });
    },
    onError: (e: Error) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<MusicTrack> }) =>
      apiRequest("PATCH", `/api/music/tracks/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/music/catalog"] });
      setDialogOpen(false);
      setEditingTrack(null);
      toast({ title: "Track updated" });
    },
    onError: (e: Error) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/music/tracks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/music/catalog"] });
      toast({ title: "Track deleted" });
    },
    onError: (e: Error) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const publishMutation = useMutation({
    mutationFn: (id: string) => apiRequest("POST", `/api/music/tracks/${id}/publish`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/music/catalog"] });
      toast({ title: "Track published" });
    },
    onError: (e: Error) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const unpublishMutation = useMutation({
    mutationFn: (id: string) => apiRequest("POST", `/api/music/tracks/${id}/unpublish`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/music/catalog"] });
      toast({ title: "Track unpublished" });
    },
    onError: (e: Error) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const openNew = () => {
    setEditingTrack(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };

  const openEdit = (track: MusicTrack) => {
    setEditingTrack(track);
    setForm({
      title: track.title ?? "",
      description: track.description ?? "",
      genre: track.genre ?? "",
      coverArtUrl: track.coverArtUrl ?? "",
      sourceFileUrl: track.sourceFileUrl ?? "",
      bpm: track.bpm?.toString() ?? "",
      keySignature: track.keySignature ?? "",
    });
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    const payload: Partial<MusicTrack> = {
      title: form.title,
      description: form.description || undefined,
      genre: form.genre || undefined,
      coverArtUrl: form.coverArtUrl || undefined,
      sourceFileUrl: form.sourceFileUrl || undefined,
      bpm: form.bpm ? parseInt(form.bpm) : undefined,
      keySignature: form.keySignature || undefined,
    };
    if (editingTrack) {
      updateMutation.mutate({ id: editingTrack.id, data: payload });
    } else {
      createMutation.mutate(payload);
    }
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Music className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Music Catalog</h1>
        </div>
        <Button onClick={openNew}>
          <Plus className="w-4 h-4 mr-2" />
          New Track
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as StatusTab)}>
        <TabsList className="mb-4">
          {STATUS_TABS.map((t) => (
            <TabsTrigger key={t} value={t} className="capitalize">
              {t}
            </TabsTrigger>
          ))}
        </TabsList>

        {STATUS_TABS.map((tab) => (
          <TabsContent key={tab} value={tab}>
            {isLoading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : tracks.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <Music className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>No tracks yet.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Plays</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="w-10" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tracks.map((track) => (
                    <TableRow key={track.id}>
                      <TableCell className="font-medium">{track.title}</TableCell>
                      <TableCell className="text-muted-foreground">{track.genre ?? "—"}</TableCell>
                      <TableCell>
                        <Badge variant={STATUS_COLORS[track.status] as "default" | "secondary" | "outline" | "destructive"}>
                          {track.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{track.playCount ?? 0}</TableCell>
                      <TableCell className="text-muted-foreground">{formatDate(track.createdAt)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => openEdit(track)}>Edit</DropdownMenuItem>
                            {track.status !== "published" && (
                              <DropdownMenuItem onClick={() => publishMutation.mutate(track.id)}>
                                Publish
                              </DropdownMenuItem>
                            )}
                            {track.status === "published" && (
                              <DropdownMenuItem onClick={() => unpublishMutation.mutate(track.id)}>
                                Unpublish
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => deleteMutation.mutate(track.id)}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingTrack ? "Edit Track" : "New Track"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2">
            <div>
              <label className="text-sm font-medium mb-1 block">Title *</label>
              <Input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Track title"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Description</label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Optional description"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium mb-1 block">Genre</label>
                <Input
                  value={form.genre}
                  onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))}
                  placeholder="e.g. Electronic"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">BPM</label>
                <Input
                  type="number"
                  value={form.bpm}
                  onChange={(e) => setForm((f) => ({ ...f, bpm: e.target.value }))}
                  placeholder="e.g. 120"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Key Signature</label>
              <Input
                value={form.keySignature}
                onChange={(e) => setForm((f) => ({ ...f, keySignature: e.target.value }))}
                placeholder="e.g. C major"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Cover Art URL</label>
              <Input
                value={form.coverArtUrl}
                onChange={(e) => setForm((f) => ({ ...f, coverArtUrl: e.target.value }))}
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Source File URL (WAV/MP3/MP4)</label>
              <Input
                value={form.sourceFileUrl}
                onChange={(e) => setForm((f) => ({ ...f, sourceFileUrl: e.target.value }))}
                placeholder="https://..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={!form.title.trim() || isSaving}>
              {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editingTrack ? "Save Changes" : "Create Track"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
