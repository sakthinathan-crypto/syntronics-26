import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, MapPin, Globe, Shield, Terminal, Heart, Check, Building2, Phone, Sparkles } from 'lucide-react';
import { SYMPOSIUM_META, INSTITUTION_INFO } from '../data/symposiumData';
import { ASSETS_CONFIG } from '../data/assetsConfig';
import { SyntronixLogo } from './SyntronixLogo';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [aegisLogoError, setAegisLogoError] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.08] pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#A7A7A7] z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#FF8C42]/05 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Institution Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <SyntronixLogo className="h-12 sm:h-14 w-auto max-w-[280px]" variant="full" />
            </div>

            <div className="text-xs font-mono text-[#FFD166] tracking-wider uppercase font-semibold">
              EGS PILLAY ENGINEERING COLLEGE (AUTONOMOUS)
            </div>
            <div className="text-xs font-mono text-white/70">
              Department of Computer Science and Engineering
            </div>

            <p className="text-xs sm:text-sm font-serif italic leading-relaxed text-[#A7A7A7] max-w-sm">
              International Technical Symposium exploring human-centered computing, ethical systems, and collaborative engineering paradigms.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs font-mono text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFB347] shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.campusLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
                <span>{INSTITUTION_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
                <span>{INSTITUTION_INFO.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
                <span>Nagapattinam Campus Clock: {istTime}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-[#FF8C42] uppercase tracking-[0.3em]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-[#FFB347] transition-colors">Home Viewport</a></li>
              <li><a href="#about" className="hover:text-[#FFB347] transition-colors">About EGSPEC & CSE</a></li>
              <li><a href="#theme" className="hover:text-[#FFB347] transition-colors">Curatorial Theme</a></li>
              <li><a href="#events" className="hover:text-[#FFB347] transition-colors">6 Official Events</a></li>
              <li><a href="#institution" className="hover:text-[#FFB347] transition-colors">Our Institution</a></li>
              <li><a href="#timeline" className="hover:text-[#FFB347] transition-colors">Symposium Roadmap</a></li>
            </ul>
          </div>

          {/* Col 3: Research & Submissions */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-[#FF8C42] uppercase tracking-[0.3em]">
              Important Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-medium">
              <li><a href="#dates" className="hover:text-[#FFB347] transition-colors">Dates & Deadlines</a></li>
              <li><a href="#why-participate" className="hover:text-[#FFB347] transition-colors">Cash Prizes & Honors</a></li>
              <li><a href={SYMPOSIUM_META.links.onlineRegistration} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD166] transition-colors">Unstop Registration ↗</a></li>
              <li><a href={SYMPOSIUM_META.links.offlineRegistration} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD166] transition-colors">Offline Google Form ↗</a></li>
              <li><a href={SYMPOSIUM_META.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8C42] transition-colors">Instagram Profile ↗</a></li>
              <li><a href={INSTITUTION_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD166] transition-colors">EGSPEC Official Site ↗</a></li>
            </ul>
          </div>

          {/* Col 4: Aegis Academy Logo & Back to top */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#FF8C42] uppercase tracking-[0.3em] mb-2">
                AEGIS ACADEMY
              </h4>
              <p className="text-xs text-[#A7A7A7] font-serif italic mb-3">
                Official Academy partner. Logo slot configurable in <code className="text-[#FFD166]">/public/images/aegis-academy-logo.png</code>.
              </p>

              {/* Aegis Academy Logo Card Placeholder */}
              <div className="p-3 bg-white/[0.03] border border-white/10 hover:border-[#FFB347]/40 transition-colors flex items-center gap-3">
                <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={aegisLogoError ? ASSETS_CONFIG.aegisAcademy.uploadedAssetFallback : ASSETS_CONFIG.aegisAcademy.primaryPath}
                    alt="Aegis Academy Logo"
                    onError={() => setAegisLogoError(true)}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,140,66,0.3)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Aegis Academy
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    Official Rights Holder
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-[#FFB347] text-xs font-mono tracking-widest uppercase text-white transition-all group"
              data-cursor="interactive"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Massive Editorial Typographic Banner */}
        <div className="py-12 border-b border-white/10 select-none overflow-hidden">
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/[0.04] hover:text-white/[0.08] transition-colors tracking-tighter uppercase text-center font-mono">
            MAKE IT. SHOW IT. ACHIEVE IT.
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7A7A7]">
          <div>
            all copy rights owned by Aegis Academy
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#FFD166]">SYNTRONIX '26</span>
            <span>•</span>
            <span className="text-neutral-400">Department of Computer Science & Engineering, EGSPEC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
