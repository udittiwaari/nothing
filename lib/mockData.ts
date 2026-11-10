import { BlogPost, ProgressPost } from './types';

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'the-art-of-editorial-voice',
    title: 'The Art of Editorial Voice in Modern Digital Copywriting',
    excerpt: 'Why sterile, corporate marketing speak is dying, and why writing with personality, sharpness, and warmth wins hearts and contracts.',
    content: `After a decade spent word-wrangling for brands big and small, I learned one fundamental truth: nobody remembers safe copy. 

In a world overflowing with homogenized, algorithmically generated sentences, genuine personality stands out like a beacon. When you write with purpose, edit with precision, and deliver with personality, your words work harder than your morning coffee.

### 1. Write Like a Human Speaks
Notice how you talk when you're genuinely passionate about solving a problem. You don't use words like "synergistic cross-platform paradigm shifts." You speak with clarity, cadence, and honesty.

### 2. Cut Every Word That Doesn't Earn Its Seat
Ruthless editing isn't about shortening your message; it's about concentrating its flavor. If a sentence can exist without three adjectives, strip them. Let the nouns and active verbs carry the weight.`,
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    category: 'Craft & Copy',
    readingTime: '4 min read',
    publishedAt: 'Oct 24, 2026',
    author: {
      name: 'Alex Bennett',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: '2',
    slug: 'from-crickets-to-chaos',
    title: 'From Crickets to Chaos: How We Scaled Founder Content',
    excerpt: 'Case study on revamping LinkedIn and newsletter presence for early-stage tech founders without sounding like a template robot.',
    content: `When we started working with a series-A founder, their engagement was dead silence. Their team was brilliant, their software was revolutionizing supply chain logistics, but their external storytelling sounded like a boardroom memo.

Within 90 days of adopting a crisp, narrative-first structure, impressions skyrocketed by 340%, inbound partner calls tripled, and their comment section transformed from crickets into active industry debate.`,
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    category: 'Case Study',
    readingTime: '5 min read',
    publishedAt: 'Nov 02, 2026',
    author: {
      name: 'Alex Bennett',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: '3',
    slug: 'why-aimless-blogging-is-so-2013',
    title: 'Why Aimless Blogging Is So 2013: Strategic Content in 2026',
    excerpt: 'Publishing 2,000 words a week just for SEO is no longer viable. Here is how high-converting narrative systems operate today.',
    content: `Stop feeding the search engines garbage. Search algorithms today reward real-world experience, original perspective, and actionable advice.

Your content should serve as the cornerstone of your brand authority. Each piece must answer a burning client question, provide an unmistakable perspective, and inspire direct action.`,
    coverImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80',
    category: 'Strategy',
    readingTime: '3 min read',
    publishedAt: 'Nov 07, 2026',
    author: {
      name: 'Alex Bennett',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
  },
];

export const INITIAL_POSTS: ProgressPost[] = [
  {
    id: 'post-1',
    author: {
      id: 'user-eraya',
      name: 'Eraya S.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      headline: 'Startup Founder & Indie Builder',
    },
    content: 'Just deployed our re-written homepage copy following Alex\'s tone framework! Bounce rate dropped from 58% to 34% within the first 48 hours. Here is a snapshot of our latest analytics overview.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    metrics: {
      label: 'Conversion Boost',
      value: '+41.8%',
    },
    likes: 24,
    likedBy: [],
    tags: ['Progress', 'Copywriting', 'Launch'],
    createdAt: '2 hours ago',
    comments: [
      {
        id: 'c-1',
        author: {
          id: 'alex-bennett',
          name: 'Alex Bennett',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        },
        content: 'Incredible momentum, Eraya! The new hero hook immediately communicates value without any corporate fluff. Keep that clarity going!',
        createdAt: '1 hour ago',
      },
    ],
  },
  {
    id: 'post-2',
    author: {
      id: 'user-leopold',
      name: 'Leopold L.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      headline: 'Marketing Lead @ FinCraft',
    },
    content: 'Week 3 of our brand voice overhaul. We banned 14 corporate jargon words from our company slack and customer emails. Team morale is up, and reply rates from prospects are already warming up noticeably!',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    likes: 18,
    likedBy: [],
    tags: ['Team Culture', 'Brand Voice'],
    createdAt: '5 hours ago',
    comments: [],
  },
];
