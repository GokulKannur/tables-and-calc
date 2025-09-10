import React from 'react';

// Standard props for all icons to ensure consistency
const iconProps: React.SVGProps<SVGSVGElement> = {
  className: "w-24 h-16 mx-auto text-slate-800",
  strokeWidth: 1.5,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 100 40",
};

// --- Passive Components ---
export const ResistorIcon = () => (
  <svg {...iconProps}><path d="M10 20 L25 20 L30 10 L40 30 L50 10 L60 30 L70 10 L75 20 L90 20" /></svg>
);
export const CapacitorIcon = () => (
  <svg {...iconProps}><path d="M10 20 L40 20 M40 10 L40 30 M50 10 L50 30 M50 20 L90 20" /></svg>
);
export const InductorIcon = () => (
  <svg {...iconProps}><path d="M10 20 L25 20 A 10 10, 0, 0, 1, 45 20 A 10 10, 0, 0, 1, 65 20 A 10 10, 0, 0, 1, 85 20 L90 20" /></svg>
);

// --- Semiconductors ---
export const DiodeIcon = () => (
    <svg {...iconProps}><path d="M25 20 h20 l20 -10 v20 l-20 -10 M65 10 v20" strokeLinejoin="round" /><path d="M15 20 h10 m40 0 h10" /></svg>
);
export const NpnBjtIcon = () => (
  <svg {...iconProps} viewBox="0 0 100 50"><circle cx="50" cy="25" r="15" /><path d="M50 10 V 17 M30 25 H 42 M50 25 l18 -10 l0 20 M64 17 l8 -3" /></svg>
);
export const PnpBjtIcon = () => (
  <svg {...iconProps} viewBox="0 0 100 50"><circle cx="50" cy="25" r="15" /><path d="M50 10 V 17 M30 25 H 50 M54 21 l14 -9 v26 M58 19 l-8 3" /></svg>
);

// --- Logic Gates ---
export const AndGateIcon = () => (
  <svg {...iconProps}><path d="M20 10 h20 a 10 10 0 1 1 0 20 H 20 Z" /><path d="M10 15 h10 m-10 10 h10 m20 -10 h10" /></svg>
);
export const OrGateIcon = () => (
  <svg {...iconProps}><path d="M20 10 q 20 10 0 20 M20,10 c 15 0, 25 5, 30 10 c -5 5 -15 10 -30 10" /><path d="M10 15 h10 m-10 10 h10 m30 -15 h10" /></svg>
);
export const NotGateIcon = () => (
    <svg {...iconProps}><path d="M20 20 h20 l15 -10 v20 l-15 -10" /><circle cx="58" cy="20" r="2.5" fill="none" /><path d="M10 20 h10 m50.5 0 h10" /></svg>
);

// --- Switches ---
export const SpstSwitchIcon = () => (
  <svg {...iconProps}><path d="M10 20 H 35 L 65 10 M 65 20 H 90" /><circle cx="35" cy="20" r="3" fill="currentColor"/><circle cx="65" cy="20" r="3" fill="currentColor"/></svg>
);
export const SpdtSwitchIcon = () => (
  <svg {...iconProps}><path d="M10 20 H 35 L 65 10 M 65 30 H 90" /><circle cx="35" cy="20" r="3" fill="currentColor"/><circle cx="65" cy="10" r="3" fill="currentColor"/><circle cx="65" cy="30" r="3" fill="currentColor"/></svg>
);
export const PushbuttonIcon = () => (
  <svg {...iconProps}><path d="M10 20 H 35 M 65 20 H 90 M 50 20 V 10 H 40 L 60 10" /><circle cx="35" cy="20" r="3" fill="currentColor"/><circle cx="65" cy="20" r="3" fill="currentColor"/></svg>
);