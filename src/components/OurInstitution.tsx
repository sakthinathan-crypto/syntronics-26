import React, { useState } from 'react';
import { ASSETS_CONFIG, InstitutionImageSlot } from '../data/assetsConfig';
import { STAFF_COORDINATORS, INSTITUTION_INFO } from '../data/symposiumData';
import { Building2, Image as ImageIcon, Sparkles, UserCheck, ExternalLink, MapPin, GraduationCap, Award, X, ZoomIn } from 'lucide-react';

const CampusCardItem: React.FC<{
  slot: InstitutionImageSlot;
  onOpen: (slot: InstitutionImageSlot) => void;
}> = ({ slot, onOpen }) => {
  // Try relativePath (.jpeg), then .jpg, then fallback placeholder
  const candidateUrls = React.useMemo(() => {
    const base = slot.relativePath.replace(/\.(jpeg|jpg)$/i, '');
    return [
      slot.relativePath,
      `${base}.jpeg`,
      `${base}.jpg`,
      slot.placeholderFallback
    ];
  }, [slot.relativePath, slot.placeholderFallback]);

  const [attemptIndex, setAttemptIndex] = useState(0);

  const currentSrc = candidateUrls[attemptIndex] || slot.placeholderFallback;

  const handleImgError = () => {
    if (attemptIndex < candidateUrls.length - 1) {
      setAttemptIndex(prev => prev + 1);
    }
  };

  return (
    <div
      onClick={() => onOpen(slot)}
      className="group relative bg-[#0B0B0B]/85 border border-white/10 hover:border-[#FFB347]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
      data-cursor="interactive"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <img
          src={currentSrc}
          alt={slot.title}
          referrerPolicy="no-referrer"
          onError={handleImgError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#FFD166] uppercase">
          {slot.category}
        </div>

        {/* Hover Zoom Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
          <div className="px-3 py-1.5 bg-black/80 border border-[#FFB347]/50 text-white font-mono text-xs flex items-center gap-1.5 shadow-lg">
            <ZoomIn className="w-3.5 h-3.5 text-[#FFD166]" />
            <span>View Photo</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#FFB347] transition-colors leading-snug">
            {slot.title}
          </h3>
          <p className="text-xs text-[#A7A7A7] font-serif italic leading-relaxed line-clamp-2">
            {slot.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const OurInstitution: React.FC = () => {
  const [activeModalSlot, setActiveModalSlot] = useState<InstitutionImageSlot | null>(null);

  return (
    <section
      id="institution"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-[-10%] w-[550px] h-[550px] rounded-full bg-[#FF8C42]/08 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>04 // CAMPUS & COMMUNITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              OUR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                INSTITUTION.
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-serif italic text-[#A7A7A7] mt-3 max-w-2xl">
              E.G.S. Pillay Engineering College — Autonomous Institution, NAAC 'A++' Accredited, NBA Accredited CSE. Cultivating technical pioneers and research-driven innovators.
            </p>
          </div>

          {/* Quick Info Badge */}
          <div className="p-3 bg-white/5 border border-white/10 flex flex-col gap-1 text-xs font-mono self-start md:self-auto">
            <span className="text-[#FFB347] font-bold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#FF8C42]" />
              <span>EGSPEC NAGAPATTINAM</span>
            </span>
            <span className="text-neutral-400 text-[11px]">
              Nagapattinam, Tamil Nadu
            </span>
          </div>
        </div>

        {/* 6 Institution Image Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ASSETS_CONFIG.institutionImages.map((slot) => (
            <CampusCardItem
              key={slot.id}
              slot={slot}
              onOpen={(s) => setActiveModalSlot(s)}
            />
          ))}
        </div>

        {/* Staff Coordinators Section */}
        <div className="bg-[#0B0B0B]/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF8C42]/05 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-white/10 gap-2">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#FF8C42] uppercase tracking-[0.3em] mb-1">
                <UserCheck className="w-4 h-4 text-[#FF8C42]" />
                <span>ORGANIZING LEADERSHIP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Staff Coordinators
              </h3>
            </div>
            <div className="text-xs font-mono text-[#A7A7A7]">
              Department of Computer Science and Engineering
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STAFF_COORDINATORS.map((staff) => {
              const isConvenor = staff.role.toLowerCase().includes('convenor');
              return (
                <div
                  key={staff.id}
                  className={`p-6 border transition-all ${
                    isConvenor 
                      ? 'bg-white/[0.04] border-[#FF8C42]/50 shadow-[0_0_20px_rgba(255,140,66,0.1)]' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 text-[10px] font-mono uppercase font-bold tracking-widest border ${
                      isConvenor 
                        ? 'bg-[#FF8C42]/20 text-[#FF8C42] border-[#FF8C42]/40' 
                        : 'bg-white/5 text-[#FFD166] border-white/15'
                    }`}>
                      {staff.role}
                    </span>
                    <GraduationCap className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">
                    {staff.name}
                  </h4>
                  <div className="text-xs font-mono text-[#FFB347] mb-2 font-medium">
                    {staff.department}
                  </div>
                  <div className="text-xs text-[#A7A7A7] font-serif italic">
                    E.G.S. Pillay Engineering College, Nagapattinam
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Institutional Action Links */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#FF8C42]" />
              <span>Nagapattinam – 611 002, Tamil Nadu, India</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={INSTITUTION_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD166] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Visit College Portal (egspec.org)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={INSTITUTION_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF8C42] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Campus Location on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Image Full-View Modal Lightbox */}
      {activeModalSlot && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalSlot(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0B0B0B] border border-white/20 p-4 sm:p-6 flex flex-col gap-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#FF8C42]/20 border border-[#FF8C42]/40 text-[#FF8C42] font-mono text-xs uppercase font-bold">
                  {activeModalSlot.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                  {activeModalSlot.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalSlot(null)}
                className="p-1.5 text-neutral-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-black border border-white/10">
              <img
                src={activeModalSlot.relativePath}
                alt={activeModalSlot.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = activeModalSlot.placeholderFallback;
                }}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-neutral-400">
              <p className="font-serif italic text-sm text-neutral-300">
                {activeModalSlot.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
