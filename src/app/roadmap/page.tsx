"use client";

import { useState, useEffect } from "react";
import type { RoadmapCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { Hexagon } from "lucide-react";

export default function Roadmap() {
  const [roadmapData, setRoadmapData] = useState<RoadmapCategory[]>([
    {
      id: "1",
      name: "Core Features",
      items: [
        {
          id: "1",
          title: "Advanced Search",
          description:
            "Implement advanced search with filters and sorting options",
          status: "In Progress",
          categoryId: "1",
          targetDate: "6/30/2025",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "2",
          title: "User Reviews",
          description: "Allow users to leave reviews and ratings for tools",
          status: "Planned",
          categoryId: "3",
          targetDate: "7/15/2025",
          createdAt: "",
          updatedAt: "",
        },
      ],
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "2",
      name: "UI Improvements",
      items: [
        {
          id: "1",
          title: "Dark Mode",
          description: "Implement dark mode toggle for better user experience",
          status: "Completed",
          categoryId: "2",
          targetDate: "",
          createdAt: "",
          updatedAt: "",
        },
        {
          id: "2",
          title: "Responsive Design",
          description: "Improve mobile and tablet experience",
          status: "In Progress",
          categoryId: "2",
          targetDate: "5/30/2025",
          createdAt: "",
          updatedAt: "",
        },
      ],
      createdAt: "",
      updatedAt: "",
    },
    ,
    {
      id: "3",
      name: "Integrations",
      items: [
        {
          id: "1",
          title: "GitHub Integration",
          description: "Connect with GitHub to pull repository data and stars",
          status: "Planned",
          categoryId: "2",
          targetDate: "",
          createdAt: "",
          updatedAt: "",
        },
      ],
      createdAt: "",
      updatedAt: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchRoadmap = async () => {
  //     try {
  //       const response = await fetch("/api/roadmap");
  //       if (!response.ok) throw new Error("Failed to fetch roadmap data");
  //       const data = await response.json();
  //       setRoadmapData(data);
  //     } catch (error) {
  //       console.error("Error fetching roadmap:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRoadmap();
  // }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "planned":
        return "bg-[#708090] text-[#FFFAFA]";
      case "in progress":
        return "bg-[#4169E1] text-[#FFFAFA]";
      case "completed":
        return "bg-green-600 text-[#FFFAFA]";
      default:
        return "bg-[#C0C0C0] text-[#121212]";
    }
  };

  const calculateProgress = (category: RoadmapCategory) => {
    if (!category.items.length) return 0;
    const completed = category.items.filter(
      (item) => item.status.toLowerCase() === "completed"
    ).length;
    return Math.round((completed / category.items.length) * 100);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4169E1]"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-2">
        <div className="flex items-center gap-2">
          <Hexagon className="h-5 w-5 sm:h-6 sm:w-6 text-[#4169E1]" />
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-royalBlue to-snow bg-clip-text text-transparent font-urbanist">
            Development Roadmap
          </h1>
        </div>
      </div>

      <p className="text-[#C0C0C0] mb-6 sm:mb-8 font-urbanist text-sm sm:text-base">
        Track our progress as we build and improve the Dev Tools Directory.
        Here's what we're working on and what's coming next.
      </p>

      <Tabs defaultValue="all" className="w-full">
        {/* defaultValue={roadmapData[0]?.id || "all"} */}
        <div className="overflow-x-auto pb-2">
          <TabsList className="bg-[#1A1A2E] border border-[#2A2A3E] mb-6">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#4169E1] data-[state=active]:text-[#FFFAFA]"
            >
              All Features
            </TabsTrigger>
            {roadmapData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-[#4169E1] data-[state=active]:text-[#FFFAFA]"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-6 sm:space-y-8">
          {roadmapData.map((category) => (
            <div key={category.id} className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-semibold text-[#FFFAFA] font-urbanist">
                  {category.name}
                </h2>
                <div className="flex items-center gap-2">
                  <Progress
                    value={calculateProgress(category)}
                    className="w-24 sm:w-32 h-2 bg-[#2A2A3E]"
                  />
                  <span className="text-xs sm:text-sm text-[#C0C0C0] font-source-code-pro">
                    {calculateProgress(category)}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {category.items.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-[#1A1A2E] border border-[#2A2A3E] hover:border-[#4169E1] transition-all"
                  >
                    <CardHeader className="pb-1 sm:pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-[#FFFAFA] font-urbanist text-base sm:text-lg">
                          {item.title}
                        </CardTitle>
                        <Badge
                          className={`${getStatusColor(
                            item.status
                          )} text-xs whitespace-nowrap`}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-[#C0C0C0] text-xs sm:text-sm font-source-code-pro">
                        {item.description}
                      </p>
                      {item.targetDate && (
                        <p className="text-xs text-[#708090] mt-2 font-source-code-pro">
                          Target:{" "}
                          {new Date(item.targetDate).toLocaleDateString()}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {roadmapData.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <h2 className="text-lg sm:text-xl font-semibold text-[#FFFAFA] font-urbanist">
                {category.name}
              </h2>
              <div className="flex items-center gap-2">
                <Progress
                  value={calculateProgress(category)}
                  className="w-24 sm:w-32 h-2 bg-[#2A2A3E]"
                />
                <span className="text-xs sm:text-sm text-[#C0C0C0] font-source-code-pro">
                  {calculateProgress(category)}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {category.items.map((item) => (
                <Card
                  key={item.id}
                  className="bg-[#1A1A2E] border border-[#2A2A3E] hover:border-[#4169E1] transition-all"
                >
                  <CardHeader className="pb-1 sm:pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-[#FFFAFA] font-urbanist text-base sm:text-lg">
                        {item.title}
                      </CardTitle>
                      <Badge
                        className={`${getStatusColor(
                          item.status
                        )} text-xs whitespace-nowrap`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-[#C0C0C0] text-xs sm:text-sm font-source-code-pro">
                      {item.description}
                    </p>
                    {item.targetDate && (
                      <p className="text-xs text-[#708090] mt-2 font-source-code-pro">
                        Target: {new Date(item.targetDate).toLocaleDateString()}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
