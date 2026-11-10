'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Leopold L.',
    role: 'Marketing Lead',
    quote: 'Alex turned our messy ideas into copy so sharp it practically winks at you. Our conversion numbers spoke for themselves within a month.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    company: 'FinCraft Global',
  },
  {
    name: 'Eraya S.',
    role: 'Startup Founder',
    quote: 'Professional, fast, and fun to work with. They made our website sound like us—but better. Investors literally commented on the clarity of our deck.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    company: 'Aura Studio',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F7F3EB] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C8933E]">
            What clients say
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D231E]">
            Words that leave an impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#E2D9CC] shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C8933E] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8933E]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#E2D9CC] mb-4" />

                <p className="font-serif text-lg sm:text-xl italic text-[#2D231E] leading-relaxed mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#ECE5DA]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C8933E]"
                />
                <div>
                  <h4 className="font-semibold text-sm text-[#2D231E]">
                    {test.name}
                  </h4>
                  <p className="text-xs text-[#7A695E]">
                    {test.role} &bull; {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
