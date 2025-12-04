"use client";

import { useState, useMemo, useEffect } from 'react';
import type { ShapeData } from '@/lib/data/areaCalculatorData';

const calculationFormulas: { [key: string]: ((inputs: number[]) => number)[] } = {
    circle: [([r]) => Math.PI * r * r],
    triangle: [([b, h]) => 0.5 * b * h, ([a, b, c]) => { const s = (a + b + c) / 2; return Math.sqrt(s * (s - a) * (s - b) * (s - c)); },],
    square: [([a]) => a * a],
    rectangle: [([w, l]) => w * l],
    polygon: [([n, s]) => (n * s * s) / (4 * Math.tan(Math.PI / n))],
    trapezoid: [([a, b, h]) => 0.5 * (a + b) * h],
    parallelogram: [([b, h]) => b * h],
    rhombus: [([d1, d2]) => 0.5 * d1 * d2],
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
        <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">{shape.name} Area</h1>

            {shape.formulas.length > 1 && (
                <div className="flex flex-wrap border-b justify-center mb-4 gap-1">
                    {shape.formulas.map((formula, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFormulaIndex(index)}
                            className={`px-3 py-2 text-sm md:text-base font-medium rounded-t-lg transition-colors ${activeFormulaIndex === index
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-secondary'
                                }`}
                        >
                            {formula.inputs.map(i => i.name).join(' & ')}
                        </button>
                    ))}
                </div>
            )}

            <p className="text-center text-muted-foreground mb-6 text-sm md:text-base">{activeFormula.label}</p>
            <div className="space-y-4">
                {activeFormula.inputs.map((input, index) => (
                    <div key={input.id}>
                        <label className="block text-sm font-medium mb-1">{input.name}</label>
                        <input
                            type="number"
                            placeholder='0'
                            value={inputs[index] || ''}
                            onChange={e => handleInputChange(index, e.target.value)}
                            className="w-full p-3 border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        />
                    </div>
                ))}
                <button
                    onClick={calculateArea}
                    className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Calculate
                </button>
                {area !== null && (
                    <div className="text-center text-xl md:text-2xl font-bold p-4 bg-secondary rounded-lg">
                        Area: {area.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                    </div>
                )}
            </div>
        </div>
    );
}