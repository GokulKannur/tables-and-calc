"use client";

import React from 'react';

const GeoGebraCalculator = () => {
  return (
    // This container maintains a responsive aspect ratio, which is better for mobile
    <div 
        className="relative w-full mx-auto" 
        style={{ 
            paddingTop: '150%', // You can adjust this percentage to fine-tune the height
            height: 0, 
        }}
    >
        <iframe
            title="GeoGebra Scientific Calculator"
            src="https://www.geogebra.org/scientific"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
            allowFullScreen
        ></iframe>
    </div>
  );
};

export default GeoGebraCalculator;