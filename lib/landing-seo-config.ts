// lib/landing-seo-config.ts
type LandingVariant = 'a' | 'b' | 'c';

interface LandingSEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  audience: string;
  testimonials: Array<{
    name: string;
    review: string;
    rating: number;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  schema: {
    productName: string;
    price: string;
    rating: string;
    reviewCount: string;
  };
}

const landingSEOConfigs: Record<LandingVariant, LandingSEOConfig> = {
  'a': {
    title: 'TED Woodworking Plans - Projetos Perfeitos para Iniciantes em Marcenaria',
    description: 'Descubra mais de 16.000 planos de marcenaria, incluindo centenas de projetos simples e detalhados, perfeitos para iniciantes. Comece sua jornada na marcenaria hoje!',
    keywords: 'marcenaria para iniciantes, projetos simples de madeira, primeiros passos marcenaria, ted woodworking para iniciantes',
    ogImage: 'https://www.tedsplan.shop/images/beginners-collection.jpg',
    audience: 'iniciantes, hobby, diy',
    testimonials: [
      {
        name: 'Roberto Silva',
        review: 'Como iniciante, estava preocupado em conseguir seguir os planos, mas as instruções são tão claras que fiz minha primeira estante em apenas um final de semana!',
        rating: 5
      },
      {
        name: 'Ana Oliveira',
        review: 'Comecei na marcenaria há apenas 3 meses e já completei 5 projetos graças aos planos detalhados do TED. Recomendo para qualquer iniciante!',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Os planos da TED são adequados para iniciantes em marcenaria?',
        answer: 'Sim! Nossa coleção inclui centenas de projetos especialmente selecionados para iniciantes, com instruções detalhadas e listas de materiais completas.'
      },
      {
        question: 'Preciso de ferramentas caras para começar?',
        answer: 'Não! Muitos dos nossos projetos para iniciantes podem ser realizados com ferramentas básicas. Cada plano inclui uma lista exata das ferramentas necessárias.'
      }
    ],
    schema: {
      productName: 'TED Woodworking - Coleção para Iniciantes',
      price: '37.00',
      rating: '4.9',
      reviewCount: '523'
    }
  },
  'b': {
    title: 'TED Woodworking Plans - Projetos Avançados para Marceneiros Experientes',
    description: 'Eleve suas habilidades com mais de 16.000 planos de marcenaria, incluindo projetos complexos e desafiadores para marceneiros experientes. Transforme sua paixão em obras de arte!',
    keywords: 'marcenaria avançada, projetos complexos de madeira, marceneiro profissional, ted woodworking avançado',
    ogImage: 'https://www.tedsplan.shop/images/advanced-collection.jpg',
    audience: 'profissionais, avançado, especialistas',
    testimonials: [
      {
        name: 'Carlos Mendes',
        review: 'Como marceneiro com 10 anos de experiência, é difícil encontrar projetos que me desafiem. Os planos avançados da TED são exatamente o que eu procurava!',
        rating: 5
      },
      {
        name: 'Fernanda Costa',
        review: 'Utilizei os planos da TED para criar móveis sob medida para meus clientes. O nível de detalhe é excepcional e me permite oferecer produtos de altíssima qualidade.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Os planos incluem técnicas avançadas de marcenaria?',
        answer: 'Absolutamente! Nossa coleção avançada inclui técnicas como encaixes complexos, torneamento detalhado, e métodos de acabamento profissionais.'
      },
      {
        question: 'Posso usar estes planos para projetos comerciais?',
        answer: 'Sim! Muitos marceneiros profissionais usam nossos planos como base para criar peças personalizadas para seus clientes.'
      }
    ],
    schema: {
      productName: 'TED Woodworking - Coleção Avançada',
      price: '37.00',
      rating: '4.8',
      reviewCount: '856'
    }
  },
  'c': {
    title: 'TED Woodworking Plans - Projetos de Marcenaria Comercial para Seu Negócio',
    description: 'Transforme sua paixão em lucro com mais de 16.000 planos de marcenaria, incluindo projetos comerciais e itens de alta demanda no mercado. Ideal para empreendedores da marcenaria!',
    keywords: 'marcenaria comercial, negócio de marcenaria, projetos para venda, ted woodworking comercial',
    ogImage: 'https://www.tedsplan.shop/images/commercial-collection.jpg',
    audience: 'comercial, negócios, empreendedores',
    testimonials: [
      {
        name: 'Luciana Torres',
        review: 'Comecei meu negócio de marcenaria há 2 anos usando os planos da TED. Hoje tenho 3 funcionários e uma carteira de clientes fiel. Melhor investimento que fiz!',
        rating: 5
      },
      {
        name: 'Marcos Almeida',
        review: 'Os planos comerciais da TED incluem análises de custo e tempo de produção, o que me ajudou a precificar corretamente meus produtos e maximizar o lucro.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'Os planos incluem informações sobre custo de materiais e tempo de produção?',
        answer: 'Sim! Todos os nossos planos comerciais incluem estimativas detalhadas de custos, listas de materiais e tempo médio de produção para ajudar no seu planejamento de negócio.'
      },
      {
        question: 'Vocês oferecem suporte para quem está começando um negócio de marcenaria?',
        answer: 'Absolutamente! Além dos planos, oferecemos guias sobre como iniciar e expandir um negócio de marcenaria, estratégias de marketing e dicas para encontrar clientes.'
      }
    ],
    schema: {
      productName: 'TED Woodworking - Coleção Comercial',
      price: '37.00',
      rating: '4.7',
      reviewCount: '412'
    }
  }
};

export function getLandingSEOConfig(variant: LandingVariant): LandingSEOConfig {
  return landingSEOConfigs[variant] || landingSEOConfigs['a'];
}

export default landingSEOConfigs;