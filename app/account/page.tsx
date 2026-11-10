'use client';

import React, { useState } from 'react';
import { User as UserIcon, Mail, Shield, LogOut, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/lib/AppContext';
import PostCard from '@/components/community/PostCard';

export default function AccountPage() {
  const { currentUser, logout, setIsAuthModalOpen, posts } = useApp();
  const [bioInput, setBioInput] = useState(currentUser?.bio || '');
  const [roleInput, setRoleInput] = useState(currentUser?.role || 'Creator & Builder');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!currentUser) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-6">
        <div className="bg-white p-10 rounded-3xl border border-[#E2D9CC] shadow-xl space-y-4">
          <UserIcon className="w-12 h-12 text-[#C8933E] mx-auto" />
          <h2 className="font-serif text-3xl font-bold text-[#2D231E]">
            Account Access
          </h2>
          <p className="text-sm text-[#7A695E]">
            Please sign in to view your profile, manage your progress updates, and see your community interactions.
          </p>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="w-full py-3 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#4A3B32] transition-colors"
          >
            Sign In to Account
          </button>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...currentUser,
      bio: bioInput,
      role: roleInput,
    };
    localStorage.setItem('alex_bennett_user', JSON.stringify(updated));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const userPosts = posts.filter((p) => p.author.id === currentUser.id);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2D9CC] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#C8933E]"
              />
              <div className="absolute bottom-0 right-0 bg-[#2D231E] p-1.5 rounded-full text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#C8933E]" />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif text-3xl font-bold text-[#2D231E]">
                {currentUser.name}
              </h1>
              <p className="text-sm font-medium text-[#C8933E]">
                {currentUser.role || 'Community Creator'}
              </p>
              <p className="text-xs text-[#7A695E] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {currentUser.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D9CEBF] text-xs font-semibold uppercase tracking-wider text-[#7A695E] hover:text-[#2D231E] hover:bg-[#F7F3EB] transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Edit Bio & Settings */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 bg-white p-8 rounded-3xl border border-[#E2D9CC] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D231E] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#C8933E]" />
              <span>Profile Settings</span>
            </h3>

            {savedSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Profile details updated successfully!</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-1.5">
                  Headline / Role
                </label>
                <input
                  type="text"
                  value={roleInput}
                  onChange={(e) => setRoleInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-xs text-[#2D231E] focus:outline-none focus:border-[#C8933E]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-1.5">
                  Personal Bio / Manifesto
                </label>
                <textarea
                  rows={4}
                  value={bioInput}
                  onChange={(e) => setBioInput(e.target.value)}
                  placeholder="Share a short bio about what you are building or studying..."
                  className="w-full p-4 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-xs text-[#2D231E] focus:outline-none focus:border-[#C8933E] resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider hover:bg-[#4A3B32] transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Quick Metrics */}
          <div className="md:col-span-6 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E2D9CC] shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#2D231E] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C8933E]" />
                <span>Your Community Activity</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F7F3EB] p-4 rounded-2xl border border-[#E2D9CC]">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#7A695E]">
                    Posts Published
                  </span>
                  <span className="block text-2xl font-serif font-bold text-[#2D231E] mt-1">
                    {userPosts.length}
                  </span>
                </div>
                <div className="bg-[#F7F3EB] p-4 rounded-2xl border border-[#E2D9CC]">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#7A695E]">
                    Community Status
                  </span>
                  <span className="block text-xs font-semibold text-[#C8933E] mt-2">
                    Verified Contributor
                  </span>
                </div>
              </div>
            </div>

            {/* User's Posts Feed */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#4A3B32]">
                Your Milestones &amp; Posts
              </h4>

              {userPosts.length > 0 ? (
                <div className="space-y-4">
                  {userPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#E2D9CC] text-xs text-[#7A695E]">
                  You have not published any milestones yet. Head to the Community Wall to share your first update!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
