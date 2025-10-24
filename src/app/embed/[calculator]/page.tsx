// src/app/embed/[calculator]/page.tsx
import { notFound } from 'next/navigation';

// Import necessary calculator components
import { calculatorList, staticCalculatorList } from '@/lib/data/siteLists';
import PercentageCalculator from '@/components/calculators/PercentageCalculator';
import BmiCalculator from '@/components/calculators/BmiCalculator';
import GpaCalculator from '@/components/calculators/GpaCalculator';
import NumberConverter from '@/components/calculators/NumberConverter';
// import GeoGebraCalculator from '@/components/GeoGebraCalculator'; // Might be too large/complex for embed
import TrigonometryCalculator from '@/components/calculators/TrigonometryCalculator';
import FinancialCalculators from '@/components/calculators/FinancialCalculators';
import ElectricityCalculators from '@/components/calculators/ElectricityCalculators';
import MatrixCalculator from '@/components/calculators/MatrixCalculator';
import AgeCalculator from '@/components/calculators/AgeCalculator';
import TipCalculator from '@/components/calculators/TipCalculator';

// Combine lists to check validity
const allCalculators = [...calculatorList, ...(staticCalculatorList || [])];

// Minimal layout specifically for embedding
export default function EmbedCalculatorPage({ params }: { params: { calculator: string } }) {
  const calculatorSlug = params.calculator;

  // Check if the requested calculator slug is valid
  const calcExists = allCalculators.some(c => c.slug === calculatorSlug);
  if (!calcExists) {
    // Or return a simple error message component if notFound() is too disruptive
    return <div className="p-4 text-center text-red-600">Error: Calculator not found or cannot be embedded.</div>;
  }

  // Map slugs to components (similar to the main calculator page, but potentially exclude some)
  const componentMap: { [key: string]: React.ReactNode } = {
    'percentage-calculator': <PercentageCalculator />,
    'bmi-calculator': <BmiCalculator />,
    'gpa-calculator': <GpaCalculator />,
    // 'number-converter': <NumberConverter />, // Requires props, might need adjustment for embed
    // 'scientific-calculator': <GeoGebraCalculator />, // Likely exclude
    'trigonometry-calculator': <TrigonometryCalculator />,
    'mortgage-calculator': <FinancialCalculators slug={calculatorSlug} />,
    'compound-interest-calculator': <FinancialCalculators slug={calculatorSlug} />,
    'simple-interest-calculator': <FinancialCalculators slug={calculatorSlug} />,
    'discount-calculator': <FinancialCalculators slug={calculatorSlug} />,
    'electricity-bill-calculator': <ElectricityCalculators slug={calculatorSlug} />,
    'energy-consumption-calculator': <ElectricityCalculators slug={calculatorSlug} />,
    'energy-cost-calculator': <ElectricityCalculators slug={calculatorSlug} />,
    'matrix-calculator': <MatrixCalculator />,
    'age-calculator': <AgeCalculator />,
    'tip-calculator': <TipCalculator />,
    // Add other embeddable calculators here
  };

  const CalculatorComponent = componentMap[calculatorSlug];

  if (!CalculatorComponent) {
     return <div className="p-4 text-center text-orange-600">This calculator is not currently available for embedding.</div>;
  }

  // Render only the calculator component and a small footer
  return (
    // Apply minimal styling suitable for an iframe
    // Use vh for height to try and fill iframe, but parent page controls actual size
    <div className="p-4 bg-white min-h-screen">
      {CalculatorComponent}

      {/* Small "Powered by" footer */}
      <footer className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
        Calculator powered by{' '}
        <a
            href="https://tablesandcalc.online" // Links back to your main site
            className="text-blue-500 hover:underline"
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer"
            title="Visit TablesAndCalc for more tools" // Tooltip for accessibility
        >
            TablesAndCalc.online
        </a>
      </footer>
    </div>
  );
}

// Optional: Add generateStaticParams if you want to pre-render embed pages
export async function generateStaticParams() {
   // Filter only the slugs that have a component in componentMap
   const embeddableSlugs = Object.keys(componentMap);
   return embeddableSlugs.map((slug) => ({
      calculator: slug,
   }));
}