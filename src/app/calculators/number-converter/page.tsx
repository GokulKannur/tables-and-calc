import Link from 'next/link';
import NumberConverter from '@/components/calculators/NumberConverter';
import { numberConversionsList } from '@/lib/unitData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Number System Converter | TablesAndCalc',
  description: 'A general-purpose tool to convert between binary, decimal, hexadecimal, octal, and ASCII text.',
};

export default function NumberConverterHub() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Number System Converter</h1>
      </div>
      <NumberConverter />
      <div className="mt-12 bg-white p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Popular Number Conversions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {numberConversionsList.map(conv => (
            <Link key={conv.slug} href={`/calculators/number-converter/${conv.slug}`} className="text-blue-600 hover:underline">
              {conv.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}