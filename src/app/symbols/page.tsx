// src/app/symbols/page.tsx

import Link from 'next/link';
import { symbolList } from '@/lib/unitData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering & Math Symbols | TablesAndCalc',
  description: 'A library of common electrical, mechanical, and mathematical symbols.',
};

export default function SymbolsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Symbols</h1>
        <p className="text-slate-600 mt-2">A library of common engineering and mathematical symbols.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {symbolList.map((symbol) => (
          <Link
            key={symbol.slug}
            href={`/symbols/${symbol.slug}`}
            className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold">{symbol.emoji} {symbol.title}</h3>
            <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
              {symbol.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}