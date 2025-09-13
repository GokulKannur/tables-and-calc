// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// ✅ Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://tablesandcalc.online'),

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
  authors: [{ name: 'TablesAndCalc Team' }],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  // ✅ Make sure these icons exist in /public
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  
  manifest: '/site.webmanifest',

  openGraph: {
    title: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
    description: 'Explore free calculators, unit converters, and science tools for students and professionals.',
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
    description: 'Free calculators, converters, and reference tools for students and professionals.',
    images: ['https://tablesandcalc.online/og-image.jpg'],
    creator: '@YourTwitterHandle',
  },
};

// ✅ Viewport config (no appleWebApp here)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Mobile/PWA meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <GoogleAnalytics />
        <ClientLayout>{children}</ClientLayout>

        {/* ✅ Schema Markup for search box */}
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
                target: 'https://tablesandcalc.online/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* ✅ Schema Markup for Organization + Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TablesAndCalc',
              url: 'https://tablesandcalc.online',
              logo: 'https://tablesandcalc.online/favicon.png'
            }),
          }}
        />
      </body>
    </html>
  );
}
