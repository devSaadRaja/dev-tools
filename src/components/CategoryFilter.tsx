"use client";
import { useRouter, useSearchParams } from "next/navigation";

type CategoryFilterProps = {
  categories: {
    id: string;
    name: string;
    description: string;
    toolCount: number;
  }[];
};

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams);

    if (categorySlug === "all") {
      params.delete("category");
    } else {
      params.set("category", categorySlug);
    }

    router.push(`/tools?${params.toString()}`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-[#4169E1] font-urbanist">
        Categories
      </h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 rounded-lg font-sourceCodePro text-sm transition-colors ${
            currentCategory === "all"
              ? "bg-[#4169E1] text-[#FFFAFA]"
              : "bg-[#708090]/20 text-[#C0C0C0] hover:bg-[#708090]/30"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.description)}
            className={`px-4 py-2 rounded-lg font-sourceCodePro text-sm transition-colors ${
              currentCategory === category.description
                ? "bg-[#4169E1] text-[#FFFAFA]"
                : "bg-[#708090]/20 text-[#C0C0C0] hover:bg-[#708090]/30"
            }`}
          >
            {category.name} ({category.toolCount})
          </button>
        ))}
      </div>
    </div>
  );
}
