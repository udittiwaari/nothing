'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Globe, PenTool, Compass } from 'lucide-react';

const SERVICES = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Brand voice development',
    description: 'Give your brand a voice people actually want to listen to. Establish tone, syntax guidelines, and vocabulary that sets you apart from competitors.',
    bullets: ['Tone of voice guidelines', 'Vocabulary and banned-word lists', 'Messaging hierarchy'],
  },
  {
    icon: Globe,
    number: '02',
    title: 'Website and landing page copy',
    description: 'Clear, compelling copy that turns curious clicks into committed customers. Engineered for high conversion without sounding like cheap marketing.',
    bullets: ['Hero hooks & value propositions', 'Conversion architecture', 'Microcopy & CTAs that pop'],
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Content writing and strategy',
    description: 'Smart content tailored to your audience (because aimless blogging is so 2013). High-signal essays, newsletters, and thought leadership.',
    bullets: ['Strategic content playbooks', 'Ghostwritten executive newsletters', 'SEO narratives that captivate humans'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F7F3EB] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-semibold uppercase tracking-wider text-[#4A3B32]">
            <Compass className="w-3.5 h-3.5 text-[#C8933E]" />
            <span>What I can do for you</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D231E] leading-tight">
            Crafting Words that Move People &amp; Drive Revenue
          </h2>
          <p className="text-base text-[#7A695E] leading-relaxed">
            Give your brand a voice people actually want to listen to. Every engagement is bespoke, rigorous, and steeped in editorial craftsmanship.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FFFFFF] rounded-2xl p-8 border border-[#E2D9CC] hover:border-[#C8933E] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-bold text-[#C8933E]">
                      {srv.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] flex items-center justify-center text-[#2D231E] group-hover:bg-[#2D231E] group-hover:text-[#F7F3EB] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#2D231E] mb-3 group-hover:text-[#C8933E] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#7A695E] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#ECE5DA]">
                    {srv.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-[#4A3B32] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8933E]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D231E] group-hover:text-[#C8933E] transition-colors"
                  >
                    <span>Inquire for this package</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
