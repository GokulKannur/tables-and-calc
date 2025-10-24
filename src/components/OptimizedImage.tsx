// src/components/OptimizedImage.tsx
"use client"; // Needs state for loading effect

import Image, { ImageProps } from 'next/image'; // Import ImageProps for better type safety
import { useState } from 'react';

// Define props extending standard Next.js ImageProps but making src and alt required
interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  containerClassName?: string; // Optional class for the container div
}

export default function OptimizedImage({
  src,
  alt,
  width, // Can be number or string
  height, // Can be number or string
  containerClassName = '', // Default to empty string
  priority = false, // Default priority to false
  className = '', // Pass through className to the Image component itself
  // Include layout, sizes, quality, etc. if needed, or rely on defaults/props
  ...rest // Pass any other valid ImageProps through
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Determine if width and height are provided (needed for non-fill layouts)
  const hasDimensions = width !== undefined && height !== undefined;
  // If no dimensions, default to fill layout (requires parent container to have position relative/absolute/fixed)
  const layoutMode = hasDimensions ? rest.layout : 'fill';

  return (
    // Container div helps manage layout and the loading effect
    // If using layout="fill", the parent needs positioning (e.g., relative)
    <div className={`relative overflow-hidden ${isLoading ? 'bg-gray-200 animate-pulse' : ''} ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={hasDimensions ? width : undefined} // Only pass dimensions if defined and not using fill
        height={hasDimensions ? height : undefined}
        priority={priority} // Preload image if it's above the fold
        layout={layoutMode} // Use 'fill' if no dimensions provided
        onLoad={() => setIsLoading(false)} // Turn off loading effect when image is loaded
        className={`
          transition-opacity duration-300 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${className} // Apply passed-in classes to the Image component
        `}
        {...rest} // Pass remaining props like sizes, quality, unoptimized etc.
      />
      {/* Optional: You could keep the pulse div even after load for a brief moment if desired */}
      {/* {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )} */}
    </div>
  );
}