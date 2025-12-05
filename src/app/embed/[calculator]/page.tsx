import { notFound } from 'next/navigation';
import React from 'react';

// Import necessary calculator components
import { calculatorList, staticCalculatorList } from '@/lib/data/siteLists';
import PercentageCalculator from '@/components/calculators/math/PercentageCalculator';
import BmiCalculator from '@/components/calculators/health/BmiCalculator';
import GpaCalculator from '@/components/calculators/math/GpaCalculator';
import NumberConverter from '@/components/calculators/math/NumberConverter';
import TrigonometryCalc from '@/components/calculators/math/TrigonometryCalc';
import FinancialCalculators from '@/components/calculators/financial/FinancialCalculators';
import ElectricityCalculators from '@/components/calculators/energy/ElectricityCalculators';
import MatrixCalculator from '@/components/calculators/math/MatrixCalculator';
import AgeCalculator from '@/components/calculators/health/AgeCalculator';
import TipCalculator from '@/components/calculators/financial/TipCalculator';

// Combine lists to check validity
const allCalculators = [...calculatorList, ...(staticCalculatorList || [])];

// Define the type for components that need the slug prop
type SlugComponentEntry = {
  component: React.ElementType;
  needsSlug: true;
}

// Define the final combined type for componentMap values
type ComponentMapValue = React.ElementType | SlugComponentEntry;

// 🛑 FIX: Define componentMap at the top level with the explicit ComponentMapValue type
const componentMap: { [key: string]: ComponentMapValue } = {
  'percentage-calculator': PercentageCalculator,
  'bmi-calculator': BmiCalculator,
  'gpa-calculator': GpaCalculator,
  'trigonometry-calculator': TrigonometryCalc,

  // Grouped calculators that require the slug prop
  'mortgage-calculator': { component: FinancialCalculators, needsSlug: true },
  'compound-interest-calculator': { component: FinancialCalculators, needsSlug: true },
  'simple-interest-calculator': { component: FinancialCalculators, needsSlug: true },
  'discount-calculator': { component: FinancialCalculators, needsSlug: true },

  // Electricity calculators that require the slug prop
  'electricity-bill-calculator': { component: ElectricityCalculators, needsSlug: true },
  'energy-consumption-calculator': { component: ElectricityCalculators, needsSlug: true },
  'energy-cost-calculator': { component: ElectricityCalculators, needsSlug: true },

  'matrix-calculator': MatrixCalculator,
  'age-calculator': AgeCalculator,
  'tip-calculator': TipCalculator,
};

// 🌟 FIX: Type Guard to safely check for the complex component structure
function isSlugComponent(entry: ComponentMapValue): entry is SlugComponentEntry {
  return typeof entry === 'object' && entry !== null && 'needsSlug' in entry;
}


// generateStaticParams remains correct as it only uses Object.keys
export async function generateStaticParams() {
  // Filter slugs from the top-level map
  const embeddableSlugs = Object.keys(componentMap);
  return embeddableSlugs.map((slug) => ({
    calculator: slug,
  }));
}

// Minimal layout specifically for embedding
export default function EmbedCalculatorPage({ params }: { params: { calculator: string } }) {
  const calculatorSlug = params.calculator;

  // 1. Check if the calculator is valid based on site lists (optional, but good for validation)
  const calcExistsInList = allCalculators.some(c => c.slug === calculatorSlug);
  if (!calcExistsInList) {
    return <div className="p-4 text-center text-red-600">Error: Calculator slug not recognized.</div>;
  }

  // 2. Retrieve the component entry from the top-level map
  const ComponentEntry = componentMap[calculatorSlug];

  if (!ComponentEntry) {
    return <div className="p-4 text-center text-orange-600">This calculator is not currently available for embedding.</div>;
  }

  let CalculatorComponent: React.ReactNode;

  // 3. Instantiate the component correctly using the type guard
  if (isSlugComponent(ComponentEntry)) {
    // TypeScript now knows ComponentEntry is SlugComponentEntry
    const SpecificComponent = ComponentEntry.component as React.ElementType<{ slug: string }>;
    CalculatorComponent = <SpecificComponent slug={calculatorSlug} />;
  } else {
    // TypeScript now knows ComponentEntry is a simple React.ElementType
    const SpecificComponent = ComponentEntry as React.ElementType;
    CalculatorComponent = <SpecificComponent />;
  }

  // Render only the calculator component and a small footer
  return (
    <div className="p-4 bg-white min-h-screen">
      {CalculatorComponent}

      {/* Small "Powered by" footer */}
      <footer className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
        Calculator powered by{' '}
        <a
          href="https://tablesandcalc.online"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit TablesAndCalc for more tools"
        >
          TablesAndCalc.online
        </a>
      </footer>
    </div>
  );
}