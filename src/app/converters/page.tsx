"use client";

import { useState } from 'react';
import Link from 'next/link';
import { popularConversions } from '@/lib/unitData';
import UnitConverter from '@/components/calculators/converters/UnitConverter';
import { Ruler, Scale, Thermometer, Zap, Box, Layers, Gauge, Activity, Database, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ConvertersPage() {
  const [activeCategory, setActiveCategory] = useState('length');

  const categories = [
    { id: 'length', name: 'Length', icon: Ruler },
    { id: 'weight', name: 'Weight', icon: Scale },
    { id: 'temperature', name: 'Temperature', icon: Thermometer },
    { id: 'volume', name: 'Volume', icon: Box },
    { id: 'area', name: 'Area', icon: Layers },
    { id: 'speed', name: 'Speed', icon: Activity },
    { id: 'pressure', name: 'Pressure', icon: Gauge },
    { id: 'energy', name: 'Energy', icon: Zap },
    { id: 'power', name: 'Power', icon: Zap },
    { id: 'data-storage', name: 'Data', icon: Database },
  ];

  // Group conversions for SEO links at bottom
  const groupedConversions = popularConversions.reduce((acc, conv) => {
    const category = conv.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(conv);
    return acc;
  }, {} as Record<string, typeof popularConversions>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Unit Converters
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert between thousands of units instantly. Select a category below to get started.
        </p>
      </div>

      {/* Interactive Converter Hub */}
      <div className="grid lg:grid-cols-[250px,1fr] gap-8 mb-16">
        {/* Sidebar Navigation */}
        <div className="bg-card border rounded-xl p-2 h-fit shadow-sm overflow-x-auto lg:overflow-visible flex lg:block gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Main Converter Area */}
        <div className="bg-card border rounded-xl shadow-sm p-6 min-h-[500px]">
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-2xl font-bold capitalize flex items-center gap-3">
              {categories.find(c => c.id === activeCategory)?.icon && (
                (() => {
                  const Icon = categories.find(c => c.id === activeCategory)!.icon;
                  return <Icon className="w-6 h-6 text-primary" />;
                })()
              )}
              {categories.find(c => c.id === activeCategory)?.name} Converter
            </h2>
          </div>

          <UnitConverter category={activeCategory} />
        </div>
      </div>

      {/* SEO Links Section */}
      <div className="mt-20 pt-10 border-t">
        <h3 className="text-2xl font-bold mb-8 text-center">Popular Conversions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedConversions).map(([category, conversions]) => (
            <div key={category} className="bg-secondary/20 p-6 rounded-xl border border-border/50">
              <h4 className="font-semibold capitalize mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {category}
              </h4>
              <ul className="space-y-2">
                {conversions.slice(0, 5).map((conv) => (
                  <li key={conv.slug}>
                    <Link
                      href={`/converters/${conv.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors block py-1"
                    >
                      {conv.from.toUpperCase()} to {conv.to.toUpperCase()}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href={`/converters/${category}`}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    View all {category} conversions →
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
