import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'TablesAndCalc | Free Online Calculators & Converters',
    template: '%s | TablesAndCalc',
  },
  description: 'A modern toolkit of free online calculators, converters, reference tables, and educational resources for students and professionals.',
  openGraph: {
    title: 'TablesAndCalc | Free Online Calculators & Converters',
    description: 'A modern toolkit of free online calculators, converters, and reference tables.',
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
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <ClientLayout>
          {children}
        </ClientLayout>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://tablesandcalc.online",
            "name": "TablesAndCalc",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://tablesandcalc.online?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}}
        />
      </body>
    </html>
  );
}