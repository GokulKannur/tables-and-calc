// src/app/calculators/page.tsx

import Link from 'next/link';
import { calculatorList, staticCalculatorList } from '@/lib/data/siteLists';
import type { Metadata } from 'next';
import { Calculator, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Online Calculators | TablesAndCalc',
  description: 'A collection of free online calculators for math, science, and finance.',
};

// Merge lists
const allCalculators = [...calculatorList, ...staticCalculatorList];

// Group by category
const groupedCalculators = allCalculators.reduce((acc, calc) => {
  const category = calc.category || 'Other';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(calc);
  return acc;
}, {} as Record<string, typeof allCalculators>);

const categories = Object.keys(groupedCalculators).sort();

export default function CalculatorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Online Calculators</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of precision tools organized by category. From finance to engineering, we&apos;ve got you covered.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category} className="scroll-mt-20" id={category.toLowerCase()}>
            <div className="flex items-center gap-3 mb-6 border-b pb-2">
              <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
              <span className="text-sm text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                {groupedCalculators[category].length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedCalculators[category].map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="group relative flex flex-col p-6 bg-card border rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{calc.emoji}</div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {calc.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}