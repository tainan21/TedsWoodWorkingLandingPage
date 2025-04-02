// app/landinga/page.tsx
'use client'

import { useEffect } from 'react'
import { useABTest } from '@/lib/abtest/ABTestContext'
import ReturningUserBanner from '@/components/common/ReturningUserBanner'
import { DynamicShowcaseGrid } from '@/components/layout/dynamic-showcase-grid'
import { TestimonialSlider } from '@/components/layout/testimonial-slider'
import { CountdownTimer } from '@/components/layout/countdown-timer'
import { FloatingGuarantee } from '@/components/layout/floating-guarantee'
import MetaTags from "@/app/MetaTags"

export default function LandingPageA() {
  const { trackConversion } = useABTest()
  
  useEffect(() => {
    // Efeitos específicos da página se necessário
  }, [])
  
  const handleConversion = () => {
    trackConversion()
    // Redireciona para checkout ou obrigado
    window.location.href = '/checkout'
  }
  
  return (
    <>
      {/* SEO Específico para esta página */}
      <MetaTags
        title="Ted's Woodworking - 16,000 Woodworking Plans Catalog"
        description="Access our complete catalog of 16,000 woodworking plans with step-by-step instructions, detailed blueprints and materials lists."
        keywords={['woodworking plans', 'DIY woodworking', 'beginner woodworking projects', 'Ted\'s Woodworking']}
        landingVariant="Catálogo Principal"
        canonical="https://www.tedsplan.shop/landinga"
        structuredData={{
          '@type': 'Product',
          name: 'Ted\'s Woodworking Complete Plans Collection',
          description: 'Access to 16,000 woodworking plans with detailed instructions',
          offers: {
            '@type': 'Offer',
            price: '67.00',
            priceCurrency: 'USD',
          }
        }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Banner para usuários recorrentes */}
        <ReturningUserBanner />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8 mb-12 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            16,000 Planos de Marcenaria - Acesso Completo
          </h1>
          <p className="text-xl text-amber-800 mb-6">
            Planos detalhados, instruções passo a passo, listas de materiais e dicas de especialistas.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-800 mb-3">
                Perfeito para Iniciantes e Experientes
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-500 p-1 rounded-full mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  Planos detalhados para qualquer nível
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 p-1 rounded-full mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  Instruções passo a passo claras
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 p-1 rounded-full mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  Listas de materiais completas
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/plans-preview.jpg"
                  alt="Ted's Woodworking Plans Preview"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleConversion}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-xl font-bold shadow-lg transform transition hover:scale-105"
            >
              Obter Acesso Agora
            </button>
            <p className="text-sm text-amber-700 mt-2">
              Garantia de devolução do dinheiro em 60 dias
            </p>
          </div>
        </div>
        
        {/* Seção de planos mais populares */}
        <DynamicShowcaseGrid />
        
        {/* Depoimentos */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            O que Nossos Clientes Dizem
          </h2>
          <TestimonialSlider />
        </div>
        
        {/* Contagem regressiva */}
        <div className="bg-blue-50 rounded-lg p-6 my-12">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-4">
            Oferta por Tempo Limitado
          </h3>
          <CountdownTimer targetDate={new Date(Date.now() + 86400000 * 3)} /> {/* 3 dias */}
        </div>
        
        {/* CTA Final */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">
            Comece Seus Projetos de Marcenaria Hoje!
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Acesso imediato a 16.000 planos detalhados que transformarão sua paixão pela marcenaria.
          </p>
          <button
            onClick={handleConversion}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-xl"
          >
            Obter Todos os 16.000 Planos
          </button>
        </div>
        
        {/* Garantia Flutuante */}
        <FloatingGuarantee />
      </div>
    </>
  )
}