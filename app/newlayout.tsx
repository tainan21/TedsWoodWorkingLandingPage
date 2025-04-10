// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import MetaPixel from "@/lib/facebook-meta"; // Supondo que este componente injete o script do Pixel
import { ABTestProvider } from "@/lib/abtest/ABTestContext";
import Hotjar from "@/components/ui-enhancements/Hotjar"; // Supondo que este componente injete o script do Hotjar
import "./globals.css";

// Fonte otimizada para web
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Melhora o desempenho de carregamento da fonte (CLS)
  preload: true,    // Pré-carrega a fonte
  variable: '--font-inter', // Define uma variável CSS para fácil uso
});

// Metadados base para todo o site. Páginas específicas podem sobrescrever/adicionar.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.tedsplan.shop'), // Base para URLs relativas em metadados
  title: {
    default: 'Ted Woodworking - 16.000 Planos de Marcenaria Premium', // Título padrão
    template: '%s | Ted Woodworking', // Template para títulos de páginas filhas
  },
  description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis. Projetos para iniciantes, profissionais e negócios.',
  generator: 'Next.js', // Opcional: Ferramenta usada para gerar o site
  applicationName: 'Ted Woodworking Plans',
  referrer: 'origin-when-cross-origin', // Política de referrer
  // A meta tag keywords é largamente ignorada pelo Google, mas pode ser usada por outros buscadores.
  keywords: [
    'Ted Woodworking', 'Planos de Marcenaria', 'Projetos de Madeira', 'Marcenaria DIY',
    'Carpintaria', 'Planos para Iniciantes', 'Planos Detalhados', 'Marcenaria Profissional',
    'Móveis de Madeira', 'Projetos DIY'
  ], // Mantenha se quiser, mas foque em keywords no conteúdo
  authors: [{ name: 'Ted Woodworking Team', url: 'https://www.tedsplan.shop' }], // Opcional: Adicionar URL
  creator: 'Ted Woodworking',
  publisher: 'Ted Woodworking',
  formatDetection: { // Impede que navegadores formatem automaticamente números como telefones/emails
    email: false,
    telephone: false,
    address: false,
  },
  // Configurações de robôs de busca
  robots: {
    index: true,    // Permitir indexação
    follow: true,   // Permitir seguir links
    googleBot: {    // Configurações específicas para o Googlebot
      index: true,
      follow: true,
      'max-video-preview': -1, // Permitir preview de vídeo sem limite
      'max-image-preview': 'large', // Permitir preview grande de imagem
      'max-snippet': -1, // Permitir snippet sem limite
    },
  },
  // URLs alternativas (internacionalização, canônica)
  alternates: {
    canonical: 'https://www.tedsplan.shop', // URL canônica da página principal
    languages: { // Versões em outros idiomas
      'en-US': 'https://www.tedsplan.shop/en',
      'pt-BR': 'https://www.tedsplan.shop',
      'es-ES': 'https://www.tedsplan.shop/es',
    },
    // types: { // Exemplo: Se tivesse um feed RSS
    //   'application/rss+xml': 'https://www.tedsplan.shop/rss.xml',
    // },
  },
  // Open Graph (para Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    siteName: 'Ted Woodworking',
    title: 'Ted Woodworking - 16.000 Planos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    url: 'https://www.tedsplan.shop',
    locale: 'pt_BR', // Locale principal
    images: [
      {
        url: 'https://www.tedsplan.shop/og-image.jpg', // URL da imagem OG
        width: 1200,
        height: 630,
        alt: 'Visualização dos Planos de Marcenaria Ted Woodworking', // Alt text descritivo
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: 'summary_large_image', // Tipo de card
    title: 'Ted Woodworking - 16.000 Planos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    siteId: '', // Opcional: ID do site no Twitter Analytics
    creator: '@tedwoodworking', // Opcional: @username do criador do conteúdo
    creatorId: '', // Opcional: ID do criador no Twitter
    images: { // Pode ser uma string ou um objeto como em openGraph
      url: 'https://www.tedsplan.shop/twitter-image.jpg',
      alt: 'Ted Woodworking - Planos de Marcenaria Detalhados',
    },
  },
  // Ícones do site (Favicons, etc.)
  icons: {
    icon: [ // Pode fornecer múltiplos ícones
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }, // Ícone SVG
    ],
    shortcut: '/favicon.ico', // Para navegadores mais antigos
    apple: '/apple-touch-icon.png', // Ícone para dispositivos Apple
    // other: { // Exemplo para ícones específicos
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  // Manifest da Web App
  manifest: '/site.webmanifest',
  // Verificação de propriedade para serviços
  verification: {
    // Substitua 'SEU_CODIGO_AQUI' pelos seus códigos reais
    google: 'SEU_CODIGO_GOOGLE_AQUI',
    yandex: 'SEU_CODIGO_YANDEX_AQUI', // Se usar Yandex
    other: {
      // Exemplo: verificação de domínio do Facebook (obtenha no Gerenciador de Negócios)
      'facebook-domain-verification': 'SEU_CODIGO_FACEBOOK_AQUI',
      // Exemplo: Pinterest
      // 'p:domain_verify': 'SEU_CODIGO_PINTEREST_AQUI',
    }
  },
  // Categoria do site (ajuda a contextualizar)
  category: 'Marcenaria',
  // itunes: { // Exemplo: Se fosse um app na App Store
  //   appId: 'myAppStoreID',
  //   appArgument: 'myAppArgument',
  // },
  // appLinks: { // Exemplo: Deep links para apps
  //   ios: {
  //     url: 'https://myapp.com/ios',
  //     app_store_id: 'app_store_id',
  //     app_name: 'MyApp iOS',
  //   },
  //   android: {
  //     url: 'https://myapp.com/android',
  //     package: 'com.example.android/package',
  //     app_name: 'MyApp Android',
  //   },
  // },
};

