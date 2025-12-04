"use client";

import { useState } from "react";
import { converterData } from "@/lib/unitData";
import UnitConverter from "./converters/UnitConverter";
import TemperatureConverter from "./converters/TemperatureConverter";
import ColorConverter from "./converters/ColorConverter";
import ElectricalCalculator from "./converters/ElectricalCalculator";

// ✨ Expanded the list to include all converter categories
const tabs = [
  { id: "length", name: "Length" },
  { id: "weight", name: "Weight & Mass" },
  { id: "temperature", name: "Temperature" },
  { id: "area", name: "Area" },
  { id: "volume", name: "Volume" },
  { id: "speed", name: "Speed" },
  { id: "pressure", name: "Pressure" },
  { id: "energy", name: "Energy" },
  { id: "power", name: "Power" },
  { id: "time", name: "Time" },
  { id: "angle", name: "Angle" },
  { id: "data-storage", name: "Data Storage" },
  { id: "voltage", name: "Voltage" },
  { id: "frequency", name: "Frequency" },
  { id: "charge", name: "Electric Charge" },
  { id: "color", name: "Color" },
  { id: "electrical", name: "Electrical" },
];

export default function ExpressConverterTabs() {
  const [activeTab, setActiveTab] = useState("length");
  const activeCategoryData = converterData[activeTab];

  const renderConverter = () => {
    // ✨ Expanded logic to handle all special converter types
    if (activeTab === "temperature") {
      return <TemperatureConverter defaultFrom="c" defaultTo="f" />;
    }
    if (activeTab === "color") {
      return <ColorConverter />;
    }
    if (activeTab === "electrical") {
      return <ElectricalCalculator />;
    }
    // Default case for all standard unit converters
    return (
      <UnitConverter
        defaultFrom={activeCategoryData.units[0].id}
        defaultTo={activeCategoryData.units[1].id}
        units={activeCategoryData.units}
        conversionFactors={activeCategoryData.factors}
      />
    );
  };

  return (
    <div className="bg-card p-6 border rounded-lg shadow-sm">
      {/* Tabs Navigation */}
      <div className="flex border-b mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 -mb-px font-semibold border-b-2 whitespace-nowrap transition-colors ${activeTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Converter Component */}
      <div>{renderConverter()}</div>
    </div>
  );
}