import type { Express, Request, Response, NextFunction } from "express";
import type { IStorage } from "./storage";
import { isMuxConfigured, createDirectUpload, getUploadStatus, getAsset } from "./services/mux";
import { musicTracks } from "@shared/schema";
import { eq, sql } from "drizzle-orm";
import { db } from "./db";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.userId) {
    return res.status(401).json({ error: "Authentication required" });
  }
  next();
}

export function registerMusicRoutes(app: Express, storage: IStorage) {
  // ---- Track Listing ----
  app.get("/api/music/tracks", async (req: Request, res: Response) => {
    try {
      const { status, creatorId, genre, limit, offset } = req.query;
      const tracks = await storage.getMusicTracks({
        status: status as string | undefined,
        creatorId: creatorId as string | undefined,
        genre: genre as string | undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        offset: offset ? parseInt(offset as string) : undefined,
      });
      res.json(tracks);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch tracks";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Single Track ----
  app.get("/api/music/tracks/:id", async (req: Request, res: Response) => {
    try {
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });
      res.json(track);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch track";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Create Track ----
  app.post("/api/music/tracks", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const track = await storage.createMusicTrack({ ...req.body, creatorId: userId });
      res.status(201).json(track);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to create track";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Update Track ----
  app.patch("/api/music/tracks/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const updated = await storage.updateMusicTrack(req.params.id, req.body);
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to update track";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Delete Track ----
  app.delete("/api/music/tracks/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      await storage.deleteMusicTrack(req.params.id);
      res.json({ success: true });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to delete track";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Creator Catalog ----
  app.get("/api/music/catalog", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const { status } = req.query;
      const tracks = await storage.getMusicCatalog(userId, status as string | undefined);
      res.json(tracks);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch catalog";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Publish / Unpublish ----
  app.post("/api/music/tracks/:id/publish", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const updated = await storage.publishMusicTrack(req.params.id);
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to publish track";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/tracks/:id/unpublish", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const updated = await storage.unpublishMusicTrack(req.params.id);
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to unpublish track";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Ingestion ----
  app.post("/api/music/tracks/:id/ingest", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });

      const { inputType, inputFileUrl } = req.body as { inputType?: string; inputFileUrl?: string };

      let muxUploadId: string | undefined;
      let muxUploadUrl: string | undefined;

      if (isMuxConfigured()) {
        const origin = req.headers.origin || "*";
        const upload = await createDirectUpload(origin);
        muxUploadId = upload.id;
        muxUploadUrl = upload.url;
      }

      const job = await storage.createIngestionJob({
        trackId: req.params.id,
        creatorId: userId,
        inputType: inputType ?? null,
        inputFileUrl: inputFileUrl ?? null,
        muxUploadId: muxUploadId ?? null,
      });

      if (muxUploadId) {
        await storage.updateMusicTrack(req.params.id, { muxAssetId: null, muxPlaybackId: null });
      }

      res.status(201).json({ job, muxUploadUrl: muxUploadUrl ?? null });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to start ingestion";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Ingestion Status ----
  app.get("/api/music/tracks/:id/ingest-status", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });

      const job = await storage.getIngestionJobByTrackId(req.params.id);
      if (!job) return res.status(404).json({ error: "No ingestion job found" });

      let muxStatus: { status: string; assetId: string | null } | null = null;
      if (job.muxUploadId && isMuxConfigured()) {
        muxStatus = await getUploadStatus(job.muxUploadId);
        // If Mux asset is ready, update track
        if (muxStatus.assetId && muxStatus.status === "asset_created") {
          const asset = await getAsset(muxStatus.assetId);
          if (asset.status === "ready" && asset.playbackId) {
            await storage.updateMusicTrack(req.params.id, {
              muxAssetId: asset.id,
              muxPlaybackId: asset.playbackId,
              streamUrl: `https://stream.mux.com/${asset.playbackId}.m3u8`,
              duration: asset.duration ? Math.round(asset.duration) : undefined,
            });
            await storage.updateIngestionJob(job.id, {
              status: "ready",
              completedAt: new Date(),
            });
          }
        }
      }

      res.json({ job, muxStatus });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to get ingest status";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Track Likes ----
  app.post("/api/music/tracks/:id/like", requireAuth, async (req: Request, res: Response) => {
    try {
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      await db
        .update(musicTracks)
        .set({ likeCount: sql`${musicTracks.likeCount} + 1` })
        .where(eq(musicTracks.id, req.params.id));
      res.json({ success: true });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to like track";
      res.status(500).json({ error: msg });
    }
  });

  app.delete("/api/music/tracks/:id/like", requireAuth, async (req: Request, res: Response) => {
    try {
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      await db
        .update(musicTracks)
        .set({ likeCount: sql`GREATEST(COALESCE(${musicTracks.likeCount}, 0) - 1, 0)` })
        .where(eq(musicTracks.id, req.params.id));
      res.json({ success: true });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to unlike track";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Playlists ----
  app.get("/api/music/playlists", async (req: Request, res: Response) => {
    try {
      const { creatorId, limit } = req.query;
      const playlists = await storage.getMusicPlaylists({
        creatorId: creatorId as string | undefined,
        visibility: "public",
        limit: limit ? parseInt(limit as string) : undefined,
      });
      res.json(playlists);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch playlists";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/playlists/:id", async (req: Request, res: Response) => {
    try {
      const playlist = await storage.getMusicPlaylist(req.params.id);
      if (!playlist) return res.status(404).json({ error: "Playlist not found" });
      res.json(playlist);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch playlist";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/playlists", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const playlist = await storage.createMusicPlaylist({ ...req.body, creatorId: userId });
      res.status(201).json(playlist);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to create playlist";
      res.status(500).json({ error: msg });
    }
  });

  app.patch("/api/music/playlists/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicPlaylist(req.params.id);
      if (!existing) return res.status(404).json({ error: "Playlist not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const updated = await storage.updateMusicPlaylist(req.params.id, req.body);
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to update playlist";
      res.status(500).json({ error: msg });
    }
  });

  app.delete("/api/music/playlists/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicPlaylist(req.params.id);
      if (!existing) return res.status(404).json({ error: "Playlist not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      await storage.deleteMusicPlaylist(req.params.id);
      res.json({ success: true });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to delete playlist";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Playlist Tracks ----
  app.post("/api/music/playlists/:id/tracks", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicPlaylist(req.params.id);
      if (!existing) return res.status(404).json({ error: "Playlist not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const { trackId, position } = req.body as { trackId: string; position: number };
      const entry = await storage.addTrackToPlaylist({
        playlistId: req.params.id,
        trackId,
        position: position ?? (existing.trackCount ?? 0),
      });
      res.status(201).json(entry);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to add track to playlist";
      res.status(500).json({ error: msg });
    }
  });

  app.delete("/api/music/playlists/:id/tracks/:trackId", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicPlaylist(req.params.id);
      if (!existing) return res.status(404).json({ error: "Playlist not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      await storage.removeTrackFromPlaylist(req.params.id, req.params.trackId);
      res.json({ success: true });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to remove track from playlist";
      res.status(500).json({ error: msg });
    }
  });

  app.patch("/api/music/playlists/:id/reorder", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicPlaylist(req.params.id);
      if (!existing) return res.status(404).json({ error: "Playlist not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const { orderedTrackIds } = req.body as { orderedTrackIds: string[] };
      await storage.reorderPlaylistTracks(req.params.id, orderedTrackIds);
      res.json({ success: true });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to reorder playlist";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Rights ----
  app.post("/api/music/tracks/:id/rights", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const existing = await storage.getMusicTrack(req.params.id);
      if (!existing) return res.status(404).json({ error: "Track not found" });
      if (existing.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });

      const current = await storage.getRightsDeclaration(req.params.id);
      let result;
      if (current) {
        result = await storage.updateRightsDeclaration(req.params.id, req.body);
      } else {
        result = await storage.createRightsDeclaration({ ...req.body, trackId: req.params.id });
      }
      res.json(result);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to save rights declaration";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/tracks/:id/rights", async (req: Request, res: Response) => {
    try {
      const rights = await storage.getRightsDeclaration(req.params.id);
      if (!rights) return res.status(404).json({ error: "No rights declaration found" });
      res.json(rights);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch rights";
      res.status(500).json({ error: msg });
    }
  });
}
