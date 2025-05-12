"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page, last page, current page, and one page on each side of current page if possible
      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push("ellipsis-start");
      }

      // Pages around current
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("ellipsis-end");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center mt-8" aria-label="Pagination">
      <ul className="flex items-center gap-1">
        <li>
          <Button
            variant="outline"
            size="icon"
            className={`h-9 w-9 border-[#708090]/30 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#4169E1]/10 hover:text-[#4169E1]"
            }`}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </li>

        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <li key={`ellipsis-${index}`} className="px-1">
                <span className="text-[#C0C0C0]">...</span>
              </li>
            );
          }

          return (
            <li key={index}>
              <Button
                variant={currentPage === page ? "default" : "outline"}
                className={`h-9 w-9 font-source-code-pro ${
                  currentPage === page
                    ? "bg-[#4169E1] hover:bg-[#4169E1]/90"
                    : "border-[#708090]/30 hover:bg-[#4169E1]/10 hover:text-[#4169E1]"
                }`}
                onClick={() => onPageChange(page as number)}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </Button>
            </li>
          );
        })}

        <li>
          <Button
            variant="outline"
            size="icon"
            className={`h-9 w-9 border-[#708090]/30 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#4169E1]/10 hover:text-[#4169E1]"
            }`}
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
