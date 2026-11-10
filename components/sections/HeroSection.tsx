'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Feather } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Vintage Accent Texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE4D2]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-medium text-[#4A3B32]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Vintage Cinematica Copywriting</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2D231E] leading-[1.08]">
              Hi, I&apos;m <span className="italic font-normal text-[#C8933E]">Alex Bennett</span>.
            </h1>

            <p className="text-xl sm:text-2xl text-[#4A3B32] font-serif italic max-w-2xl leading-relaxed">
              &ldquo;Crafting clever copy that works harder than your morning coffee.&rdquo;
            </p>

            <p className="text-base text-[#7A695E] max-w-xl leading-relaxed">
              Helping businesses sound smarter, sell better, and stay memorable with crisp sentences, sharp ideas, and unmistakable brand personality.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-sm font-semibold tracking-wide hover:bg-[#4A3B32] transition-all shadow-md group"
              >
                <span>Explore my services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D9CEBF] bg-[#FFFFFF]/70 hover:bg-[#FFFFFF] text-[#2D231E] text-sm font-semibold transition-all shadow-sm"
              >
                <Feather className="w-4 h-4 text-[#C8933E]" />
                <span>Join Community &amp; Tips</span>
              </Link>
            </div>
          </div>

          {/* Right Portrait / Cinematic Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Decorative Vintage Double Frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-[#C8933E]/60 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300" />
              
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden bg-[#E2D9CC] shadow-xl border border-[#D9CEBF]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Alex Bennett Portrait"
                  className="w-full h-full object-cover filter contrast-[1.05] sepia-[0.15] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Cinematic Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D231E]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#F7F3EB] font-mono bg-[#2D231E]/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block border border-white/20">
                    Editorial &bull; Strategist &bull; Copywriter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
