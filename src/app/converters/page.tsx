import Link from 'next/link';
import { popularConversions } from '@/lib/unitData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unit Converters | TablesAndCalc',
  description: 'A collection of free online unit converters for length, weight, temperature, and more.',
};

export default function ConvertersPage() {
  const groupedConversions = popularConversions.reduce((acc, conv) => {
    const category = conv.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(conv);
    return acc;
  }, {} as Record<string, typeof popularConversions>);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Unit Converters</h1>
        <p className="text-slate-600 mt-2">Select a category or use the Express Converter for quick conversions.</p>
      </div>

      {/* NEW: Link to the Express Converter */}
      <div className="mb-12">
        <Link href="/express-converter" className="block p-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all text-center">
          <h2 className="text-2xl font-bold">🚀 Try the Express Converter</h2>
          <p className="mt-1 opacity-90">Switch between Length, Weight, and Temperature instantly.</p>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(groupedConversions).map(([category, conversions]) => (
          <section key={category} className="bg-white p-6 border rounded-lg shadow-sm">
            {/* UPDATED: Header with a link to the generic converter */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-semibold capitalize">
                {category}
              </h2>
              <Link href={`/converters/${category}`} className="text-sm text-blue-600 hover:underline">
                View All-in-One Tool →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {conversions.map(conv => (
                <Link 
                  key={conv.slug} 
                  href={`/converters/${conv.slug}`} 
                  className="text-blue-600 hover:text-blue-800 hover:underline py-1"
                >
                  {`${conv.from.toUpperCase()} to ${conv.to.toUpperCase()}`}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}