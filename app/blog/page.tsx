'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Feather, ArrowRight, Search, Clock, Calendar } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

export default function BlogListPage() {
  const { blogs } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filterQuery, setFilterQuery] = useState('');

  const categories = ['All', 'Craft & Copy', 'Case Study', 'Strategy'];

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-semibold uppercase tracking-wider text-[#4A3B32]">
            <Feather className="w-3.5 h-3.5 text-[#C8933E]" />
            <span>The Editorial Journal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D231E]">
            Essays on Writing, Brand Voice &amp; Narrative Strategy
          </h1>
          <p className="text-base text-[#7A695E] leading-relaxed">
            Observations, tactical breakdowns, and case studies from a decade spent refining copy that cuts through the noise.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#E2D9CC]">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2D231E] text-[#F7F3EB]'
                    : 'bg-[#FFFFFF] text-[#4A3B32] border border-[#E2D9CC] hover:bg-[#EFE9DD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#7A695E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter essays..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-[#FFFFFF] border border-[#E2D9CC] text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E2D9CC] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#E2D9CC] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-[#2D231E] px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-[#7A695E]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2D231E] group-hover:text-[#C8933E] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#7A695E] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-[#ECE5DA]/60 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-[#4A3B32]">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#C8933E] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
