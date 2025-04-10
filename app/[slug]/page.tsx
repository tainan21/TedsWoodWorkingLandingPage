'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useABTest } from '@/lib/abtest/ABTestContext';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Importações dinâmicas ajustadas para acessar a exportação nomeada, se necessário.
const FloatingCta = dynamic(
  () => import('@/components/ui-enhancements/floating-cta').then((mod) => mod.FloatingCTA),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () => import('@/components/ui-enhancements/scroll-progress').then((mod) => mod.ScrollProgress),
  { ssr: false }
);
const ReturningUserBanner = dynamic(
  () => import('@/components/ui-enhancements/ReturningUserBanner'),
  { ssr: false }
);

// Tipo para os depoimentos
interface Testimonial {
  name: string;
  text: string;
  image: string;
  rating: number;
}

// Tipo para as seções da landing
interface Section {
  id: string;
  type: 'feature' | 'testimonials' | string;
  title: string;
  content: any;
}

// Tipo para os dados da variante
interface VariantContent {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  sections: Section[];
  cta: {
    primary: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Dados de exemplo para cada variante
const variantData: Record<string, VariantContent> = {
  a: {
    id: 'landing-a',
    title: 'Ted Woodworking - 16.000 Planos de Marcenaria Passo a Passo',
    description:
      'Transforme seus projetos de marcenaria com mais de 16.000 planos detalhados e passo a passo',
    heroImage: '/images/hero-a.webp',
    sections: [
      {
        id: 'benefit-1',
        type: 'feature',
        title: 'Planos Detalhados Passo a Passo',
        content: {
          description:
            'Cada plano inclui instruções claras e detalhadas, para que você possa criar projetos incríveis independente da sua experiência.',
          image: '/images/detailed-plans.webp'
        }
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        title: 'O Que Nossos Clientes Dizem',
        content: {
          items: [
            {
              name: 'Carlos Silva',
              text: 'Comecei na marcenaria há apenas 6 meses e já construí móveis incríveis para minha casa graças aos planos do Ted.',
              image: '/images/testimonial-1.webp',
              rating: 5
            },
            {
              name: 'Ana Rodrigues',
              text: 'Os planos são tão detalhados que mesmo sendo iniciante consegui criar projetos profissionais. Recomendo muito!',
              image: '/images/testimonial-2.webp',
              rating: 5
            }
          ]
        }
      }
    ],
    cta: {
      primary: {
        text: 'Quero Acesso aos 16.000 Planos',
        url: '/tedplan'
      },
      secondary: {
        text: 'Saiba Mais',
        url: '/about'
      }
    },
    seo: {
      title: 'Ted Woodworking - 16.000 Planos de Marcenaria Detalhados',
      description:
        'Acesse mais de 16.000 planos de marcenaria passo a passo para todos os níveis. Do iniciante ao profissional.',
      keywords: ['planos de marcenaria', 'projetos em madeira', 'marcenaria para iniciantes', 'móveis diy']
    }
  },
  b: {
    id: 'landing-b',
    title: 'Ted Woodworking - A Biblioteca Definitiva de Marcenaria',
    description:
      'A coleção mais completa de planos de marcenaria, com materiais, medidas e cortes detalhados',
    heroImage: '/images/hero-b.webp',
    sections: [
      {
        id: 'benefit-1',
        type: 'feature',
        title: 'Para Iniciantes e Profissionais',
        content: {
          description:
            'Desde pequenos projetos para iniciantes até móveis profissionais, temos planos para todos os níveis de habilidade.',
          image: '/images/all-levels.webp'
        }
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        title: 'Histórias de Sucesso',
        content: {
          items: [
            {
              name: 'Pedro Santos',
              text: 'Economizei milhares de reais fabricando meus próprios móveis. Os planos são perfeitos para quem quer resultados profissionais.',
              image: '/images/testimonial-3.webp',
              rating: 5
            },
            {
              name: 'Mariana Costa',
              text: 'Iniciei um pequeno negócio de marcenaria usando estes planos e hoje tenho uma clientela fiel. Investimento que mudou minha vida.',
              image: '/images/testimonial-4.webp',
              rating: 5
            }
          ]
        }
      }
    ],
    cta: {
      primary: {
        text: 'Quero Todos os Planos',
        url: '/tedplan'
      },
      secondary: {
        text: 'Ver Exemplos',
        url: '/16000plans'
      }
    },
    seo: {
      title: 'Ted Woodworking - A Biblioteca Definitiva de Planos de Marcenaria',
      description:
        'Acesse a maior coleção de planos de marcenaria detalhados do Brasil. Economize tempo e dinheiro com nossos projetos testados.',
      keywords: ['biblioteca de marcenaria', 'coleção de planos', 'projetos detalhados', 'marcenaria profissional']
    }
  },
  c: {
    id: 'landing-c',
    title: 'Planos de Marcenaria Ted - Da Teoria à Prática em Minutos',
    description:
      'Comece seus projetos hoje mesmo com planos que incluem lista de materiais, vídeos e suporte',
    heroImage: '/images/hero-c.webp',
    sections: [
      {
        id: 'benefit-1',
        type: 'feature',
        title: 'Economize Tempo e Dinheiro',
        content: {
          description:
            'Evite erros caros e desperdício de material com planos precisos e testados por profissionais.',
          image: '/images/save-money.webp'
        }
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        title: 'Depoimentos Reais',
        content: {
          items: [
            {
              name: 'Gustavo Mendes',
              text: 'Já testei vários planos de marcenaria, mas nenhum é tão completo quanto os do Ted. Cada detalhe é pensado para garantir o sucesso.',
              image: '/images/testimonial-5.webp',
              rating: 5
            },
            {
              name: 'Juliana Ferreira',
              text: 'A comunidade de suporte é incrível. Sempre que tenho uma dúvida, recebo ajuda rápida. Vale cada centavo investido!',
              image: '/images/testimonial-6.webp',
              rating: 5
            }
          ]
        }
      }
    ],
    cta: {
      primary: {
        text: 'Garantir Meu Acesso',
        url: '/tedplan'
      },
      secondary: {
        text: 'Como Funciona',
        url: '/about'
      }
    },
    seo: {
      title: 'Planos de Marcenaria Ted - Da Teoria à Prática em Minutos',
      description:
        'Comece seus projetos hoje mesmo com mais de 16.000 planos que incluem lista de materiais, vídeos explicativos e suporte.',
      keywords: ['marcenaria prática', 'projetos rápidos', 'lista de materiais', 'economia de tempo']
    }
  }
};

export default function VariantPage() {
  const params = useParams();
  const { trackEvent } = useABTest();
  const [showReturningBanner, setShowReturningBanner] = useState(false);
  const variant = (params?.variant as string) || 'a';
  const currentVariant = variant && ['a', 'b', 'c'].includes(variant) ? variant : 'a';
  const content = variantData[currentVariant];

  useEffect(() => {
    // Verifica se é usuário recorrente
    if (typeof window !== 'undefined') {
      const visitCount = parseInt(localStorage.getItem('visit_count') || '0');
      setShowReturningBanner(visitCount > 1);
    }

    // Rastreia visualização da página
    trackEvent('variant_page_view', {
      variant: currentVariant,
      timestamp: new Date().toISOString(),
      referrer: document.referrer || 'direct',
      url: window.location.href
    });

    // Função de tracking para rolagem
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      if (scrollPercentage >= 25 && !window.tracked25) {
        window.tracked25 = true;
        trackEvent('scroll_depth', { variant: currentVariant, depth: 25 });
      }
      if (scrollPercentage >= 50 && !window.tracked50) {
        window.tracked50 = true;
        trackEvent('scroll_depth', { variant: currentVariant, depth: 50 });
      }
      if (scrollPercentage >= 75 && !window.tracked75) {
        window.tracked75 = true;
        trackEvent('scroll_depth', { variant: currentVariant, depth: 75 });
      }
      if (scrollPercentage >= 90 && !window.tracked90) {
        window.tracked90 = true;
        trackEvent('scroll_depth', { variant: currentVariant, depth: 90 });
      }
    };

    // Inicializa flags para tracking de scroll
    window.tracked25 = false;
    window.tracked50 = false;
    window.tracked75 = false;
    window.tracked90 = false;

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentVariant, trackEvent]);

  return (
    <>
      <Head>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.description} />
        <meta name="keywords" content={content.seo.keywords.join(', ')} />
      </Head>

      {showReturningBanner && <ReturningUserBanner />}

      <main className="min-h-screen">
        {/* Seção Hero */}
        <section className="relative bg-amber-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={content.heroImage}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={content.cta.primary.url}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                  onClick={() =>
                    trackEvent('cta_click', {
                      variant: currentVariant,
                      button: 'primary',
                      location: 'hero'
                    })
                  }
                >
                  {content.cta.primary.text}
                </Link>

