// src/components/calculators/ScientificCalculator.tsx
"use client";

import { useState } from 'react';
import { evaluate } from 'mathjs';

const CalculatorButton = ({ onClick, label, className }: { onClick: () => void, label: string, className?: string }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center h-16 text-xl font-medium rounded-lg transition-colors ${className}`}
    >
        {label}
    </button>
);

export default function ScientificCalculator() {
    const [expression, setExpression] = useState('');
    const [display, setDisplay] = useState('0');

    const handleInput = (value: string) => {
        if (display === '0' || display === 'Error') {
            setDisplay(value);
            setExpression(value);
        } else {
            setDisplay(prev => prev + value);
            setExpression(prev => prev + value);
        }
    };

    const handleOperator = (op: string) => {
        setExpression(prev => `${prev} ${op} `);
        setDisplay(op);
    };

    const calculateResult = () => {
        try {
            const result = evaluate(expression.replace('^', '^'));
            const formattedResult = parseFloat(result.toFixed(10)).toString();
            setDisplay(formattedResult);
            setExpression(formattedResult);
        } catch (error) {
            setDisplay('Error');
            setExpression('');
        }
    };

    const clearAll = () => {
        setExpression('');
        setDisplay('0');
    };

    const backspace = () => {
        setDisplay(prev => prev.slice(0, -1) || '0');
        setExpression(prev => prev.trim().slice(0, -1).trim());
    };

    return (
        <div className="w-full max-w-md mx-auto bg-gray-900 text-white rounded-2xl shadow-lg p-4 space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 text-right overflow-x-auto">
                <div className="text-gray-400 text-sm h-6 truncate">{expression || ' '}</div>
                <div className="text-4xl font-bold h-12">{display}</div>
            </div>

            <div className="grid grid-cols-5 gap-2 text-sm sm:text-xl">
                {/* Scientific Functions */}
                <CalculatorButton onClick={() => handleInput('sin(')} label="sin" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('cos(')} label="cos" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('tan(')} label="tan" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('log(')} label="log" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('sqrt(')} label="√" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('(')} label="(" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput(')')} label=")" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('^')} label="xʸ" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('pi')} label="π" className="bg-gray-700 hover:bg-gray-600" />
                <CalculatorButton onClick={() => handleInput('e')} label="e" className="bg-gray-700 hover:bg-gray-600" />
                
                {/* Number Pad & Basic Ops */}
                <CalculatorButton onClick={clearAll} label="C" className="bg-red-500 hover:bg-red-400" />
                <CalculatorButton onClick={backspace} label="⌫" className="bg-red-500 hover:bg-red-400" />
                <CalculatorButton onClick={() => handleOperator('%')} label="%" className="bg-orange-500 hover:bg-orange-400" />
                <CalculatorButton onClick={() => handleOperator('/')} label="÷" className="bg-orange-500 hover:bg-orange-400" />
                <CalculatorButton onClick={() => handleOperator('*')} label="×" className="bg-orange-500 hover:bg-orange-400" />
                
                <CalculatorButton onClick={() => handleInput('7')} label="7" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('8')} label="8" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('9')} label="9" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleOperator('-')} label="-" className="bg-orange-500 hover:bg-orange-400" />
                <CalculatorButton onClick={() => handleInput('^2')} label="x²" className="bg-gray-700 hover:bg-gray-600" />

                <CalculatorButton onClick={() => handleInput('4')} label="4" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('5')} label="5" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('6')} label="6" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleOperator('+')} label="+" className="bg-orange-500 hover:bg-orange-400" />
                <CalculatorButton onClick={calculateResult} label="=" className="bg-blue-500 hover:bg-blue-400 row-span-2" />

                <CalculatorButton onClick={() => handleInput('1')} label="1" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('2')} label="2" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('3')} label="3" className="bg-gray-500 hover:bg-gray-400" />
                <CalculatorButton onClick={() => handleInput('0')} label="0" className="bg-gray-500 hover:bg-gray-400 col-span-2" />
                <CalculatorButton onClick={() => handleInput('.')} label="." className="bg-gray-500 hover:bg-gray-400" />
            </div>
        </div>
    );
}