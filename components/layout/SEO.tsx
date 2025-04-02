// components/layout/SEO.tsx
import React from 'react';
import { NextSeo, ArticleJsonLd, ProductJsonLd, FAQPageJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string; alt?: string; width?: number; height?: number }>;
    site_name?: string;
    type?: string;
  };
  additionalMetaTags?: Array<{ name: string; content: string }>;
  noindex?: boolean;
  nofollow?: boolean;
  landingVariant?: 'a' | 'b' | 'c' | string;
  productData?: {
    name: string;
    description: string;
    price: string;
    priceCurrency?: string;
    availability?: string;
    images?: string[];
    reviews?: Array<{
      author: string;
      datePublished: string;
      reviewBody: string;
      reviewRating: {
        ratingValue: string;
      };
    }>;
  };
  articleData?: {
    title: string;
    description: string;
    publishedTime: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'TED Woodworking Plans - Projetos de Marcenaria Premium',
  description = 'Mais de 16000 projetos de marcenaria detalhados para todos os níveis. Planos passo a passo, fáceis de seguir, com instruções detalhadas.',
  canonical,
  openGraph,
  additionalMetaTags = [],
  noindex = false,
  nofollow = false,
  landingVariant,
  productData,
  articleData,
  faqData,
}) => {
  const router = useRouter();
  const path = router.asPath;
  const finalCanonical = canonical || `https://www.tedsplan.shop${path}`;
  
  // Configurações específicas para variantes de landing
  const variantSpecificMeta = () => {
    switch (landingVariant) {
      case 'a':
        return {
          title: title || 'TED Woodworking Plans - Para Iniciantes em Marcenaria',
          description: description || 'Planos de marcenaria perfeitos para iniciantes. Comece sua jornada na marcenaria com projetos simples e detalhados.',
          additionalTags: [
            { name: 'audience', content: 'iniciantes, hobby, diy' },
            ...additionalMetaTags
          ]
        };
      case 'b':
        return {
          title: title || 'TED Woodworking Plans - Para Marceneiros Experientes',
          description: description || 'Projetos avançados de marcenaria para profissionais. Desafie suas habilidades com nossos planos detalhados.',
          additionalTags: [
            { name: 'audience', content: 'profissionais, avançado, especialistas' },
            ...additionalMetaTags
          ]
        };
      case 'c':
        return {
          title: title || 'TED Woodworking Plans - Marcenaria Comercial e Projetos para Venda',
          description: description || 'Planos de marcenaria para produção em escala e projetos comerciais. Ideais para quem quer transformar hobby em negócio.',
          additionalTags: [
            { name: 'audience', content: 'comercial, negócios, empreendedores' },
            ...additionalMetaTags
          ]
        };
      default:
        return {
          title,
          description,
          additionalTags: additionalMetaTags
        };
    }
  };

  const variantMeta = variantSpecificMeta();

  return (
    <>
      <NextSeo
        title={variantMeta.title}
        description={variantMeta.description}
        canonical={finalCanonical}
        openGraph={{
          url: finalCanonical,
          title: openGraph?.title || variantMeta.title,
          description: openGraph?.description || variantMeta.description,
          images: openGraph?.images || [
            {
              url: 'https://www.tedsplan.shop/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'TED Woodworking Plans',
            },
          ],
          site_name: openGraph?.site_name || 'TED Plans',
          type: openGraph?.type || 'website',
        }}
        noindex={noindex}
        nofollow={nofollow}
        additionalMetaTags={variantMeta.additionalTags}
      />

      {/* Schema de Produto (para páginas de produto) */}
      {productData && (
        <ProductJsonLd
          productName={productData.name}
          description={productData.description}
          images={productData.images || ['https://www.tedsplan.shop/images/product-main.jpg']}
          brand="TED Woodworking"
          reviews={productData.reviews || [
            {
              author: 'Carlos Santos',
              datePublished: '2024-02-15',
              reviewBody: 'Excelentes planos, detalhados e fáceis de seguir!',
              reviewRating: {
                ratingValue: '5',
              },
            },
          ]}
          aggregateRating={{
            ratingValue: '4.8',
            reviewCount: '1247',
          }}
          offers={{
            price: productData.price,
            priceCurrency: productData.priceCurrency || 'BRL',
            availability: productData.availability || 'https://schema.org/InStock',
            url: finalCanonical,
            seller: {
              name: 'TED Plans',
            },
          }}
        />
      )}

      {/* Schema de Artigo (para páginas de blog) */}
      {articleData && (
        <ArticleJsonLd
          url={finalCanonical}
          title={articleData.title}
          images={['https://www.tedsplan.shop/images/blog-cover.jpg']}
          datePublished={articleData.publishedTime}
          dateModified={articleData.modifiedTime || articleData.publishedTime}
          authorName={articleData.authors || ['TED Woodworking Team']}
          publisherName="TED Plans"
          publisherLogo="https://www.tedsplan.shop/images/logo.png"
          description={articleData.description}
        />
      )}

      {/* Schema de FAQ (para páginas com perguntas frequentes) */}
      {faqData && faqData.length > 0 && (
        <FAQPageJsonLd
          mainEntity={faqData.map(item => ({
            questionName: item.question,
            acceptedAnswerText: item.answer,
          }))}
        />
      )}
    </>
  );
};

export default SEO;