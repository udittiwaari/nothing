'use client';

import React, { useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Heart, Send } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

function BlogPostContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const { blogs, currentUser, setIsAuthModalOpen } = useApp();

  const [likes, setLikes] = useState(38);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<Array<{ id: string; name: string; avatar: string; text: string; time: string }>>([
    {
      id: '1',
      name: 'Leopold L.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'The section on stripping adjectives is gold. We cut 40% of our landing page word count and saw signups jump immediately.',
      time: 'Yesterday',
    },
  ]);
  const [commentInput, setCommentInput] = useState('');

  const post = blogs.find((b) => b.slug === slug) || blogs[0];

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    if (!commentInput.trim()) return;

    setComments([
      ...comments,
      {
        id: 'c-' + Date.now(),
        name: currentUser.name,
        avatar: currentUser.avatar,
        text: commentInput.trim(),
        time: 'Just now',
      },
    ]);
    setCommentInput('');
  };

  return (
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#7A695E] hover:text-[#2D231E] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>

        {/* Post Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-semibold uppercase tracking-wider text-[#C8933E]">
            {post.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2D231E] leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E2D9CC] text-xs text-[#7A695E]">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#C8933E]"
              />
              <div>
                <span className="block font-semibold text-[#2D231E]">
                  {post.author.name}
                </span>
                <span className="text-[11px]">Author &bull; Lead Strategist</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-[#E2D9CC] shadow-md aspect-[16/9] bg-[#E2D9CC]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none text-[#3E3129] font-light leading-relaxed space-y-6">
          <p className="text-xl font-serif italic text-[#2D231E] border-l-4 border-[#C8933E] pl-6 py-2 bg-[#EFE9DD]/30 rounded-r-xl">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line text-base sm:text-lg leading-relaxed text-[#4A3B32]">
            {post.content}
          </div>
        </div>

        {/* Post Footer Action Bar */}
        <div className="mt-16 pt-8 border-t border-[#E2D9CC] flex items-center justify-between">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E2D9CC] text-xs font-semibold transition-all cursor-pointer ${
              hasLiked ? 'bg-[#2D231E] text-white border-[#2D231E]' : 'bg-white text-[#2D231E] hover:bg-[#EFE9DD]'
            }`}
          >
            <Heart className={`w-4 h-4 ${hasLiked ? 'fill-[#C8933E] text-[#C8933E]' : ''}`} />
            <span>{likes} Applauds</span>
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href });
              }
            }}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#7A695E] hover:text-[#2D231E] transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Article</span>
          </button>
        </div>

        {/* Reader Comments Section */}
        <div className="mt-16 pt-12 border-t border-[#E2D9CC] space-y-8">
          <h3 className="font-serif text-2xl font-bold text-[#2D231E]">
            Discussion &amp; Feedback ({comments.length})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <textarea
              rows={3}
              placeholder={currentUser ? 'Leave your feedback or reflections...' : 'Sign in to join the conversation...'}
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E] resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider hover:bg-[#4A3B32] transition-colors cursor-pointer"
              >
                <span>Post Comment</span>
                <Send className="w-3.5 h-3.5 text-[#C8933E]" />
              </button>
            </div>
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.map((comm) => (
              <div key={comm.id} className="p-5 rounded-2xl bg-white border border-[#E2D9CC] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={comm.avatar}
                      alt={comm.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#C8933E]"
                    />
                    <span className="font-semibold text-xs text-[#2D231E]">{comm.name}</span>
                  </div>
                  <span className="text-[11px] text-[#7A695E]">{comm.time}</span>
                </div>
                <p className="text-sm text-[#4A3B32] pl-11">{comm.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogPostDetail() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-sm text-[#7A695E]">Loading article...</div>}>
      <BlogPostContent />
    </Suspense>
  );
}
