// src/app/converters/page.tsx

import Link from 'next/link';
import { popularConversions } from '@/lib/unitData';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

// ✅ SEO Metadata
export const metadata: Metadata = generatePageMetadata({
  title: "Unit Converters | TablesAndCalc",
  description:
    "Explore free online unit converters for length, weight, temperature, and more. Includes conversion formulas, tables, and quick tools for instant results.",
  url: "https://tablesandcalc.online/converters",
  image: "https://tablesandcalc.online/og-converters.jpg",
});

export default function ConvertersPage() {
  // Group conversions by category
  const groupedConversions = popularConversions.reduce((acc, conv) => {
    const category = conv.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(conv);
    return acc;
  }, {} as Record<string, typeof popularConversions>);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Unit Converters</h1>
        <p className="text-slate-600 mt-2">
          Select a category or use the Express Converter for quick conversions.
        </p>
      </div>

      {/* 🚀 Express Converter CTA */}
      <div className="mb-12">
        <Link
          href="/express-converter"
          className="block p-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all text-center"
        >
          <h2 className="text-2xl font-bold">🚀 Try the Express Converter</h2>
          <p className="mt-1 opacity-90">
            Switch between Length, Weight, and Temperature instantly.
          </p>
        </Link>
      </div>

      {/* ✅ Categories with grouped conversions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(groupedConversions).map(([category, conversions]) => (
          <section
            key={category}
            className="bg-white p-6 border rounded-lg shadow-sm"
          >
            {/* Category Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-semibold capitalize">{category}</h2>
              <Link
                href={`/converters/${category}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View All-in-One Tool →
              </Link>
            </div>

            {/* Conversion Links */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {conversions.map((conv) => (
                <Link
                  key={conv.slug}
                  href={`/converters/${conv.slug}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline py-1"
                >
                  {`${conv.from.toUpperCase()} to ${conv.to.toUpperCase()}`}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ✅ JSON-LD Schema for ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Unit Converters",
            itemListElement: popularConversions.map((conv, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://tablesandcalc.online/converters/${conv.slug}`,
              name: `${conv.from} to ${conv.to} Converter`,
            })),
          }),
        }}
      />

      {/* ✅ JSON-LD Schema for FAQs (optional, boosts rich snippets) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a unit converter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A unit converter is a tool that allows you to switch between different measurement systems such as metric and imperial instantly."
                }
              },
              {
                "@type": "Question",
                "name": "Are your converters free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All TablesAndCalc converters are 100% free to use with no sign-up required."
                }
              }
            ]
          }),
        }}
      />
    </div>
  );
}
