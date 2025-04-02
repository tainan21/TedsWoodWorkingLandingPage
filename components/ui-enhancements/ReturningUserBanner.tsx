// components/ui-enhancements/ReturningUserBanner.tsx
'use client';

import { useEffect, useState } from 'react';
import { useABTest } from '@/lib/abtest/ABTestContext';
import Cookies from 'js-cookie';

export default function ReturningUserBanner() {
  const [isReturning, setIsReturning] = useState(false);
  const { setNewVariantForReturningUser } = useABTest();
  
  useEffect(() => {
    // Verifica se é um usuário recorrente
    const visits = parseInt(Cookies.get('teds_visit_count') || '0');
    
    if (visits > 0) {
      setIsReturning(true);
    }
    
    // Incrementa contador de visitas
    Cookies.set('teds_visit_count', (visits + 1).toString(), { expires: 30 });
  }, []);
  
  if (!isReturning) return null;
  
  return (
    <div className="bg-amber-100 p-4 rounded-lg mb-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p className="text-amber-800 font-medium">
          Bem-vindo de volta aos planos de marcenaria Ted's!
        </p>
        <button 
          onClick={setNewVariantForReturningUser}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Ver oferta especial para clientes
        </button>
      </div>
    </div>
  );
}