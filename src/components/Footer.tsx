import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, MapPin, Globe, Shield, Terminal, Heart } from 'lucide-react';
import { SYMPOSIUM_META } from '../data/symposiumData';

export const Footer: React.FC = () => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.08] pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#A7A7A7] z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#FF8C42]/05 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 bg-white/5 border border-white/20 text-[#FFD166] font-mono font-bold">
                NX
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                NEXORA <span className="text-[#FF8C42]">'26</span>
              </span>
            </div>

            <p className="text-sm font-serif italic leading-relaxed text-[#A7A7A7] max-w-sm">
              Annual International Symposium on Human-Centered Computing. Fostering verifiable, sustainable, and empathetic intelligence frameworks for our shared computational future.
            </p>

            <div className="flex flex-col gap-1.5 pt-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFB347]" />
                <span>Grand Horizon Tech Pavilion, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFB347]" />
                <span>secretariat@nexora2026.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>Synchronized UTC: {utcTime}</span>
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
              <li><a href="#about" className="hover:text-[#FFB347] transition-colors">Genesis & Pillars</a></li>
              <li><a href="#theme" className="hover:text-[#FFB347] transition-colors">Curatorial Theme</a></li>
              <li><a href="#tracks" className="hover:text-[#FFB347] transition-colors">Research Tracks</a></li>
              <li><a href="#events" className="hover:text-[#FFB347] transition-colors">Flagship Events</a></li>
              <li><a href="#speakers" className="hover:text-[#FFB347] transition-colors">Distinguished Speakers</a></li>
            </ul>
          </div>

          {/* Col 3: Research & Submissions */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-[#FF8C42] uppercase tracking-[0.3em]">
              For Authors & Scholars
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-medium">
              <li><a href="#dates" className="hover:text-[#FFB347] transition-colors">Important CFP Deadlines</a></li>
              <li><a href="#tracks" className="hover:text-[#FFB347] transition-colors">IEEE Formatting Templates</a></li>
              <li><a href="#timeline" className="hover:text-[#FFB347] transition-colors">Double-Blind Peer Review Policy</a></li>
              <li><a href="#why-participate" className="hover:text-[#FFB347] transition-colors">Scholar Travel Fellowships</a></li>
              <li><a href="#sponsors" className="hover:text-[#FFB347] transition-colors">Best Innovation Paper Awards</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Back to top */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#FF8C42] uppercase tracking-[0.3em] mb-2">
                Symposium Dispatch
              </h4>
              <p className="text-xs text-[#A7A7A7] font-serif italic mb-3">
                Receive camera-ready notifications, speaker announcements, and accepted paper digests.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to NEXORA '26 dispatches."); }} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="delegate@institution.edu"
                  className="px-3 py-2 bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#FFB347] transition-colors"
                >
                  Join
                </button>
              </form>
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
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/[0.04] hover:text-white/[0.08] transition-colors tracking-tighter uppercase text-center">
            HUMAN × SILICON SYNERGY
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7A7A7]">
          <div>
            © 2026 NEXORA Symposium Organizing Committee. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Code of Conduct</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Peer Review Ethics</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy & Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
