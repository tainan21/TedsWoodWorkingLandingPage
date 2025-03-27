import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teds Wood Working',
  description: 'Explore DIY woodworking plans, projects, and tools with Teds Wood Working.',
  generator: 'TedsWoodWorking.com',
  openGraph: {
    title: 'Teds Wood Working - 16 plans',
    description: 'Explore DIY woodworking plans, projects, and tools with Teds Wood Working.',
    url: 'https://www.tedsplan.shop/',
    siteName: 'Teds Wood Working',
    locale: 'pt_BR',
    type: 'website'
  },
  keywords: [
    'Teds Wood Working',
    'DIY Wood Working Plans',
    'Wood Working Projects',
    'Wood Working Tools',
  ].join(', '),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}