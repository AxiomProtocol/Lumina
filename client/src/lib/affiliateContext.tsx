import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { useLocation } from "wouter";

interface AffiliateInfo {
  code: string;
  shopId?: number;
  linkId?: number;
  userId?: string;
  walletAddress?: string;
}

interface AffiliateContextType {
  affiliateInfo: AffiliateInfo | null;
  setAffiliate: (info: AffiliateInfo | null) => void;
  clearAffiliate: () => void;
  getAffiliateForShop: (shopId: number) => AffiliateInfo | null;
}

const AffiliateContext = createContext<AffiliateContextType | null>(null);

const AFFILIATE_STORAGE_KEY = "lumina_affiliate";
const AFFILIATE_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

interface StoredAffiliate {
  info: AffiliateInfo;
  expiresAt: number;
}

export function AffiliateProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [affiliateInfo, setAffiliateInfo] = useState<AffiliateInfo | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(AFFILIATE_STORAGE_KEY);
        if (stored) {
          const parsed: StoredAffiliate = JSON.parse(stored);
          if (parsed.expiresAt > Date.now()) {
            return parsed.info;
          }
          localStorage.removeItem(AFFILIATE_STORAGE_KEY);
        }
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const refCode = searchParams.get("ref") || searchParams.get("affiliate");
    
    if (refCode) {
      fetch(`/api/marketplace/affiliate-links/code/${refCode}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) {
            const info: AffiliateInfo = {
              code: refCode,
              linkId: data.id,
              shopId: data.shopId,
              userId: data.affiliateUserId,
              walletAddress: data.affiliateWallet
            };
            setAffiliateInfo(info);
            try {
              localStorage.setItem(AFFILIATE_STORAGE_KEY, JSON.stringify({
                info,
                expiresAt: Date.now() + AFFILIATE_EXPIRY_MS
              }));
            } catch {
              // localStorage may be unavailable
            }
          }
        })
        .catch(console.error);
    }
  }, [location]);

  const setAffiliate = useCallback((info: AffiliateInfo | null) => {
    setAffiliateInfo(info);
    if (info) {
      try {
        localStorage.setItem(AFFILIATE_STORAGE_KEY, JSON.stringify({
          info,
          expiresAt: Date.now() + AFFILIATE_EXPIRY_MS
        }));
      } catch {
        // localStorage may be unavailable
      }
    }
  }, []);

  const clearAffiliate = useCallback(() => {
    setAffiliateInfo(null);
    try {
      localStorage.removeItem(AFFILIATE_STORAGE_KEY);
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  const getAffiliateForShop = useCallback((shopId: number) => {
    if (affiliateInfo && affiliateInfo.shopId === shopId) {
      return affiliateInfo;
    }
    return null;
  }, [affiliateInfo]);

  return (
    <AffiliateContext.Provider value={{ 
      affiliateInfo, 
      setAffiliate, 
      clearAffiliate,
      getAffiliateForShop 
    }}>
      {children}
    </AffiliateContext.Provider>
  );
}

export function useAffiliate() {
  const context = useContext(AffiliateContext);
  if (!context) {
    throw new Error("useAffiliate must be used within an AffiliateProvider");
  }
  return context;
}
