// src/components/calculators/ElectricityCalculators.tsx
"use client";

import { useState, useEffect } from 'react';

// --- Data for the calculators ---
const applianceData: { [key: string]: number } = {
  'Air conditioner': 2500, 'Clothes dryer': 3000, 'Clothes iron': 1100,
  'Dishwasher': 1800, 'Electric kettle': 2000, 'Fan': 75,
  'Heater': 1500, 'Microwave oven': 1000, 'Desktop computer': 200,
  'Laptop computer': 50, 'Refrigerator': 150, 'Stereo receiver': 60,
  'Television': 100, 'Toaster oven': 1200, 'Vacuum cleaner': 500,
  'Washing machine': 2000, 'Water heater': 4500,
};

const countryData: { [key: string]: { cost: number; currency: string } } = {
  'Australia': { cost: 22, currency: 'cent' },
  'Canada': { cost: 17, currency: 'cent' },
  'France': { cost: 17, currency: 'cent' },
  'Germany': { cost: 30, currency: 'cent' },
  'India': { cost: 8, currency: 'rupee' },
  'Philippines': { cost: 10, currency: 'peso' },
  'Singapore': { cost: 20, currency: 'cent' },
  'United Kingdom': { cost: 28, currency: 'pence' },
  'United States': { cost: 16, currency: 'cent' },
  'Other country': { cost: 20, currency: 'cent' },
};

// --- Sub-component for Energy Consumption ---
const EnergyConsumptionCalculator = () => {
  const [power, setPower] = useState('1000');
  const [powerUnit, setPowerUnit] = useState('W');
  const [hours, setHours] = useState('2');
  const [consumption, setConsumption] = useState({ day: '', month: '', year: '' });

  const calculate = () => {
    let p = parseFloat(power);
    const h = parseFloat(hours);
    if (isNaN(p) || isNaN(h) || p < 0 || h < 0) return;
    
    if (powerUnit === 'kW') p *= 1000; // Convert kW to W for calculation
    
    const kwhDay = (p * h) / 1000;
    setConsumption({
      day: kwhDay.toFixed(2),
      month: (kwhDay * 30).toFixed(2),
      year: (kwhDay * 365).toFixed(2),
    });
  };

  const handleApplianceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPower = applianceData[e.target.value];
    if (selectedPower) {
        setPower(selectedPower.toString());
        setPowerUnit('W');
    }
  };
  
  useEffect(calculate, [power, powerUnit, hours]);

  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium">Typical appliance</label><select onChange={handleApplianceChange} className="w-full mt-1 p-2 border rounded-md"><option value="">-- select --</option>{Object.keys(applianceData).map(app => <option key={app} value={app}>{app}</option>)}</select></div>
      <div className="flex gap-2"><div className="flex-grow"><label className="block text-sm font-medium">Power consumption</label><input type="number" value={power} onChange={e => setPower(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div><div><label className="block text-sm font-medium">Unit</label><select value={powerUnit} onChange={e => setPowerUnit(e.target.value)} className="w-full mt-1 p-2 border rounded-md"><option value="W">watts (W)</option><option value="kW">kilowatts (kW)</option></select></div></div>
      <div><label className="block text-sm font-medium">Hours of use per day</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div>
      {consumption.day && (<div className="space-y-2 pt-4"><div className="p-3 bg-gray-100 rounded-lg">Energy consumed per day: <span className="font-bold">{consumption.day} kWh</span></div><div className="p-3 bg-gray-100 rounded-lg">Energy consumed per month: <span className="font-bold">{consumption.month} kWh</span></div><div className="p-3 bg-gray-100 rounded-lg">Energy consumed per year: <span className="font-bold">{consumption.year} kWh</span></div></div>)}
    </div>
  );
};


