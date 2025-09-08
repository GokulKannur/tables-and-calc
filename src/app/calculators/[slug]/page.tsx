// src/app/calculators/[slug]/page.tsx

import Link from 'next/link';
import { calculatorList } from '@/lib/data/siteLists'; // Make sure you're importing from the correct new file
import type { Metadata } from 'next';

// Import all your calculator components
import PercentageCalculator from '@/components/calculators/PercentageCalculator';
import BmiCalculator from '@/components/calculators/BmiCalculator';
import GpaCalculator from '@/components/calculators/GpaCalculator';
import NumberConverter from '@/components/calculators/NumberConverter';
import GeoGebraCalculator from '@/components/GeoGebraCalculator';
import TrigonometryCalculator from '@/components/calculators/TrigonometryCalculator';
import FinancialCalculators from '@/components/calculators/FinancialCalculators';
import ElectricityCalculators from '@/components/calculators/ElectricityCalculators';

// ✨ FIX: Define the props type explicitly
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
    return <div>Calculator not found</div>;
  }

  const componentMap: { [key: string]: React.ReactNode } = {
    'percentage-calculator': <PercentageCalculator />,
    'bmi-calculator': <BmiCalculator />,
    'gpa-calculator': <GpaCalculator />,
    'number-converter': <NumberConverter />,
    'scientific-calculator': <GeoGebraCalculator />,
    'trigonometry-calculator': <TrigonometryCalculator />,
    'mortgage-calculator': <FinancialCalculators slug={params.slug} />,
    'compound-interest-calculator': <FinancialCalculators slug={params.slug} />,
    'simple-interest-calculator': <FinancialCalculators slug={params.slug} />,
    'discount-calculator': <FinancialCalculators slug={params.slug} />,
    'electricity-bill-calculator': <ElectricityCalculators slug={params.slug} />,
    'energy-consumption-calculator': <ElectricityCalculators slug={params.slug} />,
    'energy-cost-calculator': <ElectricityCalculators slug={params.slug} />,
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> / 
        <Link href="/calculators" className="hover:underline"> Calculators</Link> / 
        <span className="font-medium text-slate-700">{calculatorData.title}</span>
      </nav>
      
      <div className="bg-white p-4 sm:p-6 border rounded-lg shadow-sm">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{calculatorData.title}</h1>
            <p className="text-slate-600 mt-2">{calculatorData.description}</p>
        </div>
        
        {componentMap[params.slug] || <div>Calculator not found.</div>}
      </div>
      
      {/* ... rest of your JSX for details/formula ... */}
       {calculatorData.details && (
        <div className="mt-8 bg-white p-6 border rounded-lg shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What is a {calculatorData.title}?</h2>
            <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: calculatorData.details.whatIs }} />
          </div>
          <hr/>
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-4">Formula</h3>
            <div className="my-4 p-6 bg-slate-50 border rounded-lg text-center font-mono text-slate-800 whitespace-pre-line">
                {calculatorData.details.formula}
            </div>
          </div>
        </div>
      )}
      {calculatorData.details?.usage && (
        <div className="mt-8 bg-white p-6 border rounded-lg shadow-sm space-y-4">
            <h2 className="text-2xl font-semibold mb-4">{calculatorData.details.usage.title}</h2>
            {calculatorData.details.usage.sections.map((section, index) => (
                <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                        {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}