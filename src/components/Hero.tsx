import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles, ChevronDown, Award, Globe, ShieldCheck } from 'lucide-react';
import { SYMPOSIUM_META } from '../data/symposiumData';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenAbstractSubmit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenAbstractSubmit }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Symposium start target: Oct 12, 2026 09:00:00 AM UTC
    const targetDate = new Date('2026-10-12T09:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden z-10"
    >
      {/* Central 3D Ambient Gyroscopic Light Field */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] lg:w-[900px] h-[520px] sm:h-[720px] lg:h-[900px] pointer-events-none opacity-25 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(-50%, -50%) translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`
        }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#FFB347]/20 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-[15%] rounded-full border border-dotted border-[#FF8C42]/25 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute inset-[32%] rounded-full bg-gradient-to-tr from-[#FF8C42]/20 via-[#FFD166]/10 to-transparent blur-3xl animate-pulse" />
      </div>

      {/* Main Grid Viewport matching Bold Typography layout */}
      <div className="relative max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 my-auto items-stretch">
        {/* Left Column: Bold Typography Manifesto & Action */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pr-12 lg:border-r border-white/5">
          {/* Overline Tag */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[#FF8C42] font-mono text-xs sm:text-sm tracking-[0.5em] uppercase">
              Humanizing Technology
            </span>
          </div>

          {/* Massive Display Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[116px] font-black leading-[0.88] tracking-tighter mb-8 text-white uppercase select-none">
            NEXORA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D]">
              SYMPOSIUM
            </span>
            <span className="text-xl sm:text-3xl font-mono text-[#FFB347] ml-3 align-top font-bold">
              '26
            </span>
          </h1>

          {/* Date & Location in Serif Italic */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-10">
            <div>
              <div className="text-[#A7A7A7] text-[11px] font-mono uppercase tracking-widest mb-1">
                Date
              </div>
              <div className="text-lg sm:text-2xl font-light italic text-[#FFB347] font-serif">
                12 – 14 Oct 2026
              </div>
            </div>
            <div>
              <div className="text-[#A7A7A7] text-[11px] font-mono uppercase tracking-widest mb-1">
                Location
              </div>
              <div className="text-lg sm:text-2xl font-light italic text-[#FFB347] font-serif">
                Tech Pavilion & Global Virtual Hub
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[#A7A7A7] text-[11px] font-mono uppercase tracking-widest mb-1">
                Accreditation
              </div>
              <div className="text-lg sm:text-2xl font-light italic text-[#FFB347] font-serif">
                IEEE & Springer Indexed
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              id="hero-register-btn"
              onClick={onOpenRegister}
              className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#FFB347] hover:text-black transition-colors flex items-center gap-2 shadow-[0_0_25px_rgba(255,179,71,0.2)]"
              data-cursor="interactive"
            >
              <span>Get Symposium Pass</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-submit-paper-btn"
              onClick={onOpenAbstractSubmit}
              className="border border-white/20 text-white px-7 sm:px-9 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2"
              data-cursor="interactive"
            >
              <Sparkles className="w-4 h-4 text-[#FFB347]" />
              <span>Submit Abstract</span>
            </button>

            <button
              id="hero-explore-btn"
              onClick={scrollToExplore}
              className="px-4 py-4 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#A7A7A7] hover:text-white transition-colors flex items-center gap-1.5"
              data-cursor="interactive"
            >
              <span>Theme</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Live Countdown Timer in Bold Typography Theme */}
          <div className="bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-md max-w-lg">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#FF8C42] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] animate-ping" />
              <span>Countdown to Inaugural Session</span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div>
                <div className="font-black text-2xl sm:text-3xl text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-0.5">Days</div>
              </div>
              <div>
                <div className="font-black text-2xl sm:text-3xl text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-0.5">Hours</div>
              </div>
              <div>
                <div className="font-black text-2xl sm:text-3xl text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-0.5">Mins</div>
              </div>
              <div>
                <div className="font-black text-2xl sm:text-3xl text-[#FFB347]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-0.5">Secs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Research Tracks Preview & Bold Stat Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 bg-[#0B0B0B]/60 border border-white/10 lg:border-l-0 backdrop-blur-md">
          <div>
            <div className="flex items-baseline justify-between mb-6 border-b border-white/10 pb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#A7A7A7]">
                Research Tracks
              </h2>
              <span className="text-[#FF8C42] text-xs font-mono">[01 — 05]</span>
            </div>

            <div className="space-y-4">
              {[
                { num: "01", name: "Artificial Intelligence & Ethics", desc: "Human-centered cognitive systems, auditability & verified models", href: "#tracks" },
                { num: "02", name: "Sustainable & Green Computing", desc: "Thermodynamic computing, zero-carbon accelerators & edge efficiency", href: "#tracks" },
                { num: "03", name: "Human-Computer Interaction", desc: "Neuroadaptive interfaces, spatial audio & cognitive accessibility", href: "#tracks" },
                { num: "04", name: "Cybersecurity & Sovereign Trust", desc: "Zero-knowledge cryptography, identity protection & verifiable protocols", href: "#tracks" },
                { num: "05", name: "Quantum Information & Frontiers", desc: "Coherent error mitigation, topological qubits & hybrid algorithms", href: "#tracks" },
              ].map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  className="block group cursor-pointer pt-2 pb-2.5 border-b border-white/[0.04] last:border-b-0"
                >
                  <div className="flex justify-between items-center text-sm sm:text-base font-bold text-white group-hover:text-[#FFB347] transition-colors">
                    <span>{item.num}. {item.name}</span>
                    <span className="text-xs text-white/40 group-hover:text-[#FFB347] group-hover:translate-x-1 transition-all">→</span>
                  </div>
                  <div className="text-xs text-[#A7A7A7] mt-0.5 italic font-serif">
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bold Metric Stat Cards */}
          <div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 border border-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-black text-[#FFB347]">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-1">Global Scholars</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 backdrop-blur-md">
                <div className="text-3xl sm:text-4xl font-black text-[#FFB347]">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-1">Keynote Laureates</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed italic font-serif">
                Join us for a cinematic exploration into the future of computing. Nexora '26 brings together global pioneers to bridge the frontier between silicon and soul.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Framing & Status Indicator */}
      <div className="relative max-w-7xl mx-auto w-full pt-6 flex flex-wrap items-center justify-between border-t border-white/10 text-xs font-mono text-[#A7A7A7] gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
            Live Registrations Active // Call For Papers Open
          </span>
        </div>
        <button
          onClick={scrollToExplore}
          className="flex items-center gap-1.5 text-neutral-400 hover:text-[#FFB347] transition-colors text-xs font-mono uppercase tracking-widest"
        >
          <span>Scroll to Discover</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
