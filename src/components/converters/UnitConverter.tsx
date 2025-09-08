// src/components/converters/UnitConverter.tsx
"use client";

import { useState, useEffect } from 'react';

// Define the properties our generic component will accept
interface Unit {
  id: string;
  name: string;
}

interface UnitConverterProps {
  defaultFrom: string;
  defaultTo: string;
  units: Unit[];
  conversionFactors: { [key: string]: number } | undefined; // Add undefined to the type
}

export default function UnitConverter({ defaultFrom, defaultTo, units, conversionFactors }: UnitConverterProps) {
  const [inputValue, setInputValue] = useState('1');
  const [fromUnit, setFromUnit] = useState(defaultFrom);
  const [toUnit, setToUnit] = useState(defaultTo);
  const [result, setResult] = useState('');

  const handleSwap = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
  };

  useEffect(() => {
    // Add a check to ensure conversionFactors exists before proceeding
    if (!conversionFactors) {
      setResult('Conversion not available');
      return;
    }

    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Invalid number');
      return;
    }
    
    // Generic conversion logic based on a base unit value of 1
    const valueInBase = value * conversionFactors[fromUnit];
    const convertedValue = valueInBase / conversionFactors[toUnit];
    setResult(`${convertedValue.toLocaleString(undefined, { maximumFractionDigits: 6 })}`);
  }, [inputValue, fromUnit, toUnit, conversionFactors]); // Add conversionFactors to dependencies

  // Reset units when the component's default props change
  useEffect(() => {
    setFromUnit(defaultFrom);
    setToUnit(defaultTo);
  }, [defaultFrom, defaultTo]);


  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        <div>
          <label htmlFor="from-value" className="block text-sm font-medium text-slate-700">From</label>
          <input id="from-value" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>
        <div>
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-md shadow-sm bg-slate-50"
          >
            {units.map(unit => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
          </select>
        </div>
      </div>
      
      <div className="text-center my-2">
        <button 
          onClick={handleSwap}
          className="p-2 rounded-full hover:bg-slate-200 transition-colors"
          aria-label="Swap units"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-2.25-1.5L21 12m0 0L16.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-slate-700">To</label>
          <p className="w-full mt-1 p-2 border border-slate-200 bg-slate-100 rounded-md">{result}</p>
        </div>
        <div>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-md shadow-sm bg-slate-50"
          >
            {units.map(unit => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}