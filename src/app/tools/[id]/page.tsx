import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  Tag,
  Calendar,
  Clock,
  Download,
  Hexagon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UserRating from "@/components/UserRating";

// This would typically come from a database
const toolData = {
  id: "nextjs",
  name: "Next.js",
  description:
    "Next.js is a React framework that enables server-side rendering, static site generation, and more. It provides a great developer experience with features like file-system routing, API routes, and built-in CSS support.",
  longDescription: `Next.js is a powerful React framework developed by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications. It's a production-ready framework that helps you build fast, user-friendly websites and applications.

Key features include:

• Hybrid Static & Server Rendering: Optimize each page for the best performance
• Automatic Code Splitting: Load only what's necessary for each page
• Client-side Routing: Smooth page transitions while maintaining browser history
• API Routes: Build API endpoints as Node.js serverless functions
• Built-in CSS and Sass Support: Import CSS/Sass files directly in your components
• Fast Refresh: Instant feedback during development
• TypeScript Support: Built-in TypeScript configuration
• Image Optimization: Automatic image optimization with the Image component
• Zero Config: Works out of the box with sensible defaults
• Internationalization: Built-in support for multiple languages
• Analytics: Real-time performance insights with Vercel Analytics

Next.js is used by many large companies including Netflix, TikTok, Twitch, and more. It's constantly evolving with regular updates and improvements from both Vercel and the open-source community.`,
  logo: "/placeholder.png",
  website: "https://nextjs.org",
  tags: ["React", "Framework", "SSR", "Frontend", "JavaScript"],
  rating: 4.8,
  ratingCount: 1243,
  downloads: "2.5M+",
  createdAt: "2016-10-25",
  updatedAt: "2023-06-15",
  stats: [
    { label: "GitHub Stars", value: "106K+" },
    { label: "Weekly Downloads", value: "2.5M+" },
    { label: "Contributors", value: "2,300+" },
    { label: "Open Issues", value: "187" },
  ],
};

export default function ToolPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the tool data based on the ID
  // const tool = await getToolById(params.id)
  const tool = toolData;

  return (
    <main className="min-h-screen bg-[#111827] text-[#FFFAFA] font-urbanist">
      {/* Hero section */}
      <div className="bg-[#0f172a] py-8 border-b border-[#1e293b]">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link
              href="/tools"
              className="inline-flex items-center text-[#C0C0C0] hover:text-[#4169E1] transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Tools</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[#1e293b] rounded-lg overflow-hidden flex items-center justify-center p-4 border border-[#2d3748]">
              <Image
                src={tool.logo || "/placeholder.svg"}
                alt={`${tool.name} logo`}
                width={80}
                height={80}
                className="rounded-md"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {tool.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-[#1e293b] hover:bg-[#2d3748] text-[#C0C0C0] border-none px-3 py-1"
                  >
                    <Tag className="h-3 w-3 mr-1.5 opacity-70" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#FFFAFA] mb-3">
                {tool.name}
              </h1>

              <p className="text-[#C0C0C0] text-lg max-w-3xl mb-4">
                {tool.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(Math.floor(tool.rating))].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#4169E1] text-[#4169E1]"
                      />
                    ))}
                    {tool.rating % 1 >= 0.5 && (
                      <Star className="h-5 w-5 fill-[#4169E1]/50 text-[#4169E1]" />
                    )}
                  </div>
                  <span className="ml-2 text-[#FFFAFA] font-medium">
                    {tool.rating.toFixed(1)}
                  </span>
                  <span className="ml-1 text-[#C0C0C0] text-sm">
                    ({tool.ratingCount})
                  </span>
                </div>

                <div className="flex items-center text-[#C0C0C0]">
                  <Download className="h-4 w-4 mr-1.5" />
                  <span>{tool.downloads} downloads</span>
                </div>

                <div className="flex items-center text-[#C0C0C0]">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Released: {tool.createdAt}</span>
                </div>

                <div className="flex items-center text-[#C0C0C0]">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span>Updated: {tool.updatedAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tool Info Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tool Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tool.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#1e293b] rounded-lg p-4 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#FFFAFA] mb-1 font-source-code-pro">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#C0C0C0]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-[#1e293b] rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#FFFAFA] flex items-center">
                  <Hexagon className="h-5 w-5 text-[#4169E1] mr-2" />
                  About {tool.name}
                </h2>

                <div className="text-[#C0C0C0] space-y-4 leading-relaxed">
                  {tool.longDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className={index === 0 ? "text-lg" : ""}>
                        {paragraph}
                      </p>
                    ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#4169E1] hover:bg-[#4169E1]/80 text-[#FFFAFA]">
                      Visit Official Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Rating Section */}
            <div className="bg-[#1e293b] rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#FFFAFA] flex items-center">
                  <Hexagon className="h-5 w-5 text-[#4169E1] mr-2" />
                  Rate This Tool
                </h2>

                <UserRating toolId={tool.id} currentRating={tool.rating} />
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-[#1e293b] rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#FFFAFA] flex items-center">
                  <Hexagon className="h-5 w-5 text-[#4169E1] mr-2" />
                  Related Tools
                </h2>

                <div className="space-y-4">
                  {["React", "Gatsby", "Remix"].map((relatedTool) => (
                    <Link
                      key={relatedTool}
                      href={`/tools/${relatedTool.toLowerCase()}`}
                      className="block bg-[#0f172a] p-4 rounded-lg hover:bg-[#2d3748] transition-colors"
                    >
                      <div className="font-medium text-[#FFFAFA]">
                        {relatedTool}
                      </div>
                      <div className="text-sm text-[#C0C0C0]">
                        JavaScript Framework
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
