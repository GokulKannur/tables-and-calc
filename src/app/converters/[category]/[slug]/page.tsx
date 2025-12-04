// src/app/converters/[category]/[slug]/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import {
  converterData,
  popularConversions,
  allGeneratedConversions,
} from "@/lib/unitData";

// Converters
import UnitConverter from "@/components/converters/UnitConverter";
import TemperatureConverter from "@/components/converters/TemperatureConverter";
import ColorConverter from "@/components/converters/ColorConverter";
import ElectricalCalculator from "@/components/converters/ElectricalCalculator";
import ConversionTable from "@/components/converters/ConversionTable";

// ✅ Pre-generate params for SSG
export async function generateStaticParams() {
  return popularConversions
    .map((conv) => {
      if (!conv.slug) return null;
      const [category, slug] = conv.slug.split("/");
      return { category, slug };
    })
    .filter(Boolean);
}

// ✅ Improved Metadata
export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const fullSlug = `${params.category}/${params.slug}`;
  const conv =
    popularConversions.find((c) => c.slug === fullSlug) ||
    allGeneratedConversions.find((c) => c.slug === fullSlug);

  if (!conv || !conv.from || !conv.to) {
    return {
      title: "Converter Not Found | TablesAndCalc",
      description:
        "The converter you are looking for could not be found on TablesAndCalc.",
    };
  }

  const categoryInfo = converterData[params.category as keyof typeof converterData];
  const fromUnitData = categoryInfo?.info?.[conv.from];
  const toUnitData = categoryInfo?.info?.[conv.to];

  const title =
    fromUnitData && toUnitData
      ? `Convert ${fromUnitData.name} to ${toUnitData.name} | TablesAndCalc`
      : `${categoryInfo?.name || "Unit"} Converter | TablesAndCalc`;

  const description =
    fromUnitData && toUnitData
      ? `Free tool to convert ${fromUnitData.pluralName.toLowerCase()} to ${toUnitData.pluralName.toLowerCase()}. Includes conversion table, formula, and examples.`
      : `Free ${categoryInfo?.name || "unit"} conversion tool.`;

  const url = `https://tablesandcalc.online/converters/${params.category}/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "TablesAndCalc",
      images: [
        {
          url: `https://tablesandcalc.online/og-${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://tablesandcalc.online/og-${params.slug}.jpg`],
    },
  };
}

