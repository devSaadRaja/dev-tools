"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/app/hooks/useDebounce";

export default function SearchTools() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedQuery) {
      params.set("q", debouncedQuery);
    } else {
      params.delete("q");
    }

    router.push(`/tools?${params.toString()}`);
  }, [debouncedQuery, router, searchParams]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for tools and resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#708090]/20 border border-[#708090]/30 rounded-lg py-3 px-4 pl-12 text-[#FFFAFA] placeholder-[#C0C0C0] font-sourceCodePro focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all"
          aria-label="Search tools"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C0C0C0] h-5 w-5" />
      </div>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <span className="text-[#C0C0C0] font-sourceCodePro">Popular:</span>
        {["React", "TypeScript", "API", "Design", "Testing"].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchQuery(tag)}
            className="px-3 py-1 rounded-full bg-[#708090]/30 text-[#FFFAFA] text-sm hover:bg-[#4169E1]/30 transition-colors font-sourceCodePro"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
