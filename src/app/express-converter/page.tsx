// src/app/express-converter/page.tsx
import ExpressConverterTabs from "@/components/ExpressConverterTabs";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Express Unit Converter | TablesAndCalc',
  description: 'Quickly convert between common units for length, weight, temperature, and more using our express converter tool.',
};

export default function ExpressConverterPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Unit Converter Express</h1>
        <p className="text-muted-foreground mt-2">Select a category to start converting.</p>
      </div>
      <ExpressConverterTabs />
    </div>
  );
}