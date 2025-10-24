// src/app/calculators/age-calculator/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import AgeCalculator from '@/components/calculators/AgeCalculator'; // Make sure this path is correct

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Your Exact Age | TablesAndCalc',
  description: 'Free age calculator to find your exact age in years, months, days, hours, and minutes. See days until your next birthday and your zodiac sign.',
  keywords: ['age calculator', 'calculate age', 'age in days', 'age in months', 'birthday calculator'],
  alternates: { // Add canonical URL
    canonical: '/calculators/age-calculator',
  },
};

export default function AgeCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-12"> {/* Changed max-w-6xl to max-w-4xl for consistency */}
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> /
        <Link href="/calculators" className="hover:underline"> Calculators</Link> /
        <span className="font-medium text-slate-700">Age Calculator</span>
      </nav>

      {/* Render the AgeCalculator component */}
      <AgeCalculator />

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Age Calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD", // Corrected typo priceCurrency"
            },
            "url": "https://tablesandcalc.online/calculators/age-calculator" // Add URL
          }),
        }}
      />
    </div>
  );
}