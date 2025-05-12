"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Star, ArrowRight, Bookmark } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <Card className="overflow-hidden bg-[#1E2130] border-[#708090]/20 hover:border-[#4169E1]/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium text-[#FFFAFA] font-urbanist">
            {tool.name}
          </h3>
          <Badge
            variant="outline"
            className="bg-[#4169E1]/10 text-[#4169E1] border-[#4169E1]/30"
          >
            {tool.trending ? "Trending" : "Top Rated"}
          </Badge>
        </div>

        <div className="flex items-center gap-2 my-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(tool.rating)
                    ? "text-[#4169E1] fill-[#4169E1]"
                    : i < tool.rating
                    ? "text-[#4169E1] fill-[#4169E1]/50"
                    : "text-[#708090] fill-transparent"
                }`}
              />
            ))}
          </div>
          <span className="text-[#FFFAFA] font-source-code-pro">
            {tool.rating.toFixed(1)}
          </span>
        </div>

        <p className="text-[#C0C0C0] mt-3 line-clamp-3">{tool.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-[#708090]/20 text-[#C0C0C0] font-source-code-pro"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-0 border-t border-[#708090]/20">
        <div className="flex w-full">
          <Button
            asChild
            variant="ghost"
            className="flex-1 rounded-none h-12 text-[#FFFAFA] hover:bg-[#708090]/20 font-urbanist"
          >
            <Link
              href={`/tools/${tool.id}`}
              className="flex items-center justify-center gap-2"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  onClick={handleSave}
                  className="h-12 aspect-square rounded-none border-l border-[#708090]/20 hover:bg-[#708090]/20"
                >
                  <Bookmark
                    className={`h-4 w-4 ${
                      saved ? "fill-[#4169E1] text-[#4169E1]" : "text-[#C0C0C0]"
                    }`}
                  />
                  <span className="sr-only">
                    {saved ? "Unsave" : "Save"} {tool.name}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{saved ? "Remove from saved" : "Save for later"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}
