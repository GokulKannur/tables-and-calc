"use client";

import React, { useState, useEffect } from 'react';
import { converterData } from '@/lib/data/converters';
import { ArrowRightLeft, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UnitConverterProps {
    category: string;
}

export default function UnitConverter({ category }: UnitConverterProps) {
    const data = converterData[category];

    // Default to first two units if available
    const [amount, setAmount] = useState<string>('1');
    const [fromUnit, setFromUnit] = useState<string>(data?.units[0]?.id || '');
    const [toUnit, setToUnit] = useState<string>(data?.units[1]?.id || data?.units[0]?.id || '');
    const [result, setResult] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (data && data.units.length > 0) {
            if (!fromUnit) setFromUnit(data.units[0].id);
            if (!toUnit) setToUnit(data.units[1]?.id || data.units[0].id);
        }
    }, [data, fromUnit, toUnit]);

    // Moved convertTemperature logic here or use it directly
    const convertTemperature = (val: number, from: string, to: string): number => {
        if (from === to) return val;

        let celsius = val;

        // Convert to Celsius first
        if (from === 'f') celsius = (val - 32) * (5 / 9);
        else if (from === 'k') celsius = val - 273.15;

        // Convert from Celsius to target
        if (to === 'c') return celsius;
        if (to === 'f') return (celsius * 9 / 5) + 32;
        if (to === 'k') return celsius + 273.15;

        return celsius;
    };

    const calculateResult = React.useCallback(() => {
        if (!amount || isNaN(parseFloat(amount)) || !fromUnit || !toUnit || !data) {
            setResult(null);
            return;
        }

        const val = parseFloat(amount);
        let res = 0;

        if (category === 'temperature') {
            res = convertTemperature(val, fromUnit, toUnit);
        } else if (data.factors) {
            const fromFactor = data.factors[fromUnit];
            const toFactor = data.factors[toUnit];
            res = val * (toFactor / fromFactor); // Correct formula based on previous check
            res = val * (fromFactor / toFactor);
        }

        // Format result to avoid floating point errors but keep precision
        setResult(parseFloat(res.toPrecision(10)).toString());
    }, [amount, fromUnit, toUnit, data, category]);

    useEffect(() => {
        calculateResult();
    }, [calculateResult]);

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const copyToClipboard = () => {
        if (result) {
            navigator.clipboard.writeText(result);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (!data) {
        return <div className="text-center text-red-500">Invalid converter category.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
                {/* From Section */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">From</label>
                    <div className="p-4 bg-card rounded-xl border border-border space-y-3">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full text-3xl font-bold bg-transparent border-none focus:ring-0 p-0 placeholder:text-muted-foreground text-foreground"
                            placeholder="0"
                        />
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                            {data.units.map((u) => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center md:pt-6">
                    <button
                        onClick={handleSwap}
                        className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground transition-colors"
                        aria-label="Swap units"
                    >
                        <ArrowRightLeft className="w-5 h-5" />
                    </button>
                </div>

                {/* To Section */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">To</label>
                    <div className="p-4 bg-card rounded-xl border border-border space-y-3">
                        <div className="w-full text-3xl font-bold text-primary truncate min-h-[36px]">
                            {result !== null ? result : '...'}
                        </div>
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                            {data.units.map((u) => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Result Card */}
            {result && (
                <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-xl p-6 flex items-center justify-between shadow-lg">
                    <div>
                        <div className="text-slate-400 text-sm mb-1">Result</div>
                        <div className="text-2xl sm:text-3xl font-bold">
                            {amount} {data.units.find(u => u.id === fromUnit)?.name} =
                            <span className="text-primary-foreground ml-2">{result} {data.units.find(u => u.id === toUnit)?.name}</span>
                        </div>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Copy result"
                    >
                        {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                </div>
            )}

            {/* Info Section */}
            <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border">
                {fromUnit && data.info?.[fromUnit] && (
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
                            About {data.info[fromUnit].name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{data.info[fromUnit].definition}</p>
                        {data.info[fromUnit].history && (
                            <p className="text-sm text-muted-foreground/80 italic">History: {data.info[fromUnit].history}</p>
                        )}
                    </div>
                )}
                {toUnit && data.info?.[toUnit] && toUnit !== fromUnit && (
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
                            About {data.info[toUnit].name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{data.info[toUnit].definition}</p>
                        {data.info[toUnit].history && (
                            <p className="text-sm text-muted-foreground/80 italic">History: {data.info[toUnit].history}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
