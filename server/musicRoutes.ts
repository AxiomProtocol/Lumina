import type { Express, Request, Response, NextFunction } from "express";
import type { IStorage } from "./storage";
import { isMuxConfigured, createDirectUpload, getUploadStatus, getAsset } from "./services/mux";
import { musicTracks } from "@shared/schema";
import { eq, sql } from "drizzle-orm";
import { db } from "./db";
import rateLimit from "express-rate-limit";

const gateCheckLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // 20 gate checks per minute per IP
  message: { error: "Too many gate check requests, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
  validate: { xForwardedForHeader: false },
});

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

  // ---- Phase 2: Gate Check ----
  app.post("/api/music/tracks/:id/gate-check", gateCheckLimiter, async (req: Request, res: Response) => {
    try {
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });

      if (track.accessMode === "public" || !track.accessMode) {
        return res.json({ hasAccess: true });
      }

      const { walletAddress, signature, message } = req.body as {
        walletAddress?: string;
        signature?: string;
        message?: string;
      };

      if (!walletAddress || !signature || !message) {
        return res.status(400).json({ error: "walletAddress, signature and message are required" });
      }

      const { ethers } = await import("ethers");
      let recovered: string;
      try {
        recovered = ethers.verifyMessage(message, signature);
      } catch {
        return res.status(401).json({ error: "Invalid signature" });
      }
      if (recovered.toLowerCase() !== walletAddress.toLowerCase()) {
        return res.status(401).json({ error: "Signature mismatch" });
      }

      if (track.accessMode === "preview_gated") {
        return res.json({ hasAccess: true });
      }

      // gated: check NFT ownership
      if (track.accessMode === "gated") {
        // Creator always has access
        const creatorWallet = track.creator?.walletAddress;
        if (creatorWallet && creatorWallet.toLowerCase() === walletAddress.toLowerCase()) {
          return res.json({ hasAccess: true });
        }

        const drops = await storage.getMusicDropsByTrack(req.params.id);
        const rpcUrl = process.env.ARBITRUM_RPC_URL ?? "https://arb1.arbitrum.io/rpc";
        const provider = new ethers.JsonRpcProvider(rpcUrl);
        const balanceOfAbi = ["function balanceOf(address account, uint256 id) view returns (uint256)"];

        for (const drop of drops) {
          if (!drop.contractAddress) continue;
          try {
            const contract = new ethers.Contract(drop.contractAddress, balanceOfAbi, provider);
            const balance = await contract.balanceOf(walletAddress, drop.tokenId ?? 1);
            if (BigInt(balance) > BigInt(0)) {
              return res.json({ hasAccess: true });
            }
          } catch {
            // continue checking other drops
          }
        }
        return res.json({ hasAccess: false, reason: "No NFT found in wallet" });
      }

      return res.json({ hasAccess: false, reason: "Unknown access mode" });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Gate check failed";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Phase 3: Drops ----
  app.post("/api/music/drops", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const { trackId } = req.body as { trackId?: string };
      if (!trackId) return res.status(400).json({ error: "trackId is required" });
      const track = await storage.getMusicTrack(trackId);
      if (!track) return res.status(404).json({ error: "Track not found" });
      if (track.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const drop = await storage.createMusicDrop({ ...req.body, creatorId: userId });
      res.status(201).json(drop);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to create drop";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/drops/:id", async (req: Request, res: Response) => {
    try {
      const drop = await storage.getMusicDrop(req.params.id);
      if (!drop) return res.status(404).json({ error: "Drop not found" });
      const mints = await storage.getMintsByDrop(req.params.id);
      res.json({ ...drop, mints });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch drop";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/tracks/:id/drops", async (req: Request, res: Response) => {
    try {
      const drops = await storage.getMusicDropsByTrack(req.params.id);
      res.json(drops);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch drops";
      res.status(500).json({ error: msg });
    }
  });

  app.patch("/api/music/drops/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const drop = await storage.getMusicDrop(req.params.id);
      if (!drop) return res.status(404).json({ error: "Drop not found" });
      if (drop.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const updated = await storage.updateMusicDrop(req.params.id, req.body);
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to update drop";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/drops/:id/verify-mint", async (req: Request, res: Response) => {
    try {
      const drop = await storage.getMusicDrop(req.params.id);
      if (!drop) return res.status(404).json({ error: "Drop not found" });

      const { txHash, minterAddress, quantity } = req.body as {
        txHash?: string;
        minterAddress?: string;
        quantity?: number;
      };
      if (!txHash || !minterAddress) {
        return res.status(400).json({ error: "txHash and minterAddress are required" });
      }

      const { ethers } = await import("ethers");
      const rpcUrl = process.env.ARBITRUM_RPC_URL ?? "https://arb1.arbitrum.io/rpc";
      const provider = new ethers.JsonRpcProvider(rpcUrl);

      let blockNumber: number | undefined;
      try {
        const receipt = await provider.getTransactionReceipt(txHash);
        if (receipt && receipt.blockNumber) {
          blockNumber = receipt.blockNumber;
        }
      } catch {
        // proceed even if RPC unavailable
      }

      const userId = req.session?.userId;
      const mint = await storage.recordMint({
        dropId: req.params.id,
        minterAddress,
        userId: userId ?? null,
        txHash,
        tokenId: drop.tokenId ?? 1,
        quantity: quantity ?? 1,
        blockNumber: blockNumber ?? null,
      });

      res.json({ success: true, mint });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to verify mint";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Phase 4: Marketplace ----
  app.get("/api/music/marketplace", async (req: Request, res: Response) => {
    try {
      const listings = await storage.getAllActiveListings();
      res.json(listings);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch listings";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/listings", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const listing = await storage.createMusicListing({ ...req.body, sellerId: userId });
      res.status(201).json(listing);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to create listing";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/drops/:id/listings", async (req: Request, res: Response) => {
    try {
      const listings = await storage.getMusicListingsByDrop(req.params.id);
      res.json(listings);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch listings";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/listings/:id/buy", requireAuth, async (req: Request, res: Response) => {
    try {
      const listing = await storage.getMusicListing(req.params.id);
      if (!listing) return res.status(404).json({ error: "Listing not found" });
      if (!listing.isActive) return res.status(400).json({ error: "Listing is not active" });
      const { txHash } = req.body as { txHash?: string };
      const updated = await storage.updateMusicListing(req.params.id, { isActive: false, soldTxHash: txHash });
      res.json({ success: true, listing: updated });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to buy listing";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/drops/:id/claim-rewards", requireAuth, async (req: Request, res: Response) => {
    try {
      const drop = await storage.getMusicDrop(req.params.id);
      if (!drop) return res.status(404).json({ error: "Drop not found" });
      const { claimantAddress, amountUsd, txHash } = req.body as {
        claimantAddress?: string;
        amountUsd?: number;
        txHash?: string;
      };
      if (!claimantAddress || amountUsd === undefined) {
        return res.status(400).json({ error: "claimantAddress and amountUsd are required" });
      }
      const userId = req.session!.userId!;
      const claim = await storage.createRewardsClaim({
        dropId: req.params.id,
        claimantAddress,
        claimantId: userId,
        amountUsd,
        txHash: txHash ?? null,
      });
      res.json({ success: true, claim });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to claim rewards";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/drops/:id/rewards/:address", async (req: Request, res: Response) => {
    try {
      const drop = await storage.getMusicDrop(req.params.id);
      if (!drop) return res.status(404).json({ error: "Drop not found" });
      const claims = await storage.getRewardsClaimsByDrop(req.params.id);
      const addressClaims = claims.filter(
        (c) => c.claimantAddress.toLowerCase() === req.params.address.toLowerCase(),
      );
      const totalClaimed = addressClaims.reduce((sum, c) => sum + c.amountUsd, 0);
      res.json({ totalClaimed, claims: addressClaims });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch rewards";
      res.status(500).json({ error: msg });
    }
  });

  // ---- Phase 5: Copyright + Moderation ----
  app.post("/api/music/tracks/:id/claims", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });
      const claim = await storage.createMusicClaim({
        ...req.body,
        trackId: req.params.id,
        claimantId: userId,
      });
      res.status(201).json(claim);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to submit claim";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/tracks/:id/claims", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });
      // Only track creator or admin can view claims
      const user = await storage.getUser(userId);
      if (track.creatorId !== userId && !(user as any)?.isAdmin) {
        return res.status(403).json({ error: "Forbidden" });
      }
      const claims = await storage.getMusicClaimsByTrack(req.params.id);
      res.json(claims);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to fetch claims";
      res.status(500).json({ error: msg });
    }
  });

  app.patch("/api/music/claims/:id/resolve", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const user = await storage.getUser(userId);
      if (!(user as any)?.isAdmin) return res.status(403).json({ error: "Admin only" });
      const { status, adminNotes } = req.body as { status?: string; adminNotes?: string };
      const updated = await storage.updateMusicClaim(req.params.id, {
        status: (status as any) ?? "resolved_license",
        adminNotes: adminNotes ?? null,
        resolvedAt: new Date(),
        resolvedById: userId,
      });
      if (!updated) return res.status(404).json({ error: "Claim not found" });
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to resolve claim";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/tracks/:id/takedown", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const user = await storage.getUser(userId);
      if (!(user as any)?.isAdmin) return res.status(403).json({ error: "Admin only" });
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });
      const updated = await storage.updateMusicTrack(req.params.id, { status: "archived" });
      res.json(updated);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to takedown track";
      res.status(500).json({ error: msg });
    }
  });

  app.post("/api/music/tracks/:id/fingerprint", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session!.userId!;
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });
      if (track.creatorId !== userId) return res.status(403).json({ error: "Forbidden" });
      const sourceUrl = track.sourceFileUrl ?? track.streamUrl;
      if (!sourceUrl) {
        return res.status(400).json({ error: "Track has no source URL to fingerprint" });
      }
      const { createHash } = await import("crypto");
      const fingerprintHash = createHash("sha256").update(sourceUrl).digest("hex");
      const existing = await storage.getRightsDeclaration(req.params.id);
      let result;
      if (existing) {
        result = await storage.updateRightsDeclaration(req.params.id, { fingerprintHash });
      } else {
        result = await storage.createRightsDeclaration({
          trackId: req.params.id,
          rightsType: "original",
          licenseType: "all_rights_reserved",
          fingerprintHash,
        });
      }
      res.json({ fingerprintHash, rights: result });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to generate fingerprint";
      res.status(500).json({ error: msg });
    }
  });

  app.get("/api/music/tracks/:id/fingerprint-check", requireAuth, async (req: Request, res: Response) => {
    try {
      const track = await storage.getMusicTrack(req.params.id);
      if (!track) return res.status(404).json({ error: "Track not found" });
      const rights = await storage.getRightsDeclaration(req.params.id);
      if (!rights?.fingerprintHash) {
        return res.json({ matches: [], message: "No fingerprint stored for this track" });
      }
      // In production, query all tracks for matching fingerprint
      res.json({ fingerprintHash: rights.fingerprintHash, matches: [] });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to check fingerprint";
      res.status(500).json({ error: msg });
    }
  });
}
