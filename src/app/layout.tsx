// ✅ layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// ✅ SEO Metadata (without themeColor)
export const metadata: Metadata = {
  title: {
    default: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
    template: '%s | TablesAndCalc',
  },
  description:
    'Free online calculators, unit converters, reference tables, and symbols. Simple, modern tools for students and professionals.',
  keywords: [
    'online calculators',
    'unit converters',
    'reference tables',
    'engineering tools',
    'scientific calculators',
    'math converters',
  ],
  openGraph: {
    title: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
    description:
      'Explore free calculators, unit converters, and science tools for students and professionals.',
    url: 'https://tablesandcalc.online',
    siteName: 'TablesAndCalc',
    images: [
      {
        url: 'https://tablesandcalc.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TablesAndCalc - Free Online Calculators & Converters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
    description:
      'Free calculators, converters, and reference tools for students and professionals.',
    images: ['https://tablesandcalc.online/og-image.jpg'],
    creator: '@YourTwitterHandle',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://tablesandcalc.online'),
};

// ✅ Move themeColor to viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff', // Your site color
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://tablesandcalc.online" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TablesAndCalc Team" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* ✅ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'TablesAndCalc',
              url: 'https://tablesandcalc.online',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://tablesandcalc.online/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <GoogleAnalytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
