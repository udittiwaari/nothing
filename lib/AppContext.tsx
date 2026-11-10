'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, ProgressPost, BlogPost, Comment } from './types';
import { INITIAL_POSTS, INITIAL_BLOG_POSTS } from './mockData';

interface AppContextType {
  currentUser: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  posts: ProgressPost[];
  addPost: (content: string, imageUrl?: string, metrics?: { label: string; value: string }, tags?: string[]) => void;
  likePost: (postId: string) => void;
  addComment: (postId: string, content: string) => void;
  blogs: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<ProgressPost[]>(INITIAL_POSTS);
  const [blogs] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Initialize with stored user or demo state
  useEffect(() => {
    const savedUser = localStorage.getItem('alex_bennett_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch {
        // ignore
      }
    } else {
      // Default demo visitor
      const defaultUser: User = {
        id: 'visitor-01',
        name: 'Jordan Miller',
        email: 'jordan.miller@example.com',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        role: 'Content Enthusiast',
        bio: 'Building, learning copywriting, and sharing daily milestones.',
      };
      setCurrentUser(defaultUser);
      localStorage.setItem('alex_bennett_user', JSON.stringify(defaultUser));
    }

    const savedPosts = localStorage.getItem('alex_bennett_posts');
    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts));
      } catch {
        // ignore
      }
    }
  }, []);

  const login = (name: string, email: string) => {
    const newUser: User = {
      id: 'user-' + Date.now(),
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=2D231E,C8933E`,
      role: 'Community Member',
      bio: 'Excited to level up writing and share growth milestones with the community.',
    };
    setCurrentUser(newUser);
    localStorage.setItem('alex_bennett_user', JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('alex_bennett_user');
  };

  const addPost = (content: string, imageUrl?: string, metrics?: { label: string; value: string }, tags: string[] = ['Progress']) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    const newPost: ProgressPost = {
      id: 'post-' + Date.now(),
      author: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
        headline: currentUser.role || 'Community Creator',
      },
      content,
      imageUrl,
      metrics,
      likes: 0,
      likedBy: [],
      comments: [],
      tags,
      createdAt: 'Just now',
    };

    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem('alex_bennett_posts', JSON.stringify(updated));
  };

  const likePost = (postId: string) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    const updated = posts.map(post => {
      if (post.id === postId) {
        const hasLiked = post.likedBy?.includes(currentUser.id);
        const newLikedBy = hasLiked
          ? post.likedBy.filter(id => id !== currentUser.id)
          : [...(post.likedBy || []), currentUser.id];
        return {
          ...post,
          likes: newLikedBy.length,
          likedBy: newLikedBy,
        };
      }
      return post;
    });

    setPosts(updated);
    localStorage.setItem('alex_bennett_posts', JSON.stringify(updated));
  };

  const addComment = (postId: string, content: string) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    const newComment: Comment = {
      id: 'c-' + Date.now(),
      author: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
      },
      content,
      createdAt: 'Just now',
    };

    const updated = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), newComment],
        };
      }
      return post;
    });

    setPosts(updated);
    localStorage.setItem('alex_bennett_posts', JSON.stringify(updated));
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        login,
        logout,
        posts,
        addPost,
        likePost,
        addComment,
        blogs,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
