import React, { useState } from 'react';
import { PHOTOGRAPHER_INFO } from '../data/portfolioData';
import { InquiryFormData } from '../types';
import {
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Sparkles,
  Phone
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: prefilledService || 'Food Photography',
    timeline: 'Within 1-2 Months',
    budgetRange: '$2,500 - $5,000 (Commercial Stills)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Food Photography',
    'Product Photography',
    'Commercial Advertising',
    'Product Videography & Motion',
    'Levitation & Creative Art',
    'Documentary & Brand Origin',
    'Other Custom Brief',
  ];

  const budgetOptions = [
    'Under $2,500',
    '$2,500 - $5,000 (Commercial Stills)',
    '$5,000 - $10,000 (Full Campaign & Motion)',
    '$10,000+ (Multi-Day Global Production)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full py-28 sm:py-36 bg-[#050507] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s start a conversation.
              </h2>
              <p className="text-base text-neutral-300 font-light mt-4 leading-relaxed font-body">
                Available for commercial shoots, editorial commissions, and visual brand consulting in India and internationally.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${PHOTOGRAPHER_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors group"
              >
                <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-white/10 text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 block">Direct Email</span>
                  <span className="text-sm font-medium text-white group-hover:underline">{PHOTOGRAPHER_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="p-2.5 rounded-full bg-white/5 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 block">Studio Location</span>
                  <span className="text-sm font-medium text-white">{PHOTOGRAPHER_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="p-2.5 rounded-full bg-white/5 text-white">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 block">Travel & Logistics</span>
                  <span className="text-sm font-medium text-white">{PHOTOGRAPHER_INFO.availability}</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block">
                Follow the Process
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PHOTOGRAPHER_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href={PHOTOGRAPHER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PHOTOGRAPHER_INFO.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Behance</span>
                </a>

                <a
                  href={PHOTOGRAPHER_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-400" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Apple-Minimalist Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0c0c10] border border-white/10 p-8 sm:p-12 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">Inquiry Received</h3>
                    <p className="text-sm text-neutral-300 font-light max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Sourabh will review your project requirements and reply within 24 hours with an initial creative proposal.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        projectType: 'Food Photography',
                        timeline: 'Within 1-2 Months',
                        budgetRange: '$2,500 - $5,000 (Commercial Stills)',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">Commercial Project Brief</h3>
                    <p className="text-xs text-neutral-400 mt-1">Tell me about your product, visual goals, and campaign timeline.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Verma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    {/* Company / Brand */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                        Brand / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Lumina Botanicals"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maya@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                      Primary Specialization / Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                      Estimated Production Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 block">
                      Tell me about your project & vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your product line, key deliverables (stills, video, packaging), shoot location preference, and any moodboard references..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center">
                    All shoot inquiries receive a direct response with preliminary concept treatment within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
