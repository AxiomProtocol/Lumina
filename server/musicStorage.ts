import { eq, and, desc, asc, sql } from "drizzle-orm";
import { db } from "./db";
import {
  musicTracks,
  musicPlaylists,
  musicPlaylistTracks,
  musicIngestionJobs,
  musicRightsDeclarations,
  musicClaims,
  musicDrops,
  musicDropMints,
  musicListings,
  musicRewardsClaims,
  users,
  type MusicTrack,
  type InsertMusicTrack,
  type MusicPlaylist,
  type InsertMusicPlaylist,
  type MusicPlaylistTrack,
  type InsertMusicPlaylistTrack,
  type MusicIngestionJob,
  type InsertMusicIngestionJob,
  type MusicRightsDeclaration,
  type InsertMusicRightsDeclaration,
  type MusicTrackWithCreator,
  type MusicPlaylistWithTracks,
  type User,
  type MusicClaim,
  type InsertMusicClaim,
  type MusicDrop,
  type InsertMusicDrop,
  type MusicDropMint,
  type InsertMusicDropMint,
  type MusicListing,
  type InsertMusicListing,
  type MusicRewardsClaim,
  type InsertMusicRewardsClaim,
} from "@shared/schema";

// ---- Tracks ----

export async function getMusicTrack(id: string): Promise<MusicTrackWithCreator | undefined> {
  const [row] = await db
    .select()
    .from(musicTracks)
    .innerJoin(users, eq(musicTracks.creatorId, users.id))
    .where(eq(musicTracks.id, id));
  if (!row) return undefined;
  const rights = await getRightsDeclaration(id);
  return { ...row.music_tracks, creator: row.users as User, rightsDeclaration: rights ?? null };
}

export async function getMusicTracks(opts: {
  status?: string;
  creatorId?: string;
  genre?: string;
  limit?: number;
  offset?: number;
}): Promise<MusicTrackWithCreator[]> {
  const conditions = [];
  if (opts.status) conditions.push(eq(musicTracks.status, opts.status as MusicTrack["status"]));
  if (opts.creatorId) conditions.push(eq(musicTracks.creatorId, opts.creatorId));
  if (opts.genre) conditions.push(eq(musicTracks.genre, opts.genre));

  const query = db
    .select()
    .from(musicTracks)
    .innerJoin(users, eq(musicTracks.creatorId, users.id))
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(desc(musicTracks.createdAt))
    .limit(opts.limit ?? 50)
    .offset(opts.offset ?? 0);

  const rows = await query;
  return rows.map((r) => ({ ...r.music_tracks, creator: r.users as User, rightsDeclaration: null }));
}

export async function createMusicTrack(data: InsertMusicTrack): Promise<MusicTrack> {
  const [track] = await db.insert(musicTracks).values(data as MusicTrack).returning();
  return track;
}

export async function updateMusicTrack(
  id: string,
  updates: Partial<MusicTrack>,
): Promise<MusicTrack | undefined> {
  const [updated] = await db
    .update(musicTracks)
    .set({ ...updates, updatedAt: new Date() })
    .where(eq(musicTracks.id, id))
    .returning();
  return updated ?? undefined;
}

export async function deleteMusicTrack(id: string): Promise<void> {
  await db.delete(musicTracks).where(eq(musicTracks.id, id));
}

export async function getMusicCatalog(
  creatorId: string,
  status?: string,
): Promise<MusicTrack[]> {
  const conditions = [eq(musicTracks.creatorId, creatorId)];
  if (status) conditions.push(eq(musicTracks.status, status as MusicTrack["status"]));
  return db
    .select()
    .from(musicTracks)
    .where(and(...conditions))
    .orderBy(desc(musicTracks.createdAt));
}

export async function publishMusicTrack(id: string): Promise<MusicTrack | undefined> {
  const [updated] = await db
    .update(musicTracks)
    .set({ status: "published", publishedAt: new Date(), updatedAt: new Date() })
    .where(eq(musicTracks.id, id))
    .returning();
  return updated ?? undefined;
}

export async function unpublishMusicTrack(id: string): Promise<MusicTrack | undefined> {
  const [updated] = await db
    .update(musicTracks)
    .set({ status: "draft", updatedAt: new Date() })
    .where(eq(musicTracks.id, id))
    .returning();
  return updated ?? undefined;
}

// ---- Playlists ----

export async function getMusicPlaylist(id: string): Promise<MusicPlaylistWithTracks | undefined> {
  const [row] = await db
    .select()
    .from(musicPlaylists)
    .innerJoin(users, eq(musicPlaylists.creatorId, users.id))
    .where(eq(musicPlaylists.id, id));
  if (!row) return undefined;

  const trackRows = await db
    .select()
    .from(musicPlaylistTracks)
    .innerJoin(musicTracks, eq(musicPlaylistTracks.trackId, musicTracks.id))
    .where(eq(musicPlaylistTracks.playlistId, id))
    .orderBy(asc(musicPlaylistTracks.position));

  const tracks = trackRows.map((tr) => ({ ...tr.music_playlist_tracks, track: tr.music_tracks }));
  return { ...row.music_playlists, creator: row.users as User, tracks };
}

