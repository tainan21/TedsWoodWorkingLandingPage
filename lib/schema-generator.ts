// lib/schema-generator.ts
export function generateProductSchema(productData: {
    name: string;
    description: string;
    price: string;
    images?: string[];
    rating?: string;
    reviewCount?: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: productData.name,
      description: productData.description,
      image: productData.images?.[0] || 'https://www.tedsplan.shop/images/default-product.jpg',
      offers: {
        '@type': 'Offer',
        price: productData.price,
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        url: 'https://www.tedsplan.shop',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: productData.rating || '4.8',
        reviewCount: productData.reviewCount || '1247',
      },
    };
  }
  
  export function generateOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TED Plans',
      url: 'https://www.tedsplan.shop',
      logo: 'https://www.tedsplan.shop/images/logo.png',
      sameAs: [
        'https://www.facebook.com/tedplans',
        'https://www.instagram.com/tedplans',
        'https://twitter.com/tedplans',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-1234-5678',
        contactType: 'customer service',
        availableLanguage: ['Portuguese', 'English'],
      },
    };
  }
  
  export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }
  
  export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }