"use client";

import { useState } from 'react';
// ✨ FIX: Import the raw JSON data directly
import periodicTableJSON from '@/lib/data/periodicTableData.json';

// Define the shape of a single element
export interface ElementData {
  name: string;
  symbol: string;
  number: number;
  atomic_mass: number;
  category: string;
  phase: string;
  xpos: number;
  ypos: number;
  electron_configuration: string;
  summary: string;
}

// Cast the imported JSON to our defined type
const periodicTableData: { elements: ElementData[] } = periodicTableJSON;

const categoryColors: { [key: string]: string } = {
  "diatomic nonmetal": "bg-green-200",
  "noble gas": "bg-purple-200",
  "alkali metal": "bg-red-200",
  "alkaline earth metal": "bg-orange-200",
  "metalloid": "bg-yellow-200",
  "polyatomic nonmetal": "bg-green-300",
  "lanthanide": "bg-indigo-200",
  "actinide": "bg-pink-200",
  "transition metal": "bg-blue-200",
  "post-transition metal": "bg-gray-300",
};

export default function PeriodicTablePage() {
    const [selectedElement, setSelectedElement] = useState<ElementData | null>(periodicTableData.elements[0]);

    return (
        <div className="max-w-7xl mx-auto pb-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Periodic Table of Elements</h1>
                <p className="text-slate-600 mt-2">An interactive reference for all chemical elements.</p>
            </div>

            <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-1 mx-auto" style={{width: '100%', maxWidth: '1200px'}}>
                {periodicTableData.elements.map(el => (
                    <div 
                        key={el.number} 
                        onClick={() => setSelectedElement(el)}
                        className={`p-1 text-center border rounded-md cursor-pointer transition-transform hover:scale-110 ${categoryColors[el.category] || 'bg-gray-200'}`}
                        style={{ gridColumn: el.xpos, gridRow: el.ypos }}
                    >
                        <div className="text-xs font-bold">{el.symbol}</div>
                        <div className="text-xxs">{el.number}</div>
                    </div>
                ))}
            </div>

            {selectedElement && (
                <div className="mt-8 p-6 bg-white border rounded-lg shadow-sm">
                    <h2 className="text-3xl font-bold">{selectedElement.name} ({selectedElement.symbol})</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                        <div><strong className="block text-slate-500">Atomic Number</strong>{selectedElement.number}</div>
                        <div><strong className="block text-slate-500">Atomic Mass</strong>{selectedElement.atomic_mass.toFixed(3)} u</div>
                        <div><strong className="block text-slate-500">Phase</strong>{selectedElement.phase}</div>
                        <div><strong className="block text-slate-500">Category</strong><span className="capitalize">{selectedElement.category}</span></div>
                    </div>
                    <div className="mt-4">
                        <strong className="block text-sm text-slate-500">Electron Configuration</strong>
                        <p className="font-mono text-sm">{selectedElement.electron_configuration}</p>
                    </div>
                     <div className="mt-4">
                        <strong className="block text-sm text-slate-500">Summary</strong>
                        <p className="text-slate-600 text-sm leading-relaxed">{selectedElement.summary}</p>
                    </div>
                </div>
            )}
        </div>
    );
}