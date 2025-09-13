// src/app/tables/resistor-color-code-calculator/page.tsx
import ResistorColorCodeCalculator from "@/components/tables/ResistorColorCodeCalculator";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

// ✅ SEO Metadata
export const metadata: Metadata = generatePageMetadata({
  title: "Resistor Color Code Calculator | TablesAndCalc",
  description:
    "Interactive resistor color code calculator for 4-band resistors. Instantly decode resistor values with our tool and visual guide.",
  url: "https://tablesandcalc.online/tables/resistor-color-code-calculator",
  image: "https://tablesandcalc.online/og-resistor.jpg",
});

export default function ResistorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Resistor Color Code Calculator</h1>
        <p className="text-slate-600 mt-2">
          Select the colors of a 4-band resistor to determine its resistance value.
        </p>
      </div>

      <ResistorColorCodeCalculator />

      {/* ✅ JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Resistor Color Code Calculator",
            applicationCategory: "Calculator",
            operatingSystem: "Web",
            url: "https://tablesandcalc.online/tables/resistor-color-code-calculator",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}
