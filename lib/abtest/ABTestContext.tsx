// lib/abtest/ABTestContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// Tipos para o teste A/B
export type LandingVariant = 'landinga' | 'landingb' | 'landingc';
export type ConversionEvent = 'click' | 'signup' | 'purchase';

type ABTestContextType = {
  currentVariant: LandingVariant;
  trackConversion: (event: ConversionEvent) => void;
  setNewVariantForReturningUser: () => void;
  isLoading: boolean;
};

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

// Configurações das variantes
const VARIANTS: LandingVariant[] = ['landinga', 'landingb', 'landingc'];
const COOKIE_NAME = 'teds_landing_variant';
const COOKIE_EXPIRY = 30; // dias

// Estatísticas iniciais (serão atualizadas com dados reais)
const initialStats = {
  conversionRates: {
    landinga: 0.05, // 5% de conversão inicial estimada
    landingb: 0.07, // 7% de conversão inicial estimada
    landingc: 0.03  // 3% de conversão inicial estimada
  }
};

export const ABTestProvider = ({ children }: { children: ReactNode }) => {
  const [currentVariant, setCurrentVariant] = useState<LandingVariant>('landinga');
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Se já estamos em uma landing page específica, respeitar isso
    if (pathname) {
      const currentPath = pathname.replace('/', '');
      if (VARIANTS.includes(currentPath as LandingVariant)) {
        setCurrentVariant(currentPath as LandingVariant);
        Cookies.set(COOKIE_NAME, currentPath, { expires: COOKIE_EXPIRY });
        setIsLoading(false);
        return;
      }
    }

    // Tenta buscar dados de conversão atualizados
    fetch('/api/track/stats')
      .then(res => res.json())
      .catch(() => initialStats)
      .then(data => {
        const stats = data?.conversionRates || initialStats.conversionRates;
        
        // Determina a variante para o usuário
        const existingVariant = Cookies.get(COOKIE_NAME) as LandingVariant | undefined;
        
        if (existingVariant && VARIANTS.includes(existingVariant)) {
          // Usuário recorrente: mantém a variante salva
          setCurrentVariant(existingVariant);
        } else {
          // Novo usuário: implementação epsilon-greedy
          const epsilon = 0.1; // 10% para exploração
          let selectedVariant: LandingVariant;
          
          if (Math.random() < epsilon) {
            // Exploração: escolhe aleatoriamente
            const randomIndex = Math.floor(Math.random() * VARIANTS.length);
            selectedVariant = VARIANTS[randomIndex];
          } else {
            // Exploração: escolhe a melhor variante
            selectedVariant = Object.entries(stats)
              .sort((a, b) => b[1] - a[1])[0][0] as LandingVariant;
          }
          
          setCurrentVariant(selectedVariant);
          Cookies.set(COOKIE_NAME, selectedVariant, { expires: COOKIE_EXPIRY });
        }
        
        setIsLoading(false);
        
        // Registra visualização
        trackPageView(currentVariant);
      });
  }, [pathname]);

  // Função para registrar conversão
  const trackConversion = (event: ConversionEvent) => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'conversion',
        event,
        variant: currentVariant,
        timestamp: new Date().toISOString()
      })
    }).catch(err => console.error('Erro ao registrar conversão:', err));
  };

  // Função para registrar visualização
  const trackPageView = (variant: LandingVariant) => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        variant,
        timestamp: new Date().toISOString()
      })
    }).catch(err => console.error('Erro ao registrar visualização:', err));
  };

  // Função para mostrar uma nova variante para usuários recorrentes
  const setNewVariantForReturningUser = () => {
    // Filtra para não mostrar a mesma variante
    const availableVariants = VARIANTS.filter(v => v !== currentVariant);
    
    // Escolhe aleatoriamente entre as variantes disponíveis
    const randomIndex = Math.floor(Math.random() * availableVariants.length);
    const newVariant = availableVariants[randomIndex];
    
    // Atualiza o cookie e o estado
    Cookies.set(COOKIE_NAME, newVariant, { expires: COOKIE_EXPIRY });
    setCurrentVariant(newVariant);
    
    // Redireciona para a nova variante
    router.push(`/${newVariant}`);
    
    // Registra visualização da nova variante
    trackPageView(newVariant);
  };

  return (
    <ABTestContext.Provider value={{
      currentVariant,
      trackConversion,
      setNewVariantForReturningUser,
      isLoading
    }}>
      {children}
    </ABTestContext.Provider>
  );
};

// Hook para usar o contexto
export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest deve ser usado dentro de um ABTestProvider');
  }
  return context;
};