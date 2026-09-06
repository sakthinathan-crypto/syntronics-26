import React, { useEffect, useState, useRef } from 'react';
import { SYMPOSIUM_META, INSTITUTION_INFO } from '../data/symposiumData';
import { BookOpen, Globe2, Shield, Cpu, Building2, Award, Sparkles, CheckCircle2, Calendar, Laptop, MapPin } from 'lucide-react';
import { SyntronixLogo } from './SyntronixLogo';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
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
    const duration = 2200; // ms
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
      title: "Human-Centric Computing",
      description: "Developing compassionate and transparent artificial intelligence and computing models that empower human capacity rather than displace it."
    },
    {
      icon: Shield,
      title: "Sustainable & Ethical Tech",
      description: "Engineering energy-efficient architectures, green algorithms, sovereign privacy protocols, and digital trust across communities."
    },
    {
      icon: Globe2,
      title: "Hybrid Global Inclusivity",
      description: "Uniting global minds virtually via Unstop on 14 October and convening in-person scholars on 15 October at EGSPEC campus."
    },
    {
      icon: Award,
      title: "Excellence & Recognition",
      description: "Conferring prestigious cash awards, hardcopy merit certificates on event day, and digital verification for all verified participants."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting accent */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF8C42]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
          <span className="w-8 h-[1px] bg-[#FF8C42]" />
          <span>01 // INSTITUTION & GENESIS</span>
        </div>

        {/* Section Main Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-14 max-w-4xl leading-[0.95]">
          EGS PILLAY ENGINEERING COLLEGE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D]">
            DEPARTMENT OF CSE PRESENTS SYNTRONIX '26
          </span>
        </h2>

        {/* Split Layout: Left Statement vs Right Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Bold Institutional Statement & Theme */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="flex items-center gap-4 mb-1">
              <SyntronixLogo className="h-12 sm:h-14 w-auto max-w-[280px]" variant="full" />
            </div>

            <div className="p-4 bg-white/5 border border-white/10 text-xs font-mono text-[#A7A7A7] space-y-1">
              <div className="text-white font-bold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#FFB347]" />
                <span>{INSTITUTION_INFO.collegeName}</span>
              </div>
              <div className="text-[11px] text-[#FFD166]">{INSTITUTION_INFO.collegeTagline}</div>
              <div className="text-[10px] text-white/50">{INSTITUTION_INFO.accreditation} • {INSTITUTION_INFO.campusLocation}</div>
            </div>

            <p className="text-lg sm:text-xl font-light italic text-[#FFB347] font-serif leading-relaxed">
              "SYNTRONIX '26 is the flagship international technical symposium orchestrated by the Department of Computer Science and Engineering, engineered to foster ethical innovation and sustainable computing."
            </p>

            <p className="text-[#A7A7A7] text-sm sm:text-base leading-relaxed font-light">
              Under the visionary theme <strong className="text-white font-medium">"HUMANIZING TECHNOLOGY: Computing for a Sustainable, Inclusive and Ethical Future"</strong>, SYNTRONIX '26 provides a vibrant nexus where engineering undergraduate and postgraduate scholars, researchers, and technical enthusiasts from around the world engage in intellectual defense and creative technical challenges.
            </p>

            <p className="text-[#A7A7A7] text-sm sm:text-base leading-relaxed font-light">
              Rooted in our motto <span className="text-[#FFD166] font-bold font-mono">"MAKE IT. SHOW IT. ACHIEVE IT."</span>, the symposium bridges theoretical computation with tangible human outcomes through 1 premier online event and 5 high-energy offline campus events.
            </p>

            {/* Official Online & Offline Symposium Dates */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF8C42] font-semibold mb-2.5 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>OFFICIAL SYMPOSIUM SCHEDULE & MODES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Online Date Box */}
                <div className="p-4 bg-white/[0.04] border border-[#FF8C42]/30 hover:border-[#FF8C42] transition-colors rounded-none relative overflow-hidden group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-[#FF8C42] bg-[#FF8C42]/10 px-2 py-0.5 border border-[#FF8C42]/20">
                      <Laptop className="w-3 h-3" /> ONLINE DAY
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-500/30">
                      100% FREE
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                    14 OCT 2026
                  </div>
                  <div className="text-[11px] font-mono text-[#FFD166] font-semibold mt-1">
                    Virtual Symposium
                  </div>
                  <div className="text-xs text-[#A7A7A7] mt-1 italic font-serif flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>Hosted on Unstop Platform</span>
                  </div>
                </div>

                {/* Offline Date Box */}
                <div className="p-4 bg-white/[0.04] border border-[#FFB347]/30 hover:border-[#FFB347] transition-colors rounded-none relative overflow-hidden group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-[#FFB347] bg-[#FFB347]/10 px-2 py-0.5 border border-[#FFB347]/20">
                      <MapPin className="w-3 h-3" /> OFFLINE DAY
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#FFD166] bg-[#FFD166]/15 px-2 py-0.5 border border-[#FFD166]/30">
                      ₹100 • FOOD INCL.
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                    15 OCT 2026
                  </div>
                  <div className="text-[11px] font-mono text-[#FFB347] font-semibold mt-1">
                    In-Person Campus Symposium
                  </div>
                  <div className="text-xs text-[#A7A7A7] mt-1 italic font-serif flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">EGSPEC Campus, Nagapattinam</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Participation Highlights Pill Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/15 uppercase tracking-widest text-[#FF8C42] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ONLINE DAY: 14 OCT (FREE)
              </span>
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/15 uppercase tracking-widest text-[#FFB347] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                OFFLINE DAY: 15 OCT (₹100 PASS)
              </span>
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/15 uppercase tracking-widest text-white/70 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
                CASH PRIZES ON EVENT DAY
              </span>
            </div>
          </div>

          {/* Right Column: Foundational Pillars Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0B0B0B]/75 border border-white/10 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A7A7A7] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF8C42]" />
                <span>Core Symposium Pillars</span>
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
                    <div className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD166] mb-3 group-hover:bg-[#FF8C42] group-hover:text-white transition-colors">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SYMPOSIUM_META.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:border-[#FFB347]/40 transition-all duration-300 group"
            >
              <div className="flex items-baseline gap-0.5 font-mono">
                <span className="text-2xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#FFD166] transition-colors">
                  {counts[idx]}
                </span>
                <span className="text-lg sm:text-xl font-black text-[#FFB347]">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[9px] uppercase tracking-wider text-[#FFB347] font-bold mt-2 font-mono line-clamp-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#A7A7A7] mt-1 italic font-serif line-clamp-2">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
