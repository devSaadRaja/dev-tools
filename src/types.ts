export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  rating: number;
  submittedBy?: string;
  submittedDate?: string;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  toolCount: number;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: string;
  categoryId: string;
  targetDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RoadmapCategory {
  id: string;
  name: string;
  items: RoadmapItem[];
  createdAt: string;
  updatedAt: string;
}
