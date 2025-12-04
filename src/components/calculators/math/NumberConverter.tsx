"use client";

import { useState, useEffect } from 'react';

const bases = [
  { id: 'bin', name: 'Binary (2)', value: 2 },
  { id: 'oct', name: 'Octal (8)', value: 8 },
  { id: 'dec', name: 'Decimal (10)', value: 10 },
  { id: 'hex', name: 'Hex (16)', value: 16 },
  { id: 'txt', name: 'Text (ASCII)' },
];

const textToBinary = (text: string): string => {
  return text.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
};

const binaryToText = (binary: string): string => {
  const cleanedBinary = binary.replace(/[^01]/g, '');
  if (cleanedBinary.length % 8 !== 0) {
    throw new Error("Invalid binary string length for ASCII conversion.");
  }
  return cleanedBinary.match(/.{1,8}/g)?.map(bin => {
    return String.fromCharCode(parseInt(bin, 2));
  }).join('') || '';
};

interface NumberConverterProps {
  defaultFrom?: string;
  defaultTo?: string;
}

export default function NumberConverter({ defaultFrom = 'bin', defaultTo = 'dec' }: NumberConverterProps) {
  const [inputValue, setInputValue] = useState('1010');
  const [fromType, setFromType] = useState(defaultFrom);
  const [toType, setToType] = useState(defaultTo);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (inputValue.trim() === '') {
      setResult('');
      setError('');
      return;
    }
    setError('');

    try {
      let output = '';
      if (fromType === 'txt') {
        if (toType === 'bin') output = textToBinary(inputValue);
        else if (toType === 'txt') output = inputValue;
        else {
          const binary = textToBinary(inputValue).replace(/\s/g, '');
          const decimal = parseInt(binary, 2);
          const toBase = bases.find(b => b.id === toType)?.value;
          output = decimal.toString(toBase || 10).toUpperCase();
        }
      } else if (toType === 'txt') {
        const fromBase = bases.find(b => b.id === fromType)?.value;
        const decimal = parseInt(inputValue, fromBase);
        if (isNaN(decimal)) throw new Error("Invalid input number");
        let binary = decimal.toString(2);
        while (binary.length % 8 !== 0) {
          binary = '0' + binary;
        }
        output = binaryToText(binary.match(/.{1,8}/g)?.join(' ') || '');
      } else {
        const fromBase = bases.find(b => b.id === fromType)?.value;
        const toBase = bases.find(b => b.id === toType)?.value;
        if (!fromBase || !toBase) throw new Error("Invalid base selection");

        const decimalValue = parseInt(inputValue, fromBase);
        if (isNaN(decimalValue)) throw new Error("Invalid number for the selected base");

        output = decimalValue.toString(toBase).toUpperCase();
      }
      setResult(output);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
      setResult('');
    }

  }, [inputValue, fromType, toType]);

  useEffect(() => {
    setFromType(defaultFrom);
    setToType(defaultTo);
  }, [defaultFrom, defaultTo]);

  return (
    <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="from-base" className="block text-sm font-medium mb-1">From</label>
          <select id="from-base" value={fromType} onChange={e => setFromType(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm">
            {bases.map(base => <option key={base.id} value={base.id}>{base.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="to-base" className="block text-sm font-medium mb-1">To</label>
          <select id="to-base" value={toType} onChange={e => setToType(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm">
            {bases.map(base => <option key={base.id} value={base.id}>{base.name}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="input-value" className="block text-sm font-medium mb-1">Enter Value</label>
        <textarea
          id="input-value"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="w-full p-3 border rounded-lg bg-background font-mono text-sm"
          rows={2}
        />
        {error && <p className="text-destructive text-sm mt-1">{error}</p>}
      </div>
      {result && !error && (
        <div className="pt-4 border-t">
          <p className="text-muted-foreground text-sm mb-2">Result:</p>
          <p className="text-2xl md:text-3xl font-bold font-mono text-primary p-4 bg-primary/10 rounded-lg break-all">
            {result}
          </p>
        </div>
      )}
    </div>
  );
}