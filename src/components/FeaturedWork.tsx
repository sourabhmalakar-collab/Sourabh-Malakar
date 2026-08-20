import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';

interface FeaturedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ projects, onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'food', label: 'Food & Culinary' },
    { id: 'product', label: 'Luxury & Product' },
    { id: 'levitation', label: 'Levitation & Creative' },
    { id: 'beverage', label: 'Beverage & Motion' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.categorySlug === selectedFilter);

  return (
    <section id="work" className="relative w-full py-28 sm:py-36 bg-[#050507] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-light mt-4 font-body leading-relaxed">
              A selection of commercial photography, product campaigns, food stories, and creative visuals engineered for global brands.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  selectedFilter === tab.id
                    ? 'bg-white text-black shadow-md scale-105'
                    : 'bg-white/[0.05] text-neutral-400 hover:text-white hover:bg-white/[0.1] border border-white/[0.08]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => {
            const isFeaturedLarge = index % 3 === 0;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/[0.08] cursor-pointer transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/[0.02] ${
                  isFeaturedLarge ? 'md:col-span-2 aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[4/3] sm:aspect-[16/11]'
                }`}
              >
                {/* Background Project Image with Smooth Hover Scaling */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300" />

                {/* Project Metadata Card Content */}
                <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between">
                  {/* Top Bar: Category Pill & Client */}
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-neutral-300 font-medium hidden sm:inline-block bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/5">
                      {project.client}
                    </span>
                  </div>

                  {/* Bottom Bar: Title, Description & Action Button */}
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-2xl transform transition-transform duration-300 group-hover:-translate-y-1">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 line-clamp-2 max-w-xl">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Arrow Icon Button */}
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
