import type { Metadata } from 'next';
import { AppProvider } from '@/lib/AppContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchModal from '@/components/search/SearchModal';
import AuthModal from '@/components/auth/AuthModal';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Bennett | Editorial Copywriter & Strategist',
  description: 'Crafting clever copy that works harder than your morning coffee. Brand voice development, website copy, and content strategy with vintage editorial charm.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F7F3EB] text-[#2D231E] antialiased selection:bg-[#C8933E] selection:text-white">
        <AppProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <SearchModal />
          <AuthModal />
        </AppProvider>
      </body>
    </html>
  );
}
