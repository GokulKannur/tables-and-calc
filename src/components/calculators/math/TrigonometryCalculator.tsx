// src/components/calculators/TrigonometryCalculator.tsx
"use client";

import { useState } from 'react';
import { evaluate } from 'mathjs';

const toRadians = (deg: number) => deg * (Math.PI / 180);
const toDegrees = (rad: number) => rad * (180 / Math.PI);

const trigFunctions = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot', 'arcsin', 'arccos', 'arctan'];

export default function TrigonometryCalculator() {
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [sideC, setSideC] = useState('');
    const [angleA, setAngleA] = useState('');
    const [angleB, setAngleB] = useState('');
    const [angleUnit, setAngleUnit] = useState<'deg' | 'rad'>('deg');
    const [error, setError] = useState('');

    const [func, setFunc] = useState('sin');
    const [funcAngle, setFuncAngle] = useState('');
    const [funcAngleUnit, setFuncAngleUnit] = useState<'deg' | 'rad'>('deg');
    const [funcResult, setFuncResult] = useState('');

    const [expression, setExpression] = useState('sin(45 deg)');
    const [expressionResult, setExpressionResult] = useState('');

    const calculateTriangle = () => {
        setError('');
        let a = parseFloat(sideA);
        let b = parseFloat(sideB);
        let c = parseFloat(sideC);
        let A = parseFloat(angleA);
        let B = parseFloat(angleB);

        if (angleUnit === 'deg') {
            if (!isNaN(A)) A = toRadians(A);
            if (!isNaN(B)) B = toRadians(B);
        }

        const knownValues = [!isNaN(a), !isNaN(b), !isNaN(c), !isNaN(A), !isNaN(B)].filter(Boolean).length;
        if (knownValues < 2) {
            setError('Enter at least 2 values');
            return;
        }

        if (!isNaN(a) && !isNaN(b)) { c = Math.sqrt(a * a + b * b); A = Math.atan(a / b); B = Math.atan(b / a); }
        else if (!isNaN(a) && !isNaN(c)) { if (c <= a) { setError('c must be > a'); return; } b = Math.sqrt(c * c - a * a); A = Math.asin(a / c); B = Math.acos(a / c); }
        else if (!isNaN(b) && !isNaN(c)) { if (c <= b) { setError('c must be > b'); return; } a = Math.sqrt(c * c - b * b); A = Math.acos(b / c); B = Math.asin(b / c); }
        else if (!isNaN(a) && !isNaN(A)) { b = a / Math.tan(A); c = a / Math.sin(A); B = Math.PI / 2 - A; }
        else if (!isNaN(b) && !isNaN(A)) { a = b * Math.tan(A); c = b / Math.cos(A); B = Math.PI / 2 - A; }
        else if (!isNaN(c) && !isNaN(A)) { a = c * Math.sin(A); b = c * Math.cos(A); B = Math.PI / 2 - A; }
        else { setError('Invalid combination'); return; }

        const format = (val: number) => parseFloat(val.toFixed(4)).toString();
        setSideA(format(a));
        setSideB(format(b));
        setSideC(format(c));
        setAngleA(format(angleUnit === 'deg' ? toDegrees(A) : A));
        setAngleB(format(angleUnit === 'deg' ? toDegrees(B) : B));
    };

    const resetTriangle = () => {
        setSideA(''); setSideB(''); setSideC(''); setAngleA(''); setAngleB(''); setError('');
    };

    const calculateFunction = () => {
        if (funcAngle === '') { setFuncResult('Enter angle'); return; }
        try {
            const expr = `${func}(${funcAngle} ${funcAngleUnit})`;
            const result = evaluate(expr);
            setFuncResult(parseFloat(result.toFixed(8)).toString());
        } catch { setFuncResult('Error'); }
    };

    const calculateExpression = () => {
        try {
            const result = evaluate(expression);
            setExpressionResult(parseFloat(result.toFixed(8)).toString());
        } catch { setExpressionResult('Error'); }
    };

    return (
        <div className="space-y-6">
            {/* Right Triangle Calculator */}
            <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-center">Right Triangle</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div>
                        <label className="block text-xs font-medium mb-1">Side a</label>
                        <input type="number" value={sideA} onChange={e => setSideA(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm" placeholder="Opposite" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">Side b</label>
                        <input type="number" value={sideB} onChange={e => setSideB(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm" placeholder="Adjacent" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">Side c</label>
                        <input type="number" value={sideC} onChange={e => setSideC(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm" placeholder="Hypotenuse" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">Angle A</label>
                        <input type="number" value={angleA} onChange={e => setAngleA(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">Angle B</label>
                        <input type="number" value={angleB} onChange={e => setAngleB(e.target.value)} className="w-full p-2 border rounded-md bg-background text-sm" />
                    </div>
                    <div className="flex items-end gap-2 pb-1">
                        <label className="flex items-center text-sm"><input type="radio" name="angleUnit" checked={angleUnit === 'deg'} onChange={() => setAngleUnit('deg')} className="mr-1" /> °</label>
                        <label className="flex items-center text-sm"><input type="radio" name="angleUnit" checked={angleUnit === 'rad'} onChange={() => setAngleUnit('rad')} className="mr-1" /> rad</label>
                    </div>
                </div>
                {error && <p className="text-destructive text-sm text-center">{error}</p>}
                <div className="flex gap-2">
                    <button onClick={calculateTriangle} className="flex-1 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90">Calculate</button>
                    <button onClick={resetTriangle} className="px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80">Reset</button>
                </div>
            </div>

            {/* Trig Function Calculator */}
            <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-center">Trig Function</h2>
                <div className="flex flex-wrap gap-2">
                    <select value={func} onChange={e => setFunc(e.target.value)} className="p-2 border rounded-md bg-background text-sm">
                        {trigFunctions.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <input type="number" value={funcAngle} onChange={e => setFuncAngle(e.target.value)} className="flex-1 min-w-[80px] p-2 border rounded-md bg-background text-sm" placeholder="Angle" />
                    <div className="flex items-center gap-2">
                        <label className="text-sm"><input type="radio" name="funcUnit" checked={funcAngleUnit === 'deg'} onChange={() => setFuncAngleUnit('deg')} className="mr-1" />°</label>
                        <label className="text-sm"><input type="radio" name="funcUnit" checked={funcAngleUnit === 'rad'} onChange={() => setFuncAngleUnit('rad')} className="mr-1" />rad</label>
                    </div>
                    <button onClick={calculateFunction} className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg">=</button>
                    <input type="text" readOnly value={funcResult} className="flex-1 min-w-[100px] p-2 border bg-secondary rounded-md text-sm" placeholder="Result" />
                </div>
            </div>

            {/* Expression Calculator */}
            <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-center">Expression</h2>
                <p className="text-xs text-center text-muted-foreground">Example: sin(45 deg) + cos(pi/3 rad)</p>
                <div className="flex flex-wrap gap-2">
                    <input type="text" value={expression} onChange={e => setExpression(e.target.value)} className="flex-1 min-w-[150px] p-2 border rounded-md bg-background font-mono text-sm" />
                    <button onClick={calculateExpression} className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg">=</button>
                    <input type="text" readOnly value={expressionResult} className="flex-1 min-w-[100px] p-2 border bg-secondary rounded-md text-sm" placeholder="Result" />
                </div>
            </div>

            {/* Formula Reference */}
            <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm">
                <h2 className="text-lg font-bold text-center mb-3">Formulas</h2>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm font-mono text-muted-foreground">
                    <div>sin = a/c</div>
                    <div>csc = c/a</div>
                    <div>cos = b/c</div>
                    <div>sec = c/b</div>
                    <div>tan = a/b</div>
                    <div>cot = b/a</div>
                </div>
            </div>
        </div>
    );
}