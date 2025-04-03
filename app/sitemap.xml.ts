// app/sitemap.xml.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tedsplan.shop';
  
  const routes = [
    '',
    '/tedwoodworking',
    '/16000plans',
    '/about',
    '/video',
    // Adicione outras rotas fixas aqui
  ];
  
  // Landing pages para A/B testing (apenas variante A é indexável)
  const landingPages = [
    '/landinga'
    // Não incluir variantes B e C para evitar conteúdo duplicado
  ];
  
  const routeEntries = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  const landingEntries = landingPages.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));
  
  return [...routeEntries, ...landingEntries];
}