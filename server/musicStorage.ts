import { eq, and, desc, asc, sql } from "drizzle-orm";
import { db } from "./db";
import {
  musicTracks,
  musicPlaylists,
  musicPlaylistTracks,
  musicIngestionJobs,
  musicRightsDeclarations,
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
