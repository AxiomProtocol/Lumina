import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/lib/walletContext";
import { Music, ArrowLeft, Loader2 } from "lucide-react";
import type { MusicDrop, MusicDropMint } from "@shared/schema";

interface DropWithMints extends MusicDrop {
  mints: MusicDropMint[];
}

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function MusicDropPage() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { address, isConnected, connect } = useWallet();

  const { data: drop, isLoading, error } = useQuery<DropWithMints>({
    queryKey: [`/api/music/drops/${id}`],
    queryFn: () => fetch(`/api/music/drops/${id}`).then((r) => r.json()),
    enabled: !!id,
  });

  const mintMutation = useMutation({
    mutationFn: async () => {
      if (!drop?.contractAddress) throw new Error("No contract deployed for this drop");
      if (!address) throw new Error("Wallet not connected");

      // Call mint(tokenId, quantity) on the ERC-1155 contract
      const mintAbi = ["function mint(uint256 tokenId, uint256 quantity) external"];
      const { ethers } = await import("ethers");
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(drop.contractAddress, mintAbi, signer);
      const tx = await contract.mint(drop.tokenId ?? 1, 1);
      const receipt = await tx.wait();

      // Index the mint on our backend
      const res = await fetch(`/api/music/drops/${id}/verify-mint`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          txHash: receipt.hash,
          minterAddress: address,
          quantity: 1,
        }),
      });
      if (!res.ok) throw new Error("Failed to index mint");
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Minted!", description: "Your NFT has been minted successfully." });
      queryClient.invalidateQueries({ queryKey: [`/api/music/drops/${id}`] });
    },
    onError: (err: Error) => {
      toast({ title: "Mint failed", description: err.message, variant: "destructive" });
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !drop) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Music className="w-16 h-16 text-muted-foreground opacity-30" />
        <p className="text-muted-foreground">Drop not found.</p>
        <Link href="/music">
          <Button variant="outline">Back to Music</Button>
        </Link>
      </div>
    );
  }

  const mintedCount = drop.mintCount ?? 0;
  const remaining = drop.supply - mintedCount;
  const isSoldOut = remaining <= 0 || drop.status === "sold_out";
  const isActive = drop.status === "active";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link href={`/music/track/${drop.trackId}`}>
        <Button variant="ghost" size="sm" className="mb-6 -ml-2">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Track
        </Button>
      </Link>

      <div className="border rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">NFT Drop</h1>
            <Badge
              variant={isActive ? "default" : isSoldOut ? "destructive" : "secondary"}
            >
              {drop.status.replace("_", " ")}
            </Badge>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{formatPrice(drop.priceUsd)}</p>
            <p className="text-sm text-muted-foreground">per NFT</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-muted rounded-lg p-3">
            <p className="text-xl font-bold">{drop.supply.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total Supply</p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <p className="text-xl font-bold">{mintedCount.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Minted</p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <p className="text-xl font-bold">{remaining.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Remaining</p>
          </div>
        </div>

        {drop.endsAt && (
          <p className="text-sm text-muted-foreground mb-4">
            Ends: {new Date(drop.endsAt).toLocaleDateString()}
          </p>
        )}

        {!drop.contractAddress && (
          <p className="text-sm text-amber-600 mb-4">Contract not yet deployed on-chain.</p>
        )}

        {isSoldOut ? (
          <Button disabled className="w-full">Sold Out</Button>
        ) : !isActive ? (
          <Button disabled className="w-full">Not Active</Button>
        ) : !isConnected ? (
          <Button className="w-full" onClick={connect}>Connect Wallet to Mint</Button>
        ) : (
          <Button
            className="w-full"
            onClick={() => mintMutation.mutate()}
            disabled={mintMutation.isPending || !drop.contractAddress}
          >
            {mintMutation.isPending ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Minting...</>
            ) : (
              `Mint Now — ${formatPrice(drop.priceUsd)}`
            )}
          </Button>
        )}
      </div>

      {/* Recent minters */}
      {drop.mints && drop.mints.length > 0 && (
        <div>
          <h2 className="font-semibold mb-3">Recent Minters</h2>
          <div className="space-y-2">
            {drop.mints.slice(0, 10).map((mint) => (
              <div key={mint.id} className="flex items-center justify-between text-sm border rounded-lg px-3 py-2">
                <span className="font-mono text-xs truncate max-w-[200px]">
                  {mint.minterAddress}
                </span>
                <span className="text-muted-foreground">
                  {mint.quantity}x · {mint.mintedAt ? new Date(mint.mintedAt).toLocaleDateString() : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
