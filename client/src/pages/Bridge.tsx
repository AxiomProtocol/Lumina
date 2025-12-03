import { useState, useEffect } from "react";
import { ArrowUpDown, ArrowRight, Clock, Fuel, AlertCircle, CheckCircle2, Loader2, ExternalLink, Wallet, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/layout/Header";
import { useWallet } from "@/lib/walletContext";
import { useArbitrumBridge } from "@/lib/useArbitrumBridge";
import { 
  L1_NETWORK_CONFIG, 
  L2_NETWORK_CONFIG,
  getL1ExplorerUrl,
  getL2ExplorerUrl,
  type BridgeTransaction,
} from "@/lib/arbitrumBridge";
import { CONTRACT_ADDRESSES } from "@/lib/contracts";

function GasEstimator({ 
  type, 
  amount,
  onEstimate 
}: { 
  type: 'deposit' | 'withdraw';
  amount: string;
  onEstimate: (type: 'deposit' | 'withdraw', amount: string) => Promise<any>;
}) {
  const [estimate, setEstimate] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (amount && parseFloat(amount) > 0) {
      setIsLoading(true);
      onEstimate(type, amount)
        .then(setEstimate)
        .finally(() => setIsLoading(false));
    } else {
      setEstimate(null);
    }
  }, [amount, type, onEstimate]);

  if (!amount || parseFloat(amount) <= 0) return null;

  return (
    <Card className="bg-muted/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <Fuel className="h-4 w-4" />
          Gas Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {isLoading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Estimating gas costs...
          </div>
        ) : estimate ? (
          <>
            <div className="flex justify-between">
              <span className="text-muted-foreground">L1 Execution</span>
              <span>{estimate.breakdown?.l1ExecutionCost || '0'} ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">L2 Execution</span>
              <span>{estimate.breakdown?.l2ExecutionCost || '0'} ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">L1 Data</span>
              <span>{estimate.breakdown?.l1DataCost || '0'} ETH</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span className="text-primary">{estimate.totalCostEth || '0'} ETH</span>
            </div>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

function TransactionTracker({ 
  transactions,
  onRefresh 
}: { 
  transactions: BridgeTransaction[];
  onRefresh: () => void;
}) {
  if (transactions.length === 0) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Loader2 className="h-4 w-4 animate-spin text-yellow-500" />;
    }
  };

  const getProgress = (tx: BridgeTransaction) => {
    if (tx.status === 'completed') return 100;
    if (tx.status === 'failed') return 0;
    if (tx.type === 'withdraw' && tx.confirmations && tx.requiredConfirmations) {
      return (tx.confirmations / tx.requiredConfirmations) * 100;
    }
    if (tx.status === 'l2_pending') return 75;
    if (tx.status === 'l1_initiated') return 25;
    return 10;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Pending Transactions</CardTitle>
          <Button variant="ghost" size="icon" onClick={onRefresh} data-testid="button-refresh-transactions">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="space-y-2 p-3 rounded-lg bg-muted/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getStatusIcon(tx.status)}
                <span className="font-medium">
                  {tx.type === 'deposit' ? 'Deposit' : 'Withdraw'} {tx.amount} {tx.asset}
                </span>
              </div>
              <Badge variant="outline">
                {tx.fromChain} → {tx.toChain}
              </Badge>
            </div>
            <Progress value={getProgress(tx)} className="h-1" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {tx.type === 'deposit' ? '~15 min' : '~7 days'}
              </div>
              <div className="flex gap-2">
                {tx.l1TxHash && (
                  <a 
                    href={getL1ExplorerUrl(tx.l1TxHash)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    L1 <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {tx.l2TxHash && (
                  <a 
                    href={getL2ExplorerUrl(tx.l2TxHash)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    L2 <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function L1L2SyncStatus() {
  const [l1Block, setL1Block] = useState<number | null>(null);
  const [l2Block, setL2Block] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const [l1Res, l2Res] = await Promise.all([
          fetch(L1_NETWORK_CONFIG.rpcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 }),
          }),
          fetch(L2_NETWORK_CONFIG.rpcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 }),
          }),
        ]);
        
        const l1Data = await l1Res.json();
        const l2Data = await l2Res.json();
        
        setL1Block(parseInt(l1Data.result, 16));
        setL2Block(parseInt(l2Data.result, 16));
      } catch (err) {
        console.error('Failed to fetch block numbers:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlocks();
    const interval = setInterval(fetchBlocks, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Network Sync Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Ethereum L1</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="font-mono text-sm">{l1Block?.toLocaleString()}</span>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Arbitrum L2</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="font-mono text-sm">{l2Block?.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Deposits: ~10-15 min | Withdrawals: ~7 days (challenge period)
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Bridge() {
  const { toast } = useToast();
  const { isConnected, address } = useWallet();
  const {
    isLoading,
    error,
    currentChain,
    l1Balance,
    l2Balance,
    l1TokenBalance,
    l2TokenBalance,
    pendingTransactions,
    depositETH,
    withdrawETH,
    depositToken,
    withdrawToken,
    estimateGas,
    switchChain,
    refreshBalances,
    refreshTransactions,
    getEstimatedTime,
  } = useArbitrumBridge();

  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [asset, setAsset] = useState<'ETH' | 'AXM'>('ETH');
  const [amount, setAmount] = useState('');

  const sourceChain = activeTab === 'deposit' ? 'L1' : 'L2';
  const destChain = activeTab === 'deposit' ? 'L2' : 'L1';
  const isOnCorrectChain = currentChain === sourceChain;

  const sourceBalance = activeTab === 'deposit' 
    ? (asset === 'ETH' ? l1Balance : l1TokenBalance)
    : (asset === 'ETH' ? l2Balance : l2TokenBalance);

  const destBalance = activeTab === 'deposit'
    ? (asset === 'ETH' ? l2Balance : l2TokenBalance)
    : (asset === 'ETH' ? l1Balance : l1TokenBalance);

  const estimatedTime = getEstimatedTime(activeTab);

  const handleBridge = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({ title: "Invalid amount", variant: "destructive" });
      return;
    }

    try {
      let txHash: string | null = null;

      if (activeTab === 'deposit') {
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
          description: `${activeTab === 'deposit' ? 'Deposit' : 'Withdrawal'} initiated successfully`,
        });
        setAmount('');
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
    if (success) {
      toast({ title: `Switched to ${sourceChain === 'L1' ? 'Ethereum' : 'Arbitrum'}` });
    } else {
      toast({ title: "Failed to switch network", variant: "destructive" });
    }
  };

  const setMaxAmount = () => {
    const balance = parseFloat(sourceBalance) || 0;
    const maxAmount = asset === 'ETH' ? Math.max(0, balance - 0.01) : balance;
    setAmount(maxAmount.toFixed(6));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-bridge-title">
            Arbitrum Bridge
          </h1>
          <p className="text-muted-foreground">
            Bridge assets between Ethereum and Arbitrum One
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {!isConnected && (
              <Alert>
                <Wallet className="h-4 w-4" />
                <AlertDescription>
                  Connect your wallet to use the bridge
                </AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Bridge Assets</CardTitle>
                <CardDescription>
                  Transfer ETH or AXM tokens between networks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'deposit' | 'withdraw')}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="deposit" data-testid="tab-deposit">
                      Deposit (L1 → L2)
                    </TabsTrigger>
                    <TabsTrigger value="withdraw" data-testid="tab-withdraw">
                      Withdraw (L2 → L1)
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={asset === 'ETH' ? 'default' : 'outline'}
                    onClick={() => setAsset('ETH')}
                    data-testid="button-asset-eth"
                  >
                    ETH
                  </Button>
                  <Button
                    variant={asset === 'AXM' ? 'default' : 'outline'}
                    onClick={() => setAsset('AXM')}
                    data-testid="button-asset-axm"
                  >
                    AXM
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="flex justify-between items-center mb-2">
                      <Label>From: {sourceChain === 'L1' ? 'Ethereum' : 'Arbitrum'}</Label>
                      <span className="text-sm text-muted-foreground">
                        Balance: {sourceBalance} {asset}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="0.0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-lg"
                        data-testid="input-bridge-amount"
                      />
                      <Button variant="outline" onClick={setMaxAmount} data-testid="button-max-amount">
                        MAX
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="p-2 rounded-full bg-muted">
                      <ArrowUpDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted">
                    <div className="flex justify-between items-center mb-2">
                      <Label>To: {destChain === 'L1' ? 'Ethereum' : 'Arbitrum'}</Label>
                      <span className="text-sm text-muted-foreground">
                        Balance: {destBalance} {asset}
                      </span>
                    </div>
                    <div className="text-lg font-medium p-3 bg-background rounded">
                      {amount || '0.0'} {asset}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Est. time: {activeTab === 'deposit' ? `${estimatedTime.average} min` : '~7 days'}
                  </div>
                  <div>
                    {activeTab === 'withdraw' && (
                      <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                        7-day challenge period
                      </Badge>
                    )}
                  </div>
                </div>

                {!isOnCorrectChain && isConnected ? (
                  <Button 
                    className="w-full" 
                    onClick={handleSwitchChain}
                    data-testid="button-switch-chain"
                  >
                    Switch to {sourceChain === 'L1' ? 'Ethereum' : 'Arbitrum'}
                  </Button>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={handleBridge}
                    disabled={isLoading || !isConnected || !amount || parseFloat(amount) <= 0}
                    data-testid="button-bridge"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        {activeTab === 'deposit' ? 'Deposit' : 'Withdraw'} {asset}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>

            <GasEstimator 
              type={activeTab} 
              amount={amount} 
              onEstimate={estimateGas} 
            />

            <TransactionTracker 
              transactions={pendingTransactions}
              onRefresh={refreshTransactions}
            />
          </div>

          <div className="space-y-6">
            <L1L2SyncStatus />

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Your Balances</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Ethereum L1</div>
                  <div className="flex justify-between">
                    <span>ETH</span>
                    <span className="font-mono">{l1Balance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AXM</span>
                    <span className="font-mono">{l1TokenBalance}</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Arbitrum L2</div>
                  <div className="flex justify-between">
                    <span>ETH</span>
                    <span className="font-mono">{l2Balance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AXM</span>
                    <span className="font-mono">{l2TokenBalance}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={refreshBalances}
                  data-testid="button-refresh-balances"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Balances
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Bridge Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Deposit Time:</span>
                  <span className="ml-2">10-30 minutes</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Withdrawal Time:</span>
                  <span className="ml-2">~7 days</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Challenge Period:</span>
                  <span className="ml-2">7 days</span>
                </div>
                <Separator />
                <p className="text-xs text-muted-foreground">
                  Withdrawals require a 7-day challenge period before funds can be claimed on L1. 
                  This is a security feature of Arbitrum's optimistic rollup design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
