"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const relatedTools = [
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces",
    logo: "/placeholder.svg?key=5anfn",
  },
  {
    id: "gatsby",
    name: "Gatsby",
    description: "Static site generator for React",
    logo: "/gatsby-logo-dark.png",
  },
  {
    id: "remix",
    name: "Remix",
    description: "Full stack web framework",
    logo: "/remix-logo-dark.png",
  },
];

export default function RelatedTools() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {relatedTools.map((tool, index) => (
        <Link
          key={tool.id}
          href={`/tools/${tool.id}`}
          className="block relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="bg-[#0f172a] p-4 rounded-lg hover:bg-[#2d3748] transition-colors flex items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-[#2d3748] rounded-md overflow-hidden flex items-center justify-center">
              <Image
                src={tool.logo || "/placeholder.svg"}
                alt={`${tool.name} logo`}
                width={32}
                height={32}
              />
            </div>

            <div className="ml-3 flex-1">
              <h3 className="font-medium text-[#FFFAFA]">{tool.name}</h3>
              <p className="text-sm text-[#C0C0C0]">{tool.description}</p>
            </div>

            {hoveredIndex === index && (
              <ArrowRight className="ml-2 h-4 w-4 text-[#4169E1]" />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
