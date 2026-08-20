import React from 'react';
import { PHOTOGRAPHER_INFO } from '../data/portfolioData';
import { ArrowDown, Sparkles, ChevronRight, Award, Compass, Eye } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050507]"
    >
      {/* Background Image with Cinematic Grading & Slow Ambient Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=90')`,
            filter: 'brightness(0.38) contrast(1.15)',
          }}
        />
        {/* Soft Multi-Stop Gradient Overlays for Apple-level visual depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050507]/40 to-[#050507]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Subtitle / Category Badge */}
        <div
          id="hero-eyebrow"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-300">
            Food. Products. Stories.
          </span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-main-heading"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.05] max-w-4xl text-balance mb-6 drop-shadow-sm"
        >
          I create visuals that make brands{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
            impossible to ignore.
          </span>
        </h1>

        {/* Subtext */}
        <p
          id="hero-subtext"
          className="text-base sm:text-xl md:text-2xl text-neutral-300 font-normal max-w-2xl text-balance mb-10 leading-relaxed font-body"
        >
          Commercial Food & Product Photographer.
          <span className="block text-neutral-400 text-sm sm:text-base mt-2 font-light">
            Based in {PHOTOGRAPHER_INFO.location}. Working with brands worldwide.
          </span>
        </p>

        {/* CTA Buttons */}
        <div id="hero-actions" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            id="hero-cta-explore"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            id="hero-cta-contact"
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium text-sm border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s Create Something</span>
          </button>
        </div>

        {/* Credibility & Experience Metric Strip */}
        <div
          id="hero-credibility-badges"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 border-t border-white/[0.1] w-full max-w-3xl"
        >
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl sm:text-2xl font-bold text-white font-display">6+ Years</span>
            <span className="text-[11px] text-neutral-400 tracking-wide uppercase font-medium mt-0.5">Commercial Craft</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl sm:text-2xl font-bold text-white font-display">140+</span>
            <span className="text-[11px] text-neutral-400 tracking-wide uppercase font-medium mt-0.5">Shoots Completed</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl sm:text-2xl font-bold text-white font-display">100MP</span>
            <span className="text-[11px] text-neutral-400 tracking-wide uppercase font-medium mt-0.5">Medium Format</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="text-xl sm:text-2xl font-bold text-white font-display">Global</span>
            <span className="text-[11px] text-neutral-400 tracking-wide uppercase font-medium mt-0.5">Brand Clients</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <button
        onClick={onExploreWork}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll down to work"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-neutral-400 group-hover:text-neutral-200">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/40 transition-colors">
          <div className="w-1.5 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};
