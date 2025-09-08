// src/components/calculators/BmiCalculator.tsx
"use client";

import { useState } from 'react';

export default function BmiCalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [bmi, setBmi] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const calculateBmi = () => {
    let bmiValue;
    const weightNum = parseFloat(weight);
    
    if (unit === 'metric') {
      const heightNum = parseFloat(height) / 100; // convert cm to meters
      if (weightNum > 0 && heightNum > 0) {
        bmiValue = weightNum / (heightNum * heightNum);
      }
    } else {
      const heightInInches = (parseFloat(feet) * 12) + parseFloat(inches);
      if (weightNum > 0 && heightInInches > 0) {
        bmiValue = 703 * (weightNum / (heightInInches * heightInInches));
      }
    }

    if (bmiValue) {
      setBmi(bmiValue.toFixed(1));
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obesity');
    } else {
      setBmi(null);
      setCategory(null);
    }
  };

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm space-y-6">
      {/* Unit Toggle */}
      <div className="flex justify-center border bg-slate-100 p-1 rounded-lg">
        <button onClick={() => setUnit('metric')} className={`flex-1 p-2 rounded-md transition-colors ${unit === 'metric' ? 'bg-blue-500 text-white' : 'hover:bg-slate-200'}`}>Metric</button>
        <button onClick={() => setUnit('imperial')} className={`flex-1 p-2 rounded-md transition-colors ${unit === 'imperial' ? 'bg-blue-500 text-white' : 'hover:bg-slate-200'}`}>Imperial</button>
      </div>

      {/* Input Fields */}
      {unit === 'metric' ? (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-slate-700">Weight (kg)</label>
            <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)} className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-slate-700">Height (cm)</label>
            <input type="number" id="height" value={height} onChange={e => setHeight(e.target.value)} className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight-lbs" className="block text-sm font-medium text-slate-700">Weight (lbs)</label>
            <input type="number" id="weight-lbs" value={weight} onChange={e => setWeight(e.target.value)} className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm" />
          </div>
          <div className="flex gap-2">
            <div>
              <label htmlFor="height-ft" className="block text-sm font-medium text-slate-700">Height (ft)</label>
              <input type="number" id="height-ft" value={feet} onChange={e => setFeet(e.target.value)} className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="height-in" className="block text-sm font-medium text-slate-700">(in)</label>
              <input type="number" id="height-in" value={inches} onChange={e => setInches(e.target.value)} className="w-full mt-1 p-2 border border-slate-300 rounded-md shadow-sm" />
            </div>
          </div>
        </div>
      )}

      {/* Calculate Button */}
      <div>
        <button onClick={calculateBmi} className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Calculate BMI</button>
      </div>

      {/* Result */}
      {bmi && category && (
        <div className="text-center pt-4 border-t">
          <p className="text-slate-600">Your BMI is:</p>
          <p className="text-5xl font-bold text-blue-600">{bmi}</p>
          <p className="text-xl font-medium text-slate-800 mt-2">{category}</p>
        </div>
      )}
    </div>
  );
}