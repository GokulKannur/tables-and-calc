// src/components/calculators/TipCalculator.tsx
"use client";

import { useState } from 'react';

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState('50.00');
  const [tipPercent, setTipPercent] = useState(15);
  const [numPeople, setNumPeople] = useState<number | ''>(1);
  const [customTip, setCustomTip] = useState('');

  const tipPresets = [10, 15, 18, 20, 25];

  const bill = parseFloat(billAmount) || 0;
  const tip = customTip !== '' ? parseFloat(customTip) || 0 : tipPercent;
  const people = parseInt(numPeople.toString()) || 1;

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  const perPersonBill = bill / people;
  const perPersonTip = tipAmount / people;
  const perPersonTotal = totalAmount / people;

  const handlePresetClick = (percent: number) => {
    setTipPercent(percent);
    setCustomTip('');
  };

  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumPeople(value === '' ? '' : Math.max(1, parseInt(value) || 1));
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(e.target.value);
    if (e.target.value !== '') {
      setTipPercent(-1);
    } else {
      setTipPercent(15);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Main Calculator */}
      <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
        <div className="bg-primary p-4 md:p-6 text-primary-foreground text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Tip Calculator</h1>
          <p className="text-primary-foreground/80 mt-1 text-sm">Calculate tips and split bills</p>
        </div>

        <div className="p-4 md:p-6 space-y-6">
          {/* Bill Amount */}
          <div>
            <label className="block text-sm font-medium mb-2">Bill Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl font-bold text-muted-foreground">$</span>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                step="0.01"
                min="0"
                className="w-full pl-10 pr-4 py-3 text-2xl md:text-3xl font-bold border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Tip Percentage */}
          <div>
            <label className="block text-sm font-medium mb-2">Tip Percentage</label>
            <div className="grid grid-cols-5 gap-2 mb-3">
              {tipPresets.map((percent) => (
                <button
                  key={percent}
                  onClick={() => handlePresetClick(percent)}
                  className={`py-2 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all ${tipPercent === percent && customTip === ''
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                >
                  {percent}%
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Custom:</span>
              <input
                type="number"
                value={customTip}
                onChange={handleCustomTipChange}
                placeholder="%"
                min="0"
                className="flex-1 px-3 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
              />
            </div>
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium mb-2">Number of People</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setNumPeople(Math.max(1, (parseInt(numPeople.toString()) || 1) - 1))}
                className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-lg font-bold text-xl disabled:opacity-50"
                disabled={(parseInt(numPeople.toString()) || 1) <= 1}
              >
                −
              </button>
              <input
                type="number"
                value={numPeople}
                onChange={handleNumPeopleChange}
                min="1"
                className="flex-1 text-center text-2xl font-bold border rounded-lg py-2 bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
              />
              <button
                onClick={() => setNumPeople((parseInt(numPeople.toString()) || 0) + 1)}
                className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-lg font-bold text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Results */}
          {bill > 0 && (
            <div className="border-t pt-6 space-y-4">
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground mb-1">Tip</div>
                  <div className="text-lg md:text-2xl font-bold text-primary">${tipAmount.toFixed(2)}</div>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground mb-1">Bill</div>
                  <div className="text-lg md:text-2xl font-bold">${bill.toFixed(2)}</div>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg text-center">
                  <div className="text-xs text-muted-foreground mb-1">Total</div>
                  <div className="text-lg md:text-2xl font-bold text-primary">${totalAmount.toFixed(2)}</div>
                </div>
              </div>

              {people > 1 && (
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-bold text-sm mb-3 text-center">Per Person ({people})</h3>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-xs text-muted-foreground">Bill</div>
                      <div className="text-lg font-bold">${perPersonBill.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Tip</div>
                      <div className="text-lg font-bold">${perPersonTip.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Total</div>
                      <div className="text-lg font-bold text-primary">${perPersonTotal.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tipping Guide */}
      <div className="bg-card p-4 md:p-6 rounded-lg border">
        <h2 className="text-xl font-bold mb-4">Tipping Guide</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-secondary/30 rounded-lg">
            <h4 className="font-bold text-sm mb-1">🍽️ Restaurant</h4>
            <p className="text-xs text-muted-foreground">15-20% for good service</p>
          </div>
          <div className="p-3 bg-secondary/30 rounded-lg">
            <h4 className="font-bold text-sm mb-1">🚕 Taxi/Uber</h4>
            <p className="text-xs text-muted-foreground">15-20% standard</p>
          </div>
          <div className="p-3 bg-secondary/30 rounded-lg">
            <h4 className="font-bold text-sm mb-1">🍕 Delivery</h4>
            <p className="text-xs text-muted-foreground">$3-5 or 15-20%</p>
          </div>
          <div className="p-3 bg-secondary/30 rounded-lg">
            <h4 className="font-bold text-sm mb-1">✂️ Salon</h4>
            <p className="text-xs text-muted-foreground">15-20% of service</p>
          </div>
        </div>
      </div>
    </div>
  );
}