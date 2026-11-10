'use client';

import React from 'react';
import Link from 'next/link';
import { Award, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    category: 'Executive Ghostwriting',
    role: 'Ghostwrote for a CEO',
    result: 'Grew their LinkedIn audience from "crickets" to "comment section chaos."',
    metric: '4.8M Impressions',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    link: '#contact',
  },
  {
    category: 'Brand Strategy',
    role: 'Developed brand voice guides',
    result: 'Helped 15+ founders finally explain what they actually do without sounding like a textbook.',
    metric: '15+ Founders',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    link: '#contact',
  },
  {
    category: 'Conversion Optimization',
    role: 'Revamped a SaaS website',
    result: 'Increased conversions by 42% without using the word "synergy" even once.',
    metric: '+42% Signups',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: '#contact',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#EFE9DD]/40 border-t border-[#E2D9CC] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2D9CC] text-xs font-semibold uppercase tracking-wider text-[#4A3B32]">
              <Award className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>A few things I’m proud of</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D231E]">
              Proof that the pen really is mightier than the algorithm.
            </h2>
          </div>

          <Link
            href="/community"
            className="text-xs uppercase tracking-widest font-bold text-[#C8933E] hover:text-[#B28133] transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Community Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E2D9CC] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2D9CC]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.image}
                    alt={proj.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#2D231E]/90 text-[#F7F3EB] px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-sm">
                    {proj.metric}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-[#2D231E] px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#2D231E] group-hover:text-[#C8933E] transition-colors">
                    {proj.role}
                  </h3>
                  <p className="text-sm text-[#7A695E] leading-relaxed">
                    {proj.result}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <Link
                  href={proj.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D231E] group-hover:text-[#C8933E] transition-colors"
                >
                  <span>View project details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
