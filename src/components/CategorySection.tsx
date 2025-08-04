import { ArrowRight, FolderIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Category } from "@/types";

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center gap-2">
        <div className="h-8 w-1 rounded-full bg-royalBlue"></div>
        <h2 className="font-urbanist text-2xl font-bold text-snow md:text-3xl">
          Browse by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="group overflow-hidden border-slate-gray/20 bg-gradient-to-br from-[#1e2235] to-[#131620] transition-all duration-300 hover:border-royalBlue/50 hover:shadow-[0_0_30px_rgba(65,105,225,0.15)]"
          >
            <CardContent className="p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-royalBlue/10 text-royalBlue transition-all group-hover:bg-royalBlue/20">
                <FolderIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-urbanist text-lg font-bold text-snow">
                {category.name}
              </h3>
              <p className="mb-2 line-clamp-2 text-sm font-urbanist text-silver/80">
                {category.description}
              </p>
              <p className="font-source-code-pro text-xs text-slate-gray">
                {category.toolCount} tools available
              </p>
            </CardContent>

            <CardFooter className="border-t border-slate-gray/10 bg-slate-900/20 p-0">
              <a
                href={`/categories/${category.id}`}
                className="flex w-full items-center justify-between p-4 font-urbanist text-sm text-royalBlue transition-all hover:bg-royalBlue/5"
              >
                <span>Browse Category</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
