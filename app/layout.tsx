import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import MetaTags from "@/app/MetaTags"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';
import MetaPixel from "@/lib/facebook-meta"; // Importando o Meta Pixel

export const metadata: Metadata = {
  title: 'Teds Wood Working',
  description: 'Explore DIY woodworking plans, projects, and tools with Teds Wood Working.',
  generator: 'TedsWoodWorking.com',
  openGraph: {
    title: 'Teds Wood Working - 16 plans',
    description: 'Explore DIY woodworking plans, projects, and tools with Teds Wood Working.',
    url: 'https://www.tedsplan.shop/',
    siteName: 'Teds Wood Working',
    locale: 'pt_BR',
    type: 'website'
  },
  keywords: [
    'Teds Wood Working',
    'DIY Wood Working Plans',
    'Wood Working Projects',
    'Wood Working Tools',
  ].join(', '),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      {/* Utiliza o MetaTags para injetar SEO avançado */}
    
    <MetaPixel /> 

    </head>
    <body className="bg-gray-100 text-gray-900">
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          {children}
          <GoogleTagManager gtmId="GTM-N2BJVRCH" />
          <SpeedInsights />
          <Analytics />
        </Suspense>
    </body>
  </html>
  );
}