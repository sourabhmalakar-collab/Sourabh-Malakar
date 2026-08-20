import React, { useState, useEffect } from 'react';
import { PHOTOGRAPHER_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Behind the Scenes', href: '#bts' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050507]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            id="nav-brand-logo"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:border-white/40 transition-colors">
              <Camera className="w-4 h-4 text-white/90" />
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight block leading-none text-white">
                {PHOTOGRAPHER_INFO.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-medium block mt-1">
                Commercial Photography
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Work Together CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-cta-button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-8 flex flex-col justify-between pb-12 animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-display font-semibold text-neutral-200 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <button
              id="mobile-drawer-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full text-sm font-semibold bg-white text-black flex items-center justify-center gap-2 hover:bg-neutral-200"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-neutral-500 text-center">
              {PHOTOGRAPHER_INFO.location} • {PHOTOGRAPHER_INFO.availability}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
