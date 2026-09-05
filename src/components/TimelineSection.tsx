import React from 'react';
import { TIMELINE } from '../data/symposiumData';
import { Calendar, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section
      id="timeline"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#FF8C42]/06 blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
            <span>06 // SYMPOSIUM ROADMAP & MILESTONES</span>
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
            CHRONOLOGICAL
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
              TIMELINE.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A7A7A7] font-serif italic">
            Track key milestones leading from initial CFP submissions through peer review, live research colloquiums, and the grand innovation valedictory gala.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Glowing central progress line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#FFD166] via-[#FF8C42] to-neutral-800" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = item.status === 'completed';
              const isActive = item.status === 'active';

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 ${
                      isActive
                        ? 'border-[#FFD166] bg-[#FF8C42] shadow-[0_0_20px_#FFB347] scale-125'
                        : isCompleted
                        ? 'border-[#FFB347] bg-neutral-900 text-[#FFD166]'
                        : 'border-neutral-700 bg-neutral-950 text-neutral-500'
                    }`}>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      ) : isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-[#FFB347]" />
                      ) : (
                        <span className="text-[10px] font-mono font-bold">{item.number}</span>
                      )}
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className={`p-6 sm:p-7 bg-[#0B0B0B]/70 border transition-all duration-300 backdrop-blur-md ${
                      isActive
                        ? 'border-[#FFB347] bg-white/5 shadow-[0_10px_35px_rgba(255,140,66,0.15)]'
                        : 'border-white/10 hover:border-white/20'
                    }`}>
                      {/* Top Tag & Number */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-[#FFD166]">
                          PHASE {item.number}
                        </span>
                        <span className={`px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase ${
                          isActive
                            ? 'bg-[#FF8C42]/25 text-[#FFD166] border border-[#FF8C42]/40'
                            : isCompleted
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-white/5 text-neutral-400 border border-white/10'
                        }`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase">
                        {item.title}
                      </h3>

                      {/* Date Indicator */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFB347] mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#A7A7A7] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
