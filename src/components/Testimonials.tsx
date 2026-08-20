import React, { useState } from 'react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/portfolioData';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="experience" className="relative w-full py-28 sm:py-36 bg-[#08080c] text-white border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Apple-style Statement Headline */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
            The Brand Impact
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Great visuals don&apos;t just show your product.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              They make people want it.
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="max-w-4xl mx-auto relative rounded-3xl bg-neutral-900/60 border border-white/10 p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
          <Quote className="w-10 h-10 text-white/20 mb-6" />

          {/* Quote Text */}
          <div className="min-h-[140px] flex items-center">
            <p className="text-lg sm:text-2xl font-display font-medium text-neutral-100 leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>
          </div>

          {/* Author Meta & Carousel Nav */}
          <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white font-display">{current.author}</h4>
              <p className="text-xs text-neutral-400">
                {current.role}, <span className="text-white font-medium">{current.company}</span>
              </p>
              <span className="inline-block text-[10px] uppercase font-semibold text-amber-400 tracking-wider mt-1">
                {current.projectType}
              </span>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-neutral-400 px-2">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Brand Logos / Client Roster */}
        <div className="pt-8 space-y-6 text-center">
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block">
            Trusted by Ambitious Brands & Gastronomy Leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {CLIENT_LOGOS.map((brand, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-neutral-300 hover:text-white hover:border-white/20 transition-colors flex flex-col items-center"
              >
                <span className="text-xs sm:text-sm font-display font-bold tracking-tight">{brand.name}</span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium mt-0.5">{brand.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
