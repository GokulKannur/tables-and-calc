// src/components/calculators/GeoGebraCalculator.tsx
"use client";

import React from 'react';

const GeoGebraCalculator = () => {
  return (
    <div 
        className="relative w-full mx-auto" 
        style={{ 
            paddingBottom: '125%', // This creates a responsive aspect ratio
            height: 0, 
            maxWidth: '800px' 
        }}
    >
        <iframe
            title="GeoGebra Scientific Calculator"
            src="https://www.geogebra.org/scientific"
            className="absolute top-0 left-0 w-full h-full border rounded-lg shadow-lg"
            allowFullScreen
            style={{ border: '1px solid #ccc' }}
        ></iframe>
    </div>
  );
};

export default GeoGebraCalculator;