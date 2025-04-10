// filepath: c:\Apps\DASHPRO\TedsWoodWorkingLandingPage\app\page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useABTest } from '@/lib/abtest/ABTestContext';

export default function HomePage() {
  const router = useRouter();
  const { currentVariant, isLoading } = useABTest();

  useEffect(() => {
    if (!isLoading) {
      router.push(`/${currentVariant}`);
    }
  }, [currentVariant, router, isLoading]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Carregando Ted's Woodworking...</h2>
        <p className="text-gray-600">Preparando seus planos de marcenaria...</p>
      </div>
    </div>
  );
}