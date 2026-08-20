import React, { useState } from 'react';
import { PHOTOGRAPHER_INFO, GEAR_SPECS } from '../data/portfolioData';
import { MapPin, Globe, Award, Sparkles, ChevronDown, ChevronUp, Camera, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [gearOpen, setGearOpen] = useState(false);

  return (
    <section id="about" className="relative w-full py-28 sm:py-36 bg-[#050507] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Behind-The-Scenes Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Sourabh Malakar - Commercial Food & Product Photographer"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Overlay Location & Credentials Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-white text-base">
                    {PHOTOGRAPHER_INFO.name}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                    6+ Yrs Exp
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{PHOTOGRAPHER_INFO.location}</span>
                  <span className="text-neutral-600">•</span>
                  <Globe className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Worldwide Shoots</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
                {PHOTOGRAPHER_INFO.bioHeadline}
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Crafting visual desire through light and precision.
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light font-body leading-relaxed">
              {PHOTOGRAPHER_INFO.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Accolades & Core Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-2xl font-bold text-white font-display">100%</div>
                <div className="text-xs text-neutral-400 mt-1">Color Managed Calibrated Workflow</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-2xl font-bold text-white font-display">61MP+</div>
                <div className="text-xs text-neutral-400 mt-1">Ultra-High Res Commercial Output</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-2xl font-bold text-white font-display">Live</div>
                <div className="text-xs text-neutral-400 mt-1">On-Set Tethered Client Screen</div>
              </div>
            </div>

            {/* Gear & Studio Toggle Action */}
            <div className="pt-2">
              <button
                onClick={() => setGearOpen(!gearOpen)}
                className="w-full p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-amber-300" />
                  <span>Studio Equipment & Production Gear Locker</span>
                </div>
                {gearOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {gearOpen && (
                <div className="mt-4 p-6 rounded-2xl bg-neutral-900/80 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-200">
                  {GEAR_SPECS.map((spec, idx) => (
                    <div key={idx} className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        {spec.category}
                      </span>
                      <ul className="space-y-1">
                        {spec.items.map((item, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Book a Commercial Shoot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
