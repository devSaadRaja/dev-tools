import { Suspense } from "react";
import type { Metadata } from "next";
import PaginatedTools from "@/components/PaginatedTools";
import { categories } from "@/lib/data";
import CategoryFilter from "@/components/CategoryFilter";
import SearchTools from "@/components/SearchTools";

export const metadata: Metadata = {
  title: "Top Rated Developer Tools | DevTools Directory",
  description:
    "Discover the highest-rated developer tools and resources curated by the community",
  keywords: "developer tools, top rated, best tools, programming resources",
};

export default async function TopRatedPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = searchParams.page
    ? Number.parseInt(searchParams.page)
    : 1;

  return (
    <div className="container min-h-screen mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royalBlue to-snow bg-clip-text text-transparent  font-urbanist">
          Developer Tools Directory
        </h1>
        <p className="text-[#C0C0C0] text-lg md:text-xl max-w-3xl mx-auto font-urbanist">
          Discover and explore the best tools and resources for modern
          developers
        </p>
      </div>

      <div className="mb-10">
        <SearchTools />
      </div>

      <div className="mb-8">
        <CategoryFilter categories={categories} />
      </div>

      <div className="mt-8">
        <Suspense fallback={<ToolsLoadingSkeleton />}>
          <PaginatedTools currentPage={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}

function ToolsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#1E2130] border border-[#708090]/20 rounded-lg p-6 animate-pulse"
        >
          <div className="flex justify-between items-start">
            <div className="h-7 bg-[#708090]/30 rounded w-3/5 mb-2"></div>
            <div className="h-6 bg-[#4169E1]/30 rounded w-16"></div>
          </div>
          <div className="flex gap-1 my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 bg-[#708090]/30 rounded-full"
              ></div>
            ))}
          </div>
          <div className="h-20 bg-[#708090]/20 rounded w-full mt-3"></div>
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 bg-[#708090]/30 rounded w-16"></div>
            ))}
          </div>
          <div className="h-10 bg-[#708090]/20 rounded w-full mt-6"></div>
        </div>
      ))}
    </div>
  );
}
