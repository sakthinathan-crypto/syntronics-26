import React, { useState } from 'react';
import { TRACKS } from '../data/symposiumData';
import { Track } from '../types';
import { ChevronRight, Sparkles, User, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface TracksProps {
  onSelectTrackForAbstract: (track: Track) => void;
}

export const Tracks: React.FC<TracksProps> = ({ onSelectTrackForAbstract }) => {
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(TRACKS[0].id);

  return (
    <section
      id="tracks"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Subtle ambient lighting orb */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF8C42]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>03 // RESEARCH & TECHNOLOGY TRACKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
              RESEARCH
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] to-[#FF8C42] ml-3">
                FRONTIERS.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[#A7A7A7] text-sm sm:text-base font-serif italic leading-relaxed">
            Five interdisciplinary thematic tracks soliciting original, unpublished research manuscripts. All accepted submissions appear in indexed proceedings.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Track Cards List */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {TRACKS.map((track) => {
              const isExpanded = expandedTrackId === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => setExpandedTrackId(track.id)}
                  className={`p-6 cursor-pointer border transition-all duration-300 relative group overflow-hidden ${
                    isExpanded
                      ? 'border-[#FFB347] bg-white/[0.08] shadow-[0_10px_30px_rgba(255,140,66,0.15)]'
                      : 'border-white/10 bg-[#0B0B0B]/70 hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                  data-cursor="interactive"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Numbered Callout */}
                      <span className="text-2xl sm:text-3xl font-black text-[#FFD166] opacity-80 group-hover:opacity-100 transition-opacity font-mono">
                        {track.number}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFB347] transition-colors">
                          {track.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#A7A7A7] mt-1 font-serif italic">
                          {track.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`p-2 border border-white/10 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 bg-[#FFB347] border-[#FFB347] text-black' : 'text-neutral-400'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Quick Topics Pill Preview */}
                  <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/10">
                    {track.topics.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 bg-white/5 text-neutral-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                    <span className="text-[11px] font-mono px-2 py-0.5 text-[#FF8C42] bg-white/5 border border-white/10">
                      +{track.topics.length - 2} more
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Track Deep Dive Inspector */}
          <div className="lg:col-span-6">
            {expandedTrackId && (() => {
              const activeTrack = TRACKS.find(t => t.id === expandedTrackId)!;
              return (
                <div className="sticky top-28 p-8 bg-[#0B0B0B]/85 border border-white/15 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500">
                  {/* Glowing ambient accent */}
                  <div 
                    className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                    style={{ backgroundColor: activeTrack.accentColor }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-2xl sm:text-3xl text-white font-mono">
                          TRACK {activeTrack.number}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#FF8C42]/20 text-[#FFD166] border border-[#FF8C42]/30 uppercase">
                          CFP OPEN
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#A7A7A7]">
                        <Calendar className="w-3.5 h-3.5 text-[#FFB347]" />
                        <span>Deadline: {activeTrack.paperDeadline}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                      {activeTrack.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                      {activeTrack.description}
                    </p>

                    {/* Chair Profile */}
                    <div className="p-4 bg-white/5 border border-white/10 mb-8 flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD166]">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono tracking-widest text-[#FF8C42] uppercase">Track Chair</div>
                        <div className="text-sm font-bold text-white">{activeTrack.chair}</div>
                        <div className="text-xs text-[#A7A7A7] font-serif italic">{activeTrack.chairAffiliation}</div>
                      </div>
                    </div>

                    {/* Suggested Topics List */}
                    <div className="mb-8">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFB347] mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FFD166]" />
                        <span>Scope & Manuscript Topics:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeTrack.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 p-2.5 bg-white/5 border border-white/5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C42] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A7A7A7]">
                      <FileText className="w-4 h-4 text-[#FFD166]" />
                      <span>IEEE 6-page double-column format</span>
                    </div>

                    <MagneticButton
                      onClick={() => onSelectTrackForAbstract(activeTrack)}
                      className="w-full sm:w-auto px-6 py-3 font-bold text-xs uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] hover:text-black transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,179,71,0.2)]"
                      data-cursor="interactive"
                    >
                      <span>SUBMIT TO TRACK {activeTrack.number}</span>
                      <ChevronRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
