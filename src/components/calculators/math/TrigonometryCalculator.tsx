// src/components/calculators/TrigonometryCalculator.tsx
"use client";

import { useState } from 'react';
import { evaluate } from 'mathjs';

// Helper to convert degrees to radians and vice-versa
const toRadians = (deg: number) => deg * (Math.PI / 180);
const toDegrees = (rad: number) => rad * (180 / Math.PI);

// List of functions for the dropdown
const trigFunctions = [
  'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
  'arcsin', 'arccos', 'arctan', 'arccsc', 'arcsec', 'arccot'
];

export default function TrigonometryCalculator() {
    // --- State for Right Triangle Calculator ---
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [sideC, setSideC] = useState('');
    const [angleA, setAngleA] = useState('');
    const [angleB, setAngleB] = useState('');
    const [angleUnit, setAngleUnit] = useState<'deg' | 'rad'>('deg');
    const [error, setError] = useState('');

    // --- State for Single Function Calculator ---
    const [func, setFunc] = useState('sin');
    const [funcAngle, setFuncAngle] = useState('');
    const [funcAngleUnit, setFuncAngleUnit] = useState<'deg' | 'rad'>('deg');
    const [funcResult, setFuncResult] = useState('');

    // --- State for Expression Calculator ---
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
            setError('Please provide at least two values for the triangle.');
            return;
        }

        if (!isNaN(a) && !isNaN(b)) { c = Math.sqrt(a*a + b*b); A = Math.atan(a/b); B = Math.atan(b/a); }
        else if (!isNaN(a) && !isNaN(c)) { if (c <= a) { setError('Hypotenuse (c) must be > side a.'); return; } b = Math.sqrt(c*c - a*a); A = Math.asin(a/c); B = Math.acos(a/c); }
        else if (!isNaN(b) && !isNaN(c)) { if (c <= b) { setError('Hypotenuse (c) must be > side b.'); return; } a = Math.sqrt(c*c - b*b); A = Math.acos(b/c); B = Math.asin(b/c); }
        else if (!isNaN(a) && !isNaN(A)) { b = a / Math.tan(A); c = a / Math.sin(A); B = Math.PI / 2 - A; }
        else if (!isNaN(b) && !isNaN(A)) { a = b * Math.tan(A); c = b / Math.cos(A); B = Math.PI / 2 - A; }
        else if (!isNaN(c) && !isNaN(A)) { a = c * Math.sin(A); b = c * Math.cos(A); B = Math.PI / 2 - A; }
        else { setError('This combination of inputs is not yet handled.'); return; }
        
        const format = (val: number) => parseFloat(val.toFixed(6)).toString();
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
        if (funcAngle === '') {
            setFuncResult('Please enter an angle');
            return;
        }
        try {
            const expr = `${func}(${funcAngle} ${funcAngleUnit})`;
            const result = evaluate(expr);
            setFuncResult(parseFloat(result.toFixed(10)).toString());
        } catch (_e) { // FIX: Added underscore to unused variable
            setFuncResult('Invalid input');
        }
    };

    const calculateExpression = () => {
         try {
            const result = evaluate(expression);
            setExpressionResult(parseFloat(result.toFixed(10)).toString());
        } catch (_e) { // FIX: Added underscore to unused variable
            setExpressionResult('Invalid expression');
        }
    };

    return (
        <div className="space-y-8">
            {/* --- Section 1: Right Triangle Calculator --- */}
            <div className="bg-white p-6 border rounded-lg shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-center">Right Triangle Calculator</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    <div className="space-y-4">
                        <div><label className="block text-sm font-medium text-slate-700">Side a</label><input type="number" value={sideA} onChange={e => setSideA(e.target.value)} className="w-full mt-1 p-2 border rounded-md" placeholder="Opposite"/></div>
                        <div><label className="block text-sm font-medium text-slate-700">Side b</label><input type="number" value={sideB} onChange={e => setSideB(e.target.value)} className="w-full mt-1 p-2 border rounded-md" placeholder="Adjacent"/></div>
                        <div><label className="block text-sm font-medium text-slate-700">Side c</label><input type="number" value={sideC} onChange={e => setSideC(e.target.value)} className="w-full mt-1 p-2 border rounded-md" placeholder="Hypotenuse"/></div>
                    </div>
                    <div className="space-y-4">
                        <div><label className="block text-sm font-medium text-slate-700">Angle A</label><input type="number" value={angleA} onChange={e => setAngleA(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div>
                        <div><label className="block text-sm font-medium text-slate-700">Angle B</label><input type="number" value={angleB} onChange={e => setAngleB(e.target.value)} className="w-full mt-1 p-2 border rounded-md"/></div>
                        <div className="flex items-center space-x-4 pt-2"><span className="text-sm font-medium text-slate-700">Units:</span><label className="flex items-center"><input type="radio" name="angleUnit" value="deg" checked={angleUnit === 'deg'} onChange={() => setAngleUnit('deg')} className="mr-1"/> °</label><label className="flex items-center"><input type="radio" name="angleUnit" value="rad" checked={angleUnit === 'rad'} onChange={() => setAngleUnit('rad')} className="mr-1"/> rad</label></div>
                    </div>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="flex justify-center space-x-4"><button onClick={calculateTriangle} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Calculate</button><button onClick={resetTriangle} className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400">Reset</button></div>
            </div>

            {/* --- Section 2: Trigonometric Functions Calculator --- */}
            <div className="bg-white p-6 border rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-center">Trigonometric Functions Calculator</h2>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <select value={func} onChange={e => setFunc(e.target.value)} className="w-full sm:w-auto p-2 border rounded-md">
                        {trigFunctions.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <input type="number" value={funcAngle} onChange={e => setFuncAngle(e.target.value)} className="w-full sm:w-auto flex-grow p-2 border rounded-md" placeholder="Enter angle/value"/>
                    <div className="flex items-center space-x-2"><label><input type="radio" name="funcAngleUnit" value="deg" checked={funcAngleUnit === 'deg'} onChange={() => setFuncAngleUnit('deg')} /> °</label><label className="flex items-center"><input type="radio" name="funcAngleUnit" value="rad" checked={funcAngleUnit === 'rad'} onChange={() => setFuncAngleUnit('rad')} /> rad</label></div>
                    <button onClick={calculateFunction} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 w-full sm:w-auto">=</button>
                    <input type="text" readOnly value={funcResult} className="w-full sm:w-auto flex-grow p-2 border bg-gray-100 rounded-md" placeholder="Result"/>
                </div>
            </div>
            
            {/* --- Section 3: Trigonometric Expression Calculator --- */}
            <div className="bg-white p-6 border rounded-lg shadow-sm space-y-4">
                 <h2 className="text-2xl font-bold text-center">Trigonometric Expression Calculator</h2>
                 <p className="text-sm text-center text-gray-500">Example: sin(45 deg) + cos(pi/3 rad)</p>
                 <div className="flex flex-col sm:flex-row items-center gap-2">
                    <input type="text" value={expression} onChange={e => setExpression(e.target.value)} className="w-full flex-grow p-2 border rounded-md font-mono" placeholder="Enter expression"/>
                    <button onClick={calculateExpression} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 w-full sm:w-auto">=</button>
                    <input type="text" readOnly value={expressionResult} className="w-full sm:w-auto p-2 border bg-gray-100 rounded-md" placeholder="Result"/>
                 </div>
            </div>

            {/* --- Section 4: Formula Reference --- */}
            <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-center mb-4">Trigonometric Functions Reference</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center font-mono text-slate-700">
                    <div>sin A = opposite / hypotenuse = a / c</div>
                    <div>csc A = hypotenuse / opposite = c / a</div>
                    <div>cos A = adjacent / hypotenuse = b / c</div>
                    <div>sec A = hypotenuse / adjacent = c / b</div>
                    <div>tan A = opposite / adjacent = a / b</div>
                    <div>cot A = adjacent / opposite = b / a</div>
                </div>
            </div>
        </div>
    );
}