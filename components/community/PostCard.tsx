'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
import { ProgressPost } from '@/lib/types';
import { useApp } from '@/lib/AppContext';

interface PostCardProps {
  post: ProgressPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { currentUser, likePost, addComment, setIsAuthModalOpen } = useApp();
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  const hasLiked = currentUser ? post.likedBy?.includes(currentUser.id) : false;

  const handleLike = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    likePost(post.id);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    if (!commentText.trim()) return;
    addComment(post.id, commentText.trim());
    setCommentText('');
  };

  return (
    <article className="bg-[#FFFFFF] rounded-2xl border border-[#E2D9CC] shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between">
      <div>
        {/* Post Author Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-11 h-11 rounded-full object-cover border border-[#C8933E]/40"
            />
            <div>
              <h4 className="font-semibold text-sm text-[#2D231E]">
                {post.author.name}
              </h4>
              <p className="text-[11px] text-[#7A695E]">
                {post.author.headline || 'Community Creator'} &bull; {post.createdAt}
              </p>
            </div>
          </div>

          {post.metrics && (
            <div className="bg-[#F7F3EB] border border-[#E2D9CC] px-3 py-1 rounded-full text-right">
              <span className="block text-[10px] uppercase font-semibold text-[#7A695E]">
                {post.metrics.label}
              </span>
              <span className="block text-xs font-mono font-bold text-[#C8933E]">
                {post.metrics.value}
              </span>
            </div>
          )}
        </div>

        {/* Post Text Content */}
        <p className="text-sm text-[#3E3129] leading-relaxed mb-4">
          {post.content}
        </p>

        {/* Post Image Showcase */}
        {post.imageUrl && (
          <div className="rounded-xl overflow-hidden mb-4 border border-[#ECE5DA] bg-[#F7F3EB] aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt="Progress showcase"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-md bg-[#F7F3EB] text-[#7A695E] border border-[#E2D9CC]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Interactions / Like / Comment Footer */}
      <div>
        <div className="flex items-center justify-between pt-4 border-t border-[#ECE5DA] text-xs font-medium text-[#7A695E]">
          <div className="flex items-center gap-6">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                hasLiked ? 'text-[#C8933E] font-bold' : 'hover:text-[#2D231E]'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-[#C8933E] text-[#C8933E]' : ''}`} />
              <span>{post.likes}</span>
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1.5 hover:text-[#2D231E] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments?.length || 0} comments</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.author.name, text: post.content, url: window.location.href });
              }
            }}
            className="hover:text-[#2D231E] transition-colors p-1"
            title="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Comment Thread */}
        {showComments && (
          <div className="mt-4 pt-4 border-t border-[#ECE5DA] space-y-3">
            {post.comments && post.comments.length > 0 ? (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {post.comments.map((comm) => (
                  <div key={comm.id} className="flex gap-2.5 bg-[#F7F3EB] p-3 rounded-xl border border-[#E2D9CC]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={comm.author.avatar}
                      alt={comm.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#C8933E]/50 shrink-0"
                    />
                    <div className="text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#2D231E]">{comm.author.name}</span>
                        <span className="text-[10px] text-[#7A695E]">{comm.createdAt}</span>
                      </div>
                      <p className="text-[#4A3B32] mt-0.5">{comm.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#7A695E] italic text-center py-2">
                No comments yet. Start the conversation!
              </p>
            )}

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder={currentUser ? 'Write an encouraging comment...' : 'Sign in to comment...'}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-[#2D231E] text-[#F7F3EB] rounded-xl hover:bg-[#4A3B32] transition-colors text-xs font-semibold flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#C8933E]" />
              </button>
            </form>
          </div>
        )}
      </div>
    </article>
  );
}
