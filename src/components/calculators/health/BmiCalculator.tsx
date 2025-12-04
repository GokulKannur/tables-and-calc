"use client";

import { useState } from 'react';
import { Scale, Ruler, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <div className="space-y-6 max-w-md mx-auto">
      {/* Unit Toggle */}
      <div className="grid grid-cols-2 gap-1 p-1 bg-muted rounded-lg">
        <button
          onClick={() => setUnit('metric')}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
            unit === 'metric'
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Metric (kg/cm)
        </button>
        <button
          onClick={() => setUnit('imperial')}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
            unit === 'imperial'
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Imperial (lbs/ft)
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        {unit === 'metric' ? (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Weight (kg)</label>
              <div className="relative">
                <Scale className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="number"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="70"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Height (cm)</label>
              <div className="relative">
                <Ruler className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="number"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="175"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Weight (lbs)</label>
              <div className="relative">
                <Scale className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="number"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="150"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Height (ft)</label>
                <div className="relative">
                  <Ruler className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="number"
                    value={feet}
                    onChange={e => setFeet(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="5"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Height (in)</label>
                <div className="relative">
                  <Ruler className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="number"
                    value={inches}
                    onChange={e => setInches(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="9"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <button
        onClick={calculateBmi}
        className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        <Activity className="mr-2 h-4 w-4" />
        Calculate BMI
      </button>

      {bmi && category && (
        <div className="mt-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex flex-col items-center text-center space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Your BMI</h3>
            <div className="text-4xl font-bold tracking-tight text-primary">{bmi}</div>
            <div className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              category === 'Normal weight' ? "border-transparent bg-green-500/10 text-green-600" :
                category === 'Overweight' ? "border-transparent bg-yellow-500/10 text-yellow-600" :
                  "border-transparent bg-red-500/10 text-red-600"
            )}>
              {category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}