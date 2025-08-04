"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { fetchTopRatedTools } from "@/lib/data";
import ToolCard from "@/components/ToolCard";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface PaginatedToolsProps {
  currentPage: number;
}

export default function PaginatedTools({ currentPage }: PaginatedToolsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [toolsData, setToolsData] = useState<{
    tools: any[];
    totalTools: number;
    totalPages: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadTools() {
      try {
        setIsLoading(true);
        const data = await fetchTopRatedTools(currentPage);
        setToolsData(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load tools")
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadTools();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#4169E1] border-r-transparent"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-8 text-center bg-[#1E2130] border-[#708090]/20">
        <div className="flex flex-col items-center justify-center gap-4">
          <AlertCircle className="h-12 w-12 text-[#C0C0C0]" />
          <h3 className="text-xl font-medium text-[#FFFAFA]">
            Failed to load tools
          </h3>
          <p className="text-[#C0C0C0] max-w-md">
            We encountered an error while trying to load the top rated tools.
            Please try again.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="mt-4 bg-[#4169E1] hover:bg-[#4169E1]/80"
          >
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  if (!toolsData || toolsData.tools.length === 0) {
    return (
      <Card className="p-8 text-center bg-[#1E2130] border-[#708090]/20">
        <div className="flex flex-col items-center justify-center gap-4">
          <AlertCircle className="h-12 w-12 text-[#C0C0C0]" />
          <h3 className="text-xl font-medium text-[#FFFAFA]">
            No top-rated tools found
          </h3>
          <p className="text-[#C0C0C0] max-w-md">
            We couldn't find any tools that meet our top rating criteria. Check
            back later or explore all tools.
          </p>
          <Button asChild className="mt-4 bg-[#4169E1] hover:bg-[#4169E1]/80">
            <Link href="/tools">Browse All Tools</Link>
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsData.tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={toolsData.totalPages}
          onPageChange={handlePageChange}
        />
        <p className="text-[#C0C0C0] text-sm mt-4 font-source-code-pro">
          Showing {(currentPage - 1) * 6 + 1}-
          {Math.min(currentPage * 6, toolsData.totalTools)} of{" "}
          {toolsData.totalTools} tools
        </p>
      </div>
    </div>
  );
}
