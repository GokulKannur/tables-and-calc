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
    <div>
      {/* --- Desktop Table (Visible on medium screens and up) --- */}
      <div className="hidden md:block">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">{fromUnitName}</th>
              <th scope="col" className="px-6 py-3">{toUnitName}</th>
            </tr>
          </thead>
          <tbody>
            {tableValues.map(val => (
              <tr key={val} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{val.toLocaleString()} {fromUnitName}</td>
                <td className="px-6 py-4">{(val * factor).toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnitName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Mobile Card Layout (Visible on small screens) --- */}
      <div className="block md:hidden space-y-3">
        {tableValues.map(val => (
          <div key={val} className="p-4 bg-white border rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">{fromUnitName}</span>
              <span className="font-semibold text-slate-800">{val.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-slate-500">{toUnitName}</span>
              <span className="font-semibold text-blue-600">{(val * factor).toLocaleString(undefined, { maximumFractionDigits: 6 })}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}