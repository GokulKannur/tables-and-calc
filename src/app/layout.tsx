// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout'; // Import the new client component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TablesAndCalc',
  description: 'A modern toolkit for calculators, converters, and reference tables.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}