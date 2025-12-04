// src/app/calculators/area-calculator/page.tsx
import Link from "next/link";
import { areaCalculatorData } from "@/lib/data/areaCalculatorData";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

// ✅ SEO Metadata
export const metadata: Metadata = generatePageMetadata({
  title: "Area Calculators | TablesAndCalc",
  description:
    "Free online area calculators for shapes including circle, triangle, square, rectangle, polygon, trapezoid, and more. Step-by-step formulas included.",
  url: "https://tablesandcalc.online/calculators/area-calculator",
  image: "https://tablesandcalc.online/og-area-calculator.jpg",
});

export default function AreaCalculatorHubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Area Calculators</h1>
        <p className="text-lg text-slate-600 mt-2">
          Select a shape to calculate its area.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {areaCalculatorData.map((shape) => (
          <Link
            href={`/calculators/area-calculator/${shape.slug}`}
            key={shape.slug}
            className="block p-6 bg-white border rounded-lg text-center shadow-sm hover:shadow-md hover:border-blue-500 transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              {shape.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* ✅ JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Area Calculators",
            itemListElement: areaCalculatorData.map((shape, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://tablesandcalc.online/calculators/area-calculator/${shape.slug}`,
              name: `${shape.name} Area Calculator`,
            })),
          }),
        }}
      />
    </div>
  );
}
