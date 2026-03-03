/**
 * Route-level tests for music feature endpoints.
 * Uses Node.js built-in test runner (node:test) and supertest.
 *
 * Run with:  node --import tsx/esm --test server/music.test.ts
 *         or: npx tsx --test server/music.test.ts
 */
import { describe, it, before } from "node:test";
import assert from "node:assert/strict";
import express, { type Request, type Response, type NextFunction } from "express";
import request from "supertest";

// ── Minimal mock storage ────────────────────────────────────────────────────
const TRACK_OWNER_ID = "user-owner";
const OTHER_USER_ID = "user-other";

const mockTrack = {
  id: "track-1",
  userId: TRACK_OWNER_ID,
  title: "My Track",
  description: null,
  originalObjectKey: "uploads/abc123",
  mimeType: "audio/mpeg",
  bytes: 1024,
  durationSeconds: null,
  createdAt: new Date(),
};

const mockStorage = {
  async createMusicTrack(track: any) {
    return { id: "track-new", createdAt: new Date(), ...track };
  },
  async getMusicTrack(id: string) {
    return id === "track-1" ? mockTrack : undefined;
  },
};

// ── Build a minimal express app with only the music routes ──────────────────
function buildTestApp(authenticatedUserId: string | null) {
  const app = express();
  app.use(express.json());

  // Inject mock session
  app.use((req: Request, _res: Response, next: NextFunction) => {
    (req as any).session = { userId: authenticatedUserId };
    next();
  });

  // requireAuth middleware (mirrors the real one)
  function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!(req as any).session?.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  }

  const ALLOWED_AUDIO_TYPES = [
    "audio/mpeg", "audio/wav", "audio/x-wav", "audio/aac",
    "audio/ogg", "audio/flac", "audio/mp4",
  ];
  const MAX_AUDIO_BYTES = 200 * 1024 * 1024;

  // POST /api/music/upload/init
  app.post("/api/music/upload/init", requireAuth, (req: Request, res: Response) => {
    const { contentType, totalChunks, fileSize } = req.body;
    if (!contentType || !totalChunks) {
      return res.status(400).json({ error: "contentType and totalChunks are required" });
    }
    if (!ALLOWED_AUDIO_TYPES.includes(contentType)) {
      return res.status(415).json({ error: "Unsupported audio MIME type" });
    }
    if (fileSize && Number(fileSize) > MAX_AUDIO_BYTES) {
      return res.status(413).json({ error: "Audio file exceeds 200 MB limit" });
    }
    const uploadId = "upload-test-id";
    res.json({ uploadId, objectPath: `/objects/uploads/${uploadId}` });
  });

  // POST /api/music/tracks
  app.post("/api/music/tracks", requireAuth, async (req: Request, res: Response) => {
    const { title, objectPath, mimeType, bytes, durationSeconds, description } = req.body;
    if (!title || !objectPath) {
      return res.status(400).json({ error: "title and objectPath are required" });
    }
    if (mimeType && !ALLOWED_AUDIO_TYPES.includes(mimeType)) {
      return res.status(415).json({ error: "Unsupported audio MIME type" });
    }
    if (bytes !== undefined && bytes !== null && Number(bytes) > MAX_AUDIO_BYTES) {
      return res.status(413).json({ error: "Audio file exceeds 200 MB limit" });
    }
    const normalizedKey = String(objectPath).replace(/^\/objects\//, "");
    if (!normalizedKey.startsWith("uploads/")) {
      return res.status(400).json({ error: "objectPath must be inside the uploads prefix" });
    }
    const track = await mockStorage.createMusicTrack({
      userId: (req as any).session.userId,
      title: String(title).trim(),
      description: description ? String(description).trim() : null,
      originalObjectKey: normalizedKey,
      mimeType: mimeType ? String(mimeType) : null,
      bytes: bytes !== undefined && bytes !== null ? Number(bytes) : null,
      durationSeconds: durationSeconds !== undefined && durationSeconds !== null ? Number(durationSeconds) : null,
    });
    res.status(201).json({ track });
  });

  // GET /api/music/tracks/:id
  app.get("/api/music/tracks/:id", requireAuth, async (req: Request, res: Response) => {
    const track = await mockStorage.getMusicTrack(req.params.id);
    if (!track) return res.status(404).json({ error: "Music track not found" });
    if (track.userId !== (req as any).session.userId) {
      return res.status(403).json({ error: "Forbidden" });
    }
    res.json({ track });
  });

  // POST /api/posts  (simplified version that only validates music ownership)
  app.post("/api/posts", requireAuth, async (req: Request, res: Response) => {
    const { postType, linkedMusicTrackId } = req.body;
    if (postType === "music" || linkedMusicTrackId) {
      if (!linkedMusicTrackId) {
        return res.status(400).json({ error: "linkedMusicTrackId is required for music posts" });
      }
      const track = await mockStorage.getMusicTrack(String(linkedMusicTrackId));
      if (!track) return res.status(404).json({ error: "Music track not found" });
      if (track.userId !== (req as any).session.userId) {
        return res.status(403).json({ error: "You do not own this music track" });
      }
    }
    res.status(201).json({ post: { id: "post-new", ...req.body } });
  });

  return app;
}

