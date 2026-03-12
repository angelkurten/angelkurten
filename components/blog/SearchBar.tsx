"use client";

import { useEffect, useState } from "react";
import { t, type Locale } from "@/lib/i18n";

interface SearchBarProps {
  onSearch: (query: string) => void;
  lang?: Locale;
}

export function SearchBar({ onSearch, lang = "en" }: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder={t(lang, "blog.search")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-neutral-600"
      />
    </div>
  );
}
