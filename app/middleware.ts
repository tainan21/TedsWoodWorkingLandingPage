// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Verificar se está em produção
const isProduction = process.env.NODE_ENV === 'production';

// Configuração para redirecionamentos
const redirectMap = new Map([
  ['/planos', '/16000plans'],
  ['/woodworking', '/tedwoodworking'],
  ['/marcenaria', '/tedwood'],
  ['/blog/post-antigo', '/video'],
]);

// Configuração para A/B Testing de landing pages
const LANDING_COOKIE = 'ted_landing_variant';
const LANDING_VARIANTS = ['a', 'b', 'c'];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl.clone();
  
  // 1. Forçar HTTPS em produção
  if (isProduction && request.headers.get('x-forwarded-proto') !== 'https') {
    const secureUrl = request.nextUrl.clone();
    secureUrl.protocol = 'https';
    return NextResponse.redirect(secureUrl);
  }
  
  // 2. Aplicar redirecionamentos configurados
  const path = url.pathname;
  if (redirectMap.has(path)) {
    const newPath = redirectMap.get(path);
    url.pathname = newPath ?? '/';
    return NextResponse.redirect(url);
  }
  
  // 3. Redirecionar www para non-www (ou vice-versa, escolha um)
  const host = request.headers.get('host');
  if (isProduction && host?.startsWith('www.')) {
    url.host = host.replace('www.', '');
    return NextResponse.redirect(url);
  }
  
  // 4. Gerenciar variantes para landing pages (A/B Testing)
  if (path === '/' || path === '/landing') {
    const existingCookie = request.cookies.get(LANDING_COOKIE);
    
    if (!existingCookie) {
      // Distribuir aleatoriamente o usuário entre as variantes
      const randomVariant = LANDING_VARIANTS[Math.floor(Math.random() * LANDING_VARIANTS.length)];
      response.cookies.set(LANDING_COOKIE, randomVariant, { 
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: '/' 
      });
      
      // Redirecionar para a landing page específica
      url.pathname = `/landing${randomVariant}`;
      return NextResponse.redirect(url);
    } else {
      // Usar a variante existente
      url.pathname = `/landing${existingCookie.value}`;
      return NextResponse.redirect(url);
    }
  }
  
  // 5. Adicionar headers de segurança
  if (isProduction) {
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  }
  
  return response;
}

// Configure quais caminhos devem ser processados pelo middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|public).*)',
  ],
};