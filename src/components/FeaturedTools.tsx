import { StarIcon, TrendingUpIcon, ArrowUpRightIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Tool } from "@/types";

interface FeaturedToolsProps {
  tools: Tool[];
}

export default function FeaturedTools({ tools }: FeaturedToolsProps) {
  return (
    <section className="mb-16">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-1 rounded-full bg-royal-blue"></div>
          <h2 className="font-urbanist text-2xl font-bold text-snow md:text-3xl">
            Featured Tools
          </h2>
        </div>
        <Button
          variant="ghost"
          className="text-royal-blue hover:bg-royal-blue/10 hover:text-royal-blue"
        >
          View All <ArrowUpRightIcon className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className="group relative overflow-hidden border-slate-gray/20 bg-gradient-to-br from-[#1e2235] to-[#131620] transition-all duration-300 hover:border-royal-blue/50 hover:shadow-[0_0_30px_rgba(65,105,225,0.15)]"
          >
            {tool.rating >= 4.7 && (
              <div className="absolute right-0 top-0">
                <div className="flex items-center gap-1 rounded-bl-lg bg-royal-blue/20 px-3 py-1 backdrop-blur-sm">
                  <TrendingUpIcon className="h-3 w-3 text-royal-blue" />
                  <span className="text-xs font-medium text-royal-blue">
                    Trending
                  </span>
                </div>
              </div>
            )}

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-urbanist text-xl font-bold text-snow">
                    {tool.name}
                  </h3>
                  <div className="mt-1 flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(tool.rating)
                            ? "fill-royal-blue text-royal-blue"
                            : i < tool.rating
                            ? "fill-royal-blue/50 text-royal-blue/50"
                            : "fill-none text-slate-gray/30"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-source-code-pro text-sm text-silver">
                      {tool.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-2">
                  <div className="h-full w-full rounded-md bg-royal-blue/20 p-1">
                    <div className="h-full w-full rounded bg-royal-blue/30"></div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="mb-4 line-clamp-2 font-urbanist text-silver/80">
                {tool.description}
              </p>
              <div className="mb-2 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-slate-800/50 font-source-code-pro text-xs text-silver/70 backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Button
                variant="outline"
                className="w-full border-slate-gray/30 bg-transparent font-urbanist text-royal-blue transition-all hover:border-royal-blue hover:bg-royal-blue/10"
              >
                View Details <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
