export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role?: string;
  bio?: string;
}

export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
}

export interface ProgressPost {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    headline?: string;
  };
  content: string;
  imageUrl?: string;
  metrics?: {
    label: string;
    value: string;
  };
  likes: number;
  likedBy: string[]; // user ids
  comments: Comment[];
  tags: string[];
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
}
