import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areaCalculatorData } from '@/lib/data/areaCalculatorData';
import AreaCalculatorClient from '@/components/calculators/AreaCalculatorClient';

export function generateStaticParams() {
  return areaCalculatorData.map((shape) => ({
    shape: shape.slug,
  }));
}

export default function ShapeAreaPage({ params }: { params: { shape: string } }) {
  // Find the shape data. The `?` prevents errors if params.shape is null.
  const shape = areaCalculatorData.find((s) => s.slug === params.shape);

  // If no shape is found, display a "not found" page.
  if (!shape) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{' '}
        /
        <Link href="/calculators" className="hover:underline">
          Calculators
        </Link>{' '}
        /
        <Link href="/calculators/area-calculator" className="hover:underline">
          Area Calculator
        </Link>{' '}
        / <span className="font-medium text-slate-700">{shape.name}</span>
      </nav>

      {/* Calculator */}
      <AreaCalculatorClient shape={shape} />

      {/* Extra Info */}
      <div className="bg-white p-6 border rounded-lg shadow-sm space-y-6 mt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">What is a {shape.name}?</h2>
          <p className="text-slate-600 leading-relaxed">{shape.definition}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Properties</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {shape.properties.map((prop, i) => (
              <li key={i}>{prop}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Facts</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {shape.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
