// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// ✅ Improved metadata for SEO with keyword-rich description
export const metadata: Metadata = {
  title: {
    default: 'Free Online Calculators, Converters & Resources | TablesAndCalc',
    template: '%s | TablesAndCalc',
  },
  description:
    'A free toolkit of online calculators, unit converters, reference tables, and symbols. Simple, modern tools for students and professionals.',
  openGraph: {
    title: 'Free Online Calculators, Converters & Resources | TablesAndCalc',
    description:
      'A free toolkit of online calculators, unit converters, reference tables, and symbols.',
    url: 'https://tablesandcalc.online',
    siteName: 'TablesAndCalc',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <ClientLayout>{children}</ClientLayout>

        {/* ✅ Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://tablesandcalc.online',
              name: 'TablesAndCalc',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://tablesandcalc.online?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
