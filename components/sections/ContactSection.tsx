'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#EFE9DD]/60 border-t border-[#E2D9CC] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-14 border border-[#E2D9CC] shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C8933E]">
              Let’s create something worth reading
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D231E]">
              Want copy that sells without sounding salesy?
            </h2>
            <p className="text-sm text-[#7A695E]">
              Drop me a message and let&apos;s talk about your brand, your goals, and your voice.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#C8933E] mx-auto animate-bounce" />
              <h3 className="font-serif text-2xl font-bold text-[#2D231E]">
                Message dispatched with style!
              </h3>
              <p className="text-sm text-[#7A695E]">
                Thanks for reaching out. Alex will review your inquiry and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or company"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3B32] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about what you're building, what words you're struggling with, or your timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F3EB] border border-[#E2D9CC] text-sm text-[#2D231E] focus:outline-none focus:border-[#C8933E] transition-colors resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D231E] text-[#F7F3EB] text-sm font-semibold tracking-wide hover:bg-[#4A3B32] transition-colors shadow-md cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 text-[#C8933E]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