// --- Sub-component for Electricity Bill / Cost ---
const ElectricityCostCalculator = () => {
  const [country, setCountry] = useState('United States');
  const [costPerKwh, setCostPerKwh] = useState(countryData['United States'].cost.toString());
  const [currency, setCurrency] = useState(countryData['United States'].currency);
  const [power, setPower] = useState('1000');
  const [powerUnit, setPowerUnit] = useState('W');
  const [hours, setHours] = useState('2');
  const [costs, setCosts] = useState({ day: '', month: '', year: '' });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setCostPerKwh(countryData[selectedCountry].cost.toString());
    setCurrency(countryData[selectedCountry].currency);
  };
  
  const handleApplianceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPower = applianceData[e.target.value];
    if (selectedPower) {
        setPower(selectedPower.toString());
        setPowerUnit('W');
    }
  };

  const calculate = () => {
    let p = parseFloat(power);
    const h = parseFloat(hours);
    const c = parseFloat(costPerKwh);
    if (isNaN(p) || isNaN(h) || isNaN(c) || p < 0 || h < 0 || c < 0) return;
    
    if (powerUnit === 'kW') p *= 1000;
    
    const kwhDay = (p * h) / 1000;
    const costDay = kwhDay * (c / 100); // Cost is in cents/pence etc. so divide by 100
    
    setCosts({
      day: costDay.toFixed(2),
      month: (costDay * 30).toFixed(2),
      year: (costDay * 365).toFixed(2),
    });
  };

  useEffect(calculate, [power, powerUnit, hours, costPerKwh]);

  return (
    <div className="space-y-4">
      <div><label className="block text-sm font-medium">Select country</label><select value={country} onChange={handleCountryChange} className="w-full mt-1 p-2 border rounded-md">{Object.keys(countryData).map(c => <option key={c} value={c}>{c}</option>)}</select></div>
      <div><label className="block text-sm font-medium">Typical appliance</label><select onChange={handleApplianceChange} className="w-full mt-1 p-2 border rounded-md"><option value="">-- select --</option>{Object.keys(applianceData).map(app => <option key={app} value={app}>{app}</option>)}</select></div>
      <div className="flex gap-2"><div className="flex-grow"><label className="block text-sm font-medium">Power consumption</label><input type="number" value={power} onChange={e => setPower(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div><div><label className="block text-sm font-medium">Unit</label><select value={powerUnit} onChange={e => setPowerUnit(e.target.value)} className="w-full mt-1 p-2 border rounded-md"><option value="W">watts (W)</option><option value="kW">kilowatts (kW)</option></select></div></div>
      <div><label className="block text-sm font-medium">Hours of use per day</label><input type="number" value={hours} onChange={e => setHours(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div>
      <div className="flex gap-2"><div className="flex-grow"><label className="block text-sm font-medium">1 kilowatt-hour (kWh) cost</label><input type="number" value={costPerKwh} onChange={e => setCostPerKwh(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div><div><label className="block text-sm font-medium">Currency</label><input type="text" readOnly value={currency} className="w-full mt-1 p-2 border bg-gray-100 rounded-md"/></div></div>
      {costs.day && (<div className="space-y-2 pt-4"><div className="p-3 bg-blue-50 text-blue-800 rounded-lg">Electricity cost per day: <span className="font-bold">~${costs.day}</span></div><div className="p-3 bg-blue-50 text-blue-800 rounded-lg">Electricity cost per month: <span className="font-bold">~${costs.month}</span></div><div className="p-3 bg-blue-50 text-blue-800 rounded-lg">Electricity cost per year: <span className="font-bold">~${costs.year}</span></div></div>)}
    </div>
  );
};


// --- Main Component to select which calculator to show ---
interface ElectricityCalculatorsProps {
  slug: string;
}

export default function ElectricityCalculators({ slug }: ElectricityCalculatorsProps) {
  if (slug === 'energy-consumption-calculator') {
    return <EnergyConsumptionCalculator />;
  }
  // Both bill and cost calculators are essentially the same
  if (slug === 'electricity-bill-calculator' || slug === 'energy-cost-calculator') {
    return <ElectricityCostCalculator />;
  }
  return <div className="text-center text-red-500">Calculator not found.</div>;
}