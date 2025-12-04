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
  conversionFactors: { [key: string]: number } | undefined;
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
    if (!conversionFactors) {
      setResult('Conversion not available');
      return;
    }

    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Invalid number');
      return;
    }

    const valueInBase = value * conversionFactors[fromUnit];
    const convertedValue = valueInBase / conversionFactors[toUnit];
    setResult(`${convertedValue.toLocaleString(undefined, { maximumFractionDigits: 6 })}`);
  }, [inputValue, fromUnit, toUnit, conversionFactors]);

  useEffect(() => {
    setFromUnit(defaultFrom);
    setToUnit(defaultTo);
  }, [defaultFrom, defaultTo]);

  return (
    <div className="space-y-4">
      {/* From Section */}
      <div className="space-y-2">
        <label htmlFor="from-value" className="block text-sm font-medium text-muted-foreground">From</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            id="from-value"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-3 border border-border bg-background text-foreground rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Enter value..."
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-3 border border-border bg-background text-foreground rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          >
            {units.map(unit => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
          </select>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSwap}
          className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label="Swap units"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-muted-foreground">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-2.25-1.5L21 12m0 0L16.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      {/* To Section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-muted-foreground">To</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="w-full p-3 border border-border bg-secondary/30 text-foreground rounded-lg font-medium min-h-[48px] flex items-center">
            {result || '—'}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-3 border border-border bg-background text-foreground rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          >
            {units.map(unit => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}