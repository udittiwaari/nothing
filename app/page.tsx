import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CommunityPreviewSection from '@/components/sections/CommunityPreviewSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CommunityPreviewSection />
      <ContactSection />
    </>
  );
}
