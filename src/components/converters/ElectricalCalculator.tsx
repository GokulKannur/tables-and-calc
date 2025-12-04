// src/components/converters/ElectricalCalculator.tsx
"use client";

import { useState } from "react";

export default function ElectricalCalculator() {
  const [volts, setVolts] = useState("");
  const [amps, setAmps] = useState("");
  const [ohms, setOhms] = useState("");
  const [watts, setWatts] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const V = parseFloat(volts);
    const I = parseFloat(amps);
    const R = parseFloat(ohms);
    const P = parseFloat(watts);

    // Clearing previous result
    setResult("");

    // Use available inputs to calculate missing ones
    // Ohm's law: V = I * R
    if (!isNaN(V) && !isNaN(R) && (amps === "" || amps === undefined)) {
      setAmps(String((V / R).toFixed(4)));
    }
    if (!isNaN(I) && !isNaN(R) && (volts === "" || volts === undefined)) {
      setVolts(String((I * R).toFixed(4)));
    }
    if (!isNaN(V) && !isNaN(I) && (ohms === "" || ohms === undefined)) {
      setOhms(String((V / I).toFixed(4)));
    }

    // Power: P = V * I
    if (!isNaN(V) && !isNaN(I) && (watts === "" || watts === undefined)) {
      setWatts(String((V * I).toFixed(4)));
    }
    if (!isNaN(P) && !isNaN(V) && (amps === "" || amps === undefined) && V !== 0) {
      setAmps(String((P / V).toFixed(4)));
    }
    if (!isNaN(P) && !isNaN(I) && (volts === "" || volts === undefined) && I !== 0) {
      setVolts(String((P / I).toFixed(4)));
    }

    setResult("Calculated. Fill values and press Calculate to update.");
  };

  const clearAll = () => {
    setVolts(""); setAmps(""); setOhms(""); setWatts(""); setResult("");
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Volts (V)</label>
          <input value={volts} onChange={(e) => setVolts(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Amps (A)</label>
          <input value={amps} onChange={(e) => setAmps(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Ohms (Ω)</label>
          <input value={ohms} onChange={(e) => setOhms(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Watts (W)</label>
          <input value={watts} onChange={(e) => setWatts(e.target.value)} className="w-full p-2 border rounded" />
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={calculate} className="px-4 py-2 bg-blue-600 text-white rounded">Calculate</button>
        <button onClick={clearAll} className="px-4 py-2 border rounded">Clear</button>
      </div>

      {result && <div className="text-sm text-green-700">{result}</div>}
      <div className="text-xs text-gray-500">
        Tip: fill any two compatible values (eg. V and R) and click Calculate.
      </div>
    </div>
  );
}
