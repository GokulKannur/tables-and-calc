// src/app/tables/awg-wire-gauge-chart/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWG Wire Gauge Chart | TablesAndCalc',
  description: 'A reference chart for American Wire Gauge (AWG) standards, showing gauge, diameter, area, and resistance for solid copper wire.',
};

const awgData = [
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
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">AWG Wire Gauge Chart</h1>
        <p className="text-muted-foreground mt-2">American Wire Gauge (AWG) standards for solid copper wire.</p>
      </div>

      <div className="bg-card p-4 md:p-6 border rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[400px]">
          <thead>
            <tr>
              <th className="border-b-2 border-border p-2 md:p-3 font-semibold bg-secondary text-sm md:text-base">AWG</th>
              <th className="border-b-2 border-border p-2 md:p-3 font-semibold bg-secondary text-sm md:text-base">Ø (mm)</th>
              <th className="border-b-2 border-border p-2 md:p-3 font-semibold bg-secondary text-sm md:text-base">Area (mm²)</th>
              <th className="border-b-2 border-border p-2 md:p-3 font-semibold bg-secondary text-sm md:text-base">Ω/km</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {awgData.map((row, index) => (
              <tr key={row.gauge} className={index % 2 === 0 ? '' : 'bg-secondary/50'}>
                <td className="border-b border-border p-2 md:p-3 font-medium">{row.gauge}</td>
                <td className="border-b border-border p-2 md:p-3 font-mono text-sm">{row.dia_mm.toFixed(3)}</td>
                <td className="border-b border-border p-2 md:p-3 font-mono text-sm">{row.area_mm2.toFixed(2)}</td>
                <td className="border-b border-border p-2 md:p-3 font-mono text-sm">{row.resistance_km.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-card p-4 md:p-6 border rounded-lg shadow-sm space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">What is AWG?</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            AWG (American Wire Gauge) is a standard for wire thickness. Lower numbers = thicker wire. Thicker wires carry more current with less resistance.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Quick Guide</h2>
          <ul className="text-muted-foreground space-y-2 text-sm md:text-base">
            <li><strong>Low gauge (0-4):</strong> Heavy duty, high current (appliances, power lines)</li>
            <li><strong>Medium gauge (10-14):</strong> Home wiring, outlets</li>
            <li><strong>High gauge (18-24):</strong> Low current (speakers, electronics)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}