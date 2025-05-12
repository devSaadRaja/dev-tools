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
