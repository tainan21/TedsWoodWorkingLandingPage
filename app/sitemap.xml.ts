// app/sitemap.xml.ts
import { MetadataRoute } from 'next';

// Função para obter a data formatada de última modificação
function getLastModifiedDate(path: string): string {
  // Em produção, você pode querer obter as datas reais do seu CMS ou sistema
  // Para este exemplo, usamos datas fixas
  const dates: Record<string, string> = {
    '/': new Date().toISOString(),
    '/16000plans': new Date().toISOString(),
    '/tedwoodworking': new Date().toISOString(),
    '/tedwood': new Date().toISOString(),
    '/about': new Date().toISOString(),
    '/video': new Date().toISOString(),
    '/landinga': new Date().toISOString(),
    '/landingb': new Date().toISOString(),
    '/landingc': new Date().toISOString(),
  };

  return dates[path] ||