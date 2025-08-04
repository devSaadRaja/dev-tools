"use client";

import { useState, useEffect } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const popularFilters = ["React", "TypeScript", "API", "Design", "Testing"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      // Simulate search
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
        console.log("Searching for:", debouncedQuery);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [debouncedQuery]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative">
        <div className="group relative flex overflow-hidden rounded-xl border-2 border-slate-gray/30 bg-slate-900/50 backdrop-blur-sm transition-all focus-within:border-royalBlue">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-gray transition-all group-focus-within:text-royalBlue" />
          <Input
            type="text"
            placeholder="Search for tools and resources..."
            className="flex-1 border-0 bg-transparent px-12 py-6 font-source-code-pro text-lg text-snow placeholder:text-slate-gray/70 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search for tools and resources"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-20 top-1/2 -translate-y-1/2 text-slate-gray hover:text-snow"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <Button
            className="m-1 bg-royalBlue px-6 font-urbanist text-snow transition-all hover:bg-royalBlue/90"
            aria-label="Search"
            disabled={isSearching}
          >
            {isSearching ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Search"
            )}
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm text-slate-gray">Popular:</span>
        {popularFilters.map((filter) => (
          <Badge
            key={filter}
            variant="outline"
            className={`cursor-pointer border border-slate-gray/30 font-source-code-pro text-xs transition-all hover:border-royalBlue hover:bg-royalBlue/10 ${
              selectedFilters.includes(filter)
                ? "border-royalBlue bg-royalBlue/10 text-royalBlue"
                : "bg-transparent text-silver"
            }`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  );
}
