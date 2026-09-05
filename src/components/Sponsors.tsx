import React, { useState } from 'react';
import { SPONSORS } from '../data/symposiumData';
import { ShieldCheck, Download, ExternalLink, Sparkles, Check, Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Sponsors: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadProspectus = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const titleSponsor = SPONSORS.filter(s => s.tier === 'Title Sponsor');
  const partners = SPONSORS.filter(s => s.tier !== 'Title Sponsor');

  return (
    <section
      id="sponsors"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFD166]/08 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
            <span>08 // ECOSYSTEM PATRONS & PLATFORM</span>
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
            PATRONS &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
              PARTNERS.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A7A7A7] font-serif italic">
            Backed by the pioneering alumni community, departmental chapters, and technology platforms powering modern hackathons and paper conferences.
          </p>
        </div>

        {/* Title Patron Showcase */}
        <div className="mb-12">
          {titleSponsor.map((s, i) => (
            <div
              key={i}
              className="max-w-3xl mx-auto p-7 sm:p-9 border border-white/20 bg-[#0B0B0B]/80 text-center relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/20 text-[#FFD166] font-mono font-bold text-xl mb-3 group-hover:scale-105 transition-transform duration-300">
                {s.logoPlaceholder}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5 uppercase tracking-tight">
                {s.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic max-w-xl mx-auto mb-3">
                {s.role}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#FFB347]">
                <ShieldCheck className="w-4 h-4" />
                <span>Founding Academic Patron</span>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge & Technology Partners */}
        <div className="mb-14">
          <div className="text-center text-xs font-mono text-[#A7A7A7] uppercase tracking-[0.3em] mb-6">
            ── COLLABORATING BODIES & PLATFORMS ──
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((s, i) => (
              <div
                key={i}
                className="p-5 border border-white/10 bg-[#0B0B0B]/70 text-center flex flex-col items-center justify-between group transition-all duration-300 hover:border-[#FFB347] backdrop-blur-xl"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD166] font-mono font-bold text-base mb-2.5">
                  {s.logoPlaceholder}
                </div>
                <h4 className="text-base font-black text-white mb-1 uppercase">
                  {s.name}
                </h4>
                <span className="text-[10px] font-mono text-[#FF8C42] mb-1.5 uppercase tracking-widest">
                  {s.tier}
                </span>
                <p className="text-xs text-[#A7A7A7] font-serif italic">
                  {s.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Call to Action */}
        <div className="p-6 sm:p-8 border border-white/15 bg-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left backdrop-blur-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-black text-white mb-1 flex items-center justify-center sm:justify-start gap-2 uppercase">
              <Sparkles className="w-4 h-4 text-[#FFB347]" />
              <span>Partner with SYNTRONIX '26</span>
            </h4>
            <p className="text-xs text-[#A7A7A7] font-serif italic">
              Support emerging student engineers and researchers from across the nation. Reach our organizing desk directly.
            </p>
          </div>

          <a
            href="mailto:cse.syntronix@egspec.org?subject=SYNTRONIX%2026%20Sponsorship%20Inquiry"
            className="px-6 py-3 border border-[#FF8C42] bg-[#FF8C42] text-white hover:bg-[#FF7722] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shrink-0 shadow-[0_0_20px_rgba(255,140,66,0.3)]"
            data-cursor="interactive"
          >
            <Mail className="w-4 h-4" />
            <span>PARTNER WITH US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
