'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User as UserIcon, Menu, X, Sparkles, Feather } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

export default function Navbar() {
  const { currentUser, setIsSearchOpen, setIsAuthModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#E2D9CC] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#2D231E] text-[#F7F3EB] flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:scale-105 transition-transform">
            AB
          </div>
          <div>
            <span className="font-serif text-xl tracking-tight font-semibold text-[#2D231E] block">
              Alex Bennett
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#7A695E] block -mt-1">
              Editorial Copywriter
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A3B32]">
          <Link href="/#services" className="hover:text-[#C8933E] transition-colors">
            Services
          </Link>
          <Link href="/#story" className="hover:text-[#C8933E] transition-colors">
            My Story
          </Link>
          <Link href="/#projects" className="hover:text-[#C8933E] transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-[#C8933E] transition-colors flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5 text-[#C8933E]" />
            Blog
          </Link>
          <Link href="/community" className="hover:text-[#C8933E] transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C8933E]" />
            Community & Tips
          </Link>
        </nav>

        {/* Actions (Search, Account, Contact) */}
        <div className="flex items-center gap-4">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="p-2.5 rounded-full hover:bg-[#EFE9DD] text-[#4A3B32] transition-colors flex items-center justify-center cursor-pointer"
            title="Search (Ctrl + K)"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User Account / Sign In */}
          {currentUser ? (
            <Link
              href="/account"
              className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full bg-[#EFE9DD] hover:bg-[#E6DFD3] transition-colors border border-[#E2D9CC]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-7 h-7 rounded-full object-cover border border-[#C8933E]/50"
              />
              <span className="text-xs font-medium text-[#2D231E] max-w-[90px] truncate hidden sm:inline">
                {currentUser.name}
              </span>
            </Link>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2D231E] text-xs font-medium text-[#2D231E] hover:bg-[#2D231E] hover:text-[#F7F3EB] transition-all cursor-pointer"
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}

          {/* Let's Talk CTA */}
          <Link
            href="/#contact"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#4A3B32] transition-colors shadow-sm"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2D231E]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2D9CC] bg-[#F7F3EB] px-6 py-6 space-y-4">
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2D231E] py-2 border-b border-[#ECE5DA]"
          >
            Services
          </Link>
          <Link
            href="/#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2D231E] py-2 border-b border-[#ECE5DA]"
          >
            My Story
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2D231E] py-2 border-b border-[#ECE5DA]"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2D231E] py-2 border-b border-[#ECE5DA]"
          >
            Blog
          </Link>
          <Link
            href="/community"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2D231E] py-2 border-b border-[#ECE5DA]"
          >
            Community & Tips
          </Link>
          <Link
            href="/account"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2D231E] py-2 border-b border-[#ECE5DA]"
          >
            Account & Profile
          </Link>
        </div>
      )}
    </header>
  );
}
