// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import MetaPixel from "@/lib/facebook-meta";
import { ABTestProvider } from "@/lib/abtest/ABTestContext";
import Hotjar from "@/components/ui-enhancements/Hotjar";
import "./globals.css";

// Função para gerar schema JSON-LD
const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ted Woodworking",
    "url": "https://www.tedsplan.shop",
    "logo": "https://www.tedsplan.shop/logo.png",
    "sameAs": [
      "https://www.facebook.com/tedwoodworking",
      "https://www.instagram.com/tedwoodworking",
      "https://www.youtube.com/tedwoodworking"
    ],
    "description": "Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis. Projetos para iniciantes, profissionais e negócios.",
    "foundingDate": "2010",
    "email": "support@tedsplan.shop",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-000-000-0000",
      "contactType": "customer service",
      "availableLanguage": ["English", "Portuguese", "Spanish"]
    }
  };
};

// Fonte otimizada para web
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Melhora o desempenho de carregamento da fonte (CLS)
  preload: true,
  variable: '--font-inter',
});

// Metadados completos do site
export const metadata: Metadata = {
  metadataBase: new URL('https://www.tedsplan.shop'),
  title: {
    default: 'Ted Woodworking - 16.000 Planos de Marcenaria Premium',
    template: '%s | Ted Woodworking',
  },
  description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis. Projetos para iniciantes, profissionais e negócios.',
  generator: 'Ted Woodworking',
  applicationName: 'Ted Woodworking Plans',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Ted Woodworking',
    'Planos de Marcenaria',
    'Projetos de Madeira',
    'Marcenaria DIY',
    'Carpintaria',
    'Planos para Iniciantes',
    'Planos Detalhados',
    'Marcenaria Profissional',
    'Móveis de Madeira',
    'Projetos DIY'
  ].join(', '),
  authors: [{ name: 'Ted Woodworking Team' }],
  creator: 'Ted Woodworking',
  publisher: 'Ted Woodworking',
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
    siteName: 'Ted Woodworking',
    title: 'Ted Woodworking - 16.000 Planos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    url: 'https://www.tedsplan.shop',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://www.tedsplan.shop/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ted Woodworking Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ted Woodworking - 16.000 Planos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    creator: '@tedwoodworking',
    images: ['https://www.tedsplan.shop/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
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
export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ted Woodworking",
    "url": "https://www.tedsplan.shop",
    "logo": "https://www.tedsplan.shop/logo.png",
    "sameAs": [
      "https://www.facebook.com/tedwoodworking",
      "https://www.instagram.com/tedwoodworking",
      "https://www.youtube.com/tedwoodworking"
    ],
    "description": "Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.",
    "foundingDate": "2010",
    "email": "support@tedsplan.shop",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-000-000-0000",
      "contactType": "customer service",
      "availableLanguage": ["English", "Portuguese", "Spanish"]
    }
  };


  return (
    <html lang="pt-BR" className={`${inter.variable} ${inter.className}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preload" href="/images/hero-image.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <MetaPixel />
        <Hotjar />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <ABTestProvider>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            {children}
          </Suspense>
        </ABTestProvider>
        <GoogleTagManager gtmId="GTM-N2BJVRCH" />
        <GoogleAnalytics gaId="GTM-WPP7FB2C" />
        <SpeedInsights />
        <Analytics />
        <Script id="lazy-loading-script" strategy="lazyOnload">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              if ('IntersectionObserver' in window) {
                const lazyImages = document.querySelectorAll('img.lazy');
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
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}