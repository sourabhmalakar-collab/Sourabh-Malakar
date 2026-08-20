import React, { useState, useEffect } from 'react';
import { PHOTOGRAPHER_INFO } from '../data/portfolioData';
import { ArrowUp, Camera, Heart, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const [nagpurTime, setNagpurTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setNagpurTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-neutral-400 py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Top Tier: Brand, Location & Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PHOTOGRAPHER_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              {PHOTOGRAPHER_INFO.title}
            </p>
            <div className="text-xs text-neutral-400 flex items-center gap-2 pt-1">
              <span>{PHOTOGRAPHER_INFO.location}</span>
              <span>•</span>
              <span className="text-neutral-300 font-medium">Nagpur Studio Time: {nagpurTime || 'Loading...'} (IST)</span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#bts" className="hover:text-white transition-colors">Behind the Scenes</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto p-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Tier: Copyright & Socials */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="text-center sm:text-left">
            &copy; 2026 {PHOTOGRAPHER_INFO.name}. All Rights Reserved. Commercial Photography Portfolio.
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href={PHOTOGRAPHER_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href={PHOTOGRAPHER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={PHOTOGRAPHER_INFO.behance} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Behance
            </a>
            <a href={PHOTOGRAPHER_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
