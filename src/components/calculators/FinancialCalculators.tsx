// src/components/calculators/FinancialCalculators.tsx
"use client";

import { useState } from 'react';

// --- Individual Calculator Components ---

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState('250000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('30');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (p > 0 && r > 0 && n > 0) {
      const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <div className="space-y-4">
        <div><label className="block text-sm font-medium">Loan Amount ($)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <div><label className="block text-sm font-medium">Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <div><label className="block text-sm font-medium">Loan Term (Years)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <button onClick={calculate} className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate</button>
        {monthlyPayment && <div className="text-center text-2xl font-bold p-4 bg-gray-100 rounded-lg">Monthly Payment: ${monthlyPayment}</div>}
    </div>
  );
};

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('7');
  const [years, setYears] = useState('10');
  const [compounds, setCompounds] = useState('12'); // Monthly
  const [futureValue, setFutureValue] = useState('');

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(compounds);
    if (p > 0 && r > 0 && t > 0 && n > 0) {
      const amount = p * Math.pow(1 + (r / n), n * t);
      setFutureValue(amount.toFixed(2));
    }
  };

  return (
    <div className="space-y-4">
        <div><label className="block text-sm font-medium">Principal Amount ($)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <div><label className="block text-sm font-medium">Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <div><label className="block text-sm font-medium">Number of Years</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <div><label className="block text-sm font-medium">Compounds per Year</label><input type="number" value={compounds} onChange={e => setCompounds(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
        <button onClick={calculate} className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate</button>
        {futureValue && <div className="text-center text-2xl font-bold p-4 bg-gray-100 rounded-lg">Future Value: ${futureValue}</div>}
    </div>
  );
};

const SimpleInterestCalculator = () => {
    const [principal, setPrincipal] = useState('1000');
    const [rate, setRate] = useState('5');
    const [years, setYears] = useState('3');
    const [interest, setInterest] = useState('');

    const calculate = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const t = parseFloat(years);
        if(p > 0 && r > 0 && t > 0) {
            const i = p * r * t;
            setInterest(i.toFixed(2));
        }
    }
    
    return (
        <div className="space-y-4">
            <div><label className="block text-sm font-medium">Principal Amount ($)</label><input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
            <div><label className="block text-sm font-medium">Annual Rate (%)</label><input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
            <div><label className="block text-sm font-medium">Time (Years)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
            <button onClick={calculate} className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate</button>
            {interest && <div className="text-center text-2xl font-bold p-4 bg-gray-100 rounded-lg">Total Interest: ${interest}</div>}
        </div>
    )
}

const DiscountCalculator = () => {
    const [price, setPrice] = useState('100');
    const [discount, setDiscount] = useState('20');
    const [finalPrice, setFinalPrice] = useState('');

    const calculate = () => {
        const p = parseFloat(price);
        const d = parseFloat(discount);
        if (p > 0 && d >= 0) {
            const fp = p - (p * (d / 100));
            setFinalPrice(fp.toFixed(2));
        }
    }
    
    return (
         <div className="space-y-4">
            <div><label className="block text-sm font-medium">Original Price ($)</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
            <div><label className="block text-sm font-medium">Discount (%)</label><input type="number" value={discount} onChange={e => setDiscount(e.target.value)} className="w-full mt-1 p-2 border rounded-md" /></div>
            <button onClick={calculate} className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate</button>
            {finalPrice && <div className="text-center text-2xl font-bold p-4 bg-gray-100 rounded-lg">Final Price: ${finalPrice}</div>}
        </div>
    )
}

// --- Main Component to select which calculator to show ---
interface FinancialCalculatorsProps {
  slug: string;
}

export default function FinancialCalculators({ slug }: FinancialCalculatorsProps) {
  switch (slug) {
    case 'mortgage-calculator':
      return <MortgageCalculator />;
    case 'compound-interest-calculator':
      return <CompoundInterestCalculator />;
    case 'simple-interest-calculator':
        return <SimpleInterestCalculator />;
    case 'discount-calculator':
        return <DiscountCalculator />;
    // Add other cases here as you build them
    // e.g., case 'gst-calculator': return <GstCalculator />;
    default:
      return <div className="text-center text-red-500">Calculator not found or not yet implemented.</div>;
  }
}