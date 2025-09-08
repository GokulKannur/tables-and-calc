// src/app/calculators/number-converter/[slug]/page.tsx
import NumberConverter from "@/components/calculators/NumberConverter";
import { numberConversionsList } from "@/lib/data/siteLists";
import type { Metadata } from "next";
import Link from "next/link";

// ✨ FIX: More explicit props definition
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
    return numberConversionsList.map((conv) => ({
        slug: conv.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const conv = numberConversionsList.find(c => c.slug === params.slug);
    return {
        title: conv ? `${conv.title} | TablesAndCalc` : "Number Converter",
        description: conv ? `Convert numbers from ${conv.from} to ${conv.to}.` : "Convert numbers between different bases.",
    };
}


export default function SpecificNumberConverterPage({ params }: PageProps) {
    const conversion = numberConversionsList.find(c => c.slug === params.slug);
    
    if (!conversion) {
        return <div>Conversion not found.</div>
    }

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