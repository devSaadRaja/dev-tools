"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HexagonIcon, Menu, X, Github, Twitter } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-gray/10 bg-slate-900/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <HexagonIcon className="h-6 w-6 text-royal-blue" />
          <span className="font-urbanist text-xl font-bold text-snow">
            DevTools
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/tools"
            className="font-urbanist text-silver transition-colors hover:text-snow"
          >
            All Tools
          </Link>
          <Link
            href="/categories"
            className="font-urbanist text-silver transition-colors hover:text-snow"
          >
            Categories
          </Link>
          <Link
            href="/submit"
            className="font-urbanist text-silver transition-colors hover:text-snow"
          >
            Submit Tool
          </Link>
          <Link
            href="/about"
            className="font-urbanist text-silver transition-colors hover:text-snow"
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
          <Button className="bg-royal-blue font-urbanist text-snow hover:bg-royal-blue/90">
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
        <div className="fixed inset-0 top-16 z-40 bg-slate-900 p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/tools"
              className="rounded-lg p-3 font-urbanist text-lg text-silver hover:bg-slate-800 hover:text-snow"
              onClick={() => setIsMenuOpen(false)}
            >
              All Tools
            </Link>
            <Link
              href="/categories"
              className="rounded-lg p-3 font-urbanist text-lg text-silver hover:bg-slate-800 hover:text-snow"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/submit"
              className="rounded-lg p-3 font-urbanist text-lg text-silver hover:bg-slate-800 hover:text-snow"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Tool
            </Link>
            <Link
              href="/about"
              className="rounded-lg p-3 font-urbanist text-lg text-silver hover:bg-slate-800 hover:text-snow"
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
                className="flex-1 bg-royal-blue font-urbanist text-snow hover:bg-royal-blue/90"
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