                {content.cta.secondary && (
                  <Link
                    href={content.cta.secondary.url}
                    className="px-8 py-3 bg-white hover:bg-gray-100 text-amber-800 font-semibold rounded-lg transition-colors"
                    onClick={() =>
                      trackEvent('cta_click', {
                        variant: currentVariant,
                        button: 'secondary',
                        location: 'hero'
                      })
                    }
                  >
                    {content.cta.secondary.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Seções Dinâmicas */}
        {content.sections.map((section) => (
          <section key={section.id} className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {section.title}
              </h2>

              {section.type === 'feature' && (
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <p className="text-lg">{section.content.description}</p>
                  </div>
                  <div className="flex-1">
                    <img
                      src={section.content.image}
                      alt={section.title}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              )}

              {section.type === 'testimonials' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {section.content.items.map(
                    (testimonial: Testimonial, index: number) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md"
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            <div className="flex text-amber-500">
                              {[...Array(testimonial.rating)].map(
                                (_, i: number) => (
                                  <span key={i}>★</span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          {testimonial.text}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Seção Final de CTA */}
        <section className="bg-amber-100 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para Transformar Seus Projetos de Marcenaria?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de marceneiros que estão criando projetos
              incríveis com nossos planos detalhados.
            </p>
            <Link
              href={content.cta.primary.url}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors text-lg inline-block"
              onClick={() =>
                trackEvent('cta_click', {
                  variant: currentVariant,
                  button: 'primary',
                  location: 'footer'
                })
              }
            >
              {content.cta.primary.text}
            </Link>
            <p className="mt-6 text-sm text-gray-600">
              Garantia de devolução de 60 dias. Sem riscos, cancele quando quiser.
            </p>
          </div>
        </section>
      </main>

      {/* Componente Floating CTA e Scroll Progress */}
      <FloatingCta
        text={content.cta.primary.text}
        url={content.cta.primary.url}
        onClick={() =>
          trackEvent('cta_click', {
            variant: currentVariant,
            button: 'floating',
            location: 'floating'
          })
        }
      />
      <ScrollProgress />
    </>
  );
}

// Tipagem para propriedades globais de tracking de scroll
declare global {
  interface Window {
    tracked25: boolean;
    tracked50: boolean;
    tracked75: boolean;
    tracked90: boolean;
  }
}
