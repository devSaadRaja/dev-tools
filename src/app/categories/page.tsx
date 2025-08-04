import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Terminal,
  Database,
  Palette,
  Zap,
  Globe,
  Shield,
  Server,
  Cpu,
  GitBranch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Categories | Dev Tools Directory",
  description:
    "Browse through our curated categories of developer tools and resources",
};

interface CategoryProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  slug: string;
}

const categories: CategoryProps[] = [
  {
    id: "1",
    title: "IDEs & Code Editors",
    description:
      "Powerful development environments and text editors for coding",
    icon: <Code className="h-10 w-10 text-[#4169E1]" />,
    count: 42,
    slug: "ides",
  },
  {
    id: "2",
    title: "CLI Tools",
    description:
      "Command line interfaces and terminal utilities for developers",
    icon: <Terminal className="h-10 w-10 text-[#4169E1]" />,
    count: 38,
    slug: "cli",
  },
  {
    id: "3",
    title: "APIs & SDKs",
    description:
      "Application programming interfaces and software development kits",
    icon: <Database className="h-10 w-10 text-[#4169E1]" />,
    count: 56,
    slug: "apis",
  },
  {
    id: "4",
    title: "Design Tools",
    description:
      "UI/UX design tools and resources for creating beautiful interfaces",
    icon: <Palette className="h-10 w-10 text-[#4169E1]" />,
    count: 29,
    slug: "design",
  },
  {
    id: "5",
    title: "Performance Tools",
    description: "Tools for optimizing and measuring application performance",
    icon: <Zap className="h-10 w-10 text-[#4169E1]" />,
    count: 24,
    slug: "performance",
  },
  {
    id: "6",
    title: "Web Frameworks",
    description: "Frontend and backend frameworks for web development",
    icon: <Globe className="h-10 w-10 text-[#4169E1]" />,
    count: 35,
    slug: "frameworks",
  },
  {
    id: "7",
    title: "Security Tools",
    description:
      "Tools for securing applications and identifying vulnerabilities",
    icon: <Shield className="h-10 w-10 text-[#4169E1]" />,
    count: 31,
    slug: "security",
  },
  {
    id: "8",
    title: "Backend Services",
    description:
      "Databases, servers, and cloud services for backend development",
    icon: <Server className="h-10 w-10 text-[#4169E1]" />,
    count: 47,
    slug: "backend",
  },
  {
    id: "9",
    title: "DevOps Tools",
    description:
      "Tools for continuous integration, deployment, and infrastructure",
    icon: <Cpu className="h-10 w-10 text-[#4169E1]" />,
    count: 39,
    slug: "devops",
  },
  {
    id: "10",
    title: "Version Control",
    description: "Source code management and collaboration tools",
    icon: <GitBranch className="h-10 w-10 text-[#4169E1]" />,
    count: 18,
    slug: "version-control",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royalBlue to-snow bg-clip-text text-transparent py-2 font-urbanist">
            Browse Categories
          </h1>
          <p className="text-lg md:text-xl text-[#C0C0C0] max-w-3xl mx-auto font-urbanist">
            Discover and explore the best tools and resources organized by
            category for modern developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/`} // /tools/${category.id}
              key={category.id}
              className="group"
            >
              <div className="h-full border border-[#4169E1]/60 rounded-lg p-6 transition-all duration-300 hover:border-[#4169E1] hover:shadow-lg hover:shadow-[#4169E1]/10">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{category.icon}</div>
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-[#FFFAFA] font-urbanist">
                      {category.title}
                    </h2>
                    <Badge className="bg-[#4169E1] hover:bg-[#4169E1]/80 text-[#FFFAFA] font-source-code-pro">
                      {category.count}
                    </Badge>
                  </div>
                  <p className="text-[#C0C0C0] mb-4 flex-grow font-urbanist">
                    {category.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-auto w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-[#FFFAFA] font-source-code-pro"
                  >
                    Explore Tools
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
