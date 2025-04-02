// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateOrganizationSchema } from '../lib/schema-generator';

// Fonte otimizada para web
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Melhora o desempenho de carregamento da fonte
  variable: '--font-inter',
});

// Metadados padrão do site
export const metadata: Metadata = {
  metadataBase: new URL('https://www.tedsplan.shop'),
  title: {
    default: 'TED Woodworking Plans - Projetos de Marcenaria Premium',
    template: '%s | TED Plans',
  },
  description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis. Projetos para iniciantes, profissionais e negócios.',
  keywords: 'marcenaria, projetos de madeira, planos de marcenaria, ted woodworking, ted plans',
  authors: [{ name: 'TED Woodworking Team' }],
  creator: 'TED Woodworking',
  publisher: 'TED Plans',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.tedsplan.shop',
    languages: {
      'en-US': 'https://www.tedsplan.shop/en',
      'pt-BR': 'https://www.tedsplan.shop',
      'es-ES': 'https://www.tedsplan.shop/es',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'TED Woodworking Plans',
    title: 'TED Woodworking Plans - Projetos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    url: 'https://www.tedsplan.shop',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://www.tedsplan.shop/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TED Woodworking Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TED Woodworking Plans - Projetos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    creator: '@tedplans',
    images: ['https://www.tedsplan.shop/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    other: {
      'facebook-domain-verification': 'facebook-verification-code',
    }
  },
  category: 'Marcenaria',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Gerar JSON-LD Schema para organização
  const organizationSchema = generateOrganizationSchema({
    name: 'TED Woodworking Plans',
    url: 'https://www.tedsplan.shop',
    logo: 'https://www.tedsplan.shop/logo.png',
    sameAs: [
      'https://www.facebook.com/tedwoodworking',
      'https://www.instagram.com/tedwoodworking',
      'https://www.youtube.com/tedwoodworking',
    ],
  });

  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <head>
        {/* JSON-LD para Rich Snippets nos resultados de busca */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Preload de recursos críticos */}
        <link
          rel="preload"
          href="/fonts/custom-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/images/hero-image.webp"
          as="image"
          type="image/webp"
        />
        
        {/* Hints de preconexão para domínios externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Favicons otimizados */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
        
        {/* Analytics com carregamento otimizado */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <SpeedInsights />
        
        {/* Script para lazy loading personalizado */}
        <Script
          id="lazy-loading-script"
          strategy="lazyOnload"
        >
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const lazyImages = document.querySelectorAll('img.lazy');
              const lazyVideos = document.querySelectorAll('video.lazy');
              
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver(function(entries, observer) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      img.src = img.dataset.src;
                      if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                      }
                      img.classList.remove('lazy');
                      imageObserver.unobserve(img);
                    }
                  });
                });
                
                lazyImages.forEach(function(image) {
                  imageObserver.observe(image);
                });
                
                const videoObserver = new IntersectionObserver(function(entries, observer) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      const video = entry.target;
                      video.load();
                      video.classList.remove('lazy');
                      videoObserver.unobserve(video);
                    }
                  });
                });
                
                lazyVideos.forEach(function(video) {
                  videoObserver.observe(video);
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}