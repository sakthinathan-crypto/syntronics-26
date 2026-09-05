import React, { useState } from 'react';
import { TRACKS } from '../data/symposiumData';
import { Track } from '../types';
import { ChevronRight, Sparkles, FileText, CheckCircle2, Lightbulb, Compass, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface TracksProps {
  onSelectTrackForAbstract: (track: Track) => void;
}

export const Tracks: React.FC<TracksProps> = ({ onSelectTrackForAbstract }) => {
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(TRACKS[0].id);

  return (
    <section
      id="tracks"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Subtle ambient lighting orb */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF8C42]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>03 // RESEARCH TRACKS & TOPIC FREEDOM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              SUGGESTED THEMES & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] to-[#FF8C42]">
                OPEN PROPOSALS.
              </span>
            </h2>
          </div>
          <div className="max-w-md p-4 bg-white/5 border border-white/10 text-xs font-mono text-[#A7A7A7] leading-relaxed">
            <div className="text-white font-bold flex items-center gap-2 mb-1">
              <Lightbulb className="w-4 h-4 text-[#FFD166]" />
              <span>FLEXIBLE TOPIC SELECTION</span>
            </div>
            Approximately 50 suggested topics will be published. Participants are <strong className="text-[#FFD166]">NOT restricted to those 50 topics</strong> and may propose any relevant topic under <strong className="text-white">Humanizing Technology</strong> during submission.
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Track Cards List */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {TRACKS.map((track) => {
              const isExpanded = expandedTrackId === track.id;
              const isProposalTrack = track.id === 'track-open-proposal';

              return (
                <div
                  key={track.id}
                  onClick={() => setExpandedTrackId(track.id)}
                  className={`p-5 sm:p-6 cursor-pointer border transition-all duration-300 relative group overflow-hidden ${
                    isExpanded
                      ? 'border-[#FFB347] bg-white/[0.08] shadow-[0_10px_30px_rgba(255,140,66,0.15)]'
                      : 'border-white/10 bg-[#0B0B0B]/70 hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                  data-cursor="interactive"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span className="text-xl sm:text-2xl font-black text-[#FFD166] opacity-80 group-hover:opacity-100 transition-opacity font-mono">
                        {track.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFB347] transition-colors">
                            {track.title}
                          </h3>
                          {isProposalTrack && (
                            <span className="px-2 py-0.5 text-[9px] font-mono bg-[#FF8C42]/20 text-[#FFD166] border border-[#FF8C42]/40 uppercase font-bold">
                              OPEN
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#A7A7A7] mt-1 font-serif italic">
                          {track.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`p-1.5 border border-white/10 transition-transform duration-300 shrink-0 ${
                      isExpanded ? 'rotate-90 bg-[#FF8C42] border-[#FF8C42] text-white' : 'text-neutral-400'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Quick Topics Preview */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {track.suggestedTopics.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 text-neutral-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono px-2 py-0.5 text-[#FF8C42] bg-white/5 border border-white/10">
                      +{track.suggestedTopics.length - 2} more
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
              const isProposal = activeTrack.id === 'track-open-proposal';

              return (
                <div className="sticky top-24 p-6 sm:p-8 bg-[#0B0B0B]/85 border border-white/15 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500">
                  {/* Glowing ambient accent */}
                  <div 
                    className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                    style={{ backgroundColor: activeTrack.accentColor }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xl sm:text-2xl text-white font-mono">
                          {activeTrack.number}
                        </span>
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#FF8C42]/20 text-[#FFD166] border border-[#FF8C42]/30 uppercase">
                          CFP ACTIVE
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#A7A7A7]">
                        SYNTRONIX '26 RESEARCH
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5">
                      {activeTrack.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {activeTrack.description}
                    </p>

                    {/* Notice on Topic Flexibility */}
                    <div className="p-3.5 bg-[#FF8C42]/10 border border-[#FF8C42]/30 mb-6 flex items-start gap-3">
                      <Compass className="w-5 h-5 text-[#FFD166] shrink-0 mt-0.5" />
                      <div className="text-xs text-neutral-200 leading-relaxed font-sans">
                        <strong className="text-white">Author Topic Freedom:</strong> {isProposal 
                          ? "You are encouraged to propose any original topic, case study, or implementation aligned with Humanizing Technology. Provide your topic title and abstract description during submission."
                          : "You may present on one of these suggested topics, or submit any original idea relevant to this domain and the core symposium theme."}
                      </div>
                    </div>

                    {/* Suggested Topics List */}
                    <div className="mb-6">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFB347] mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
                        <span>Key Focus Areas & Suggested Topics:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeTrack.suggestedTopics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 p-2.5 bg-white/5 border border-white/5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C42] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A7A7A7]">
                      <FileText className="w-3.5 h-3.5 text-[#FFD166]" />
                      <span>Abstract format: PDF, max 500 words</span>
                    </div>

                    <MagneticButton
                      onClick={() => onSelectTrackForAbstract(activeTrack)}
                      className="w-full sm:w-auto px-5 py-2.5 font-bold text-xs uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] hover:text-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,140,66,0.3)]"
                      data-cursor="interactive"
                    >
                      <span>SUBMIT ABSTRACT TO {activeTrack.number}</span>
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
