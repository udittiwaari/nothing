'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, AtSign, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D231E] text-[#F7F3EB] pt-16 pb-12 border-t border-[#4A3B32]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#4A3B32]/60">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-tight font-semibold block text-[#F7F3EB]">
              Alex Bennett
            </span>
            <p className="text-sm text-[#D9CEBF] max-w-sm leading-relaxed">
              Crafting clever copy that works harder than your morning coffee. Helping bold brands sound smarter, sell better, and stay memorable.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#3E3129] border border-[#5A483D] rounded-full text-xs text-[#C8933E] font-medium tracking-wide">
                Available for Q1/Q2 Projects
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C8933E] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D9CEBF]">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link href="/#story" className="hover:text-white transition-colors">
                  The Story & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Articles & Essays
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Community Wall & Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Details from Canva */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C8933E] font-semibold">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-[#D9CEBF]">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8933E]" />
                <a href="mailto:hello@reallygreatsite.com" className="hover:underline">
                  hello@reallygreatsite.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8933E]" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <AtSign className="w-4 h-4 text-[#C8933E]" />
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  @reallygreatsite <ArrowUpRight className="w-3 h-3 text-[#C8933E]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9B897D] gap-4">
          <p>© 2026 Alex Bennett. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed in Vintage Cinematica Style &bull; Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
