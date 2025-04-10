// lib/abtest/ABTestContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export type LandingVariant = 'landinga' | 'landingb' | 'landingc' | 'landingx';
export type ConversionEvent = 'click' | 'signup' | 'purchase';

type ABTestContextType = {
  currentVariant: LandingVariant;
  trackConversion: (event: ConversionEvent) => void;
  rotateVariantForReturningUser: () => void;
  isLoading: boolean;
};

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

const VARIANTS: LandingVariant[] = ['landinga', 'landingb', 'landingc', 'landingx'];
const VARIANT_COOKIE_NAME = 'ted_landing_variant';
const SESSION_COOKIE_NAME = 'ted_session_id';
const COOKIE_EXPIRY_DAYS = 30;

export const ABTestProvider = ({ children }: { children: ReactNode }) => {
  const [currentVariant, setCurrentVariant] = useState<LandingVariant>('landinga');
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const trackPageView = (variant: LandingVariant) => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        variant,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct',
      }),
    }).catch((err) => console.error('Error tracking page view:', err));
  };

  // Initialize session with a unique ID
  const initializeSession = () => {
    if (!Cookies.get(SESSION_COOKIE_NAME)) {
      const sessionId = uuidv4();
      Cookies.set(SESSION_COOKIE_NAME, sessionId, { expires: COOKIE_EXPIRY_DAYS });
    }
  };

  useEffect(() => {
    initializeSession();

    // Check if the URL already specifies a landing page
    if (pathname) {
      const currentPath = pathname.replace('/', '');
      if (VARIANTS.includes(currentPath as LandingVariant)) {
        setCurrentVariant(currentPath as LandingVariant);
        Cookies.set(VARIANT_COOKIE_NAME, currentPath, { expires: COOKIE_EXPIRY_DAYS });
        setIsLoading(false);
        trackPageView(currentPath as LandingVariant);
        return;
      }
    }

    // Use the stored variant if it exists
    const existingVariant = Cookies.get(VARIANT_COOKIE_NAME) as LandingVariant | undefined;
    if (existingVariant && VARIANTS.includes(existingVariant)) {
      setCurrentVariant(existingVariant);
      setIsLoading(false);
      trackPageView(existingVariant);
      return;
    }

    // Randomly select a variant for new users
    const randomIndex = Math.floor(Math.random() * VARIANTS.length);
    const selectedVariant = VARIANTS[randomIndex];
    setCurrentVariant(selectedVariant);
    Cookies.set(VARIANT_COOKIE_NAME, selectedVariant, { expires: COOKIE_EXPIRY_DAYS });
    setIsLoading(false);
    trackPageView(selectedVariant);
  }, [pathname]);

  const trackConversion = (event: ConversionEvent) => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'conversion',
        event,
        variant: currentVariant,
        timestamp: new Date().toISOString(),
      }),
    }).catch((err) => console.error('Error tracking conversion:', err));
  };

  const rotateVariantForReturningUser = () => {
    const availableVariants = VARIANTS.filter((v) => v !== currentVariant);
    const randomIndex = Math.floor(Math.random() * availableVariants.length);
    const newVariant = availableVariants[randomIndex];
    Cookies.set(VARIANT_COOKIE_NAME, newVariant, { expires: COOKIE_EXPIRY_DAYS });
    setCurrentVariant(newVariant);
    router.push(`/${newVariant}`);
    trackPageView(newVariant);
  };

  return (
    <ABTestContext.Provider
      value={{
        currentVariant,
        trackConversion,
        rotateVariantForReturningUser,
        isLoading,
      }}
    >
      {children}
    </ABTestContext.Provider>
  );
};

export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
};
