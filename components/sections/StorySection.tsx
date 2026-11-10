'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-24 bg-[#EFE9DD]/50 border-y border-[#E2D9CC] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2D9CC] text-xs font-semibold uppercase tracking-wider text-[#4A3B32]">
            <Sparkles className="w-3.5 h-3.5 text-[#C8933E]" />
            <span>My Story</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D231E] leading-tight">
            From Word-Wrangler to Brand Catalyst
          </h2>

          <p className="text-lg text-[#4A3B32] leading-relaxed font-light">
            After a decade spent word-wrangling for brands big and small, I turned my obsession with crisp sentences and sharp ideas into a freelance career. Today, I help businesses sound smarter, sell better, and stay memorable.
          </p>

          {/* Canva Template Quote Callout Box */}
          <div className="p-8 sm:p-12 my-8 rounded-2xl bg-[#FFFFFF] border-l-4 border-[#C8933E] shadow-sm text-left relative">
            <span className="text-5xl text-[#C8933E]/40 font-serif absolute top-4 right-8 select-none">
              &rdquo;
            </span>
            <p className="font-serif text-2xl sm:text-3xl italic text-[#2D231E] leading-snug">
              &ldquo;Write with purpose, edit with precision, deliver with personality.&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#7A695E] font-medium">
                The Guiding Editorial Principle
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#C8933E] hover:text-[#B28133] transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
