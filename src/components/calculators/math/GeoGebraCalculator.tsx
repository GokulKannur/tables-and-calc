// src/components/calculators/GeoGebraCalculator.tsx
"use client";

import React from 'react';

export default function GeoGebraCalculator() {
  return (
    <div>
      {/* Responsive iframe container */}
      <div 
          className="relative w-full mx-auto" 
          style={{ paddingTop: '150%', height: 0 }} 
      >
          <iframe
              title="GeoGebra Scientific Calculator"
              src="https://www.geogebra.org/scientific"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
              allowFullScreen
          ></iframe>
      </div>

      {/* ✨ NEW: Button to open the calculator in a new tab for a better mobile experience */}
      <div className="text-center mt-4">
        <a 
          href="https://www.geogebra.org/scientific" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Open Fullscreen
        </a>
      </div>
    </div>
  );
};