import type { Metadata } from 'next';
// Import all the new, clean icon components
import {
    ResistorIcon, CapacitorIcon, InductorIcon, DiodeIcon, NpnBjtIcon, PnpBjtIcon,
    AndGateIcon, OrGateIcon, NotGateIcon, SpstSwitchIcon, SpdtSwitchIcon, PushbuttonIcon
} from '@/components/icons/ElectricalSymbols';

export const metadata: Metadata = {
  title: 'Common Electrical Circuit Symbols | TablesAndCalc',
  description: 'A visual reference guide to symbols used in schematics, including passive components, transistors, logic gates, and switches.',
};

// A reusable component to display each symbol card for a clean layout
const SymbolCard = ({ name, description, icon }: { name: string, description: string, icon: React.ReactNode }) => (
    <div className="border rounded-lg p-4 text-center bg-white shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-center h-24 mb-4">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-slate-800">{name}</h3>
            <p className="text-sm text-slate-500 mt-1">{description}</p>
        </div>
    </div>
);

// --- Symbol Data ---
const symbolSections = [
    {
        title: 'Passive Components',
        symbols: [
            { name: 'Resistor', description: 'Opposes the flow of current.', icon: <ResistorIcon /> },
            { name: 'Capacitor', description: 'Stores energy in an electric field.', icon: <CapacitorIcon /> },
            { name: 'Inductor', description: 'Stores energy in a magnetic field.', icon: <InductorIcon /> },
        ],
    },
    {
        title: 'Semiconductors',
        symbols: [
            { name: 'Diode', description: 'Allows current to flow in one direction.', icon: <DiodeIcon /> },
            { name: 'NPN BJT', description: 'Bipolar Junction Transistor (NPN type).', icon: <NpnBjtIcon /> },
            { name: 'PNP BJT', description: 'Bipolar Junction Transistor (PNP type).', icon: <PnpBjtIcon /> },
        ],
    },
    {
        title: 'Logic Gates',
        symbols: [
            { name: 'AND Gate', description: 'Output is true only if all inputs are true.', icon: <AndGateIcon /> },
            { name: 'OR Gate', description: 'Output is true if at least one input is true.', icon: <OrGateIcon /> },
            { name: 'NOT Gate (Inverter)', description: 'Output is the opposite of the input.', icon: <NotGateIcon /> },
        ],
    },
    {
        title: 'Switches',
        symbols: [
            { name: 'SPST Switch', description: 'A simple on-off switch.', icon: <SpstSwitchIcon /> },
            { name: 'SPDT Switch', description: 'Connects a common terminal to one of two others.', icon: <SpdtSwitchIcon /> },
            { name: 'Pushbutton (NO)', description: 'Circuit connects when button is pressed.', icon: <PushbuttonIcon /> },
        ],
    },
];

// --- Main Page Component ---
export default function ElectricalSymbolsPage() {
    return (
        <div className="max-w-5xl mx-auto pb-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Electrical Circuit Symbols</h1>
                <p className="text-lg text-slate-600 mt-2">A quick reference for common electronic symbols.</p>
            </div>

            <div className="space-y-12">
                {symbolSections.map(section => (
                    <div key={section.title}>
                        <h2 className="text-2xl font-bold border-b pb-2 mb-6">{section.title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {section.symbols.map(symbol => (
                                <SymbolCard key={symbol.name} {...symbol} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}