import type { Metadata } from "next";
import SearchBar from "@/components/SearchBar";
import FeaturedTools from "@/components/FeaturedTools";
import CategorySection from "@/components/CategorySection";
import { categories, featuredTools } from "@/lib/data";
import { HexagonIcon, Code2Icon, Layers3Icon } from "lucide-react";

export const metadata: Metadata = {
  title: "Dev Tools Directory | Home",
  description: "A curated directory of developer tools and resources",
  keywords:
    "developer tools, programming resources, coding tools, web development",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-[#1a1f35] text-snow">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#4169E1_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e2235] to-[#131620] p-8 text-center shadow-2xl md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-royal-blue/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-royal-blue/10 blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-2">
              <HexagonIcon className="h-8 w-8 text-royal-blue" />
              <h1 className="bg-gradient-to-r from-royal-blue to-snow bg-clip-text font-urbanist text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
                DevTools Directory
              </h1>
              <HexagonIcon className="h-8 w-8 text-royal-blue" />
            </div>

            <p className="mx-auto mb-8 max-w-2xl font-urbanist text-lg text-silver">
              Discover and explore the best tools and resources for modern
              developers
            </p>

            <SearchBar />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-gray">
              <span className="flex items-center gap-1">
                <Code2Icon className="h-4 w-4" /> 200+ Tools
              </span>
              <span className="flex items-center gap-1">
                <Layers3Icon className="h-4 w-4" /> 12 Categories
              </span>
            </div>
          </div>
        </section>

        <FeaturedTools tools={featuredTools} />

        <CategorySection categories={categories} />
      </div>
    </main>
  );
}
