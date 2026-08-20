import React, { useState, useEffect } from 'react';
import { IMMERSIVE_SLIDES } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';

export const ImmersiveScroll: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMMERSIVE_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeSlideData = IMMERSIVE_SLIDES[currentSlide];

  return (
    <section
      id="immersive-experience"
      className="relative w-full min-h-[90vh] bg-black text-white flex items-center justify-center overflow-hidden border-y border-white/[0.08]"
    >
      {/* Background Slides with Crossfade Animation */}
      {IMMERSIVE_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.phrase}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
            style={{
              filter: 'brightness(0.42) contrast(1.15)',
            }}
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>
      ))}

      {/* Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 py-24 text-center flex flex-col items-center">
        {/* Slide Category Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-300">
            {activeSlideData.tag}
          </span>
        </div>

        {/* Minimal Bold Phrase */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight leading-[1.05] max-w-4xl text-balance mb-6 transition-all duration-700">
          {activeSlideData.phrase}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl text-balance leading-relaxed mb-12 font-body">
          {activeSlideData.subtext}
        </p>

        {/* Apple-style Interactive Controls & Progress Indicators */}
        <div className="flex items-center gap-6 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/15 shadow-2xl">
          {/* Prev Button */}
          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentSlide((prev) => (prev === 0 ? IMMERSIVE_SLIDES.length - 1 : prev - 1));
            }}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicator Bars */}
          <div className="flex items-center gap-3">
            {IMMERSIVE_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentSlide((prev) => (prev + 1) % IMMERSIVE_SLIDES.length);
            }}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Autoplay Pause/Play */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors ml-2 pl-3 border-l border-white/20"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
