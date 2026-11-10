'use client';

import React, { useState } from 'react';
import { X, Image as ImageIcon, Send, Sparkles } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const { currentUser, addPost, setIsAuthModalOpen } = useApp();
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [metricLabel, setMetricLabel] = useState('');
  const [metricValue, setMetricValue] = useState('');
  const [tag, setTag] = useState('Progress');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      onClose();
      setIsAuthModalOpen(true);
      return;
    }
    if (!content.trim()) return;

    const metrics = metricLabel && metricValue ? { label: metricLabel, value: metricValue } : undefined;
    addPost(content.trim(), imageUrl.trim() || undefined, metrics, [tag]);

    // reset & close
    setContent('');
    setImageUrl('');
    setMetricLabel('');
    setMetricValue('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-[#E2D9CC] shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-[#ECE5DA]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C8933E]" />
            <h3 className="font-serif text-xl font-bold text-[#2D231E]">
              Share Progress &amp; Work
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#F7F3EB] text-[#7A695E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-1.5">
              What milestone did you achieve or test today?
            </label>
            <textarea
              required
              rows={3}
              placeholder="e.g. Launched new sales page copy with shorter sentences, or tested a new headline..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E] resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-1.5 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Show an image of your progress (URL or snapshot)</span>
            </label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/... or paste image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-xs text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
            />
            {imageUrl && (
              <div className="mt-2 h-28 rounded-xl overflow-hidden border border-[#E2D9CC] bg-[#F7F3EB]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A3B32] mb-1">
                Metric Label (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Open Rate, Conversions"
                value={metricLabel}
                onChange={(e) => setMetricLabel(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-xs text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A3B32] mb-1">
                Metric Boost
              </label>
              <input
                type="text"
                placeholder="e.g. +38%, 450 signups"
                value={metricValue}
                onChange={(e) => setMetricValue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-xs text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#4A3B32] mb-1">
              Category Tag
            </label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-xs text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
            >
              <option value="Progress">Progress Milestone</option>
              <option value="Copywriting">Copywriting Rewrite</option>
              <option value="Launch">Project Launch</option>
              <option value="Feedback">Requesting Feedback</option>
              <option value="CaseStudy">Mini Case Study</option>
            </select>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#7A695E] hover:text-[#2D231E] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider hover:bg-[#4A3B32] transition-colors shadow-md cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Publish Milestone</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
