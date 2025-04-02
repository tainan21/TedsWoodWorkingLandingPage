// Exemplo de uso em app/tedwoodworking/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TED Woodworking - Projetos de Marcenaria Premium',
  description:
    'Acesse mais de 16.000 planos de marcenaria detalhados. Projetos para todos os níveis, desde iniciantes até profissionais.',
  keywords: 'marcenaria, projetos de madeira, planos de marcenaria, ted woodworking',
  openGraph: {
    title: 'TED Woodworking - Projetos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    url: 'https://www.tedsplan.shop/tedwoodworking',
    siteName: 'TED Plans',
    images: [
      {
        url: 'https://www.tedsplan.shop/images/og-tedwoodworking.jpg',
        width: 1200,
        height: 630,
        alt: 'TED Woodworking Plans',
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TED Woodworking - Projetos de Marcenaria Premium',
    description: 'Acesse mais de 16.000 planos de marcenaria detalhados para todos os níveis.',
    images: ['https://www.tedsplan.shop/images/twitter-tedwoodworking.jpg'],
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
    canonical: 'https://www.tedsplan.shop/tedwoodworking',
    languages: {
      'en-US': 'https://www.tedsplan.shop/en/tedwoodworking',
      'pt-BR': 'https://www.tedsplan.shop/tedwoodworking',
    },
  },
  verification: {
    google: 'sua-verificação-do-google-aqui', // Substitua pelo seu código real
  },
};