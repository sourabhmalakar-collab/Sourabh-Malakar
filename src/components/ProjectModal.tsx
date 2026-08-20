import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowRight, ArrowLeft, Camera, Sliders, Layers, CheckCircle2, Maximize2, Share2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<'visuals' | 'approach' | 'bts'>('visuals');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="project-modal-container"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-start justify-center p-0 sm:p-4 md:p-8 animate-in fade-in duration-300"
    >
      <div
        className="relative w-full max-w-6xl bg-[#0c0c10] border border-white/10 sm:rounded-3xl overflow-hidden shadow-2xl my-auto min-h-screen sm:min-h-[auto]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0c0c10]/80 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
              {project.category}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-xs font-medium text-neutral-300">
              {project.client} ({project.year})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors text-xs flex items-center gap-1.5 px-3"
              title="Share Project"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="relative w-full h-[50vh] sm:h-[65vh] overflow-hidden group">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-black/30 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-white mb-3">
              Case Study
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-xl text-neutral-300 font-light mt-2 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={() => onOpenLightbox(project.heroImage, project.title)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
            title="View Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-8 pt-6 border-b border-white/[0.08] bg-[#0c0c10]">
          <button
            onClick={() => setActiveTab('visuals')}
            className={`pb-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors relative ${
              activeTab === 'visuals'
                ? 'text-white border-b-2 border-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Final Visuals & Stills
          </button>
          <button
            onClick={() => setActiveTab('approach')}
            className={`pb-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors relative ml-6 ${
              activeTab === 'approach'
                ? 'text-white border-b-2 border-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Creative & Technical Approach
          </button>
          <button
            onClick={() => setActiveTab('bts')}
            className={`pb-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors relative ml-6 ${
              activeTab === 'bts'
                ? 'text-white border-b-2 border-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Behind the Scenes ({project.behindTheScenes.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* TAB 1: Visuals & Overview */}
          {activeTab === 'visuals' && (
            <div className="space-y-10 animate-in fade-in duration-200">
              {/* Overview & Deliverables Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                    Project Overview
                  </h3>
                  <p className="text-base text-neutral-300 leading-relaxed font-body">
                    {project.overview}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                    Campaign Impact
                  </h3>
                  <p className="text-sm font-medium text-white leading-snug">
                    {project.results}
                  </p>
                  <div className="pt-3 border-t border-white/[0.08]">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                      Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Commercial Stills & Detail Crops
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => onOpenLightbox(item.url, item.caption)}
                      className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 cursor-pointer aspect-[4/3]"
                    >
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                        <p className="text-xs text-white font-medium">{item.caption}</p>
                        <span className="text-[10px] text-neutral-400 mt-1 flex items-center gap-1">
                          <Maximize2 className="w-3 h-3" /> Click to enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Creative & Technical Approach */}
          {activeTab === 'approach' && (
            <div className="space-y-10 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <h3 className="text-sm font-semibold tracking-wide uppercase">
                      Creative Art Direction
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.creativeApproach}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <Sliders className="w-4 h-4 text-blue-400" />
                    <h3 className="text-sm font-semibold tracking-wide uppercase">
                      Lighting & Studio Architecture
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.lightingStrategy}
                  </p>
                </div>
              </div>

              {/* Technical Camera & Optics Specs Strip */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-white" />
                  <h3 className="text-xs uppercase tracking-widest text-white font-bold">
                    Capture Specifications
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-left">
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Camera Body</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{project.techSpecs.camera}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Optics / Lens</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{project.techSpecs.lens}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Lighting System</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{project.techSpecs.lighting}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Shutter Speed</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{project.techSpecs.shutter}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Aperture</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{project.techSpecs.aperture}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Base ISO</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{project.techSpecs.iso}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Behind the Scenes */}
          {activeTab === 'bts' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.behindTheScenes.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/10"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] uppercase font-semibold text-amber-400 tracking-wider">
                        Production Setup #{idx + 1}
                      </span>
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom: Previous / Next Project Navigation Bar */}
        <div className="px-6 sm:px-10 py-6 bg-[#08080c] border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group text-left"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="hidden sm:block">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Previous Project</span>
              <span className="text-xs font-semibold text-white block">{prevProject.title}</span>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group text-right"
          >
            <div className="hidden sm:block">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Next Project</span>
              <span className="text-xs font-semibold text-white block">{nextProject.title}</span>
            </div>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
