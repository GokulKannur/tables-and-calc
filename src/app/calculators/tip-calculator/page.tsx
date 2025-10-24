// src/app/calculators/tip-calculator/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import TipCalculator from '@/components/calculators/TipCalculator'; // Make sure this path is correct

export const metadata: Metadata = {
  title: 'Tip Calculator - Calculate Restaurant Tips | TablesAndCalc',
  description: 'Free tip calculator to calculate restaurant tips and split bills. Get instant results for 10%, 15%, 18%, 20%, and custom tip percentages.',
  keywords: ['tip calculator', 'restaurant tip', 'split bill', 'gratuity calculator'],
  alternates: { // Add canonical URL
    canonical: '/calculators/tip-calculator',
  },
};

export default function TipCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-12"> {/* Changed max-w-6xl to max-w-4xl */}
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> /
        <Link href="/calculators" className="hover:underline"> Calculators</Link> /
        <span className="font-medium text-slate-700">Tip Calculator</span>
      </nav>

      {/* Render the TipCalculator component */}
      <TipCalculator />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tip Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD", // Corrected typo
            },
             "url": "https://tablesandcalc.online/calculators/tip-calculator" // Add URL
          }),
        }}
      />
    </div>
  );
}