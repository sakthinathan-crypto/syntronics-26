import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Calendar } from 'lucide-react';
import { SYMPOSIUM_META } from '../data/symposiumData';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenAbstractSubmit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenAbstractSubmit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'theme', 'tracks', 'events', 'speakers', 'timeline', 'dates', 'why-participate', 'sponsors'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Theme', href: '#theme', id: 'theme' },
    { label: 'Tracks', href: '#tracks', id: 'tracks' },
    { label: 'Events', href: '#events', id: 'events' },
    { label: 'Speakers', href: '#speakers', id: 'speakers' },
    { label: 'Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Dates', href: '#dates', id: 'dates' },
    { label: 'Sponsors', href: '#sponsors', id: 'sponsors' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 sm:py-8 bg-transparent border-b border-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Edition with Bold Typography Styling */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group"
            data-cursor="interactive"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FFB347] rounded-full shadow-[0_0_12px_#FFB347] group-hover:scale-110 transition-transform" />
            <div className="text-xl sm:text-2xl font-black tracking-tighter flex items-center gap-1.5 text-white">
              <span>NEXORA</span>
              <span className="text-[#FFB347]">'26</span>
            </div>
            <span className="hidden md:inline-block font-mono text-[10px] tracking-[0.3em] uppercase text-[#A7A7A7] border-l border-white/10 pl-3">
              INT'L SYMPOSIUM
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 sm:gap-7 text-xs font-medium tracking-widest uppercase text-[#A7A7A7]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-white border-b-2 border-[#FFB347] font-bold'
                      : 'hover:text-[#FFB347]'
                  }`}
                  data-cursor="interactive"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* CFP Button */}
            <button
              id="nav-cfp-button"
              onClick={onOpenAbstractSubmit}
              className="px-4 py-2 border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center gap-1.5"
              data-cursor="interactive"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB347]" />
              <span>CFP</span>
            </button>

            {/* Register Pass Button - Bold Typography Theme Button */}
            <button
              id="nav-register-button"
              onClick={onOpenRegister}
              className="px-6 py-2 border border-[#FFB347] text-[#FFB347] text-xs font-bold tracking-widest uppercase hover:bg-[#FFB347] hover:text-black transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,179,71,0.2)]"
              data-cursor="interactive"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:border-[#FFB347]/40 transition-colors"
            data-cursor="interactive"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFB347]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#A7A7A7]">
              <span>SYMPOSIUM DIRECTORY</span>
              <span className="text-[#FFD166]">OCTOBER 12–14, 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`p-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#FF8C42]/20 text-[#FFD166] border border-[#FFB347]/30'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAbstractSubmit();
                }}
                className="w-full py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-medium flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FFB347]" />
                <span>Submit Research Abstract</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD166] to-[#FF8C42] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,140,66,0.3)]"
              >
                <span>Register for Symposium Pass</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
