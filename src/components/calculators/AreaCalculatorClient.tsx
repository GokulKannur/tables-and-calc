"use client";

import { useState, useMemo, useEffect } from 'react';
import type { ShapeData } from '@/lib/data/areaCalculatorData';

const calculationFormulas: { [key: string]: ((inputs: number[]) => number)[] } = {
  circle: [ ([r]) => Math.PI * r * r ],
  triangle: [ ([b, h]) => 0.5 * b * h, ([a, b, c]) => { const s = (a + b + c) / 2; return Math.sqrt(s * (s - a) * (s - b) * (s - c)); }, ],
  square: [ ([a]) => a * a ],
  rectangle: [ ([w, l]) => w * l ],
  polygon: [ ([n, s]) => (n * s * s) / (4 * Math.tan(Math.PI / n)) ],
  trapezoid: [ ([a, b, h]) => 0.5 * (a + b) * h ],
  parallelogram: [ ([b, h]) => b * h ],
  rhombus: [ ([d1, d2]) => 0.5 * d1 * d2 ],
};

export default function AreaCalculatorClient({ shape }: { shape: ShapeData }) {
    const [activeFormulaIndex, setActiveFormulaIndex] = useState(0);
    const activeFormula = useMemo(() => shape.formulas[activeFormulaIndex], [shape, activeFormulaIndex]);
    const [inputs, setInputs] = useState<number[]>([]);
    const [area, setArea] = useState<number | null>(null);
    
    useEffect(() => {
        setInputs(new Array(activeFormula.inputs.length).fill(0));
        setArea(null);
    }, [activeFormula]);

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = parseFloat(value) || 0;
        setInputs(newInputs);
    };
    
    const calculateArea = () => {
        const calculationFunction = calculationFormulas[shape.slug][activeFormulaIndex];
        if (calculationFunction) {
            const result = calculationFunction(inputs);
            setArea(result);
        }
    };

    return (
        <div className="bg-white p-6 border rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">{shape.name} Area Calculator</h1>
            
            {shape.formulas.length > 1 && (
                <div className="flex border-b justify-center mb-4">
                    {shape.formulas.map((formula, index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveFormulaIndex(index)}
                            className={`px-4 py-2 -mb-px font-semibold border-b-2 ${
                                activeFormulaIndex === index
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-slate-500 hover:text-slate-700'
                            }`}
                        >
                           {formula.inputs.map(i => i.name).join(' & ')}
                        </button>
                    ))}
                </div>
            )}
            
            <p className="text-center text-slate-600 mb-6">{activeFormula.label}</p>
            <div className="space-y-4">
                {activeFormula.inputs.map((input, index) => (
                    <div key={input.id}>
                        <label className="block text-sm font-medium">{input.name}</label>
                        <input
                            type="number"
                            placeholder='0'
                            value={inputs[index] || ''}
                            onChange={e => handleInputChange(index, e.target.value)}
                            className="w-full mt-1 p-2 border rounded-md"
                        />
                    </div>
                ))}
                <button onClick={calculateArea} className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate Area</button>
                {area !== null && (
                    <div className="text-center text-2xl font-bold p-4 bg-gray-100 rounded-lg">
                        Area: {area.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                    </div>
                )}
            </div>
        </div>
    );
}