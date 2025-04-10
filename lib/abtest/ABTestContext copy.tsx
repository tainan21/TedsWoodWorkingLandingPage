// // lib/abtest/ABTestContext.tsx
// 'use client';

// import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
// import { v4 as uuidv4 } from 'uuid';

// // Define landing variant type as a string to be more flexible
// export type LandingVariant = string;
// export type ConversionEvent = 'click' | 'signup' | 'purchase';

// // Configuration object for variants - easy to modify
// const VARIANT_CONFIG = {
//   // Current active variants
//   activeVariants: ['landinga', 'landingb', 'landingc'] as LandingVariant[],
  
//   // Default variant to use if something goes wrong
//   defaultVariant: 'landinga' as LandingVariant,
  
//   // Optional weights for variant selection (values between 0-100, must sum to 100)
//   // If not provided, variants are selected with equal probability
//   weights: {
//     'landinga': 40, // 40% probability
//     'landingb': 30, // 30% probability
//     'landingc': 30, // 30% probability
//   },
  
//   // Cookie settings
//   cookieNames: {
//     variant: 'ted_landing_variant',
//     session: 'ted_session_id',
//     referrer: 'ted_referrer_source'
//   },
  
//   // Cookie expiration in days
//   cookieExpiry: 30
// };

// type ABTestContextType = {
//   currentVariant: LandingVariant;
//   trackConversion: (event: ConversionEvent) => void;
//   rotateVariantForReturningUser: () => void;
//   isLoading: boolean;
//   referrerSource: string | null;
// };

// const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

// export const ABTestProvider = ({ children }: { children: ReactNode }) => {
//   const [currentVariant, setCurrentVariant] = useState<LandingVariant>(VARIANT_CONFIG.defaultVariant);
//   const [isLoading, setIsLoading] = useState(true);
//   const [referrerSource, setReferrerSource] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   const trackPageView = (variant: LandingVariant, referrer?: string) => {
//     fetch('/api/track', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         type: 'pageview',
//         variant,
//         referrer: referrer || 'direct',
//         timestamp: new Date().toISOString()
//       })
//     }).catch(err => console.error('Error tracking page view:', err));
//   };

//   // Select a variant based on weights
//   const selectWeightedRandomVariant = (): LandingVariant => {
//     // Check if we have weights defined
//     if (VARIANT_CONFIG.weights) {
//       const weights = VARIANT_CONFIG.weights;
//       const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
      
//       // Verify weights sum to 100
//       if (Math.abs(totalWeight - 100) > 0.01) {
//         console.warn('Variant weights do not sum to 100, using equal probability instead');
//         return VARIANT_CONFIG.activeVariants[
//           Math.floor(Math.random() * VARIANT_CONFIG.activeVariants.length)
//         ];
//       }
      
//       // Generate a random number between 0-100
//       const randomNum = Math.random() * 100;
//       let cumulativeWeight = 0;
      
//       // Find the variant based on its weight
//       for (const variant of VARIANT_CONFIG.activeVariants) {
//         cumulativeWeight += weights[variant] || 0;
//         if (randomNum <= cumulativeWeight) {
//           return variant;
//         }
//       }
//     }
    
//     // Fallback to random selection
//     return VARIANT_CONFIG.activeVariants[
//       Math.floor(Math.random() * VARIANT_CONFIG.activeVariants.length)
//     ];
//   };

//   // Initialize user session and capture referrer
//   const initializeSession = () => {
//     // Set session ID if not exists
//     if (!Cookies.get(VARIANT_CONFIG.cookieNames.session)) {
//       const sessionId = uuidv4();
//       Cookies.set(VARIANT_CONFIG.cookieNames.session, sessionId, { 
//         expires: VARIANT_CONFIG.cookieExpiry 
//       });
//     }
    
//     // Capture referrer if it's a new session
//     if (typeof window !== 'undefined') {
//       const urlParams = new URLSearchParams(window.location.search);
//       const ref = urlParams.get('ref') || urlParams.get('source') || urlParams.get('utm_source');
      
//       if (ref) {
//         Cookies.set(VARIANT_CONFIG.cookieNames.referrer, ref, { 
//           expires: VARIANT_CONFIG.cookieExpiry 
//         });
//         setReferrerSource(ref);
//       } else {
//         // Check existing referrer cookie
//         const storedReferrer = Cookies.get(VARIANT_CONFIG.cookieNames.referrer);
//         if (storedReferrer) {
//           setReferrerSource(storedReferrer);
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     initializeSession();

//     // If URL already specifies a landing variant, use it
//     if (pathname) {
//       const currentPath = pathname.replace('/', '');
//       if (VARIANT_CONFIG.activeVariants.includes(currentPath as LandingVariant)) {
//         setCurrentVariant(currentPath as LandingVariant);
//         Cookies.set(VARIANT_CONFIG.cookieNames.variant, currentPath, { 
//           expires: VARIANT_CONFIG.cookieExpiry 
//         });
//         setIsLoading(false);
//         trackPageView(currentPath as LandingVariant, referrerSource || undefined);
//         return;
//       }
//     }

//     // If cookie exists, use stored variant
//     const existingVariant = Cookies.get(VARIANT_CONFIG.cookieNames.variant) as LandingVariant | undefined;
//     if (existingVariant && VARIANT_CONFIG.activeVariants.includes(existingVariant)) {
//       setCurrentVariant(existingVariant);
//       setIsLoading(false);
//       trackPageView(existingVariant, referrerSource || undefined);
//       return;
//     }

//     // For new users, select variant based on weights
//     const selectedVariant = selectWeightedRandomVariant();
//     setCurrentVariant(selectedVariant);
//     Cookies.set(VARIANT_CONFIG.cookieNames.variant, selectedVariant, { 
//       expires: VARIANT_CONFIG.cookieExpiry 
//     });
//     setIsLoading(false);
//     trackPageView(selectedVariant, referrerSource || undefined);
//   }, [pathname, referrerSource]);

//   const trackConversion = (event: ConversionEvent) => {
//     fetch('/api/track', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         type: 'conversion',
//         event,
//         variant: currentVariant,
//         referrer: referrerSource || 'direct',
//         timestamp: new Date().toISOString()
//       })
//     }).catch(err => console.error('Error tracking conversion:', err));
//   };

//   const rotateVariantForReturningUser = () => {
//     // Filter out current variant and select a new one
//     const availableVariants = VARIANT_CONFIG.activeVariants.filter(v => v !== currentVariant);
//     if (availableVariants.length === 0) {
//       console.warn('No alternative variants available');
//       return;
//     }
    
//     // Select a new variant (could implement weighted selection here too)
//     const randomIndex = Math.floor(Math.random() * availableVariants.length);
//     const newVariant = availableVariants[randomIndex];
    
//     Cookies.set(VARIANT_CONFIG.cookieNames.variant, newVariant, { 
//       expires: VARIANT_CONFIG.cookieExpiry 
//     });
//     setCurrentVariant(newVariant);
//     router.push(`/${newVariant}`);
//     trackPageView(newVariant, referrerSource || undefined);
//   };

//   return (
//     <ABTestContext.Provider value={{
//       currentVariant,
//       trackConversion,
//       rotateVariantForReturningUser,
//       isLoading,
//       referrerSource
//     }}>
//       {children}
//     </ABTestContext.Provider>
//   );
// };

// export const useABTest = () => {
//   const context = useContext(ABTestContext);
//   if (context === undefined) {
//     throw new Error('useABTest must be used within an ABTestProvider');
//   }
//   return context;
// };