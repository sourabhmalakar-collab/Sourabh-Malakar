import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onContactClick: () => void;
  onExploreWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContactClick, onExploreWork }) => {
  return (
    <section
      id="cta-impact"
      className="relative w-full py-32 sm:py-44 bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Deep Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=2400&q=90"
          alt="Cinematic commercial still"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/40 to-[#050507]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-300">
            Open for Bookings & Collaborations
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight leading-[1.05] text-balance">
          Let&apos;s Create Something{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
            Worth Looking At.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto text-balance leading-relaxed font-body">
          Have a product, campaign, or creative idea in mind? Let&apos;s turn it into visuals that people remember.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="final-cta-start-project"
            onClick={onContactClick}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            id="final-cta-explore"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium text-sm border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Portfolio</span>
          </button>
        </div>
      </div>
    </section>
  );
};
