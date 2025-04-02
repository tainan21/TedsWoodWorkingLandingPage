// app/landinga/layout.tsx
import React from 'react';
import SEO from '@/components/layout/SEO';
import { generateProductSchema, generateFAQSchema } from '@/lib/schema-generator';  
import Script from 'next/script';

export const metadata = {
  title: 'TED Woodworking Plans - Para Iniciantes em Marcenaria',
  description: 'Planos de marcenaria perfeitos para iniciantes. Comece sua jornada na marcenaria com projetos simples e detalhados.',
};

// FAQ específicas para esta landing
const landingFAQs = [
  {
    question: 'Os planos da TED são adequados para iniciantes em marcenaria?',
    answer: 'Sim! Nossa coleção inclui centenas de projetos especialmente selecionados para iniciantes, com instruções detalhadas e listas de materiais completas.'
  },
  {
    question: 'Quanto tempo leva para receber acesso aos planos após a compra?',
    answer: 'O acesso é imediato! Assim que confirmamos seu pagamento, você receberá um email com instruções para acessar todos os 16.000+ planos de marcenaria.'
  },
  {
    question: 'Posso ver exemplos dos planos antes de comprar?',
    answer: 'Absolutamente! Oferecemos exemplos gratuitos para download que mostram exatamente o nível de detalhe e qualidade que você pode esperar de nossos planos.'
  }
];

export default function LandingALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema específico para produtos iniciantes
  const productSchema = generateProductSchema({
    name: 'TED Woodworking - Coleção Completa para Iniciantes',
    description: 'Mais de 16.000 planos de marcenaria, incluindo centenas de projetos perfeitos para iniciantes.',
    price: '37.00',
    rating: '4.9',
    reviewCount: '523'
  });

  const faqSchema = generateFAQSchema(landingFAQs);

  return (
    <>
      {/* Script do Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '123456789012345'); // Substitua pelo seu pixel ID
            fbq('track', 'PageView');
          `,
        }}
      />
      
      {/* Script do Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      
      {/* Hotjar Tracking */}
      <Script id="hotjar-tracking" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:123456,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      
      {/* SEO Enhanced Component */}
      <SEO 
        landingVariant="a"
        productData={{
          name: 'TED Woodworking - Coleção Completa para Iniciantes',
          description: 'Mais de 16.000 planos de marcenaria, incluindo centenas de projetos perfeitos para iniciantes.',
          price: '37.00',
          images: [
            'https://www.tedsplan.shop/images/beginners-collection.jpg'
          ]
        }}
        faqData={landingFAQs}
        additionalMetaTags={[
          { name: 'keywords', content: 'marcenaria para iniciantes, projetos simples de madeira, primeiros passos marcenaria' },
          { name: 'author', content: 'TED Woodworking' }
        ]}
      />
      
      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      {children}
    </>
  );
}