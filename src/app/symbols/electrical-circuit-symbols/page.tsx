import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Common Electrical Circuit Symbols | TablesAndCalc',
  description: 'A visual reference guide to symbols used in schematics, including passive components, transistors, logic gates, and switches.',
};

// The complete, combined list of symbols
const symbolData = [
  // Category: Passive Components
  { 
    name: 'Resistor', 
    category: 'Passive Components',
    description: 'Opposes the flow of current.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 L25 20 L30 10 L40 30 L50 10 L60 30 L70 10 L75 20 L90 20" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  { 
    name: 'Capacitor', 
    category: 'Passive Components',
    description: 'Stores electrical energy in an electric field.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 L40 20 M40 10 L40 30 M50 10 L50 30 M50 20 L90 20" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  { 
    name: 'Inductor', 
    category: 'Passive Components',
    description: 'Stores energy in a magnetic field.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 L25 20 A 15 15, 0, 0, 1, 40 20 A 15 15, 0, 0, 1, 55 20 A 15 15, 0, 0, 1, 70 20 L90 20" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  // Category: Semiconductors
  { 
    name: 'Diode', 
    category: 'Semiconductors',
    description: 'Allows current to flow in one direction.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 L60 20 L60 10 L70 20 L60 30 L60 20 M65 10 L65 30 L90 20" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  // Category: Transistors
  {
    name: 'NPN BJT',
    category: 'Transistors',
    description: 'Bipolar Junction Transistor (NPN type).',
    svg: <svg width="100" height="50" viewBox="0 0 100 50"><path d="M50 10 V 20 M30 20 H 50 M50 20 L 70 30 L 70 40 M65 25 L 75 30" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="50" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  {
    name: 'PNP BJT',
    category: 'Transistors',
    description: 'Bipolar Junction Transistor (PNP type).',
    svg: <svg width="100" height="50" viewBox="0 0 100 50"><path d="M50 10 V 20 M30 20 H 50 M50 20 L 70 30 L 70 40 M60 35 L 70 30" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="50" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  // Category: Logic Gates
  {
    name: 'AND Gate',
    category: 'Logic Gates',
    description: 'Output is true only if all inputs are true.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M20 10 H 40 A 20 20 0 0 1 40 30 H 20 Z M20 10 V 15 M20 30 V 25 M60 20 H 80" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  {
    name: 'OR Gate',
    category: 'Logic Gates',
    description: 'Output is true if at least one input is true.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M20 10 Q 40 20, 20 30 M20 10 C 35 10, 50 15, 60 20 C 50 25, 35 30, 20 30 M60 20 H 80" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  },
  {
    name: 'NOT Gate (Inverter)',
    category: 'Logic Gates',
    description: 'Output is the opposite of the input.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M20 20 H 40 L 60 10 V 30 L 40 20 M65 20 H 80" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="62.5" cy="20" r="2.5" stroke="currentColor" strokeWidth="1" fill="currentColor"/></svg>
  },
  // Category: Switches
  {
    name: 'SPST Switch',
    category: 'Switches',
    description: 'Single Pole, Single Throw. A simple on-off switch.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 H 35 L 65 10 M 65 20 H 90" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="35" cy="20" r="3" fill="currentColor"/><circle cx="65" cy="20" r="3" fill="currentColor"/></svg>
  },
  {
    name: 'SPDT Switch',
    category: 'Switches',
    description: 'Single Pole, Double Throw. Connects a common terminal to one of two others.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 H 35 L 65 10 M 65 30 H 90" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="35" cy="20" r="3" fill="currentColor"/><circle cx="65" cy="10" r="3" fill="currentColor"/><circle cx="65" cy="30" r="3" fill="currentColor"/></svg>
  },
  {
    name: 'Pushbutton (Normally Open)',
    category: 'Switches',
    description: 'The circuit is connected only when the button is pressed.',
    svg: <svg width="100" height="40" viewBox="0 0 100 40"><path d="M10 20 H 35 M 65 20 H 90 M 50 20 V 10 H 40 L 60 10" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="35" cy="20" r="3" fill="currentColor"/><circle cx="65" cy="20" r="3" fill="currentColor"/></svg>
  },
];

export default function ElectricalSymbolsPage() {
  // This code automatically groups the symbols by their category
  const groupedSymbols = symbolData.reduce((acc, symbol) => {
    const { category } = symbol;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(symbol);
    return acc;
  }, {} as Record<string, typeof symbolData>);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Electrical Circuit Symbols</h1>
        <p className="text-slate-600 mt-2">A quick reference for common schematic symbols.</p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedSymbols).map(([category, symbols]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symbols.map((symbol) => (
                <div key={symbol.name} className="bg-white p-4 border rounded-lg shadow-sm text-center flex flex-col justify-between">
                  <div className="flex justify-center items-center h-20 text-slate-800">
                    {symbol.svg}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mt-4">{symbol.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{symbol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}