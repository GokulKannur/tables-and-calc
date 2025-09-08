"use client"; 

import { useState, useEffect } from 'react'; 

const colorMap: { [key: string]: string } = { 
  Black: 'bg-black', Brown: 'bg-yellow-800', Red: 'bg-red-500', Orange: 'bg-orange-500', 
  Yellow: 'bg-yellow-400', Green: 'bg-green-500', Blue: 'bg-blue-500', Violet: 'bg-violet-500', 
  Gray: 'bg-gray-500', White: 'bg-white', Gold: 'bg-yellow-500', Silver: 'bg-slate-400', 
}; 

const bandsData = { 
  band1: [ 
    { color: 'Brown', value: 1 }, { color: 'Red', value: 2 }, { color: 'Orange', value: 3 }, 
    { color: 'Yellow', value: 4 }, { color: 'Green', value: 5 }, { color: 'Blue', value: 6 }, 
    { color: 'Violet', value: 7 }, { color: 'Gray', value: 8 }, { color: 'White', value: 9 }, 
  ], 
  band2: [ 
    { color: 'Black', value: 0 }, { color: 'Brown', value: 1 }, { color: 'Red', value: 2 }, 
    { color: 'Orange', value: 3 }, { color: 'Yellow', value: 4 }, { color: 'Green', value: 5 }, 
    { color: 'Blue', value: 6 }, { color: 'Violet', value: 7 }, { color: 'Gray', value: 8 }, 
    { color: 'White', value: 9 }, 
  ], 
  multiplier: [ 
    { color: 'Black', value: 1, name: '×1' }, { color: 'Brown', value: 10, name: '×10' }, 
    { color: 'Red', value: 100, name: '×100' }, { color: 'Orange', value: 1000, name: '×1k' }, 
    { color: 'Yellow', value: 10000, name: '×10k' }, { color: 'Green', value: 100000, name: '×100k' }, 
    { color: 'Blue', value: 1000000, name: '×1M' }, { color: 'Gold', value: 0.1, name: '×0.1' }, 
    { color: 'Silver', value: 0.01, name: '×0.01' }, 
  ], 
  tolerance: [ 
    { color: 'Brown', value: '±1%', name: '±1%' }, { color: 'Red', value: '±2%', name: '±2%' }, 
    { color: 'Green', value: '±0.5%', name: '±0.5%' }, { color: 'Blue', value: '±0.25%', name: '±0.25%' }, 
    { color: 'Violet', value: '±0.1%', name: '±0.1%' }, { color: 'Gold', value: '±5%', name: '±5%' }, 
    { color: 'Silver', value: '±10%', name: '±10%' }, 
  ], 
}; 

// FIXED: Define a specific type to replace 'any'
type BandOption = { 
  color: string; 
  value: number | string; 
  name?: string; 
};

export default function ResistorColorCodeCalculator() { 
  const [band1, setBand1] = useState(bandsData.band1[0].value); 
  const [band2, setBand2] = useState(bandsData.band2[0].value); 
  const [multiplier, setMultiplier] = useState(bandsData.multiplier[2].value); 
  const [tolerance, setTolerance] = useState(bandsData.tolerance[5].value); 
  const [resistance, setResistance] = useState(''); 

  useEffect(() => { 
    const rawValue = (Number(band1) * 10 + Number(band2)) * Number(multiplier); 
    let displayValue; 
    if (rawValue >= 1000000) { 
      displayValue = `${(rawValue / 1000000).toLocaleString()} MΩ`; 
    } else if (rawValue >= 1000) { 
      displayValue = `${(rawValue / 1000).toLocaleString()} kΩ`; 
    } else { 
      displayValue = `${rawValue.toLocaleString()} Ω`; 
    } 
    setResistance(`${displayValue} ${tolerance}`); 
  }, [band1, band2, multiplier, tolerance]); 

  // FIXED: Updated function signature with the new BandOption type
  const findColor = (bandList: BandOption[], value: number | string) => bandList.find(b => b.value === value)?.color || 'White'; 

  return ( 
    <div className="bg-white p-6 border rounded-lg shadow-sm"> 
      {/* Visual Resistor */} 
      <div className="flex justify-center items-center my-8"> 
        <div className="w-6 h-12 bg-slate-200 border-y-2 border-slate-400"></div> 
        <div className="w-48 h-20 bg-amber-200 rounded-lg flex items-center justify-center gap-3 px-4 border-2 border-amber-300"> 
          <div className={`w-4 h-20 ${colorMap[findColor(bandsData.band1, band1)]} border-x`}></div> 
          <div className={`w-4 h-20 ${colorMap[findColor(bandsData.band2, band2)]} border-x`}></div> 
          <div className={`w-4 h-20 ${colorMap[findColor(bandsData.multiplier as BandOption[], multiplier)]} border-x`}></div> 
          <div className={`w-4 h-20 ${colorMap[findColor(bandsData.tolerance, tolerance)]} border-x`}></div> 
        </div> 
        <div className="w-6 h-12 bg-slate-200 border-y-2 border-slate-400"></div> 
      </div> 
      
      {/* Dropdowns */} 
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
        <select onChange={(e) => setBand1(Number(e.target.value))} className="p-2 border border-slate-300 rounded-md"> 
          {bandsData.band1.map(b => <option key={b.color} value={b.value}>{b.color}</option>)} 
        </select> 
        <select onChange={(e) => setBand2(Number(e.target.value))} className="p-2 border border-slate-300 rounded-md"> 
          {bandsData.band2.map(b => <option key={b.color} value={b.value}>{b.color}</option>)} 
        </select> 
        <select onChange={(e) => setMultiplier(Number(e.target.value))} defaultValue={bandsData.multiplier[2].value} className="p-2 border border-slate-300 rounded-md"> 
          {bandsData.multiplier.map(b => <option key={b.color} value={b.value}>{b.name} ({b.color})</option>)} 
        </select> 
        <select onChange={(e) => setTolerance(e.target.value)} defaultValue={bandsData.tolerance[5].value} className="p-2 border border-slate-300 rounded-md"> 
          {bandsData.tolerance.map(b => <option key={b.color} value={b.value}>{b.name} ({b.color})</option>)} 
        </select> 
      </div> 

      {/* Result */} 
      <div className="mt-6 text-center"> 
        <p className="text-slate-600">Resistance Value:</p> 
        <p className="text-4xl font-bold text-blue-600 p-4 bg-blue-50 rounded-lg"> 
          {resistance} 
        </p> 
      </div> 
    </div> 
  ); 
}