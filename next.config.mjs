// next.config.mjs
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, 
  compress: true, 
  swcMinify: true, 

  images: {
    domains: ['www.tedsplan.shop'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true, 
    scrollRestoration: true, 
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
  },
};

const sentryWebpackPluginOptions = {
  silent: true 
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);