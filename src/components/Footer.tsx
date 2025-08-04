import Link from "next/link";
import { HexagonIcon, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-gray/10 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <HexagonIcon className="h-6 w-6 text-royalBlue" />
              <span className="font-urbanist text-xl font-bold text-snow">
                DevTools
              </span>
            </Link>
            <p className="mb-4 text-sm text-silver/80">
              A curated directory of developer tools and resources to help you
              build better software.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-silver hover:text-royalBlue">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-silver hover:text-royalBlue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-silver hover:text-royalBlue">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-urbanist text-lg font-semibold text-snow">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/tools"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/submit"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Submit Tool
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-urbanist text-lg font-semibold text-snow">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/categories/frontend"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/backend"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/devops"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/ai-tools"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    AI Tools
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-urbanist text-lg font-semibold text-snow">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-silver/80 transition-colors hover:text-royalBlue"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-gray/10 pt-8 text-center text-xs text-silver/60">
          <p>
            © {new Date().getFullYear()} DevTools Directory. All rights
            reserved.
          </p>
          <p className="mt-2 font-source-code-pro">
            Made with ❤️ for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
