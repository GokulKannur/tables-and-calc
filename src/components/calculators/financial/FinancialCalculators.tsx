"use client";

import { useState } from 'react';
import { DollarSign, Percent, Calendar, Calculator, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Shared UI Components ---

const InputGroup = ({ label, value, onChange, icon: Icon, type = "number", placeholder }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-2.5 text-muted-foreground">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          Icon ? "pl-9" : ""
        )}
      />
    </div>
  </div>
);

const ResultCard = ({ label, value, subtext }: { label: string, value: string, subtext?: string }) => (
  <div className="mt-6 rounded-lg border bg-card text-card-foreground shadow-sm">
    <div className="p-6 flex flex-col items-center text-center space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      <div className="text-3xl font-bold tracking-tight text-primary">{value}</div>
      {subtext && <p className="text-xs text-muted-foreground">{subtext}</p>}
    </div>
  </div>
);

const CalculateButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
  >
    <Calculator className="mr-2 h-4 w-4" />
    Calculate
  </button>
);

// --- Individual Calculator Components ---

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState('250000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('30');
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);

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
    <div className="space-y-6 max-w-md mx-auto">
      <div className="grid gap-4">
        <InputGroup label="Loan Amount" value={principal} onChange={(e: any) => setPrincipal(e.target.value)} icon={DollarSign} />
        <InputGroup label="Interest Rate (%)" value={rate} onChange={(e: any) => setRate(e.target.value)} icon={Percent} />
        <InputGroup label="Loan Term (Years)" value={years} onChange={(e: any) => setYears(e.target.value)} icon={Calendar} />
      </div>
      <CalculateButton onClick={calculate} />
      {monthlyPayment && <ResultCard label="Monthly Payment" value={`$${monthlyPayment}`} />}
    </div>
  );
};

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('7');
  const [years, setYears] = useState('10');
  const [compounds, setCompounds] = useState('12');
  const [futureValue, setFutureValue] = useState<string | null>(null);

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
    <div className="space-y-6 max-w-md mx-auto">
      <div className="grid gap-4">
        <InputGroup label="Principal Amount" value={principal} onChange={(e: any) => setPrincipal(e.target.value)} icon={DollarSign} />
        <InputGroup label="Annual Interest Rate (%)" value={rate} onChange={(e: any) => setRate(e.target.value)} icon={Percent} />
        <InputGroup label="Time Period (Years)" value={years} onChange={(e: any) => setYears(e.target.value)} icon={Calendar} />
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Compound Frequency</label>
          <select
            value={compounds}
            onChange={(e) => setCompounds(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="1">Annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>
      </div>
      <CalculateButton onClick={calculate} />
      {futureValue && <ResultCard label="Future Value" value={`$${futureValue}`} subtext={`Total Interest: $${(parseFloat(futureValue) - parseFloat(principal)).toFixed(2)}`} />}
    </div>
  );
};

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('1000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('3');
  const [interest, setInterest] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    if (p > 0 && r > 0 && t > 0) {
      const i = p * r * t;
      setInterest(i.toFixed(2));
    }
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="grid gap-4">
        <InputGroup label="Principal Amount" value={principal} onChange={(e: any) => setPrincipal(e.target.value)} icon={DollarSign} />
        <InputGroup label="Annual Rate (%)" value={rate} onChange={(e: any) => setRate(e.target.value)} icon={Percent} />
        <InputGroup label="Time (Years)" value={years} onChange={(e: any) => setYears(e.target.value)} icon={Calendar} />
      </div>
      <CalculateButton onClick={calculate} />
      {interest && <ResultCard label="Total Interest" value={`$${interest}`} subtext={`Total Amount: $${(parseFloat(principal) + parseFloat(interest)).toFixed(2)}`} />}
    </div>
  )
}

const DiscountCalculator = () => {
  const [price, setPrice] = useState('100');
  const [discount, setDiscount] = useState('20');
  const [finalPrice, setFinalPrice] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (p > 0 && d >= 0) {
      const fp = p - (p * (d / 100));
      setFinalPrice(fp.toFixed(2));
    }
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="grid gap-4">
        <InputGroup label="Original Price" value={price} onChange={(e: any) => setPrice(e.target.value)} icon={DollarSign} />
        <InputGroup label="Discount (%)" value={discount} onChange={(e: any) => setDiscount(e.target.value)} icon={Percent} />
      </div>
      <CalculateButton onClick={calculate} />
      {finalPrice && <ResultCard label="Final Price" value={`$${finalPrice}`} subtext={`You Save: $${(parseFloat(price) - parseFloat(finalPrice)).toFixed(2)}`} />}
    </div>
  )
}

