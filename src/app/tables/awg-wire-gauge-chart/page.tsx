// src/app/tables/awg-wire-gauge-chart/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWG Wire Gauge Chart | TablesAndCalc',
  description: 'A reference chart for American Wire Gauge (AWG) standards, showing gauge, diameter, area, and resistance for solid copper wire.',
};

const awgData = [
  // ... your data remains the same
  { gauge: '4/0', dia_mm: 11.684, area_mm2: 107.2, resistance_km: 0.1608 },
  { gauge: '2/0', dia_mm: 9.266, area_mm2: 67.43, resistance_km: 0.2557 },
  { gauge: '0', dia_mm: 8.251, area_mm2: 53.48, resistance_km: 0.3224 },
  { gauge: '2', dia_mm: 6.544, area_mm2: 33.63, resistance_km: 0.5127 },
  { gauge: '4', dia_mm: 5.189, area_mm2: 21.15, resistance_km: 0.8152 },
  { gauge: '6', dia_mm: 4.115, area_mm2: 13.30, resistance_km: 1.296 },
  { gauge: '8', dia_mm: 3.264, area_mm2: 8.366, resistance_km: 2.061 },
  { gauge: '10', dia_mm: 2.588, area_mm2: 5.261, resistance_km: 3.277 },
  { gauge: '12', dia_mm: 2.053, area_mm2: 3.309, resistance_km: 5.211 },
  { gauge: '14', dia_mm: 1.628, area_mm2: 2.081, resistance_km: 8.286 },
  { gauge: '18', dia_mm: 1.024, area_mm2: 0.823, resistance_km: 20.95 },
  { gauge: '24', dia_mm: 0.511, area_mm2: 0.205, resistance_km: 84.22 },
];

export default function AwgChartPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">AWG Wire Gauge Chart</h1>
        <p className="text-slate-600 mt-2">American Wire Gauge (AWG) standards for solid copper wire.</p>
      </div>

      <div className="bg-white p-6 border rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">AWG</th>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">Diameter (mm)</th>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">Area (mm²)</th>
              <th className="border-b-2 p-3 font-semibold text-slate-700 bg-slate-50">Resistance (Ω/km)</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            {awgData.map((row, index) => (
              <tr key={row.gauge} className={index % 2 === 0 ? '' : 'bg-slate-50'}>
                <td className="border-b p-3 font-medium">{row.gauge}</td>
                <td className="border-b p-3 font-mono">{row.dia_mm.toFixed(3)}</td>
                <td className="border-b p-3 font-mono">{row.area_mm2.toFixed(3)}</td>
                <td className="border-b p-3 font-mono">{row.resistance_km.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-white p-6 border rounded-lg shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">What is AWG?</h2>
          {/* ✨ FIX: Replaced ' with &apos; */}
          <p className="text-slate-600 leading-relaxed">
            The American Wire Gauge (AWG) system is a standard used in North America for the diameters of round, solid, nonferrous, electrically conducting wire. The key principle is that as the gauge number increases, the wire diameter decreases. It&apos;s a fundamental reference for electricians, engineers, and hobbyists when selecting the appropriate wire for a specific electrical load and distance.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Detailed Analysis of Wire Properties</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Gauge</h3>
              <p className="text-slate-600">
                The AWG number represents the wire&apos;s thickness. A key takeaway is the inverse relationship: a <strong className="font-semibold">lower gauge number</strong> (like 2 AWG) indicates a <strong className="font-semibold">thicker wire</strong>, while a <strong className="font-semibold">higher gauge number</strong> (like 24 AWG) indicates a <strong className="font-semibold">thinner wire</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Diameter & Area</h3>
              <p className="text-slate-600">The diameter and cross-sectional area are physical measurements of the wire&apos;s size. These properties are crucial as they determine the wire&apos;s ampacity—the maximum amount of electrical current it can safely carry without overheating.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resistance (Ohms per Kilometer)</h3>
              <p className="text-slate-600">Resistance indicates how much the wire opposes the flow of electricity. Thicker wires (lower AWG) have lower resistance, meaning less voltage is dropped and less energy is lost as heat. This makes them suitable for carrying higher currents over longer distances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}