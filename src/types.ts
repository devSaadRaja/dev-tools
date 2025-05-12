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
