import React from 'react';
import { SPEAKERS } from '../data/symposiumData';
import { Speaker } from '../types';
import { Sparkles, Calendar, ArrowUpRight, ExternalLink } from 'lucide-react';

interface SpeakersProps {
  onSelectSpeaker: (speaker: Speaker) => void;
}

export const Speakers: React.FC<SpeakersProps> = ({ onSelectSpeaker }) => {
  return (
    <section
      id="speakers"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-[-8%] w-[550px] h-[550px] rounded-full bg-[#FF8C42]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>05 // GLOBAL KEYNOTES & PLENARY LUMINARIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
              DISTINGUISHED
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                SPEAKERS.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[#A7A7A7] text-sm sm:text-base font-serif italic leading-relaxed">
            World-renowned ethicists, quantum architects, and distributed computing pioneers delivering keynote addresses and participating in interactive plenary sessions.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => onSelectSpeaker(speaker)}
              className="group border border-white/10 bg-[#0B0B0B]/60 overflow-hidden flex flex-col justify-between cursor-pointer relative transition-all duration-300 hover:border-[#FFB347] hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              data-cursor="interactive"
            >
              {/* Photo Box with Duotone/Grayscale to Vivid Transition */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/30 pointer-events-none" />

                {/* Session Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/90 text-[#FFD166] border border-white/20">
                    {speaker.sessionType}
                  </span>
                </div>

                {/* Session Time Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/90 border border-white/15 text-xs font-mono text-[#FFB347]">
                    <Calendar className="w-3 h-3 text-[#FFB347]" />
                    <span>{speaker.sessionTime}</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#FFB347] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-mono text-[#FF8C42] mt-1 font-bold">
                    {speaker.designation}
                  </p>
                  <p className="text-xs text-[#A7A7A7] mt-0.5 font-serif italic">
                    {speaker.organization}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-[10px] font-mono text-[#FFB347] uppercase tracking-widest mb-1">
                      Session Topic
                    </div>
                    <p className="text-sm font-serif italic text-neutral-200 line-clamp-2">
                      "{speaker.sessionTitle}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-[#A7A7A7] group-hover:text-white transition-colors">
                  <span>View Profile & Abstract</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFD166] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
