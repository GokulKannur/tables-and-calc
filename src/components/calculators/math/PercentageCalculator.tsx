// src/components/calculators/PercentageCalculator.tsx
"use client";

import { useState, useEffect } from 'react';

export default function PercentageCalculator() {
  const [percent, setPercent] = useState('10');
  const [value, setValue] = useState('50');
  const [result, setResult] = useState('');

  useEffect(() => {
    const percentNum = parseFloat(percent);
    const valueNum = parseFloat(value);

    if (isNaN(percentNum) || isNaN(valueNum)) {
      setResult('');
      return;
    }

    const calculation = (percentNum / 100) * valueNum;
    setResult(calculation.toLocaleString(undefined, { maximumFractionDigits: 10 }));
  }, [percent, value]);

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <div className="flex flex-wrap items-center gap-4 text-lg">
        <span className="font-medium">What is</span>
        <input
          type="number"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          className="w-24 p-2 border border-slate-300 rounded-md shadow-sm text-center"
          aria-label="Percentage"
        />
        <span className="font-medium">% of</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 p-2 border border-slate-300 rounded-md shadow-sm text-center"
          aria-label="Value"
        />
        <span className="font-medium">?</span>
      </div>

      {result && (
        <div className="mt-6 text-center">
          <p className="text-slate-600">Result:</p>
          <p className="text-4xl font-bold text-blue-600 p-4 bg-blue-50 rounded-lg">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}