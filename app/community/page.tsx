'use client';

import React, { useState } from 'react';
import { Sparkles, Plus, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { useApp } from '@/lib/AppContext';
import PostCard from '@/components/community/PostCard';
import CreatePostModal from '@/components/community/CreatePostModal';

export default function CommunityPage() {
  const { posts } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterTag, setFilterTag] = useState<string>('All');

  const tags = ['All', 'Progress', 'Copywriting', 'Launch', 'Team Culture'];

  const filteredPosts = filterTag === 'All'
    ? posts
    : posts.filter((p) => p.tags?.includes(filterTag));

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner / Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-semibold uppercase tracking-wider text-[#4A3B32]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Community Progress Wall &amp; Discussions</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D231E]">
              Share Milestones, Copy Teardowns &amp; Real Growth
            </h1>
            <p className="text-base text-[#7A695E] leading-relaxed">
              A dedicated space for builders and founders to celebrate progress, share before/after conversion snapshots, and receive constructive editorial feedback.
            </p>
          </div>

          {/* Quick Stats & Action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex items-center gap-6 bg-white p-4 rounded-2xl border border-[#E2D9CC]">
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#C8933E]" />
                <div>
                  <span className="block text-xs font-bold text-[#2D231E]">240+</span>
                  <span className="block text-[10px] text-[#7A695E]">Members</span>
                </div>
              </div>
              <div className="h-6 w-px bg-[#ECE5DA]" />
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[#C8933E]" />
                <div>
                  <span className="block text-xs font-bold text-[#2D231E]">{posts.length}</span>
                  <span className="block text-[10px] text-[#7A695E]">Milestones</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#4A3B32] transition-colors shadow-md cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#C8933E]" />
              <span>Post Your Progress</span>
            </button>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filterTag === tag
                  ? 'bg-[#2D231E] text-[#F7F3EB]'
                  : 'bg-[#FFFFFF] text-[#4A3B32] border border-[#E2D9CC] hover:bg-[#EFE9DD]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Feed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E2D9CC] space-y-4">
            <MessageSquare className="w-12 h-12 text-[#C8933E] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#2D231E]">
              No posts in this category yet
            </h3>
            <p className="text-xs text-[#7A695E] max-w-sm mx-auto">
              Be the first to share your progress, test results, or before/after copy snapshot!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#4A3B32]"
            >
              <Plus className="w-4 h-4 text-[#C8933E]" />
              <span>Create Post</span>
            </button>
          </div>
        )}
      </div>

      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
