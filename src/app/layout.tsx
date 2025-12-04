// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientLayout from '@/components/ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://tablesandcalc.online';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  maximumScale: 5,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Free Online Calculators, Converters & Tools | TablesAndCalc',
      template: '%s | TablesAndCalc',
    },
    description: 'Free calculators, unit converters, and reference tables. Simple tools for students and professionals.',
    keywords: [
      'online calculators',
      'unit converters',
      'reference tables',
      'engineering tools',
      'scientific calculators',
      'math converters',
      'financial calculators',
      'health calculators',
      'cm to inch converter',
      'convert centimeters to inches',
      'length converter',
      'weight converter',
      'temperature converter',
      'metric to imperial',
      'free unit converter',
      'online unit conversion',
      'kg to lbs converter',
      'celsius to fahrenheit',
      'mm to inches',
    ],
    authors: [{ name: 'TablesAndCalc Team' }],
    creator: 'TablesAndCalc',
    publisher: 'TablesAndCalc',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: siteUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
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
      url: siteUrl,
      siteName: 'TablesAndCalc',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
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
      images: [`${siteUrl}/og-image.png`],
      creator: '@TablesAndCalc',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'TablesAndCalc',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TablesAndCalc',
              url: siteUrl,
              logo: `${siteUrl}/favicon-96x96.png`,
              sameAs: [
                'https://twitter.com/TablesAndCalc',
                'https://github.com/TablesAndCalc'
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