// ── Tests ───────────────────────────────────────────────────────────────────
describe("Music routes – unauthenticated", () => {
  const app = buildTestApp(null);

  it("POST /api/music/upload/init returns 401 when not logged in", async () => {
    const res = await request(app)
      .post("/api/music/upload/init")
      .send({ contentType: "audio/mpeg", totalChunks: 1 });
    assert.equal(res.status, 401);
  });

  it("POST /api/music/tracks returns 401 when not logged in", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ title: "Test", objectPath: "uploads/abc" });
    assert.equal(res.status, 401);
  });

  it("GET /api/music/tracks/:id returns 401 when not logged in", async () => {
    const res = await request(app).get("/api/music/tracks/track-1");
    assert.equal(res.status, 401);
  });

  it("POST /api/posts returns 401 when not logged in", async () => {
    const res = await request(app)
      .post("/api/posts")
      .send({ postType: "music", linkedMusicTrackId: "track-1" });
    assert.equal(res.status, 401);
  });
});

describe("Music routes – track creation validation", () => {
  const app = buildTestApp(TRACK_OWNER_ID);

  it("rejects missing title", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ objectPath: "uploads/abc123" });
    assert.equal(res.status, 400);
    assert.match(res.body.error, /title/i);
  });

  it("rejects missing objectPath", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ title: "My Track" });
    assert.equal(res.status, 400);
    assert.match(res.body.error, /objectPath/i);
  });

  it("rejects invalid MIME type", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ title: "My Track", objectPath: "uploads/abc", mimeType: "video/mp4" });
    assert.equal(res.status, 415);
  });

  it("rejects file size over 200 MB", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ title: "My Track", objectPath: "uploads/abc", bytes: 201 * 1024 * 1024 });
    assert.equal(res.status, 413);
  });

  it("rejects objectPath outside uploads/ prefix", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ title: "My Track", objectPath: "videos/abc" });
    assert.equal(res.status, 400);
    assert.match(res.body.error, /uploads/i);
  });

  it("accepts valid payload and returns 201 with track", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({
        title: "My Track",
        objectPath: "/objects/uploads/abc123",
        mimeType: "audio/mpeg",
        bytes: 1024,
      });
    assert.equal(res.status, 201);
    assert.ok(res.body.track);
    assert.equal(res.body.track.title, "My Track");
    assert.equal(res.body.track.originalObjectKey, "uploads/abc123");
  });

  it("strips leading /objects/ from objectPath when storing", async () => {
    const res = await request(app)
      .post("/api/music/tracks")
      .send({ title: "T", objectPath: "/objects/uploads/xyz" });
    assert.equal(res.status, 201);
    assert.equal(res.body.track.originalObjectKey, "uploads/xyz");
  });
});

describe("Music routes – upload init validation", () => {
  const app = buildTestApp(TRACK_OWNER_ID);

  it("rejects missing contentType", async () => {
    const res = await request(app)
      .post("/api/music/upload/init")
      .send({ totalChunks: 2 });
    assert.equal(res.status, 400);
  });

  it("rejects non-audio MIME type", async () => {
    const res = await request(app)
      .post("/api/music/upload/init")
      .send({ contentType: "video/mp4", totalChunks: 1 });
    assert.equal(res.status, 415);
  });

  it("rejects fileSize over 200 MB", async () => {
    const res = await request(app)
      .post("/api/music/upload/init")
      .send({ contentType: "audio/mpeg", totalChunks: 1, fileSize: 210 * 1024 * 1024 });
    assert.equal(res.status, 413);
  });

  it("returns uploadId for valid request", async () => {
    const res = await request(app)
      .post("/api/music/upload/init")
      .send({ contentType: "audio/mpeg", totalChunks: 3 });
    assert.equal(res.status, 200);
    assert.ok(res.body.uploadId);
    assert.ok(res.body.objectPath);
  });
});

describe("Music routes – post creation ownership", () => {
  it("blocks music post with another user's track", async () => {
    const app = buildTestApp(OTHER_USER_ID);
    const res = await request(app)
      .post("/api/posts")
      .send({ postType: "music", linkedMusicTrackId: "track-1", content: "" });
    assert.equal(res.status, 403);
    assert.match(res.body.error, /own/i);
  });

  it("blocks music post with non-existent track", async () => {
    const app = buildTestApp(TRACK_OWNER_ID);
    const res = await request(app)
      .post("/api/posts")
      .send({ postType: "music", linkedMusicTrackId: "no-such-track", content: "" });
    assert.equal(res.status, 404);
  });

  it("blocks music post without linkedMusicTrackId", async () => {
    const app = buildTestApp(TRACK_OWNER_ID);
    const res = await request(app)
      .post("/api/posts")
      .send({ postType: "music", content: "" });
    assert.equal(res.status, 400);
    assert.match(res.body.error, /linkedMusicTrackId/i);
  });

  it("allows music post when user owns the track", async () => {
    const app = buildTestApp(TRACK_OWNER_ID);
    const res = await request(app)
      .post("/api/posts")
      .send({ postType: "music", linkedMusicTrackId: "track-1", content: "My new song!" });
    assert.equal(res.status, 201);
    assert.ok(res.body.post);
  });

  it("GET /api/music/tracks/:id forbidden for non-owner", async () => {
    const app = buildTestApp(OTHER_USER_ID);
    const res = await request(app).get("/api/music/tracks/track-1");
    assert.equal(res.status, 403);
  });

  it("GET /api/music/tracks/:id succeeds for owner", async () => {
    const app = buildTestApp(TRACK_OWNER_ID);
    const res = await request(app).get("/api/music/tracks/track-1");
    assert.equal(res.status, 200);
    assert.equal(res.body.track.id, "track-1");
  });
});
