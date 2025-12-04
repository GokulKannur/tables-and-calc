"use client";

import { useState } from 'react';
import { add, multiply, subtract, inv, det } from 'mathjs';

const MatrixCell = ({ value, onChange }: { value: string, onChange: (val: string) => void }) => (
  <input
    type="number"
    value={value}
    onChange={e => onChange(e.target.value)}
    className="w-16 h-12 text-center border rounded-md"
  />
);

export default function MatrixCalculator() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [matrixA, setMatrixA] = useState<string[][]>(Array(2).fill(Array(2).fill('0')));
  const [matrixB, setMatrixB] = useState<string[][]>(Array(2).fill(Array(2).fill('0')));
  const [result, setResult] = useState<number[][] | null>(null);
  const [scalar, setScalar] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleSizeChange = (val: string, type: 'rows' | 'cols') => {
    let num = parseInt(val);
    if (val === '') {
        if (type === 'rows') setRows(NaN);
        if (type === 'cols') setCols(NaN);
        return;
    }
    
    if (num > 10) num = 10;
    if (num < 1) num = 1;
    
    const newRows = type === 'rows' ? num : rows;
    const newCols = type === 'cols' ? num : cols;

    setRows(newRows);
    setCols(newCols);
    setMatrixA(Array(newRows).fill(0).map(() => Array(newCols).fill('0')));
    setMatrixB(Array(newRows).fill(0).map(() => Array(newCols).fill('0')));
    setResult(null);
    setError('');
  };

  const updateMatrix = (matrix: 'A' | 'B', r: number, c: number, value: string) => {
    const newMatrix = (matrix === 'A' ? matrixA : matrixB).map(row => [...row]);
    newMatrix[r][c] = value;
    if (matrix === 'A') setMatrixA(newMatrix);
    else setMatrixB(newMatrix);
  };
  
  const parseMatrix = (matrix: string[][]): number[][] => matrix.map(row => row.map(cell => parseFloat(cell) || 0));

  const performOperation = (op: 'add' | 'subtract' | 'multiply' | 'inverse' | 'determinant') => {
    setError('');
    setScalar(null);
    setResult(null);
    try {
      const numA = parseMatrix(matrixA);
      const numB = parseMatrix(matrixB);

      switch (op) {
        case 'add': setResult(add(numA, numB)); break;
        case 'subtract': setResult(subtract(numA, numB)); break;
        case 'multiply': setResult(multiply(numA, numB)); break;
        case 'inverse':
          if (rows !== cols) { setError('Inverse only exists for square matrices.'); return; }
          setResult(inv(numA));
          break;
        case 'determinant':
          if (rows !== cols) { setError('Determinant only exists for square matrices.'); return; }
          setScalar(det(numA));
          break;
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center p-4 bg-gray-50 rounded-lg">
        <div><label className="mr-2 font-medium">Rows:</label><input type="number" min="1" max="10" value={isNaN(rows) ? '' : rows} onChange={e => handleSizeChange(e.target.value, 'rows')} className="w-20 p-2 border rounded"/></div>
        <div><label className="mr-2 font-medium">Cols:</label><input type="number" min="1" max="10" value={isNaN(cols) ? '' : cols} onChange={e => handleSizeChange(e.target.value, 'cols')} className="w-20 p-2 border rounded"/></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {/* ✨ FIX: Added a scrolling container for large matrices */}
        <div className="overflow-x-auto p-2">
            <h3 className="text-lg font-semibold mb-2">Matrix A</h3>
            <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                {matrixA.map((row, r) => row.map((_, c) => <MatrixCell key={`A-${r}-${c}`} value={matrixA[r][c]} onChange={val => updateMatrix('A', r, c, val)} />))}
            </div>
        </div>
        <div className="overflow-x-auto p-2">
            <h3 className="text-lg font-semibold mb-2">Matrix B</h3>
            <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                {matrixB.map((row, r) => row.map((_, c) => <MatrixCell key={`B-${r}-${c}`} value={matrixB[r][c]} onChange={val => updateMatrix('B', r, c, val)} />))}
            </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center border-t pt-6">
        <button onClick={() => performOperation('add')} className="px-4 py-2 bg-blue-500 text-white rounded">A + B</button>
        <button onClick={() => performOperation('subtract')} className="px-4 py-2 bg-blue-500 text-white rounded">A - B</button>
        <button onClick={() => performOperation('multiply')} className="px-4 py-2 bg-blue-500 text-white rounded">A × B</button>
        <button onClick={() => performOperation('inverse')} className="px-4 py-2 bg-green-500 text-white rounded">Inverse(A)</button>
        <button onClick={() => performOperation('determinant')} className="px-4 py-2 bg-green-500 text-white rounded">Determinant(A)</button>
      </div>

      {error && <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg">{error}</div>}
      {scalar !== null && <div className="text-center"><h3 className="text-lg font-semibold">Result</h3><p className="text-3xl font-bold p-4 bg-gray-100 rounded-lg">{scalar.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p></div>}
      {result && (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Result</h3>
          <div className="overflow-x-auto inline-block">
            <div className="inline-grid gap-1 p-2 bg-gray-100 rounded-lg" style={{ gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 1fr))` }}>
                {result.map((row, r) => row.map((cell, c) => (
                <div key={`R-${r}-${c}`} className="w-24 h-12 flex items-center justify-center text-center border rounded bg-white p-1 overflow-x-auto whitespace-nowrap">
                    {cell.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                )))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}