const InflationCalculator = () => {
  const [amount, setAmount] = useState('1000');
  const [rate, setRate] = useState('3');
  const [years, setYears] = useState('10');
  const [futureValue, setFutureValue] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    if (p > 0 && r >= 0 && t > 0) {
      // Future Value = Present Value * (1 + inflation rate)^years
      // Or Purchasing Power = Present Value / (1 + inflation rate)^years
      // Let's calculate Future Cost (what will cost $1000 today in X years)
      const fv = p * Math.pow(1 + r, t);
      setFutureValue(fv.toFixed(2));
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="grid gap-4">
        <InputGroup label="Current Cost" value={amount} onChange={(e: any) => setAmount(e.target.value)} icon={DollarSign} />
        <InputGroup label="Inflation Rate (%)" value={rate} onChange={(e: any) => setRate(e.target.value)} icon={TrendingUp} />
        <InputGroup label="Years" value={years} onChange={(e: any) => setYears(e.target.value)} icon={Calendar} />
      </div>
      <CalculateButton onClick={calculate} />
      {futureValue && <ResultCard label="Future Cost" value={`$${futureValue}`} subtext={`In ${years} years at ${rate}% inflation`} />}
    </div>
  );
}

// GST Calculator for India
const GSTCalculator = () => {
  const [amount, setAmount] = useState('1000');
  const [gstRate, setGstRate] = useState('18');
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [result, setResult] = useState<{
    originalAmount: number;
    gstAmount: number;
    finalAmount: number;
    cgst: number;
    sgst: number;
  } | null>(null);

  const gstRates = [
    { value: '5', label: '5% (Essential goods)' },
    { value: '12', label: '12% (Standard goods)' },
    { value: '18', label: '18% (Most services)' },
    { value: '28', label: '28% (Luxury items)' },
  ];

  const calculate = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (amt > 0 && rate >= 0) {
      if (mode === 'add') {
        // Add GST to amount
        const gstAmount = (amt * rate) / 100;
        const finalAmount = amt + gstAmount;
        setResult({
          originalAmount: amt,
          gstAmount: gstAmount,
          finalAmount: finalAmount,
          cgst: gstAmount / 2,
          sgst: gstAmount / 2,
        });
      } else {
        // Remove GST from amount (amount includes GST)
        const originalAmount = (amt * 100) / (100 + rate);
        const gstAmount = amt - originalAmount;
        setResult({
          originalAmount: originalAmount,
          gstAmount: gstAmount,
          finalAmount: amt,
          cgst: gstAmount / 2,
          sgst: gstAmount / 2,
        });
      }
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Mode Toggle */}
      <div className="flex rounded-lg border overflow-hidden">
        <button
          onClick={() => setMode('add')}
          className={cn(
            "flex-1 py-2.5 text-sm font-medium transition-colors",
            mode === 'add'
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-secondary"
          )}
        >
          Add GST
        </button>
        <button
          onClick={() => setMode('remove')}
          className={cn(
            "flex-1 py-2.5 text-sm font-medium transition-colors",
            mode === 'remove'
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-secondary"
          )}
        >
          Remove GST
        </button>
      </div>

      <div className="grid gap-4">
        <InputGroup
          label={mode === 'add' ? "Amount (Excluding GST)" : "Amount (Including GST)"}
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
          icon={DollarSign}
          placeholder="Enter amount in ₹"
        />

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">GST Rate</label>
          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {gstRates.map((rate) => (
              <option key={rate.value} value={rate.value}>
                {rate.label}
              </option>
            ))}
            <option value="0">0% (Exempt)</option>
            <option value="3">3% (Gold/Silver)</option>
          </select>
        </div>
      </div>

      <CalculateButton onClick={calculate} />

      {result && (
        <div className="space-y-4">
          {/* Main Result */}
          <ResultCard
            label={mode === 'add' ? "Total Amount (with GST)" : "Original Amount (without GST)"}
            value={`₹${mode === 'add' ? result.finalAmount.toFixed(2) : result.originalAmount.toFixed(2)}`}
          />

          {/* Breakdown */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
            <h4 className="font-medium mb-3 text-sm">GST Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Original Amount:</span>
                <span className="font-medium">₹{result.originalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">CGST ({parseFloat(gstRate) / 2}%):</span>
                <span className="font-medium">₹{result.cgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SGST ({parseFloat(gstRate) / 2}%):</span>
                <span className="font-medium">₹{result.sgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="text-muted-foreground">Total GST ({gstRate}%):</span>
                <span className="font-medium text-primary">₹{result.gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Final Amount:</span>
                <span className="font-bold text-lg">₹{result.finalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
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
    case 'inflation-calculator':
      return <InflationCalculator />;
    case 'gst-calculator':
      return <GSTCalculator />;
    default:
      return <div className="text-center text-destructive p-4">Calculator not found or not yet implemented.</div>;
  }
}