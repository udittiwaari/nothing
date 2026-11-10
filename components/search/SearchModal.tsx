'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Feather, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery, blogs, posts } = useApp();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const query = searchQuery.trim().toLowerCase();

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(query) ||
      b.excerpt.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query)
  );

  const filteredPosts = posts.filter(
    (p) =>
      p.content.toLowerCase().includes(query) ||
      p.author.name.toLowerCase().includes(query) ||
      p.tags?.some((t) => t.toLowerCase().includes(query))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-3xl border border-[#E2D9CC] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-[#ECE5DA] gap-3">
          <Search className="w-5 h-5 text-[#C8933E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search articles, case studies, community tips, or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-base text-[#2D231E] placeholder-[#9B897D] bg-transparent focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-full hover:bg-[#F7F3EB] text-[#7A695E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Portfolio Links */}
          {!query && (
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7A695E]">
                Quick Navigation
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#2D231E]">
                <Link
                  href="/#services"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2.5 rounded-xl bg-[#F7F3EB] hover:bg-[#EFE9DD] transition-colors flex items-center justify-between"
                >
                  <span>Services &amp; Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8933E]" />
                </Link>
                <Link
                  href="/#story"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2.5 rounded-xl bg-[#F7F3EB] hover:bg-[#EFE9DD] transition-colors flex items-center justify-between"
                >
                  <span>My Story &amp; Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8933E]" />
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2.5 rounded-xl bg-[#F7F3EB] hover:bg-[#EFE9DD] transition-colors flex items-center justify-between"
                >
                  <span>All Blog Posts</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8933E]" />
                </Link>
                <Link
                  href="/community"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2.5 rounded-xl bg-[#F7F3EB] hover:bg-[#EFE9DD] transition-colors flex items-center justify-between"
                >
                  <span>Community Progress Feed</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8933E]" />
                </Link>
              </div>
            </div>
          )}

          {/* Blogs Results */}
          {filteredBlogs.length > 0 && (
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C8933E] flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5" />
                <span>Blog Posts ({filteredBlogs.length})</span>
              </span>
              <div className="space-y-2">
                {filteredBlogs.map((b) => (
                  <Link
                    key={b.id}
                    href={`/blog/${b.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="block p-3 rounded-xl bg-[#F7F3EB] hover:bg-[#EFE9DD] transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs text-[#7A695E] mb-1">
                      <span className="font-semibold text-[#C8933E]">{b.category}</span>
                      <span>{b.readingTime}</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#2D231E] group-hover:text-[#C8933E] transition-colors">
                      {b.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Community Results */}
          {filteredPosts.length > 0 && (
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C8933E] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Community Updates ({filteredPosts.length})</span>
              </span>
              <div className="space-y-2">
                {filteredPosts.map((p) => (
                  <Link
                    key={p.id}
                    href="/community"
                    onClick={() => setIsSearchOpen(false)}
                    className="block p-3 rounded-xl bg-[#F7F3EB] hover:bg-[#EFE9DD] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-[#7A695E] mb-1">
                      <span className="font-semibold text-[#2D231E]">{p.author.name}</span>
                      <span>{p.createdAt}</span>
                    </div>
                    <p className="text-xs text-[#4A3B32] line-clamp-2">{p.content}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {query && filteredBlogs.length === 0 && filteredPosts.length === 0 && (
            <div className="text-center py-8 space-y-2 text-sm text-[#7A695E]">
              <p>No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-[#9B897D]">Try searching for &quot;copy&quot;, &quot;conversion&quot;, or &quot;voice&quot;.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
