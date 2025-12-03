import { useState } from "react";
import { ArrowUpDown, ArrowRight, Clock, Loader2, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useArbitrumBridge } from "@/lib/useArbitrumBridge";
import { CONTRACT_ADDRESSES } from "@/lib/contracts";

interface BridgeModalProps {
  trigger?: React.ReactNode;
  defaultAsset?: 'ETH' | 'LUM';
  defaultType?: 'deposit' | 'withdraw';
}

export function BridgeModal({ 
  trigger, 
  defaultAsset = 'ETH',
  defaultType = 'deposit' 
}: BridgeModalProps) {
  const { toast } = useToast();
  const {
    isLoading,
    currentChain,
    l1Balance,
    l2Balance,
    l1TokenBalance,
    l2TokenBalance,
    depositETH,
    withdrawETH,
    depositToken,
    withdrawToken,
    switchChain,
  } = useArbitrumBridge();

  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'deposit' | 'withdraw'>(defaultType);
  const [asset, setAsset] = useState<'ETH' | 'LUM'>(defaultAsset);
  const [amount, setAmount] = useState('');

  const sourceChain = type === 'deposit' ? 'L1' : 'L2';
  const isOnCorrectChain = currentChain === sourceChain;

  const sourceBalance = type === 'deposit' 
    ? (asset === 'ETH' ? l1Balance : l1TokenBalance)
    : (asset === 'ETH' ? l2Balance : l2TokenBalance);

  const handleBridge = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({ title: "Invalid amount", variant: "destructive" });
      return;
    }

    try {
      let txHash: string | null = null;

      if (type === 'deposit') {
        if (asset === 'ETH') {
          txHash = await depositETH(amount);
        } else {
          txHash = await depositToken(CONTRACT_ADDRESSES.AXM_TOKEN, amount);
        }
      } else {
        if (asset === 'ETH') {
          txHash = await withdrawETH(amount);
        } else {
          txHash = await withdrawToken(CONTRACT_ADDRESSES.AXM_TOKEN, amount);
        }
      }

      if (txHash) {
        toast({
          title: "Transaction submitted",
          description: `${type === 'deposit' ? 'Deposit' : 'Withdrawal'} initiated`,
        });
        setAmount('');
        setOpen(false);
      }
    } catch (err: any) {
      toast({
        title: "Transaction failed",
        description: err.message || "An error occurred",
        variant: "destructive",
      });
    }
  };

  const handleSwitchChain = async () => {
    const success = await switchChain(sourceChain);
    if (!success) {
      toast({ title: "Failed to switch network", variant: "destructive" });
    }
  };

  const setMaxAmount = () => {
    const balance = parseFloat(sourceBalance) || 0;
    const maxAmount = asset === 'ETH' ? Math.max(0, balance - 0.01) : balance;
    setAmount(maxAmount.toFixed(6));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" data-testid="button-open-bridge-modal">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Bridge
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Quick Bridge</DialogTitle>
          <DialogDescription>
            Bridge assets between Ethereum and Arbitrum
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Tabs value={type} onValueChange={(v) => setType(v as 'deposit' | 'withdraw')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deposit" data-testid="modal-tab-deposit">
                Deposit
              </TabsTrigger>
              <TabsTrigger value="withdraw" data-testid="modal-tab-withdraw">
                Withdraw
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={asset === 'ETH' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setAsset('ETH')}
              data-testid="modal-asset-eth"
            >
              ETH
            </Button>
            <Button
              variant={asset === 'LUM' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setAsset('LUM')}
              data-testid="modal-asset-lum"
            >
              LUM
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Amount</Label>
              <span className="text-xs text-muted-foreground">
                Balance: {sourceBalance} {asset}
              </span>
            </div>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                data-testid="modal-input-amount"
              />
              <Button variant="outline" size="sm" onClick={setMaxAmount}>
                MAX
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {type === 'deposit' ? '~15 min' : '~7 days'}
            </div>
            <Badge variant="outline">
              {type === 'deposit' ? 'L1 → L2' : 'L2 → L1'}
            </Badge>
          </div>

          {!isOnCorrectChain ? (
            <Button 
              className="w-full" 
              onClick={handleSwitchChain}
              data-testid="modal-switch-chain"
            >
              Switch to {sourceChain === 'L1' ? 'Ethereum' : 'Arbitrum'}
            </Button>
          ) : (
            <Button 
              className="w-full" 
              onClick={handleBridge}
              disabled={isLoading || !amount || parseFloat(amount) <= 0}
              data-testid="modal-button-bridge"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {type === 'deposit' ? 'Deposit' : 'Withdraw'} {asset}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}

          <div className="text-center">
            <a 
              href="/bridge" 
              className="text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-1"
            >
              Open full bridge interface
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
