import React, { useState } from 'react';
import { HeartHandshake, Leaf, Lock, Sliders, Activity, Sparkles, Cpu } from 'lucide-react';

export const ThemeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sustainable' | 'inclusive' | 'ethical'>('sustainable');
  const [humanFactor, setHumanFactor] = useState(78);
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  const pillars = {
    sustainable: {
      title: "Sustainable Architecture",
      tag: "NET-ZERO HARDWARE & GREEN ALGORITHMS",
      desc: "Re-engineering computational density to match planetary thermodynamic limits. From carbon-aware load balancing to zero-waste neuromorphic accelerators.",
      metrics: "Target: 85% reduced carbon intensity per FLOP across modern training clusters.",
      icon: Leaf,
      highlight: "#FFD166"
    },
    inclusive: {
      title: "Radical Inclusivity",
      tag: "ACCESSIBILITY & COGNITIVE UNIVERSALITY",
      desc: "Architecting software interfaces that adapt dynamically to diverse sensory modalities, neurodivergent needs, and linguistic vernaculars across the global south.",
      metrics: "Standards: Full WCAG 3.0 AAA conformance and localized offline edge models.",
      icon: HeartHandshake,
      highlight: "#FFB347"
    },
    ethical: {
      title: "Cryptographic & Ethical Trust",
      tag: "SOVEREIGN AGENTS & ZERO-KNOWLEDGE PROOFS",
      desc: "Enforcing transparency, mathematical auditability, and sovereign ownership over individual identity in an ecosystem saturated with generative synthesis.",
      metrics: "Framework: Verifiable provenance proofs and non-coercive agent alignments.",
      icon: Lock,
      highlight: "#FF4D4D"
    }
  };

  const word1 = "HUMANIZING".split("");
  const word2 = "TECHNOLOGY".split("");

  return (
    <section
      id="theme"
      className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-[-5%] w-[600px] h-[600px] rounded-full bg-[#FFB347]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
          <span className="w-8 h-[1px] bg-[#FF8C42]" />
          <span>02 // SYMPOSIUM CURATORIAL THEME</span>
        </div>

        {/* Dramatic Large Typography Breakdown with interactive letter illumination */}
        <div className="mb-16 select-none">
          <div className="overflow-hidden flex flex-wrap">
            {word1.map((char, i) => (
              <span
                key={i}
                onMouseEnter={() => setHoveredLetter(i)}
                onMouseLeave={() => setHoveredLetter(null)}
                className={`inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[112px] font-black tracking-tighter uppercase leading-[0.85] transition-all duration-300 cursor-default ${
                  hoveredLetter === i
                    ? 'text-[#FFD166] scale-110 drop-shadow-[0_0_20px_#FFD166]'
                    : 'text-white'
                }`}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="overflow-hidden mt-2 flex flex-wrap">
            {word2.map((char, i) => (
              <span
                key={i}
                onMouseEnter={() => setHoveredLetter(100 + i)}
                onMouseLeave={() => setHoveredLetter(null)}
                className={`inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[112px] font-black tracking-tighter uppercase leading-[0.85] transition-all duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ${
                  hoveredLetter === 100 + i ? 'scale-110 brightness-150' : ''
                }`}
              >
                {char}
              </span>
            ))}
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[112px] font-black text-[#FF4D4D] leading-[0.85]">.</span>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 max-w-3xl">
            <p className="font-serif italic text-xl sm:text-3xl text-neutral-200 font-light tracking-tight">
              Computing for a <span className="text-[#FFB347] font-medium">Sustainable</span>,{' '}
              <span className="text-[#FF8C42] font-medium">Inclusive</span> and{' '}
              <span className="text-[#FF4D4D] font-medium">Ethical</span> Future.
            </p>
          </div>
        </div>

        {/* Interactive Human × Silicon Synergy Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Thematic Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 bg-white/5 border border-white/10">
              {(['sustainable', 'inclusive', 'ethical'] as const).map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-mono tracking-widest uppercase transition-all ${
                      isActive
                        ? 'bg-[#FF8C42] text-white font-bold shadow-[0_0_15px_rgba(255,140,66,0.35)]'
                        : 'text-[#A7A7A7] hover:text-white hover:bg-white/[0.04]'
                    }`}
                    data-cursor="interactive"
                  >
                    {key}
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card */}
            <div className="p-8 bg-[#0B0B0B]/70 border border-white/10 relative overflow-hidden backdrop-blur-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#FF8C42] uppercase px-3 py-1 bg-white/5 border border-white/10">
                    {pillars[activeTab].tag}
                  </span>
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB347]">
                    {React.createElement(pillars[activeTab].icon, { className: "w-5 h-5" })}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  {pillars[activeTab].title}
                </h3>

                <p className="text-sm sm:text-base text-[#A7A7A7] leading-relaxed mb-6 font-light">
                  {pillars[activeTab].desc}
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#FFD166] shrink-0" />
                <span className="font-serif italic">{pillars[activeTab].metrics}</span>
              </div>
            </div>
          </div>

          {/* Interactive Synergy Simulator (Human Pulse vs Silicon Frequency) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0B0B0B]/70 border border-white/10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F5] uppercase tracking-wider">
                <Activity className="w-4 h-4 text-[#FF8C42] animate-pulse" />
                <span>Synergy Ratio</span>
              </div>
              <span className="text-xs font-mono text-[#FFD166] font-bold">
                {humanFactor}% ALIGNED
              </span>
            </div>

            {/* Dynamic Waveform Simulation */}
            <div className="relative h-44 w-full bg-black/60 rounded-xl border border-white/10 p-4 flex flex-col justify-center overflow-hidden mb-6">
              {/* Harmonic Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-15 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border-b border-r border-white/30" />
                ))}
              </div>

              {/* Animated SVG Waveforms */}
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 400 100" fill="none">
                {/* Silicon rigid pulse */}
                <path
                  d="M0,50 L40,50 L40,25 L80,25 L80,75 L120,75 L120,50 L180,50 L180,20 L220,20 L220,80 L260,80 L260,50 L340,50 L340,30 L380,30 L380,70 L400,70"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Human organic sine wave scaled by slider */}
                <path
                  d={`M0,50 Q${50 * (humanFactor / 100)},${20 + (100 - humanFactor) * 0.4} 100,50 T200,50 T300,50 T400,50`}
                  stroke="#FF8C42"
                  strokeWidth="2.5"
                  fill="none"
                  className="filter drop-shadow-[0_0_8px_#FF8C42]"
                />
                
                {/* Convergent Harmony Wave */}
                <path
                  d={`M0,50 C${60 * (humanFactor / 100)},${15 + (100 - humanFactor) * 0.3} ${140 * (humanFactor / 100)},${85 - (100 - humanFactor) * 0.3} 200,50 C260,15 340,85 400,50`}
                  stroke="#FFD166"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  fill="none"
                  className="filter drop-shadow-[0_0_10px_#FFD166]"
                />
              </svg>

              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mt-2">
                <span className="text-[#FF8C42]">── Organic Biometric Vector</span>
                <span className="text-[#FFD166]">┈┈ Synthesized Coherence</span>
              </div>
            </div>

            {/* Slider Control */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#A7A7A7] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#FFB347]" />
                  <span>Ethical Alignment Factor</span>
                </span>
                <span className="text-white font-semibold">{humanFactor} / 100</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={humanFactor}
                onChange={(e) => setHumanFactor(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FF8C42]"
                data-cursor="interactive"
              />
              <span className="text-[11px] text-[#A7A7A7] font-light">
                Modulate resonance between computational throughput and human societal empathy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
