// MetaTags.tsx
import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schemaData?: Record<string, any>[];
  locale?: string;
  alternateUrls?: {
    [key: string]: string;
  };
}

export default function MetaTags({
  title = 'TED Woodworking Plans - Projetos de Marcenaria | TED Plans',
  description = 'Mais de 16000 projetos de marcenaria detalhados para profissionais e amadores. Comece seu próximo projeto hoje com nossa coleção completa de planos de marcenaria TED.',
  keywords = 'marcenaria, projetos de madeira, planos de marcenaria, ted woodworking, ted plans, ferramentas de marcenaria',
  ogTitle,
  ogDescription,
  ogImage = 'https://www.tedsplan.shop/images/og-image.jpg',
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  noindex = false,
  schemaData = [],
  locale = 'pt-BR',
  alternateUrls = {},
}: MetaTagsProps) {
  const path = usePathname(); // Substitui o uso de useRouter
  const currentUrl = ogUrl || `https://www.tedsplan.shop${path}`;
  const finalCanonical = canonicalUrl || currentUrl;

  // Schema.org padrão para produto
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description: description,
    image: ogImage,
    offers: {
      '@type': 'Offer',
      price: '37.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
    },
  };

  // Combinando schema padrão com qualquer schema personalizado
  const finalSchemaData = [defaultSchema, ...schemaData];

  return (
    <Head>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={finalCanonical} />
      <meta name="theme-color" content="#4a7c59" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="TED Plans" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Links alternativos para diferentes idiomas/versões */}
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Schema.org JSON-LD */}
      {finalSchemaData.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}