// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

// ✅ The most robust and modern metadata configuration
export const metadata: Metadata = {
  // Sets the base URL for resolving relative paths (like for Open Graph images)
  metadataBase: new URL('https://tablesandcalc.online'),

  // Title will be dynamically generated for sub-pages
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

  // Generates the canonical link tag for all pages
  alternates: {
    canonical: '/',
  },

  // Search engine crawler instructions
  robots: {
    index: true,
    follow: true,
  },

  // All favicons and app icons are handled here
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
  
  // Handles the manifest file for PWA features
  manifest: '/site.webmanifest',

  // Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
    description: 'Explore free calculators, unit converters, and science tools for students and professionals.',
    url: 'https://tablesandcalc.online',
    siteName: 'TablesAndCalc',
    images: [
      {
        url: 'https://tablesandcalc.online/og-image.jpg', // Using absolute URL is best practice
        width: 1200,
        height: 630,
        alt: 'TablesAndCalc - Free Online Calculators & Converters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
    description: 'Free calculators, converters, and reference tools for students and professionals.',
    images: ['https://tablesandcalc.online/og-image.jpg'], // Using absolute URL is best practice
    creator: '@YourTwitterHandle',
  },
};

// ✅ Viewport configuration including PWA settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  // PWA mobile settings
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Next.js automatically handles all meta tags defined in the `metadata` and `viewport` objects above.
          The <head> can be kept clean. A few specific meta tags like the one below can be added for 
          maximum compatibility with older systems if needed.
        */}
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <GoogleAnalytics />
        <ClientLayout>{children}</ClientLayout>

        {/* ✅ Schema Markup for rich search results (Sitelinks Search Box) */}
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
      </body>
    </html>
  );
}