export async function getMusicPlaylists(opts: {
  creatorId?: string;
  visibility?: string;
  limit?: number;
}): Promise<MusicPlaylist[]> {
  const conditions = [];
  if (opts.creatorId) conditions.push(eq(musicPlaylists.creatorId, opts.creatorId));
  if (opts.visibility) conditions.push(eq(musicPlaylists.visibility, opts.visibility));

  return db
    .select()
    .from(musicPlaylists)
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(desc(musicPlaylists.createdAt))
    .limit(opts.limit ?? 50);
}

export async function createMusicPlaylist(data: InsertMusicPlaylist): Promise<MusicPlaylist> {
  const [playlist] = await db.insert(musicPlaylists).values(data as MusicPlaylist).returning();
  return playlist;
}

export async function updateMusicPlaylist(
  id: string,
  updates: Partial<MusicPlaylist>,
): Promise<MusicPlaylist | undefined> {
  const [updated] = await db
    .update(musicPlaylists)
    .set({ ...updates, updatedAt: new Date() })
    .where(eq(musicPlaylists.id, id))
    .returning();
  return updated ?? undefined;
}

export async function deleteMusicPlaylist(id: string): Promise<void> {
  await db.delete(musicPlaylists).where(eq(musicPlaylists.id, id));
}

export async function addTrackToPlaylist(data: InsertMusicPlaylistTrack): Promise<MusicPlaylistTrack> {
  const [entry] = await db.insert(musicPlaylistTracks).values(data as MusicPlaylistTrack).returning();
  // Update trackCount
  await db
    .update(musicPlaylists)
    .set({ updatedAt: new Date() })
    .where(eq(musicPlaylists.id, data.playlistId));
  return entry;
}

export async function removeTrackFromPlaylist(playlistId: string, trackId: string): Promise<void> {
  await db
    .delete(musicPlaylistTracks)
    .where(
      and(eq(musicPlaylistTracks.playlistId, playlistId), eq(musicPlaylistTracks.trackId, trackId)),
    );
  await db
    .update(musicPlaylists)
    .set({ updatedAt: new Date() })
    .where(eq(musicPlaylists.id, playlistId));
}

export async function reorderPlaylistTracks(
  playlistId: string,
  orderedTrackIds: string[],
): Promise<void> {
  await db.transaction(async (tx) => {
    for (let i = 0; i < orderedTrackIds.length; i++) {
      await tx
        .update(musicPlaylistTracks)
        .set({ position: i })
        .where(
          and(
            eq(musicPlaylistTracks.playlistId, playlistId),
            eq(musicPlaylistTracks.trackId, orderedTrackIds[i]),
          ),
        );
    }
  });
}

// ---- Ingestion Jobs ----

export async function createIngestionJob(data: InsertMusicIngestionJob): Promise<MusicIngestionJob> {
  const [job] = await db.insert(musicIngestionJobs).values(data as MusicIngestionJob).returning();
  return job;
}

export async function getIngestionJob(id: string): Promise<MusicIngestionJob | undefined> {
  const [job] = await db.select().from(musicIngestionJobs).where(eq(musicIngestionJobs.id, id));
  return job ?? undefined;
}

export async function getIngestionJobByTrackId(trackId: string): Promise<MusicIngestionJob | undefined> {
  const [job] = await db
    .select()
    .from(musicIngestionJobs)
    .where(eq(musicIngestionJobs.trackId, trackId))
    .orderBy(desc(musicIngestionJobs.createdAt))
    .limit(1);
  return job ?? undefined;
}

export async function updateIngestionJob(
  id: string,
  updates: Partial<MusicIngestionJob>,
): Promise<MusicIngestionJob | undefined> {
  const [updated] = await db
    .update(musicIngestionJobs)
    .set(updates)
    .where(eq(musicIngestionJobs.id, id))
    .returning();
  return updated ?? undefined;
}

// ---- Rights Declarations ----

export async function createRightsDeclaration(
  data: InsertMusicRightsDeclaration,
): Promise<MusicRightsDeclaration> {
  const [decl] = await db.insert(musicRightsDeclarations).values(data as MusicRightsDeclaration).returning();
  return decl;
}

export async function getRightsDeclaration(
  trackId: string,
): Promise<MusicRightsDeclaration | undefined> {
  const [decl] = await db
    .select()
    .from(musicRightsDeclarations)
    .where(eq(musicRightsDeclarations.trackId, trackId))
    .orderBy(desc(musicRightsDeclarations.createdAt))
    .limit(1);
  return decl ?? undefined;
}

export async function updateRightsDeclaration(
  trackId: string,
  updates: Partial<MusicRightsDeclaration>,
): Promise<MusicRightsDeclaration | undefined> {
  const existing = await getRightsDeclaration(trackId);
  if (!existing) return undefined;
  const [updated] = await db
    .update(musicRightsDeclarations)
    .set(updates)
    .where(eq(musicRightsDeclarations.id, existing.id))
    .returning();
  return updated ?? undefined;
}

