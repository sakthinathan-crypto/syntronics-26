import React from 'react';
import { WHY_PARTICIPATE, SYMPOSIUM_META } from '../data/symposiumData';
import { BookOpen, Users, Globe, Trophy, Award, Cpu, ArrowUpRight, Sparkles, Utensils, Laptop } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const iconMap = {
  BookOpen,
  Users,
  Globe,
  Trophy,
  Award,
  Cpu
};

export const WhyParticipate: React.FC<{ onOpenRegister: () => void }> = ({ onOpenRegister }) => {
  return (
    <section
      id="why-participate"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-[-10%] w-[550px] h-[550px] rounded-full bg-[#FF8C42]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>07 // VALUE PROPOSITION & ACADEMIC VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              WHY JOIN
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                SYNTRONIX '26?
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[#A7A7A7] text-xs sm:text-sm font-serif italic leading-relaxed">
            Designed to elevate undergraduate talent, provide rigorous peer appraisal from senior faculty, and foster collaborative problem-solving across Tamil Nadu and beyond.
          </p>
        </div>

        {/* 6 High-Impact Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PARTICIPATE.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || BookOpen;

            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 border border-white/10 bg-[#0B0B0B]/75 flex flex-col justify-between transition-all duration-300 hover:border-[#FFB347] hover:-translate-y-1 backdrop-blur-xl shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 bg-white/5 border border-white/15 flex items-center justify-center text-[#FFD166] group-hover:bg-[#FF8C42]/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#FFB347]" />
                    </div>
                    <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-[#FFD166] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-2.5 group-hover:text-[#FFB347] transition-colors uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>EGSPEC CSE Honors</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD166] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout: Cash Prizes & Food Banquet */}
        <div className="mt-10 p-6 sm:p-8 border border-white/15 bg-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#FF8C42]/20 border border-[#FF8C42]/40 text-xs font-mono text-[#FFD166] mb-2 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>EVENT-DAY HONORS & DELEGATE HOSPITALITY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Cash Prizes for Presentation Winners & Campus Food Provided
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mt-1 font-serif italic max-w-2xl">
              Hardcopy certificates of merit and cash prizes awarded on-stage on 15 October 2026. Offline attendees enjoy a full complimentary banquet as part of the ₹100 registration fee.
            </p>
          </div>

          <MagneticButton
            onClick={onOpenRegister}
            className="shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-colors shadow-[0_0_20px_rgba(255,140,66,0.3)]"
            data-cursor="interactive"
          >
            REGISTER FOR SYNTRONIX '26
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
