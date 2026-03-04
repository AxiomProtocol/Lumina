# Lumina Music Platform Contracts

## Overview

- **LuminaMusicDrop.sol** – ERC-1155 drop contract for music NFTs. Each deployment represents one music track's edition. Supports up to 1,000,000 supply, $1 USDC mint price, and cumulative dividend mechanism.
- **LuminaMarketplace.sol** – Secondary marketplace with 2.5% protocol fee + 7.5% royalty routing back to creators.

## Addresses

### Arbitrum One (Chain ID: 42161)

| Contract | Address |
|----------|---------|
| USDC | 0xaf88d065e77c8cC2239327C5EDb3A432268e5831 |
| LuminaMarketplace | TBD – deploy once |

## Deployment

### Prerequisites

```bash
npm install --save-dev hardhat @openzeppelin/contracts @nomicfoundation/hardhat-toolbox
```

### Deploy Marketplace (once)

```bash
npx hardhat run scripts/deployMarketplace.js --network arbitrumOne
```

### Deploy a Music Drop (per track)

```bash
npx hardhat run scripts/deployDrop.js --network arbitrumOne \
  --name "Track Title" \
  --symbol "LMD" \
  --uri "ipfs://..." \
  --usdc 0xaf88d065e77c8cC2239327C5EDb3A432268e5831 \
  --supply 1000 \
  --price 1000000
```

## Environment Variables

Add to `.env`:

```
# Contracts
LUMINA_MARKETPLACE_ADDRESS=0x...
# Per-deploy (set after each deployment)
LUMINA_DROP_CONTRACT_ADDRESS=0x...
```

## Hardhat Config

```js
// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    arbitrumOne: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      chainId: 42161,
    },
  },
};
```
