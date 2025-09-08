// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Search from './Search';
import MenuIcon from './icons/MenuIcon';

interface NavbarProps {
  onFeedbackClick: () => void;
}

export default function Navbar({ onFeedbackClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✨ Changed "Notes" to "Resources"
  const navLinks = [
    { href: "/calculators", label: "Calculators" },
    { href: "/converters", label: "Converters" },
    { href: "/tables", label: "Tables" },
    { href: "/symbols", label: "Symbols" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  // ... the rest of your Navbar component remains the same
  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold">
            🧮 TablesAndCalc
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
            <button 
              onClick={onFeedbackClick} 
              className="ml-2 px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors font-semibold"
            >
              Feedback
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Search />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-1 text-slate-600 hover:text-blue-600"
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 md:hidden">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-3xl font-light text-slate-600 hover:text-blue-600"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          
          <div className="flex flex-col gap-6 text-lg">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-slate-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <button 
              onClick={() => {
                onFeedbackClick();
                setIsMenuOpen(false);
              }} 
              className="text-left text-slate-700 hover:text-blue-600"
            >
              Feedback
            </button>
          </div>
          <div className="mt-8 sm:hidden">
              <Search />
            </div>
        </div>
      )}
    </>
  );
}