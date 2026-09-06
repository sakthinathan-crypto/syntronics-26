import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { SyntronixLogo } from './SyntronixLogo';

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
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'theme', 'events', 'institution', 'timeline', 'dates', 'why-participate'];
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
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'THEME', href: '#theme', id: 'theme' },
    { label: 'EVENTS', href: '#events', id: 'events' },
    { label: 'SPEAKERS', href: '#institution', id: 'institution' },
    { label: 'TIMELINE', href: '#timeline', id: 'timeline' },
    { label: 'DATES', href: '#dates', id: 'dates' },
    { label: 'SPONSORS', href: '#why-participate', id: 'why-participate' },
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
          ? 'py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'py-4 sm:py-5 bg-transparent border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            data-cursor="interactive"
          >
            <SyntronixLogo className="h-8 sm:h-9 w-auto max-w-[220px] sm:max-w-[260px]" variant="full" />
            <span className="hidden lg:inline-block font-mono text-[9px] tracking-[0.25em] uppercase text-[#A7A7A7] border-l border-white/10 pl-3">
              DEPT OF CSE • EGSPEC
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
                  className={`relative transition-colors py-1.5 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'hover:text-[#FFB347]'
                  }`}
                  data-cursor="interactive"
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#FF8C42] shadow-[0_0_8px_#FF8C42]" />
                  )}
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
              className="px-4 py-2 border border-white/15 text-white/90 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-colors flex items-center gap-1.5"
              data-cursor="interactive"
            >
              <FileText className="w-3.5 h-3.5 text-[#FFB347]" />
              <span>CFP</span>
            </button>

            {/* Register Pass Button with Magnetic Micro-interaction */}
            <MagneticButton
              id="nav-register-button"
              onClick={onOpenRegister}
              strength={0.2}
              className="px-5 py-2 bg-[#FF8C42] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#FF7722] transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,140,66,0.35)]"
              data-cursor="interactive"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-lg border border-white/10 bg-white/[0.04] text-white hover:border-[#FFB347]/40 transition-colors"
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
              <span>EGS PILLAY ENGINEERING COLLEGE // CSE</span>
              <span className="text-[#FFD166]">14–15 OCT 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`p-2.5 text-sm font-medium transition-colors ${
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
                className="w-full py-2.5 border border-white/15 bg-white/[0.04] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#FFB347]" />
                <span>Submit Research Abstract (CFP)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 bg-[#FF8C42] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,140,66,0.35)] hover:bg-[#FF7722]"
              >
                <span>Register (Online: Free / Offline: ₹100)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
