"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HexagonIcon, Menu, X, Github, Twitter } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-gray/10 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <HexagonIcon className="h-6 w-6 text-royalBlue" />
          <span className="font-urbanist text-xl font-bold text-snow">
            DevTools
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/tools"
            className={`font-urbanist transition-colors hover:text-snow relative ${
              isActive("/tools")
                ? "text-snow after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:bg-royalBlue"
                : "text-silver"
            }`}
          >
            All Tools
          </Link>
          <Link
            href="/categories"
            className={`font-urbanist transition-colors hover:text-snow relative ${
              isActive("/categories")
                ? "text-snow after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:bg-royalBlue"
                : "text-silver"
            }`}
          >
            Categories
          </Link>
          <Link
            href="/submit"
            className={`font-urbanist transition-colors hover:text-snow relative ${
              isActive("/submit")
                ? "text-snow after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:bg-royalBlue"
                : "text-silver"
            }`}
          >
            Submit Tool
          </Link>
          <Link
            href="/roadmap"
            className={`font-urbanist transition-colors hover:text-snow relative ${
              isActive("/roadmap")
                ? "text-snow after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:bg-royalBlue"
                : "text-silver"
            }`}
          >
            Roadmap
          </Link>
          <Link
            href="/about"
            className={`font-urbanist transition-colors hover:text-snow relative ${
              isActive("/about")
                ? "text-snow after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:bg-royalBlue"
                : "text-silver"
            }`}
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="text-silver hover:bg-slate-800 hover:text-snow"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-silver hover:bg-slate-800 hover:text-snow"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button className="bg-royalBlue font-urbanist text-snow hover:bg-royalBlue/90">
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 p-4 md:hidden">
          <nav className="flex flex-col gap-4 bg-[#121212] rounded-lg p-4">
            <Link
              href="/tools"
              className={`rounded-lg p-3 font-urbanist text-lg hover:bg-slate-800 hover:text-snow relative ${
                isActive("/tools")
                  ? "text-snow bg-slate-800/50 border-l-2 border-royalBlue"
                  : "text-silver"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              All Tools
            </Link>
            <Link
              href="/categories"
              className={`rounded-lg p-3 font-urbanist text-lg hover:bg-slate-800 hover:text-snow relative ${
                isActive("/categories")
                  ? "text-snow bg-slate-800/50 border-l-2 border-royalBlue"
                  : "text-silver"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/submit"
              className={`rounded-lg p-3 font-urbanist text-lg hover:bg-slate-800 hover:text-snow relative ${
                isActive("/submit")
                  ? "text-snow bg-slate-800/50 border-l-2 border-royalBlue"
                  : "text-silver"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Tool
            </Link>
            <Link
              href="/roadmap"
              className={`rounded-lg p-3 font-urbanist text-lg hover:bg-slate-800 hover:text-snow relative ${
                isActive("/roadmap")
                  ? "text-snow bg-slate-800/50 border-l-2 border-royalBlue"
                  : "text-silver"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/about"
              className={`rounded-lg p-3 font-urbanist text-lg hover:bg-slate-800 hover:text-snow relative ${
                isActive("/about")
                  ? "text-snow bg-slate-800/50 border-l-2 border-royalBlue"
                  : "text-silver"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-silver hover:bg-slate-800 hover:text-snow"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-silver hover:bg-slate-800 hover:text-snow"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                className="flex-1 bg-royalBlue font-urbanist text-snow hover:bg-royalBlue/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
