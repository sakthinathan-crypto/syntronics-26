import React from 'react';
import { ArrowRight, Sparkles, Shield, Users, Award, Clock } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface RegistrationCTAProps {
  onOpenRegister: () => void;
  onOpenAbstractSubmit: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({
  onOpenRegister,
  onOpenAbstractSubmit,
}) => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10">
      {/* Intense warm radial glow and energetic pulse rings in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#FF8C42]/15 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#FFD166]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#FF4D4D]/10 via-[#FF8C42]/15 to-[#FFD166]/15 blur-[180px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
          <span>JOIN 500+ RESEARCHERS & VISIONARIES</span>
        </div>

        {/* Large Typography Statement */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.88] mb-6">
          READY TO SHAPE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D]">
            THE FUTURE?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-300 font-serif italic leading-relaxed mb-6">
          Join the international discourse on human-centered computing, publish your research, and network with planetary innovators at SYNTRONICS '26.
        </p>

        {/* Early-Bird Urgency Callout */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 bg-white/5 border border-[#FFB347]/30 text-xs font-mono text-[#FFD166] uppercase tracking-widest">
          <Clock className="w-3.5 h-3.5 text-[#FF8C42] animate-pulse" />
          <span>Early Bird Tier Active • Closes August 30, 2026</span>
        </div>

        {/* Action Buttons with Magnetic hover effect */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <MagneticButton
            id="cta-register-button"
            onClick={onOpenRegister}
            strength={0.25}
            className="w-full sm:w-auto px-10 py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-all shadow-[0_0_30px_rgba(255,179,71,0.25)] flex items-center justify-center gap-3"
            data-cursor="interactive"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            id="cta-submit-abstract-button"
            onClick={onOpenAbstractSubmit}
            strength={0.2}
            className="w-full sm:w-auto px-8 py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
            data-cursor="interactive"
          >
            <Sparkles className="w-4 h-4 text-[#FFD166]" />
            <span>SUBMIT RESEARCH ABSTRACT</span>
          </MagneticButton>
        </div>

        {/* Reassurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10 text-xs font-mono text-[#A7A7A7]">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#FFD166]" />
            <span>Official IEEE Co-Sponsored Event</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users className="w-4 h-4 text-[#FF8C42]" />
            <span>Hybrid Attendance (Physical & Virtual)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-[#FFB347]" />
            <span>$25,000+ In Innovation Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};
