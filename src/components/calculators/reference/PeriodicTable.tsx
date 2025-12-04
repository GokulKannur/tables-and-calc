"use client";

import React, { useState } from 'react';
import { periodicTableData, type ElementData } from '@/lib/data/periodicTableData';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

export default function PeriodicTable() {
    const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

    // Helper to get category color
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'alkali metal': return 'bg-red-200 text-red-900 border-red-300';
            case 'alkaline earth metal': return 'bg-orange-200 text-orange-900 border-orange-300';
            case 'transition metal': return 'bg-yellow-200 text-yellow-900 border-yellow-300';
            case 'post-transition metal': return 'bg-green-200 text-green-900 border-green-300';
            case 'metalloid': return 'bg-teal-200 text-teal-900 border-teal-300';
            case 'polyatomic nonmetal': return 'bg-blue-200 text-blue-900 border-blue-300';
            case 'diatomic nonmetal': return 'bg-indigo-200 text-indigo-900 border-indigo-300';
            case 'noble gas': return 'bg-purple-200 text-purple-900 border-purple-300';
            case 'lanthanide': return 'bg-pink-200 text-pink-900 border-pink-300';
            case 'actinide': return 'bg-rose-200 text-rose-900 border-rose-300';
            default: return 'bg-slate-200 text-slate-900 border-slate-300';
        }
    };

    return (
        <div className="relative">
            <div className="overflow-x-auto pb-8">
                <div className="min-w-[800px] grid grid-cols-18 gap-1 p-4" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
                    {periodicTableData.map((element) => (
                        <button
                            key={element.number}
                            onClick={() => setSelectedElement(element)}
                            className={cn(
                                "aspect-square flex flex-col items-center justify-center p-1 rounded border transition-transform hover:scale-110 hover:z-10 focus:outline-none focus:ring-2 focus:ring-primary",
                                getCategoryColor(element.category)
                            )}
                            style={{
                                gridColumn: element.group,
                                gridRow: element.period,
                            }}
                        >
                            <span className="text-[10px] font-medium opacity-70 self-start leading-none">{element.number}</span>
                            <span className="text-sm sm:text-base font-bold leading-tight">{element.symbol}</span>
                            <span className="text-[8px] sm:text-[10px] truncate w-full text-center opacity-80 leading-none">{element.name}</span>
                        </button>
                    ))}

                    {/* Lanthanides and Actinides placeholders if needed, but for now we only have first 20 elements */}
                </div>
            </div>

            {/* Element Detail Modal */}
            {selectedElement && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedElement(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-md w-full p-6 relative" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedElement(null)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-start gap-6">
                            <div className={cn(
                                "w-24 h-24 flex flex-col items-center justify-center rounded-lg border-2 text-2xl font-bold shadow-sm",
                                getCategoryColor(selectedElement.category)
                            )}>
                                <span className="text-sm font-normal opacity-70">{selectedElement.number}</span>
                                {selectedElement.symbol}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-1">{selectedElement.name}</h2>
                                <div className="text-sm font-medium text-slate-500 capitalize mb-2">{selectedElement.category}</div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                    Atomic Mass: <span className="font-mono font-semibold">{selectedElement.atomicMass}</span> u
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                {selectedElement.summary}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Group</div>
                                    <div className="font-semibold">{selectedElement.group}</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Period</div>
                                    <div className="font-semibold">{selectedElement.period}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
