'use client';

import React, { useState } from 'react';
import { X, Sparkles, User, Mail, ArrowRight } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    login(name.trim(), email.trim());
  };

  const handleQuickDemo = (demoName: string, demoEmail: string) => {
    login(demoName, demoEmail);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-md rounded-3xl p-6 sm:p-8 border border-[#E2D9CC] shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-[#ECE5DA]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C8933E]" />
            <h3 className="font-serif text-xl font-bold text-[#2D231E]">
              Join the Circle
            </h3>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 rounded-full hover:bg-[#F7F3EB] text-[#7A695E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#7A695E] mt-3 leading-relaxed">
          Sign in to comment on blog posts, share your daily progress, upload conversion milestones, and connect with other builders.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Jordan Miller"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C8933E]" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              required
              placeholder="jordan@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#4A3B32] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Continue to Account</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C8933E]" />
          </button>
        </form>

        {/* Quick Demo Sign-in Shortcuts */}
        <div className="mt-6 pt-5 border-t border-[#ECE5DA] text-center">
          <span className="text-[10px] uppercase tracking-wider text-[#9B897D] font-bold block mb-2.5">
            Or Quick One-Click Demo Profiles
          </span>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => handleQuickDemo('Eraya S.', 'eraya@aurastudio.com')}
              className="px-3 py-1.5 rounded-lg bg-[#F7F3EB] hover:bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-medium text-[#2D231E] transition-colors"
            >
              Sign as Eraya (Founder)
            </button>
            <button
              onClick={() => handleQuickDemo('Leopold L.', 'leopold@fincraft.com')}
              className="px-3 py-1.5 rounded-lg bg-[#F7F3EB] hover:bg-[#EFE9DD] border border-[#E2D9CC] text-xs font-medium text-[#2D231E] transition-colors"
            >
              Sign as Leopold (Lead)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
