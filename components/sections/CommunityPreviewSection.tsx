'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MessageSquare, ArrowRight, Plus } from 'lucide-react';
import { useApp } from '@/lib/AppContext';
import PostCard from '@/components/community/PostCard';
import CreatePostModal from '@/components/community/CreatePostModal';

export default function CommunityPreviewSection() {
  const { posts } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#F7F3EB] border-t border-[#E2D9CC] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DD] text-xs font-semibold uppercase tracking-wider text-[#4A3B32]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Community Progress &amp; Tips</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D231E]">
              Where Creators Share Wins, Copy &amp; Progress
            </h2>
            <p className="text-sm text-[#7A695E]">
              Join fellow founders, copywriters, and creators. Sign in to share your journey, display conversion results with images, and exchange actionable feedback.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#4A3B32] transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#C8933E]" />
              <span>Post Your Progress</span>
            </button>
            <Link
              href="/community"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#D9CEBF] bg-white text-xs uppercase tracking-wider font-semibold text-[#2D231E] hover:bg-[#EFE9DD] transition-colors"
            >
              <span>View Full Wall</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Display top 2 posts on homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, 2).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8933E] hover:text-[#B28133] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Explore all discussions, comments &amp; milestone images in the community &rarr;</span>
          </Link>
        </div>
      </div>

      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
