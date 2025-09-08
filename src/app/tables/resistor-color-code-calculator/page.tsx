// src/app/tables/resistor-color-code-calculator/page.tsx
import ResistorColorCodeCalculator from "@/components/tables/ResistorColorCodeCalculator";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resistor Color Code Calculator | TablesAndCalc',
  description: 'An interactive tool to calculate the resistance of a 4-band resistor based on its color code. Includes a visual guide and selection dropdowns.',
};

export default function ResistorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Resistor Color Code Calculator</h1>
        <p className="text-slate-600 mt-2">Select the colors of a 4-band resistor to determine its resistance value.</p>
      </div>

      <ResistorColorCodeCalculator />
      
      {/* We can add a content section here later to explain how to read the chart */}
    </div>
  );
}