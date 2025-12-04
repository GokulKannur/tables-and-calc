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
  // Use custom tip if entered, otherwise use the selected preset percentage
  const tip = customTip !== '' ? parseFloat(customTip) || 0 : tipPercent;
  const people = parseInt(numPeople.toString()) || 1; // Ensure numPeople is treated as a string before parsing

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  const perPersonBill = bill / people;
  const perPersonTip = tipAmount / people;
  const perPersonTotal = totalAmount / people;

  const handlePresetClick = (percent: number) => {
    setTipPercent(percent);
    setCustomTip(''); // Clear custom tip when a preset is clicked
  };

  // Update numPeople state, ensuring it's a number for calculations but handling input changes
  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input temporarily but default to 1 for calculations if empty
    setNumPeople(value === '' ? '' : Math.max(1, parseInt(value) || 1));
  };

  // Handle custom tip input, allowing empty string
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(e.target.value);
    // If a custom tip is entered, deselect any active preset visually
    if (e.target.value !== '') {
      setTipPercent(-1); // Use -1 or another value to indicate no preset is active
    } else if (tipPresets.includes(tipPercent)) {
      // If custom tip is cleared, re-select the last active preset if applicable
      // Or default back to a standard preset like 15
      setTipPercent(tipPresets.includes(tipPercent) ? tipPercent : 15);
    } else {
      setTipPercent(15); // Default back if no valid preset was active
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Main Calculator */}
      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold">Tip Calculator</h1>
          <p className="text-green-100 mt-2">Calculate tips and split bills easily</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Bill Amount */}
          <div>
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              Bill Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-600">
                $
              </span>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                step="0.01"
                min="0" // Prevent negative bill amount
                className="w-full pl-12 pr-4 py-4 text-3xl font-bold border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Tip Percentage */}
          <div>
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              Tip Percentage
            </label>
            <div className="grid grid-cols-5 gap-3 mb-4">
              {tipPresets.map((percent) => (
                <button
                  key={percent}
                  onClick={() => handlePresetClick(percent)}
                  className={`py-3 rounded-lg font-bold text-lg transition-all ${tipPercent === percent && customTip === '' // Only highlight if preset matches AND custom is empty
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {percent}%
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-600">Custom:</label>
              <input
                type="number"
                value={customTip}
                onChange={handleCustomTipChange}
                placeholder="Enter %"
                min="0" // Prevent negative tip percentage
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-lg font-semibold mb-3 text-gray-700">
              Number of People
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setNumPeople(Math.max(1, (parseInt(numPeople.toString()) || 1) - 1))}
                className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-2xl disabled:opacity-50"
                disabled={(parseInt(numPeople.toString()) || 1) <= 1} // Disable button if people <= 1
              >
                −
              </button>
              <input
                type="number"
                value={numPeople}
                onChange={handleNumPeopleChange}
                min="1"
                className="flex-1 text-center text-3xl font-bold border-2 border-gray-300 rounded-lg py-2 focus:border-green-500 focus:outline-none"
              />
              <button
                onClick={() => setNumPeople((parseInt(numPeople.toString()) || 0) + 1)}
                className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-2xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Results */}
          {/* Only show results if bill amount is positive */}
          {bill > 0 && (
            <div className="border-t-4 border-gray-200 pt-6 space-y-4">
              {/* Total Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 mb-1">Tip Amount</div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${tipAmount.toFixed(2)}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 mb-1">Bill Total</div>
                  <div className="text-3xl font-bold text-purple-600">
                    ${bill.toFixed(2)}
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 mb-1">Total Amount</div>
                  <div className="text-3xl font-bold text-green-600">
                    ${totalAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Per Person Breakdown */}
              {people > 1 && (
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200">
                  <h3 className="font-bold text-lg mb-4 text-center">
                    Per Person ({people} people)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Bill</div>
                      <div className="text-2xl font-bold text-orange-600">
                        ${perPersonBill.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Tip</div>
                      <div className="text-2xl font-bold text-orange-600">
                        ${perPersonTip.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Total</div>
                      <div className="text-2xl font-bold text-orange-600">
                        ${perPersonTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tipping Guide */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">Tipping Guide by Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🍽️ Restaurant Dining</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Excellent service: 20-25%</li>
              <li>• Good service: 15-20%</li>
              <li>• Average service: 10-15%</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🚕 Taxi/Rideshare</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Standard tip: 15-20%</li>
              <li>• Help with luggage: +$1-2</li>
              <li>• Airport trips: 15-20%</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🍕 Food Delivery</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Minimum: $3-5</li>
              <li>• Standard: 15-20%</li>
              <li>• Bad weather: 20-25%</li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-bold text-lg mb-2">✂️ Hair Salon</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Stylist: 15-20%</li>
              <li>• Shampoo person: $3-5</li>
              <li>• Colorist: 15-20%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-2 border-yellow-200">
        <h2 className="text-2xl font-bold mb-4">💡 Quick Tipping Tips</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>Calculate on pre-tax:</strong> Tip should usually be based on the bill amount before tax.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>Round up:</strong> It&apos;s common to round up to the nearest dollar for convenience.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>Cash is appreciated:</strong> When possible, tipping in cash often ensures the server receives it directly and immediately.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 mt-1">✓</span>
            <span><strong>Large parties:</strong> Check the bill - many restaurants automatically add gratuity (a tip) for groups of 6 or more.</span>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <details className="mb-3 p-4 bg-gray-50 rounded">
          <summary className="font-semibold cursor-pointer">Should I tip on the total bill or the amount before tax?</summary>
          <p className="mt-2 text-gray-700">The standard etiquette is to calculate the tip based on the subtotal (the amount before sales tax is added). However, tipping on the final total is also acceptable and often simpler.</p>
        </details>
        <details className="mb-3 p-4 bg-gray-50 rounded">
          <summary className="font-semibold cursor-pointer">Is 15% still considered an acceptable tip percentage?</summary>
          <p className="mt-2 text-gray-700">While 15% was the standard tip for many years, expectations have generally shifted. For good service in restaurants, 18-20% is now more common in many places, especially in the US. 15% might be seen as adequate for average service.</p>
        </details>
        <details className="p-4 bg-gray-50 rounded">
          <summary className="font-semibold cursor-pointer">How does the calculator help split the bill and tip?</summary>
          <p className="mt-2 text-gray-700">Enter the total bill amount, choose your desired tip percentage, and then enter the number of people sharing the bill. The calculator will show the total tip, the total amount including tip, and then break down the bill, tip, and total amount owed per person.</p>
        </details>
      </div>
    </div>
  );
}