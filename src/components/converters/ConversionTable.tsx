// src/components/converters/ConversionTable.tsx
"use client";

interface ConversionTableProps {
  fromUnitName: string;
  toUnitName: string;
  factor: number;
}

const tableValues = [0.01, 0.1, 1, 2, 5, 10, 20, 50, 100, 1000];

export default function ConversionTable({ fromUnitName, toUnitName, factor }: ConversionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[400px] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">{fromUnitName}</th>
            <th scope="col" className="px-6 py-3">{toUnitName}</th>
          </tr>
        </thead>
        <tbody>
          {tableValues.map(val => (
            <tr key={val} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{val} {fromUnitName}</td>
              <td className="px-6 py-4">{(val * factor).toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnitName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}