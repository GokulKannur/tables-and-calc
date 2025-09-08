import NumberConverter from '@/components/calculators/NumberConverter';
import { numberConversionsList } from '@/lib/unitData';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return numberConversionsList.map(conv => ({ slug: conv.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const conversion = numberConversionsList.find(c => c.slug === params.slug);
    if (!conversion) return { title: "Converter Not Found" };
    return {
        title: `${conversion.title} | TablesAndCalc`,
        description: `An online tool to convert ${conversion.title.toLowerCase()}.`,
    };
}

export default function SpecificNumberConverterPage({ params }: { params: { slug: string }}) {
  const conversion = numberConversionsList.find(c => c.slug === params.slug);
  if (!conversion) return <div>Converter not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
        <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:underline">Home</Link> / 
            <Link href="/calculators" className="hover:underline"> Calculators</Link> / 
            <Link href="/calculators/number-converter" className="hover:underline"> Number Converter</Link> / 
            <span className="font-medium text-slate-700">{conversion.title}</span>
        </nav>
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{conversion.title}</h1>
        </div>
      <NumberConverter defaultFrom={conversion.from} defaultTo={conversion.to} />
    </div>
  );
}