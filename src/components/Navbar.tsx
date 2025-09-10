"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import MenuIcon from './icons/MenuIcon';
import SearchIcon from './icons/SearchIcon'; // Import the new search icon

interface NavbarProps {
  onFeedbackClick: () => void;
}

export default function Navbar({ onFeedbackClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for the search overlay

  const navLinks = [
    { href: "/calculators", label: "Calculators" },
    { href: "/converters", label: "Converters" },
    { href: "/tables", label: "Tables" },
    { href: "/symbols", label: "Symbols" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between p-4 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo/logo.png"
              alt="TablesAndCalc Logo" 
              width={32} 
              height={32}
            />
            <span className="text-xl font-bold">TablesAndCalc</span>
          </Link>
          
          {/* --- Desktop Navigation --- */}
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
          
          <div className="flex items-center gap-2">
            {/* --- Desktop Search --- */}
            <div className="hidden sm:block">
              <Search />
            </div>

            {/* --- Mobile Icons --- */}
            <div className='flex items-center gap-2 md:hidden'>
                <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-1 text-slate-600 hover:text-blue-600"
                    aria-label="Open search"
                >
                    <SearchIcon className="h-6 w-6" />
                </button>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="p-1 text-slate-600 hover:text-blue-600"
                    aria-label="Open menu"
                >
                    <MenuIcon className="h-6 w-6" />
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 md:hidden">
          {/* ... existing mobile menu code ... */}
        </div>
      )}

      {/* --- Search Overlay --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
            <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Search</span>
                <button 
                    onClick={() => setIsSearchOpen(false)} 
                    className="text-3xl font-light text-slate-600 hover:text-blue-600"
                    aria-label="Close search"
                >
                    &times;
                </button>
            </div>
            <Search />
        </div>
      )}
    </>
  );
}