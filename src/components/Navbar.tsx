"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search as SearchIcon, Calculator, ChevronDown, Table, Type, BookOpen, Info, MessageSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import Search from './Search';

interface NavbarProps {
  onFeedbackClick: () => void;
}

export default function Navbar({ onFeedbackClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/calculators", label: "Calculators", icon: Calculator },
    { href: "/converters", label: "Converters", icon: Type },
    { href: "/tables", label: "Tables", icon: Table },
    { href: "/resources", label: "Resources", icon: Info },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-background border-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="relative w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
            TC
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:inline-block">
            TablesAndCalc
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block w-64">
            <Search />
          </div>

          <ThemeToggle />

          <button
            onClick={onFeedbackClick}
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Feedback
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden animate-in slide-in-from-right-full duration-200">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-medium text-muted-foreground">Switch Theme</div>
                <ThemeToggle />
              </div>
              <div className="mb-6">
                {/* Mobile Search */}
                <div className="relative w-full">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex h-10 w-full rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-secondary text-secondary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t">
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                >
                  <Info className="w-5 h-5" />
                  About
                </Link>
                <button
                  onClick={() => {
                    onFeedbackClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                >
                  <MessageSquare className="w-5 h-5" />
                  Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}