// ✅ Page Component
export default function GenericConverterPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const fullSlug = `${category}/${slug}`;
  const conversion =
    popularConversions.find((c) => c.slug === fullSlug) ||
    allGeneratedConversions.find((c) => c.slug === fullSlug);

  if (!conversion) return <div>Converter not found</div>;

  const categoryInfo = converterData[category];
  if (!categoryInfo) return <div>Category not found</div>;

  const fromUnitData = categoryInfo?.info?.[conversion.from];
  const toUnitData = categoryInfo?.info?.[conversion.to];

  const popularLinksForCategory = popularConversions.filter(
    (c) => c.category === category
  );

  const allOtherUnits =
    categoryInfo?.units?.filter(
      (u: { id: string }) => u.id !== conversion.from
    ) || [];

  let converterComponent;
  if (category === "temperature") {
    converterComponent = (
      <TemperatureConverter
        defaultFrom={conversion.from}
        defaultTo={conversion.to}
      />
    );
  } else if (category === "color") {
    converterComponent = <ColorConverter />;
  } else if (category === "electrical") {
    converterComponent = <ElectricalCalculator />;
  } else {
    converterComponent = (
      <UnitConverter
        defaultFrom={conversion.from}
        defaultTo={conversion.to}
        units={categoryInfo.units}
        conversionFactors={categoryInfo.factors}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/converters" className="hover:underline">
          Converters
        </Link>{" "}
        /{" "}
        <Link
          href={`/converters/${category}`}
          className="capitalize hover:underline"
        >
          {categoryInfo.name}
        </Link>{" "}
        /
        <span className="font-medium text-foreground">
          {" "}
          {fromUnitData?.name} to {toUnitData?.name}
        </span>
      </nav>

      {/* Converter */}
      <div className="bg-card p-6 border rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-6">
          {fromUnitData && toUnitData
            ? `${fromUnitData.name} to ${toUnitData.name} Converter`
            : `${categoryInfo.name} Converter`}
        </h1>
        {converterComponent}
      </div>

      {/* Rich Content */}
      {fromUnitData && toUnitData && conversion.factor && (
        <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-8">
          {/* How to Convert */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              How to Convert {fromUnitData.pluralName} to{" "}
              {toUnitData.pluralName}
            </h2>
            <p className="text-muted-foreground">
              To convert from {fromUnitData.pluralName.toLowerCase()} to{" "}
              {toUnitData.pluralName.toLowerCase()}, use the following factor:
            </p>
            <div className="my-4 p-4 bg-secondary border rounded-lg font-mono text-foreground text-center">
              1 {fromUnitData.name} ={" "}
              {conversion.factor.toLocaleString(undefined, {
                maximumFractionDigits: 6,
              })}{" "}
              {toUnitData.name}
            </div>
            <p className="font-semibold">Example:</p>
            <p className="text-muted-foreground">
              15 {fromUnitData.pluralName.toLowerCase()} = 15 ×{" "}
              {conversion.factor.toLocaleString(undefined, {
                maximumFractionDigits: 6,
              })}{" "}
              {toUnitData.name} ={" "}
              {(15 * conversion.factor).toLocaleString(undefined, {
                maximumFractionDigits: 6,
              })}{" "}
              {toUnitData.name}
            </p>
          </div>

          <hr />

          {/* Conversion Table */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {fromUnitData.name} to {toUnitData.name} Conversion Table
            </h2>
            <ConversionTable
              fromUnitName={fromUnitData.name}
              toUnitName={toUnitData.name}
              factor={conversion.factor}
            />
          </div>
        </div>
      )}

      {/* Unit Definitions */}
      {fromUnitData && (
        <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">
            {fromUnitData.name} Definition
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {fromUnitData.definition}
          </p>
          {fromUnitData.history && (
            <>
              <h3 className="text-xl font-semibold pt-2">History/Origin</h3>
              <p className="text-muted-foreground leading-relaxed">
                {fromUnitData.history}
              </p>
            </>
          )}
          {fromUnitData.currentUse && (
            <>
              <h3 className="text-xl font-semibold pt-2">Current Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                {fromUnitData.currentUse}
              </p>
            </>
          )}
        </div>
      )}

      {toUnitData && toUnitData.definition && (
        <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">{toUnitData.name} Definition</h2>
          <p className="text-muted-foreground leading-relaxed">
            {toUnitData.definition}
          </p>
          {toUnitData.history && (
            <>
              <h3 className="text-xl font-semibold pt-2">History/Origin</h3>
              <p className="text-muted-foreground leading-relaxed">
                {toUnitData.history}
              </p>
            </>
          )}
          {toUnitData.currentUse && (
            <>
              <h3 className="text-xl font-semibold pt-2">Current Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                {toUnitData.currentUse}
              </p>
            </>
          )}
        </div>
      )}

      {/* Related Links */}
      <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Popular {categoryInfo.name} Conversions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-primary">
            {popularLinksForCategory.map((link) => (
              <Link
                key={link.slug}
                href={`/converters/${link.slug}`}
                className="hover:underline capitalize"
              >
                {link.slug
                  .replace(`${category}/`, "")
                  .replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>

        {fromUnitData && (
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Convert {fromUnitData.name} to Other Units
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-primary">
              {allOtherUnits.map(
                (unit: { id: string; name: string }) => (
                  <Link
                    key={unit.id}
                    href={`/converters/${category}/${conversion.from}-to-${unit.id}`}
                    className="hover:underline"
                  >
                    {fromUnitData.name} to {unit.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* ✅ JSON-LD Schema for SoftwareApplication */}
      {fromUnitData && toUnitData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: `${fromUnitData.name} to ${toUnitData.name} Converter`,
              operatingSystem: "Web",
              applicationCategory: "Utility",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              url: `https://tablesandcalc.online/converters/${category}/${slug}`,
            }),
          }}
        />
      )}
    </div>
  );
}
