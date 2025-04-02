'use client';

import Head from 'next/head';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  variant?: string;
  keywords?: string[];
  structuredData?: Record<string, any>;
  noindex?: boolean;
  extraTags?: React.ReactNode;
};

const DEFAULT_TITLE = 'Teds Wood Working - 16,000 Woodworking Plans';
const DEFAULT_DESC = 'Get instant access to 16,000 woodworking plans, projects, and step-by-step blueprints for beautiful wooden furniture and crafts.';
const DEFAULT_KEYWORDS = [
  'Teds Wood Working',
  'DIY Wood Working Plans',
  'Woodworking Projects',
  'Woodworking Tools',
  'Woodworking Blueprints',
  'Furniture Plans',
  'DIY Furniture',
  'Carpentry Projects',
  'Wood Crafts',
  'Woodworking Ideas'
];
const BASE_URL = 'https://www.tedsplan.shop';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical,
  ogType = 'website',
  ogImage = `${BASE_URL}/images/teds-og-image.jpg`,
  ogImageAlt = 'Teds Wood Working Plans Preview',
  ogUrl,
  variant = '',
  keywords = DEFAULT_KEYWORDS,
  structuredData,
  noindex = false,
  extraTags,
}: SEOProps) {
  const pathname = usePathname();
  
  // Ajusta título e descrição se for uma variante específica
  const variantTitle = variant ? `${title} - ${variant}` : title;
  
  // Define URL canônica automaticamente se não fornecida
  const fullCanonical = canonical || `${BASE_URL}${pathname}`;
  const fullOgUrl = ogUrl || fullCanonical;
  
  // Estrutura de dados padrão para Schema.org (Product)
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description: description,
    image: ogImage,
    url: fullCanonical,
    brand: {
      '@type': 'Brand',
      name: 'Teds Wood Working'
    },
    offers: {
      '@type': 'Offer',
      price: '67.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: fullCanonical
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2619'
    }
  };
  
  const finalStructuredData = structuredData || defaultStructuredData;
  
  return (
    <>
      <title>{variantTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical e robots */}
      <link rel="canonical" href={fullCanonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={variantTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="Teds Wood Working" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={variantTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Extras para SEO */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Quaisquer tags extras passadas como props */}
      {extraTags}
    </>
  );
}