import React, { useEffect, useState, useRef } from 'react';
import { SYMPOSIUM_META } from '../data/symposiumData';
import { BookOpen, Globe2, Shield, Cpu, Sparkles, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Number animation when inView triggers
  useEffect(() => {
    if (!inView) return;

    const targets = SYMPOSIUM_META.stats.map(s => s.value);
    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentCounts = targets.map(target => Math.floor(target * easeProgress));
      setCounts(currentCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView]);

  const pillars = [
    {
      icon: Cpu,
      title: "Human-Machine Symbiosis",
      description: "Moving past artificial automation toward co-adaptive cognitive systems designed to empower human ingenuity."
    },
    {
      icon: Shield,
      title: "Ethical & Verifiable Compute",
      description: "Establishing non-negotiable cryptographic proofs, transparent algorithms, and sovereignty over user identities."
    },
    {
      icon: Globe2,
      title: "Global Scholarly Inclusivity",
      description: "Connecting scholars from 50+ nations and underrepresented hubs to co-author planetary standards for computing."
    },
    {
      icon: BookOpen,
      title: "Peer-Reviewed Academic Rigor",
      description: "Rigorous double-blind evaluation with direct indexing opportunities across premier scientific publications."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting accent */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF8C42]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
          <span className="w-8 h-[1px] bg-[#FF8C42]" />
          <span>01 // MISSION & GENESIS</span>
        </div>

        {/* Section Main Title */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-16 max-w-4xl leading-[0.9]">
          MORE THAN A <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D]">
            SYMPOSIUM.
          </span>
        </h2>

        {/* Split Layout: Left Statement vs Right Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="text-xl sm:text-2xl font-light italic text-[#FFB347] font-serif leading-relaxed">
              "SYNTRONICS '26 is an international convergence engineered to dismantle the silos between cutting-edge computational architectures and human societal well-being."
            </p>
            <p className="text-[#A7A7A7] text-base sm:text-lg leading-relaxed font-light">
              As artificial intelligence, quantum coherence, and distributed systems accelerate beyond prior thresholds, the fundamental question is no longer what technology can calculate — but whose dignity, freedoms, and ecology it elevates.
            </p>
            <p className="text-[#A7A7A7] text-base sm:text-lg leading-relaxed font-light">
              Over three intensive days, university scholars, pioneering startups, Turing laureates, and industry architects will gather to evaluate groundbreaking peer-reviewed research, battle in high-velocity hackathons, and ratify the Syntronics Accord for ethical computing.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[#FFD166]">
              <span className="px-4 py-2 bg-white/5 border border-white/10 uppercase tracking-widest text-[#FFB347] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" />
                IEEE CO-SPONSORED
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 uppercase tracking-widest text-[#A7A7A7] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                SCOPUS & DBLP INDEXED
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Information Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0B0B0B]/70 border border-white/10 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A7A7A7] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF8C42]" />
                <span>Foundational Pillars</span>
              </h3>
              <span className="text-[#FF8C42] text-xs font-mono font-bold">[01 — 04]</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white/5 border border-white/10 hover:border-[#FFB347]/60 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD166] mb-3 group-hover:bg-[#FFB347] group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-white mb-1.5 group-hover:text-[#FFB347] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#A7A7A7] leading-relaxed italic font-serif">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Animated Statistics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SYMPOSIUM_META.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:border-[#FFB347]/40 transition-all duration-300 group"
            >
              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight group-hover:text-[#FFD166] transition-colors">
                  {counts[idx]}
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#FFB347]">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#FFB347] font-bold mt-2 font-mono">
                {stat.label}
              </div>
              <div className="text-xs text-[#A7A7A7] mt-1 italic font-serif">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
