import Link from 'next/link';
// This now correctly points to your single data file
import { tableList } from '@/lib/unitData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reference Tables | TablesAndCalc',
  description: 'Reference tables for math, science, and engineering, including logarithm tables and material properties.',
};

export default function TablesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Reference Tables</h1>
        <p className="text-slate-600 mt-2">A collection of useful data for science and engineering.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tableList.map((table) => (
          <Link
            key={table.slug}
            href={`/tables/${table.slug}`}
            className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold">{table.emoji} {table.title}</h3>
            <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-700">
              {table.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}