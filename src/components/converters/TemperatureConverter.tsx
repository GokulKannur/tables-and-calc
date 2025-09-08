"use client";

import { useState, useEffect } from "react";

interface TempConverterProps {
  defaultFrom: string;
  defaultTo: string;
}

const tempUnits = [
  { id: "c", name: "Celsius" },
  { id: "f", name: "Fahrenheit" },
  { id: "k", name: "Kelvin" },
];

export default function TemperatureConverter({ defaultFrom, defaultTo }: TempConverterProps) {
  const [inputValue, setInputValue] = useState("0");
  const [fromUnit, setFromUnit] = useState(defaultFrom);
  const [toUnit, setToUnit] = useState(defaultTo);
  const [result, setResult] = useState("");

  const handleSwap = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
  };

  useEffect(() => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("Invalid number");
      return;
    }

    let convertedValue = value;

    if (fromUnit === "c" && toUnit === "f") {
      convertedValue = value * 9 / 5 + 32;
    } else if (fromUnit === "f" && toUnit === "c") {
      convertedValue = (value - 32) * 5 / 9;
    } else if (fromUnit === "c" && toUnit === "k") {
      convertedValue = value + 273.15;
    } else if (fromUnit === "k" && toUnit === "c") {
      convertedValue = value - 273.15;
    } else if (fromUnit === "f" && toUnit === "k") {
      convertedValue = (value - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === "k" && toUnit === "f") {
      convertedValue = (value - 273.15) * 9 / 5 + 32;
    }

    setResult(`${convertedValue.toLocaleString(undefined, { maximumFractionDigits: 6 })}`);
  }, [inputValue, fromUnit, toUnit]);

  useEffect(() => {
    setFromUnit(defaultFrom);
    setToUnit(defaultTo);
  }, [defaultFrom, defaultTo]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        <div>
          <label htmlFor="from-value" className="block text-sm font-medium text-slate-700">From</label>
          <input
            id="from-value"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>
        <div>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-md shadow-sm bg-slate-50"
          >
            {tempUnits.map(unit => (
              <option key={unit.id} value={unit.id}>{unit.name}</option>
            ))}
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
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-md shadow-sm bg-slate-50"
          >
            {tempUnits.map(unit => (
              <option key={unit.id} value={unit.id}>{unit.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
