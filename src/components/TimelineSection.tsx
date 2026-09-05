import React, { useEffect, useRef, useState } from 'react';
import { TIMELINE } from '../data/symposiumData';
import { Calendar, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const nodes = sectionRef.current.querySelectorAll('.timeline-milestone');
      const windowHeight = window.innerHeight;

      const newActives: number[] = [];
      nodes.forEach((node, idx) => {
        const rect = node.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.72) {
          newActives.push(idx);
        }
      });
      setActiveIndices(newActives);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#FF8C42]/06 blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
            <span>05 // SYMPOSIUM ROADMAP & DEADLINES</span>
            <span className="w-8 h-[1px] bg-[#FF8C42]" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
            CHRONOLOGICAL
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
              TIMELINE.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A7A7A7] font-serif italic">
            Track key milestones leading from initial registration through peer review, PPT submissions on Unstop, live online & offline colloquiums, and certificate issuance.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Glowing central progress line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#FFD166] via-[#FF8C42] to-neutral-800" />

          <div className="flex flex-col gap-10 sm:gap-14">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isScrolledIn = activeIndices.includes(idx);
              const isCompleted = item.status === 'completed';
              const isActive = item.status === 'active' || isScrolledIn;

              return (
                <div
                  key={idx}
                  className={`timeline-milestone relative flex flex-col md:flex-row items-start md:items-center transition-all duration-500 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'border-[#FFD166] bg-[#FF8C42] shadow-[0_0_20px_#FFB347] scale-110 text-white'
                        : isCompleted
                        ? 'border-[#FFB347] bg-neutral-900 text-[#FFD166]'
                        : 'border-neutral-700 bg-neutral-950 text-neutral-400'
                    }`}>
                      {item.status === 'active' ? (
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
                    <div className={`p-5 sm:p-6 bg-[#0B0B0B]/75 border transition-all duration-300 backdrop-blur-xl ${
                      isActive
                        ? 'border-[#FFB347] bg-white/[0.08] shadow-[0_10px_35px_rgba(255,140,66,0.15)] -translate-y-0.5'
                        : 'border-white/10 hover:border-white/20'
                    }`}>
                      {/* Top Tag & Number */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#FFD166]">
                          PHASE {item.number}
                        </span>
                        <span className={`px-2.5 py-0.5 text-[9px] font-mono font-semibold uppercase ${
                          isActive
                            ? 'bg-[#FF8C42]/25 text-[#FFD166] border border-[#FF8C42]/40'
                            : isCompleted
                            ? 'bg-[#FF8C42]/15 text-[#FF8C42] border border-[#FF8C42]/30'
                            : 'bg-white/5 text-neutral-400 border border-white/10'
                        }`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-lg sm:text-xl font-black text-white mb-1 uppercase">
                        {item.title}
                      </h3>

                      {item.subtitle && (
                        <div className="text-[11px] font-mono text-[#FF8C42] mb-2">
                          {item.subtitle}
                        </div>
                      )}

                      {/* Date Indicator */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFD166] mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[#FFB347]" />
                        <span className="font-bold">{item.dateStr}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed">
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