// ---- Claims ----

export async function createMusicClaim(data: InsertMusicClaim): Promise<MusicClaim> {
  const [claim] = await db.insert(musicClaims).values(data as MusicClaim).returning();
  return claim;
}

export async function getMusicClaimsByTrack(trackId: string): Promise<MusicClaim[]> {
  return db.select().from(musicClaims).where(eq(musicClaims.trackId, trackId)).orderBy(desc(musicClaims.createdAt));
}

export async function updateMusicClaim(id: string, updates: Partial<MusicClaim>): Promise<MusicClaim | undefined> {
  const [updated] = await db.update(musicClaims).set(updates).where(eq(musicClaims.id, id)).returning();
  return updated ?? undefined;
}

export async function generateFingerprint(trackId: string, sourceUrl: string): Promise<MusicRightsDeclaration | undefined> {
  const { createHash } = await import("crypto");
  // NOTE: Hash is computed from the source URL as a placeholder for real audio fingerprinting.
  // A production implementation would hash the actual audio content.
  const fingerprintHash = createHash("sha256").update(sourceUrl).digest("hex");
  const existing = await getRightsDeclaration(trackId);
  if (existing) {
    return updateRightsDeclaration(trackId, { fingerprintHash });
  }
  // Create a default rights declaration with the fingerprint
  const [created] = await db
    .insert(musicRightsDeclarations)
    .values({ trackId, fingerprintHash } as any)
    .returning();
  return created ?? undefined;
}

// ---- Drops ----

export async function getMusicDrop(id: string): Promise<MusicDrop | undefined> {
  const [drop] = await db.select().from(musicDrops).where(eq(musicDrops.id, id));
  return drop ?? undefined;
}

export async function getMusicDropsByTrack(trackId: string): Promise<MusicDrop[]> {
  return db.select().from(musicDrops).where(eq(musicDrops.trackId, trackId)).orderBy(desc(musicDrops.createdAt));
}

export async function createMusicDrop(data: InsertMusicDrop): Promise<MusicDrop> {
  const [drop] = await db.insert(musicDrops).values(data as MusicDrop).returning();
  return drop;
}

export async function updateMusicDrop(id: string, data: Partial<MusicDrop>): Promise<MusicDrop | undefined> {
  const [updated] = await db.update(musicDrops).set({ ...data, updatedAt: new Date() }).where(eq(musicDrops.id, id)).returning();
  return updated ?? undefined;
}

export async function recordMint(data: InsertMusicDropMint): Promise<MusicDropMint> {
  return db.transaction(async (tx) => {
    const [mint] = await tx.insert(musicDropMints).values(data as MusicDropMint).returning();
    await tx.update(musicDrops).set({ mintCount: sql`COALESCE(${musicDrops.mintCount}, 0) + ${data.quantity}` }).where(eq(musicDrops.id, data.dropId));
    return mint;
  });
}

export async function getMintsByDrop(dropId: string): Promise<MusicDropMint[]> {
  return db.select().from(musicDropMints).where(eq(musicDropMints.dropId, dropId)).orderBy(desc(musicDropMints.mintedAt));
}

// ---- Listings ----

export async function createMusicListing(data: InsertMusicListing): Promise<MusicListing> {
  const [listing] = await db.insert(musicListings).values(data as MusicListing).returning();
  return listing;
}

export async function getMusicListingsByDrop(dropId: string): Promise<MusicListing[]> {
  return db.select().from(musicListings).where(and(eq(musicListings.dropId, dropId), eq(musicListings.isActive, true))).orderBy(desc(musicListings.createdAt));
}

export async function getMusicListing(id: string): Promise<MusicListing | undefined> {
  const [listing] = await db.select().from(musicListings).where(eq(musicListings.id, id));
  return listing ?? undefined;
}

export async function updateMusicListing(id: string, data: Partial<MusicListing>): Promise<MusicListing | undefined> {
  const [updated] = await db.update(musicListings).set({ ...data, updatedAt: new Date() }).where(eq(musicListings.id, id)).returning();
  return updated ?? undefined;
}

export async function getAllActiveListings(): Promise<MusicListing[]> {
  return db.select().from(musicListings).where(eq(musicListings.isActive, true)).orderBy(desc(musicListings.createdAt));
}

// ---- Rewards Claims ----

export async function createRewardsClaim(data: InsertMusicRewardsClaim): Promise<MusicRewardsClaim> {
  const [claim] = await db.insert(musicRewardsClaims).values(data as MusicRewardsClaim).returning();
  return claim;
}

export async function getRewardsClaimsByDrop(dropId: string): Promise<MusicRewardsClaim[]> {
  return db.select().from(musicRewardsClaims).where(eq(musicRewardsClaims.dropId, dropId)).orderBy(desc(musicRewardsClaims.claimedAt));
}
