import React, { useState, useEffect } from 'react';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { ProjectModal } from './components/ProjectModal';
import { ImmersiveScroll } from './components/ImmersiveScroll';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { BehindTheScenes } from './components/BehindTheScenes';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageLightbox } from './components/ImageLightbox';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [prefilledService, setPrefilledService] = useState<string | null>(null);

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    caption: '',
  });

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'services', 'about', 'bts', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToContact();
  };

  const openLightbox = (imageUrl: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightboxData({
      isOpen: false,
      imageUrl: '',
      caption: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f5f7] selection:bg-white selection:text-black font-sans relative">
      {/* Apple-style sticky frosted navigation bar */}
      <Navbar
        onOpenContact={scrollToContact}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={scrollToWork}
          onContactClick={scrollToContact}
        />

        {/* 2. Featured Work / Selected Work */}
        <FeaturedWork
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. Immersive Scrolling Section (Apple-style product-like reveals) */}
        <ImmersiveScroll />

        {/* 4. Services Section ("What I Create") */}
        <Services
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 5. About Section ("Behind the Lens") */}
        <About
          onContactClick={scrollToContact}
        />

        {/* 6. Work Process ("From Idea to Image") */}
        <Process />

        {/* 7. Behind the Scenes ("Behind the Frame" + Before/After interactive slider) */}
        <BehindTheScenes
          onOpenLightbox={openLightbox}
        />

        {/* 8. Client Experience & Brand Testimonials */}
        <Testimonials />

        {/* 9. Final Call to Action */}
        <FinalCTA
          onContactClick={scrollToContact}
          onExploreWork={scrollToWork}
        />

        {/* 10. Contact & Project Inquirer */}
        <ContactSection
          prefilledService={prefilledService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onOpenLightbox={openLightbox}
      />

      <ImageLightbox
        isOpen={lightboxData.isOpen}
        imageUrl={lightboxData.imageUrl}
        caption={lightboxData.caption}
        onClose={closeLightbox}
      />
    </div>
  );
}
