import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, ArrowRight, Lightbulb, Compass, Camera, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const stepIcons = [Compass, Lightbulb, Camera, CheckCircle2];

  return (
    <section id="process" className="relative w-full py-28 sm:py-36 bg-[#08080c] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            From Idea to Image
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light mt-4 font-body leading-relaxed">
            A frictionless, end-to-end creative and technical framework engineered to ensure absolute visual excellence for your brand.
          </p>
        </div>

        {/* Process Steps 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl bg-neutral-900/50 border border-white/[0.08] hover:border-white/30 p-8 flex flex-col justify-between transition-all duration-500 hover:bg-neutral-900/90"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-display font-extrabold text-neutral-600 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="mt-8 pt-4 border-t border-white/[0.08]">
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider block mb-1">
                    Key Deliverable
                  </span>
                  <span className="text-xs font-medium text-white block">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
