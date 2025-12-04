// src/components/Search.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { searchIndex } from '@/lib/searchIndex';
import Link from 'next/link';

// Define the shape of the data in your searchIndex
interface SearchItem {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

// Define the shape of the search result item that Fuse.js returns
interface FuseResult {
  item: SearchItem;
  refIndex: number;
  score?: number;
}

// Configure Fuse.js
const fuse = new Fuse(searchIndex, {
  keys: ['title', 'description', 'keywords'],
  includeScore: true,
  threshold: 0.4,
});

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query) {
      const searchResults = fuse.search(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return (
    <div className="relative" ref={searchContainerRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        placeholder="Search for a tool..."
        className="w-48 p-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all"
      />

      {isFocused && query && (
        <ul className="absolute top-full mt-2 w-72 bg-card border rounded-lg shadow-lg z-20 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.slice(0, 7).map(({ item }) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => { setQuery(''); setIsFocused(false); }}
                  className="block p-3 hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-800">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </Link>
              </li>
            ))
          ) : (
            <li className="p-3 text-sm text-slate-500">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
}