// Configurações da Viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1, // Considere remover ou ajustar se precisar de zoom
  // themeColor: '#ffffff', // Cor da barra de endereço do navegador
  // colorScheme: 'light', // Preferência de esquema de cores
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  // Definição única do schema JSON-LD para a Organização
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ted Woodworking",
    "url": "https://www.tedsplan.shop",
    "logo": "https://www.tedsplan.shop/logo.png", // Certifique-se que este logo existe e é acessível
    "sameAs": [ // Perfis sociais e outras presenças online
      "https://www.facebook.com/tedwoodworking",
      "https://www.instagram.com/tedwoodworking",
      // "https://www.youtube.com/channel/SEU_ID_YOUTUBE" // Use o URL real do canal
      // Adicione outros perfis relevantes (LinkedIn, Pinterest, etc.)
    ],
    "description": "Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis. Projetos para iniciantes, profissionais e negócios.",
    "foundingDate": "2010", // Data de fundação
    "email": "support@tedsplan.shop", // Email de contato principal
    "contactPoint": { // Ponto de contato (ex: Atendimento ao Cliente)
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX", // Use um telefone real se aplicável
      "contactType": "customer service",
      "areaServed": ["BR", "US", "ES"], // Códigos ISO 3166-1 alpha-2 dos países atendidos
      "availableLanguage": ["Portuguese", "English", "Spanish"] // Idiomas suportados
    }
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${inter.className}`} suppressHydrationWarning>
      <head>
        {/* Injeta o Schema JSON-LD da Organização no head */}
        <Script
          id="organization-schema-ld" // ID único para o script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Pré-carregamento de recursos críticos (ex: imagem principal acima da dobra) */}
        {/* Use <link rel="preload"> com moderação para os recursos mais importantes */}
        <link rel="preload" href="/images/hero-image.webp" as="image" type="image/webp" />

        {/* Pré-conexão com domínios de terceiros frequentemente usados */}
        {/* Removido preconnect para Google Fonts pois next/font lida com isso */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" /> {/* Para o Pixel */}
        <link rel="preconnect" href="https://static.hotjar.com" /> {/* Para o Hotjar */}

        {/* Componentes que injetam scripts de terceiros (Pixel, Hotjar) */}
        {/* É uma boa prática encapsulá-los, como você fez */}
        <MetaPixel />
        <Hotjar />

        {/* Favicons e Manifest são gerenciados pelo objeto `metadata.icons` e `metadata.manifest` */}
        {/* Não precisa adicionar links manuais aqui se já estiverem em `metadata` */}
      </head>
      <body className="bg-gray-100 text-gray-900 antialiased"> {/* Adicionado antialiased para melhor renderização de fontes */}
        <ABTestProvider> {/* Contexto para Testes A/B */}
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Carregando...</div>}> {/* Fallback mais informativo */}
            {children}
          </Suspense>
        </ABTestProvider>

        {/* Scripts de Analytics/GTM - Carregados via componentes do Next.js */}
        {/* Certifique-se que os IDs estão corretos */}
        <GoogleTagManager gtmId="GTM-N2BJVRCH" />
        <GoogleAnalytics gaId="GTM-WPP7FB2C" /> {/* Verifique se este é o ID correto do GA4 (geralmente começa com G-) ou se é um ID do GTM */}

        {/* Vercel Analytics & Speed Insights */}
        <SpeedInsights />
        <Analytics />

        {/* Script de Lazy Loading Customizado - RECOMENDAÇÃO: Remover e usar <Image> do next/image */}
        {/*
        <Script id="lazy-loading-script" strategy="lazyOnload">
          {`
            // Seu código de lazy loading aqui...
            // É recomendado usar o componente <Image> do next/image em vez disso.
            // Ele lida com lazy loading, otimização de formato e tamanho automaticamente.
            // Exemplo: <Image src="/path/to/image.jpg" alt="descrição" width={500} height={300} loading="lazy" />
            // O atributo loading="lazy" é o padrão no next/image.
          `}
        </Script>
        */}
      </body>
    </html>
  );
}
