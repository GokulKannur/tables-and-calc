// src/components/Search.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { searchIndex } from '@/lib/searchIndex';
import Link from 'next/link';

interface SearchItem {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

interface FuseResult {
  item: SearchItem;
  refIndex: number;
  score?: number;
}

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
        placeholder="Search..."
        className="w-full p-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
      />

      {isFocused && query && (
        <ul className="absolute top-full mt-2 w-72 bg-card border rounded-lg shadow-lg z-20 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.slice(0, 7).map(({ item }) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => { setQuery(''); setIsFocused(false); }}
                  className="block p-3 hover:bg-secondary transition-colors"
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Link>
              </li>
            ))
          ) : (
            <li className="p-3 text-sm text-muted-foreground">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
}