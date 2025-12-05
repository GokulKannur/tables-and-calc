// src/app/calculators/[slug]/page.tsx

import Link from 'next/link';
import { calculatorList } from '@/lib/data/siteLists';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Component Imports
import PercentageCalculator from '@/components/calculators/math/PercentageCalculator';
import BmiCalculator from '@/components/calculators/health/BmiCalculator';
import GpaCalculator from '@/components/calculators/math/GpaCalculator';
import NumberConverter from '@/components/calculators/math/NumberConverter';
import GeoGebraCalculator from '@/components/calculators/math/GeoGebraCalculator';
import ElectricityCalculators from '@/components/calculators/energy/ElectricityCalculators';
import FinancialCalculators from '@/components/calculators/financial/FinancialCalculators';
import MatrixCalculator from '@/components/calculators/math/MatrixCalculator';
import AgeCalculator from '@/components/calculators/health/AgeCalculator';
import TipCalculator from '@/components/calculators/financial/TipCalculator';
import AreaCalculatorHubPage from '@/components/calculators/math/AreaCalculatorHubPage';
import AreaCalculatorClient from '@/components/calculators/math/AreaCalculatorClient';
import UnitConverter from '@/components/calculators/converters/UnitConverter';
import PeriodicTable from '@/components/calculators/reference/PeriodicTable';
import { areaCalculatorData } from '@/lib/data/areaCalculatorData';

// ✅ Fix: params is not a Promise
type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return calculatorList.map((calc) => ({
    slug: calc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const calc = calculatorList.find(c => c.slug === params.slug);
  if (!calc) {
    return { title: "Calculator Not Found" };
  }
  return {
    title: `${calc.title} | TablesAndCalc`,
    description: calc.description,
  };
}

export default function CalculatorPage({ params }: PageProps) {
  const calculatorData = calculatorList.find(c => c.slug === params.slug);

  if (!calculatorData) {
    notFound();
  }

  // Helper to render area calculators
  const renderAreaCalculator = () => {
    // Extract shape from slug (e.g., 'circle-area-calculator' -> 'circle')
    const shapeSlug = params.slug.replace('-area-calculator', '');
    const shapeData = areaCalculatorData.find(s => s.slug === shapeSlug);

    if (shapeData) {
      return <AreaCalculatorClient shape={shapeData} />;
    }
    return <div>Shape data not found</div>;
  };

  const renderCalculator = () => {
    switch (params.slug) {
      case 'percentage-calculator': return <PercentageCalculator />;
      case 'bmi-calculator': return <BmiCalculator />;
      case 'gpa-calculator': return <GpaCalculator />;
      case 'number-converter': return <NumberConverter />;
      case 'scientific-calculator': return <GeoGebraCalculator />;
      case 'matrix-calculator': return <MatrixCalculator />;

      // Financial
      case 'mortgage-calculator':
      case 'compound-interest-calculator':
      case 'simple-interest-calculator':
      case 'discount-calculator':
      case 'inflation-calculator':
        return <FinancialCalculators slug={params.slug} />;
      case 'tip-calculator': return <TipCalculator />;

      // Energy
      case 'electricity-bill-calculator':
      case 'energy-consumption-calculator':
      case 'energy-cost-calculator':
        return <ElectricityCalculators slug={params.slug} />;

      // Health
      case 'age-calculator': return <AgeCalculator />;

      // Area
      case 'area-calculator': return <AreaCalculatorHubPage />;

      // Unit Converters
      case 'length-converter': return <UnitConverter category="length" />;
      case 'weight-converter': return <UnitConverter category="weight" />;
      case 'temperature-converter': return <UnitConverter category="temperature" />;
      case 'speed-converter': return <UnitConverter category="speed" />;
      case 'volume-converter': return <UnitConverter category="volume" />;
      case 'area-converter': return <UnitConverter category="area" />;
      case 'pressure-converter': return <UnitConverter category="pressure" />;
      case 'power-converter': return <UnitConverter category="power" />;
      case 'energy-converter': return <UnitConverter category="energy" />;
      case 'data-storage-converter': return <UnitConverter category="data-storage" />;

      // Reference
      case 'periodic-table': return <PeriodicTable />;

      default:
        // Check if it's an area calculator
        if (params.slug.endsWith('-area-calculator')) {
          return renderAreaCalculator();
        }
        return <div className="p-4 text-center text-destructive">Calculator component not found.</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">Home</Link> /
        <Link href="/calculators" className="hover:underline"> Calculators</Link> /
        <span className="font-medium text-foreground">{calculatorData.title}</span>
      </nav>

      <div className="bg-card p-4 sm:p-6 border rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{calculatorData.title}</h1>
          <p className="text-muted-foreground mt-2">{calculatorData.description}</p>
        </div>

        {renderCalculator()}
      </div>


      {/* Rich Content Section */}
      {calculatorData.details && (
        <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What is a {calculatorData.title}?</h2>
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: calculatorData.details.whatIs }} />
          </div>
          {calculatorData.details.formula && (
            <>
              <hr />
              <div>
                <h3 className="text-xl font-semibold mt-4 mb-4">Formula</h3>
                <div className="my-4 p-6 bg-secondary border rounded-lg text-center font-mono text-foreground whitespace-pre-line">
                  {calculatorData.details.formula}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Dynamically render the "How to Use" instructions if they exist in the data */}
      {calculatorData.details?.usage && (
        <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold mb-4">{calculatorData.details.usage.title}</h2>
          {calculatorData.details.usage.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": calculatorData.title,
            "description": calculatorData.description,
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "url": `https://tablesandcalc.online/calculators/${params.slug}`,
            "provider": {
              "@type": "Organization",
              "name": "TablesAndCalc",
              "url": "https://tablesandcalc.online"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://tablesandcalc.online"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Calculators",
                "item": "https://tablesandcalc.online/calculators"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": calculatorData.title,
                "item": `https://tablesandcalc.online/calculators/${params.slug}`
              }
            ]
          })
        }}
      />
    </div>
  );
}