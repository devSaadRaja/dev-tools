import type { Tool, Category } from "@/types";

export const featuredTools: Tool[] = [
  {
    id: "vscode",
    name: "Visual Studio Code",
    description:
      "A lightweight but powerful source code editor with built-in support for JavaScript, TypeScript and Node.js",
    url: "https://code.visualstudio.com/",
    category: "editors",
    tags: ["editor", "ide", "javascript", "typescript"],
    rating: 4.8,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "AI pair programmer that helps you write code faster with less work",
    url: "https://github.com/features/copilot",
    category: "ai-tools",
    tags: ["ai", "productivity", "coding-assistant"],
    rating: 4.7,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces",
    url: "https://tailwindcss.com/",
    category: "frontend",
    tags: ["css", "framework", "design"],
    rating: 4.9,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "The React framework for production that gives you the best developer experience",
    url: "https://nextjs.org/",
    category: "frameworks",
    tags: ["react", "framework", "javascript"],
    rating: 4.8,
  },
  {
    id: "postman",
    name: "Postman",
    description:
      "API platform for building and using APIs. Simplifies each step of the API lifecycle.",
    url: "https://www.postman.com/",
    category: "api-tools",
    tags: ["api", "testing", "development"],
    rating: 4.6,
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "Platform for developing, shipping, and running applications in containers",
    url: "https://www.docker.com/",
    category: "devops",
    tags: ["containers", "devops", "deployment"],
    rating: 4.7,
  },
];

export const categories: Category[] = [
  {
    id: "editors",
    name: "Code Editors & IDEs",
    description:
      "Text editors and integrated development environments for coding",
    toolCount: 12,
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description:
      "Tools and libraries for building user interfaces and web applications",
    toolCount: 24,
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Frameworks, databases, and tools for server-side development",
    toolCount: 18,
  },
  {
    id: "devops",
    name: "DevOps & Deployment",
    description:
      "Tools for continuous integration, deployment, and infrastructure management",
    toolCount: 15,
  },
  {
    id: "ai-tools",
    name: "AI & Machine Learning",
    description:
      "Tools and platforms for artificial intelligence and machine learning development",
    toolCount: 9,
  },
  {
    id: "productivity",
    name: "Developer Productivity",
    description:
      "Tools to improve workflow, collaboration, and coding efficiency",
    toolCount: 21,
  },
];

// This would typically be a database or API call
export async function fetchTopRatedTools(
  page = 1,
  pageSize = 6
): Promise<{
  tools: Tool[];
  totalTools: number;
  totalPages: number;
}> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, you would fetch from an API or database
  // and filter by rating
  const allTools = [
    {
      id: "vscode",
      name: "Visual Studio Code",
      description:
        "A lightweight but powerful source code editor with built-in support for JavaScript, TypeScript and Node.js",
      rating: 4.8,
      tags: ["editor", "ide", "javascript", "typescript"],
      url: "https://code.visualstudio.com",
      category: "editors",
      trending: true,
    },
    {
      id: "github-copilot",
      name: "GitHub Copilot",
      description:
        "AI pair programmer that helps you write code faster with less work",
      rating: 4.7,
      tags: ["ai", "productivity", "coding-assistant"],
      url: "https://github.com/features/copilot",
      category: "ai-tools",
      trending: true,
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces",
      rating: 4.9,
      tags: ["css", "framework", "design"],
      url: "https://tailwindcss.com",
      category: "frontend",
      trending: true,
    },
    {
      id: "nextjs",
      name: "Next.js",
      description:
        "The React framework for production - offering hybrid static & server rendering, TypeScript support, and route pre-fetching",
      rating: 4.9,
      tags: ["react", "framework", "javascript"],
      url: "https://nextjs.org",
      category: "frameworks",
      trending: true,
    },
    {
      id: "vercel",
      name: "Vercel",
      description:
        "Platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database",
      rating: 4.7,
      tags: ["hosting", "deployment", "serverless"],
      url: "https://vercel.com",
      category: "devops",
      trending: true,
    },
    {
      id: "typescript",
      name: "TypeScript",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript, adding static type definitions",
      rating: 4.6,
      tags: ["language", "javascript", "static-typing"],
      url: "https://www.typescriptlang.org",
      category: "frontend",
      trending: true,
    },
    {
      id: "docker",
      name: "Docker",
      description:
        "A platform for developing, shipping, and running applications in containers",
      rating: 4.5,
      tags: ["devops", "containers", "deployment"],
      url: "https://www.docker.com",
      category: "devops",
      trending: true,
    },
    {
      id: "figma",
      name: "Figma",
      description:
        "A collaborative interface design tool that's taking over the design world",
      rating: 4.8,
      tags: ["design", "ui", "collaboration"],
      url: "https://www.figma.com",
      category: "frontend",
      trending: true,
    },
    {
      id: "react",
      name: "React",
      description:
        "A JavaScript library for building user interfaces with a component-based architecture",
      rating: 4.7,
      tags: ["javascript", "frontend", "library"],
      url: "https://reactjs.org",
      category: "frontend",
      trending: true,
    },
    {
      id: "github",
      name: "GitHub",
      description:
        "A platform for version control and collaboration for software projects",
      rating: 4.8,
      tags: ["git", "collaboration", "version-control"],
      url: "https://github.com",
      category: "devops",
      trending: true,
    },
    {
      id: "vs-code-extensions",
      name: "VS Code Extensions",
      description:
        "Enhance your coding experience with powerful extensions for Visual Studio Code",
      rating: 4.6,
      tags: ["editor", "productivity", "tools"],
      url: "https://marketplace.visualstudio.com/vscode",
      category: "editors",
      trending: true,
    },
    {
      id: "postman",
      name: "Postman",
      description:
        "A collaboration platform for API development with easy testing and documentation",
      rating: 4.5,
      tags: ["api", "testing", "development"],
      url: "https://www.postman.com",
      category: "api-tools",
      trending: true,
    },
    {
      id: "notion",
      name: "Notion",
      description:
        "All-in-one workspace for notes, tasks, wikis, and databases",
      rating: 4.7,
      tags: ["productivity", "collaboration", "notes"],
      url: "https://www.notion.so",
      category: "productivity",
      trending: true,
    },
    {
      id: "supabase",
      name: "Supabase",
      description:
        "An open source Firebase alternative with a PostgreSQL database at its core",
      rating: 4.6,
      tags: ["database", "backend", "firebase-alternative"],
      url: "https://supabase.io",
      category: "devops",
      trending: true,
    },
    {
      id: "prisma",
      name: "Prisma",
      description:
        "Next-generation ORM for Node.js and TypeScript with type-safety and auto-completion",
      rating: 4.7,
      tags: ["orm", "database", "typescript"],
      url: "https://www.prisma.io",
      category: "backend",
      trending: true,
    },
  ];

  // Sort by rating (highest first)
  const sortedTools = [...allTools].sort((a, b) => b.rating - a.rating);

  // Calculate pagination
  const totalTools = sortedTools.length;
  const totalPages = Math.ceil(totalTools / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedTools = sortedTools.slice(startIndex, startIndex + pageSize);

  return {
    tools: paginatedTools,
    totalTools,
    totalPages,
  };
}
