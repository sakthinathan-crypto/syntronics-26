import React from 'react';
import { WHY_PARTICIPATE } from '../data/symposiumData';
import { BookOpen, Users, Globe, Trophy, Award, Cpu, ArrowUpRight } from 'lucide-react';
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
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-[-10%] w-[550px] h-[550px] rounded-full bg-[#FF8C42]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>08 // VALUE & IMPACT PROPOSITION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
              WHY
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                PARTICIPATE?
              </span>
            </h2>
          </div>
          <p className="max-w-md text-[#A7A7A7] text-sm sm:text-base font-serif italic leading-relaxed">
            Whether you are presenting pioneering peer-reviewed findings, pitching a deep-tech prototype, or seeking international collaboration.
          </p>
        </div>

        {/* 6 High-Impact Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PARTICIPATE.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || BookOpen;

            return (
              <div
                key={idx}
                className="group p-7 border border-white/10 bg-[#0B0B0B]/70 flex flex-col justify-between transition-all duration-300 hover:border-[#FFB347] hover:-translate-y-1.5 backdrop-blur-xl shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center text-[#FFD166] group-hover:bg-[#FF8C42]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#FFB347]" />
                    </div>
                    <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-[#FFD166] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-[#FFB347] transition-colors uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>Explore Track Integration</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFD166] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration Fellowship Banner */}
        <div className="mt-12 p-8 border border-white/20 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono text-[#FFD166] mb-3 uppercase tracking-widest">
              <span>SCHOLAR TRAVEL FELLOWSHIPS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Undergraduate & Early-Career Travel Grants Available
            </h3>
            <p className="text-sm text-[#A7A7A7] mt-1 font-serif italic max-w-2xl">
              SYNTRONICS Foundation provides 40 full travel fellowships covering lodging, flight stipends, and symposium fees for authors of accepted papers from under-represented regions.
            </p>
          </div>

          <MagneticButton
            onClick={onOpenRegister}
            className="shrink-0 px-7 py-4 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-colors shadow-[0_0_20px_rgba(255,179,71,0.2)]"
            data-cursor="interactive"
          >
            APPLY FOR FELLOWSHIP PASS
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
