import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="relative w-full py-28 sm:py-36 bg-[#08080c] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            What I Create
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light mt-4 font-body leading-relaxed">
            Engineered visual production designed to make products look premium, desirable, and unforgettable across digital, packaging, and commercial formats.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredService(service.id)}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900/60 border border-white/[0.08] hover:border-white/30 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 hover:bg-neutral-900/90"
              >
                {/* Service Image Preview Header */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-neutral-200 uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {service.tagline}
                  </span>
                </div>

                {/* Service Text Details */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-body">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-white/70 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Inquire for this service */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 font-medium truncate max-w-[180px]">
                    {service.idealFor}
                  </span>
                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-amber-300 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
