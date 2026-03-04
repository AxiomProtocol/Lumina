import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/lib/walletContext";
import { apiRequest } from "@/lib/queryClient";
import { ShoppingBag, Loader2, Tag } from "lucide-react";
import { useState } from "react";
import type { MusicListing } from "@shared/schema";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function MusicMarketplace() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { address, isConnected, connect } = useWallet();
  const [listForm, setListForm] = useState({ dropId: "", tokenId: "1", quantity: "1", priceUsd: "", txHash: "" });
  const [showListForm, setShowListForm] = useState(false);

  const { data: listings = [], isLoading } = useQuery<MusicListing[]>({
    queryKey: ["/api/music/marketplace"],
    queryFn: () => fetch("/api/music/marketplace").then((r) => r.json()),
  });

  const buyMutation = useMutation({
    mutationFn: async (listingId: string) => {
      return apiRequest("POST", `/api/music/listings/${listingId}/buy`, {});
    },
    onSuccess: () => {
      toast({ title: "Purchase recorded" });
      queryClient.invalidateQueries({ queryKey: ["/api/music/marketplace"] });
    },
    onError: (err: Error) => {
      toast({ title: "Purchase failed", description: err.message, variant: "destructive" });
    },
  });

  const listMutation = useMutation({
    mutationFn: async () => {
      if (!address) throw new Error("Wallet not connected");
      return apiRequest("POST", "/api/music/listings", {
        dropId: listForm.dropId,
        sellerAddress: address,
        tokenId: parseInt(listForm.tokenId),
        quantity: parseInt(listForm.quantity),
        priceUsd: Math.round(Number(listForm.priceUsd) * 100),
        txHash: listForm.txHash || null,
      });
    },
    onSuccess: () => {
      toast({ title: "Listing created" });
      setShowListForm(false);
      setListForm({ dropId: "", tokenId: "1", quantity: "1", priceUsd: "", txHash: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/music/marketplace"] });
    },
    onError: (err: Error) => {
      toast({ title: "Failed to list", description: err.message, variant: "destructive" });
    },
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" /> Music Marketplace
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Buy and sell music NFTs</p>
        </div>
        {isConnected ? (
          <Button variant="outline" onClick={() => setShowListForm(!showListForm)}>
            <Tag className="w-4 h-4 mr-2" /> List for Sale
          </Button>
        ) : (
          <Button variant="outline" onClick={connect}>Connect Wallet</Button>
        )}
      </div>

      {/* List for Sale form */}
      {showListForm && (
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="font-semibold mb-3">List an NFT for Sale</h2>
          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="Drop ID"
              value={listForm.dropId}
              onChange={(e) => setListForm({ ...listForm, dropId: e.target.value })}
            />
            <Input
              placeholder="Token ID (default: 1)"
              value={listForm.tokenId}
              onChange={(e) => setListForm({ ...listForm, tokenId: e.target.value })}
            />
            <Input
              placeholder="Quantity"
              value={listForm.quantity}
              onChange={(e) => setListForm({ ...listForm, quantity: e.target.value })}
            />
            <Input
              placeholder="Price in USD (e.g. 1.50)"
              value={listForm.priceUsd}
              onChange={(e) => setListForm({ ...listForm, priceUsd: e.target.value })}
            />
            <Input
              placeholder="Tx Hash (optional)"
              value={listForm.txHash}
              onChange={(e) => setListForm({ ...listForm, txHash: e.target.value })}
              className="col-span-2"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <Button
              onClick={() => listMutation.mutate()}
              disabled={listMutation.isPending || !listForm.dropId || !listForm.priceUsd}
            >
              {listMutation.isPending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Listing...</> : "Create Listing"}
            </Button>
            <Button variant="ghost" onClick={() => setShowListForm(false)}>Cancel</Button>
          </div>
        </div>
      )}

      {/* Active listings */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      ) : listings.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No active listings yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {listings.map((listing) => (
            <div key={listing.id} className="border rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm font-mono truncate max-w-[200px]">
                  Drop: {listing.dropId}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Token #{listing.tokenId} · Qty: {listing.quantity}
                </p>
                <p className="text-xs text-muted-foreground">
                  Seller: {listing.sellerAddress.slice(0, 6)}…{listing.sellerAddress.slice(-4)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">{formatPrice(listing.priceUsd)}</p>
                {!isConnected ? (
                  <Button size="sm" variant="outline" onClick={connect} className="mt-1">
                    Connect to Buy
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="mt-1"
                    onClick={() => buyMutation.mutate(listing.id)}
                    disabled={buyMutation.isPending}
                  >
                    {buyMutation.isPending ? <Loader2 className="w-3 h-3 animate-spin" /> : "Buy"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Rewards section */}
      {isConnected && address && (
        <div className="mt-8 border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Claim Rewards</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Secondary sale royalties accumulate on-chain for NFT holders.
            Use the contract's <code className="text-xs bg-muted px-1 rounded">claimRewards(tokenId)</code> function
            to claim, then record it below.
          </p>
          <Link href="/music">
            <Button variant="outline" size="sm">Browse Drops to Check Rewards</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
