// src/app/converters/[category]/page.tsx

import Link from 'next/link';
import type { Metadata } from 'next';
import { converterData, popularConversions } from '@/lib/unitData';

// Import our reusable converter components
import UnitConverter from '@/components/converters/UnitConverter';
import TemperatureConverter from '@/components/converters/TemperatureConverter';

// This function tells Next.js which hub pages to build (length, weight, etc.)
export async function generateStaticParams() {
  return Object.keys(converterData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categoryInfo = converterData[params.category as keyof typeof converterData];
  if (!categoryInfo) return { title: "Not Found" };
  
  return {
    title: `${categoryInfo.name} Converter | TablesAndCalc`,
    description: `A general-purpose online converter for ${categoryInfo.name.toLowerCase()}.`,
  };
}

export default function GenericCategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const categoryInfo = converterData[category as keyof typeof converterData];
  
  if (!categoryInfo) {
    return <div>Category not found</div>;
  }

  const categoryLinks = popularConversions.filter(c => c.category === category);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{categoryInfo.name} Converter</h1>
      </div>

      <div className="bg-white p-6 border rounded-lg shadow-sm">
        {
          category === 'temperature' ? (
            <TemperatureConverter defaultFrom="c" defaultTo="f" />
          ) : (
            <UnitConverter 
              defaultFrom={categoryInfo.units[0].id} 
              defaultTo={categoryInfo.units[1].id}
              units={categoryInfo.units}
              conversionFactors={categoryInfo.factors}
            />
          )
        }
      </div>

      <div className="mt-12 bg-white p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
          Popular {categoryInfo.name} Conversions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
          {categoryLinks.map(conv => (
            <Link 
              key={conv.slug} 
              href={`/converters/${conv.slug}`} 
              className="text-blue-600 hover:underline py-1 capitalize"
            >
              {conv.slug.replace(`${category}/`, '').replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}