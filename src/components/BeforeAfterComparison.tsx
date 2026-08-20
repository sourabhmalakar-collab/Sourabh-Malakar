import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
      <div className="p-6 sm:p-8 bg-[#0c0c10] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
            Interactive Retouching & Grading
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Raw Camera Capture vs. Commercial Master
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-neutral-500" />
            <span>Left: Raw Capture</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/20 text-white">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Right: Final Color Grade</span>
          </span>
        </div>
      </div>

      {/* Interactive Drag Stage */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[400px] sm:h-[500px] select-none cursor-ew-resize overflow-hidden"
      >
        {/* AFTER (Commercial Master) - Bottom Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=2000&q=90"
            alt="Final Commercial Retouch"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/20">
            Final Commercial Master
          </div>
        </div>

        {/* BEFORE (Raw Plate) - Clipped Top Layer */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=2000&q=90"
            alt="Raw Studio Capture"
            className="w-full h-full object-cover filter saturate-50 contrast-90 brightness-90"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-300 border border-white/20">
            Raw Flat Profile
          </div>
        </div>

        {/* Splitter Line with Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-20 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-black/20">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
