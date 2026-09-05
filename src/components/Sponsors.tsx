import React, { useState } from 'react';
import { SPONSORS } from '../data/symposiumData';
import { ShieldCheck, Download, ExternalLink, Sparkles, Check } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Sponsors: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadProspectus = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const titleSponsor = SPONSORS.filter(s => s.tier === 'Title Sponsor');
  const diamondSponsors = SPONSORS.filter(s => s.tier === 'Diamond Sponsor');
  const goldSponsors = SPONSORS.filter(s => s.tier === 'Gold Sponsor');
  const silverSponsors = SPONSORS.filter(s => s.tier === 'Silver Sponsor');
  const partners = SPONSORS.filter(s => s.tier === 'Knowledge Partner' || s.tier === 'Technology Partner');

  return (
    <section
      id="sponsors"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFD166]/08 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
            <span>09 // ECOSYSTEM ALLIANCES</span>
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
            SPONSORS &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
              PARTNERS.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A7A7A7] font-serif italic">
            Supported by world-leading technology enterprises, academic institutions, and open scientific foundations committed to human-centered computing.
          </p>
        </div>

        {/* 1. Title Sponsor Showcase */}
        <div className="mb-14">
          <div className="text-center text-xs font-mono text-[#FF8C42] uppercase tracking-[0.3em] mb-4">
            ── TITLE PATRON ──
          </div>
          {titleSponsor.map((s, i) => (
            <div
              key={i}
              className="max-w-3xl mx-auto p-8 sm:p-10 border border-white/20 bg-[#0B0B0B]/80 text-center relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 border border-white/20 text-[#FFD166] font-mono font-bold text-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {s.logoPlaceholder}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 uppercase tracking-tight">
                {s.name}
              </h3>
              <p className="text-sm text-[#A7A7A7] font-serif italic max-w-xl mx-auto">
                {s.role}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#FFB347]">
                <ShieldCheck className="w-4 h-4" />
                <span>Founding Global Strategic Partner</span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Diamond & Gold Sponsors */}
        <div className="mb-14">
          <div className="text-center text-xs font-mono text-[#A7A7A7] uppercase tracking-[0.3em] mb-6">
            ── DIAMOND & GOLD TIER ──
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...diamondSponsors, ...goldSponsors].map((s, i) => (
              <div
                key={i}
                className="p-6 border border-white/10 bg-[#0B0B0B]/70 text-center flex flex-col items-center justify-between group transition-all duration-300 hover:border-[#FFB347] backdrop-blur-xl"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD166] font-mono font-bold text-lg mb-3">
                  {s.logoPlaceholder}
                </div>
                <h4 className="text-lg font-black text-white mb-1 uppercase">
                  {s.name}
                </h4>
                <span className="text-[10px] font-mono text-[#FF8C42] mb-2 uppercase tracking-widest">
                  {s.tier}
                </span>
                <p className="text-xs text-[#A7A7A7] font-serif italic">
                  {s.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Silver & Knowledge Partners */}
        <div className="mb-16">
          <div className="text-center text-xs font-mono text-[#A7A7A7] uppercase tracking-[0.3em] mb-6">
            ── KNOWLEDGE, ACADEMIC & TECHNOLOGY PARTNERS ──
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...silverSponsors, ...partners].map((s, i) => (
              <div
                key={i}
                className="p-4 border border-white/10 bg-[#0B0B0B]/50 hover:border-white/20 text-center flex flex-col items-center justify-center transition-colors group backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 font-mono font-bold text-sm mb-2 group-hover:text-[#FFB347]">
                  {s.logoPlaceholder}
                </div>
                <h5 className="font-bold text-xs sm:text-sm text-white line-clamp-1 uppercase">
                  {s.name}
                </h5>
                <span className="text-[9px] font-mono text-[#A7A7A7] mt-0.5 uppercase tracking-wider">
                  {s.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action: Become a Sponsor */}
        <div className="p-8 border border-white/20 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left backdrop-blur-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white mb-1 flex items-center justify-center sm:justify-start gap-2 uppercase">
              <Sparkles className="w-5 h-5 text-[#FFB347]" />
              <span>Interested in partnering with SYNTRONICS '26?</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic">
              Connect your brand with 500+ top researchers, access elite talent recruitment, and showcase frontier technology.
            </p>
          </div>

          <MagneticButton
            onClick={handleDownloadProspectus}
            className="px-6 py-3 border border-white/20 hover:border-[#FFB347] bg-white text-black hover:bg-[#FFB347] text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shrink-0"
            data-cursor="interactive"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-800" />
                <span>Prospectus Saved</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Sponsor Prospectus (PDF)</span>
              </>
            )}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
