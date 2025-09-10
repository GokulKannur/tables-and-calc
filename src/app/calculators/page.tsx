// src/app/calculators/page.tsx

import Link from 'next/link';
import { calculatorList, staticCalculatorList } from '@/lib/data/siteLists'; // ✅ Import both lists
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Calculators | TablesAndCalc',
  description: 'A collection of free online calculators for math, science, and finance.',
};

// ✅ Merge the two lists into a single array
const allCalculators = [...calculatorList, ...staticCalculatorList];

export default function CalculatorsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Calculators</h1>
        <p className="text-slate-600 mt-2">A collection of tools to help with your calculations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allCalculators.map((calc) => ( // ✅ Map over the merged list
          <Link
            key={calc.slug}
            href={`/calculators/${calc.slug}`}
            className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold">{calc.emoji} {calc.title}</h3>
            <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
              {calc.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}