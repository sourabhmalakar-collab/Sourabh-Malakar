import React from 'react';
import { BTS_ITEMS } from '../data/portfolioData';
import { BeforeAfterComparison } from './BeforeAfterComparison';
import { Camera, Layers, Sparkles, Maximize2, Zap } from 'lucide-react';

interface BehindTheScenesProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const BehindTheScenes: React.FC<BehindTheScenesProps> = ({ onOpenLightbox }) => {
  return (
    <section id="bts" className="relative w-full py-28 sm:py-36 bg-[#050507] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
            Craft & Precision
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Behind the Frame
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light mt-4 font-body leading-relaxed">
            Because great images don&apos;t happen by accident. An intimate look at the lighting rigs, physical staging, and high-speed sensors behind the commercial hero shots.
          </p>
        </div>

        {/* Interactive Before / After Grading Comparison */}
        <BeforeAfterComparison />

        {/* Studio Setup Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BTS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/[0.08] hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image with Lightbox Zoom Click */}
              <div
                onClick={() => onOpenLightbox(item.image, `${item.title} - ${item.technique}`)}
                className="relative aspect-video overflow-hidden cursor-pointer bg-black"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                
                <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>

                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                      Core Technique
                    </span>
                    <span className="text-white font-medium block mt-0.5">{item.technique}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                      Equipment Used
                    </span>
                    <span className="text-neutral-300 font-medium block mt-0.5">{item.equipment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
