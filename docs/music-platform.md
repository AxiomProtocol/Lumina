# Lumina Music Platform

## Overview

Lumina's music platform enables creators to upload, publish, and monetize music tracks via NFT drops on Arbitrum One.

## Environment Variables

Add these to your `.env`:

```
# Mux (optional - for video ingestion)
MUX_TOKEN_ID=your-mux-token-id
MUX_TOKEN_SECRET=your-mux-token-secret

# Music Platform Config
MUSIC_INGESTION_PIPELINE=mux    # "mux" or "hls" (default: "hls")
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
LUMINA_MARKETPLACE_ADDRESS=0x...  # After deploying LuminaMarketplace

# USDC on Arbitrum One
USDC_CONTRACT_ADDRESS=0xaf88d065e77c8cC2239327C5EDb3A432268e5831
```

## Setup

1. Run migrations: `npm run db:push`
2. (Optional) Configure Mux for video ingestion
3. Deploy contracts (see `contracts/README.md`)

## API Reference

### Tracks
- `GET /api/music/tracks` – list published tracks
- `GET /api/music/tracks/:id` – get track details
- `POST /api/music/tracks` – create draft (auth)
- `PATCH /api/music/tracks/:id` – update metadata (auth)
- `POST /api/music/tracks/:id/publish` – publish track (auth)
- `POST /api/music/tracks/:id/ingest` – start ingestion (auth)
- `POST /api/music/tracks/:id/gate-check` – verify gated access

### Playlists
- `GET /api/music/playlists` – list public playlists
- `GET /api/music/playlists/:id` – playlist with tracks
- `POST /api/music/playlists` – create (auth)

### Drops
- `GET /api/music/tracks/:id/drops` – get drops for track
- `POST /api/music/drops` – create drop (auth)
- `GET /api/music/drops/:id` – get drop with mints
- `PATCH /api/music/drops/:id` – update drop (auth)
- `POST /api/music/drops/:id/verify-mint` – index a mint

### Marketplace
- `GET /api/music/marketplace` – all active listings
- `GET /api/music/drops/:id/listings` – active listings for a drop
- `POST /api/music/listings` – list for sale (auth)
- `POST /api/music/listings/:id/buy` – buy listing (auth)
- `POST /api/music/drops/:id/claim-rewards` – claim secondary rewards (auth)
- `GET /api/music/drops/:id/rewards/:address` – reward balance for address

### Copyright
- `POST /api/music/tracks/:id/claims` – submit claim (auth)
- `GET /api/music/tracks/:id/claims` – get claims (auth, creator or admin)
- `PATCH /api/music/claims/:id/resolve` – resolve claim (admin)
- `POST /api/music/tracks/:id/takedown` – takedown track (admin)
- `POST /api/music/tracks/:id/fingerprint` – generate fingerprint (auth)
- `GET /api/music/tracks/:id/fingerprint-check` – check fingerprint (auth)

## Access Modes

| Mode | Behavior |
|------|---------|
| `public` | Full playback for everyone |
| `preview_gated` | First N seconds free, full access requires NFT |
| `gated` | Full access requires NFT ownership |

## Fingerprinting

During ingestion, a SHA-256 fingerprint of the source file URL is stored in `musicRightsDeclarations.fingerprintHash`. This is used for basic duplicate detection.
