import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, ChevronDown, Compass } from 'lucide-react';
import { SyntronixLogo } from './SyntronixLogo';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenAbstractSubmit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenAbstractSubmit }) => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 37,
    hours: 16,
    minutes: 18,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-10-14T09:00:00+05:30').getTime();

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
    const themeSection = document.getElementById('theme') || document.getElementById('about');
    if (themeSection) {
      themeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contentTranslateY = Math.min(scrollY * 0.2, 120);
  const contentOpacity = Math.max(0, 1 - scrollY / 950);

  const heroEvents = [
    {
      id: '01',
      title: '01. Online Article Presentation',
      badge: 'ONLINE',
      badgeColor: 'border-[#FF8C42]/50 text-[#FFB347]',
      detail: 'Day 1 (14 Oct) • Unstop Platform • 100% FREE',
      href: '#events',
    },
    {
      id: '02',
      title: '02. Paper Presentation',
      badge: 'OFFLINE',
      badgeColor: 'border-white/20 text-neutral-300',
      detail: 'Day 2 (15 Oct) • CSE Seminar Complex • Cash Prizes',
      href: '#events',
    },
    {
      id: '03',
      title: '03. Poster Making',
      badge: 'OFFLINE',
      badgeColor: 'border-white/20 text-neutral-300',
      detail: 'Day 2 (15 Oct) • Innovation Gallery • Creative Challenge',
      href: '#events',
    },
    {
      id: '04',
      title: '04. Non-Technical Event 01',
      badge: 'OFFLINE',
      badgeColor: 'border-white/20 text-neutral-300',
      detail: 'Day 2 (15 Oct) • Auditorium • Creative Thinking',
      href: '#events',
    },
    {
      id: '05',
      title: '05. Non-Technical Event 02',
      badge: 'OFFLINE',
      badgeColor: 'border-white/20 text-neutral-300',
      detail: 'Day 2 (15 Oct) • Campus Arena • Fast-Paced Acumen',
      href: '#events',
    },
    {
      id: '06',
      title: '06. Non-Technical Event 03',
      badge: 'OFFLINE',
      badgeColor: 'border-white/20 text-neutral-300',
      detail: 'Day 2 (15 Oct) • Grand Amphitheatre • Expressive Finale',
      href: '#events',
    },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden z-10 select-none"
    >
      {/* Warm Ambient Glows (Lower-Left & Right) */}
      <div
        className="absolute -bottom-24 -left-24 w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[850px] rounded-full pointer-events-none -z-10 blur-3xl opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(255, 140, 66, 0.22) 0%, rgba(180, 50, 20, 0.12) 40%, transparent 75%)',
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/4 -right-24 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none -z-10 blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(255, 77, 77, 0.15) 0%, rgba(255, 179, 71, 0.08) 50%, transparent 75%)',
          transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)`,
        }}
      />

      {/* Celestial Orbital Path & Node Network Overlay */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease' }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Orbital Ellipse Curves crossing the viewport */}
          <ellipse
            cx="620"
            cy="380"
            rx="680"
            ry="460"
            stroke="rgba(255, 209, 102, 0.07)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <ellipse
            cx="620"
            cy="380"
            rx="520"
            ry="350"
            stroke="rgba(255, 140, 66, 0.04)"
            strokeWidth="1"
          />

          {/* Golden & Amber Constellation Nodes */}
          {[
            { cx: 210, cy: 110, r: 2.5, color: '#FFD166', alpha: 0.6 },
            { cx: 350, cy: 90, r: 2, color: '#FF8C42', alpha: 0.5 },
            { cx: 780, cy: 140, r: 2.5, color: '#FFB347', alpha: 0.7 },
            { cx: 960, cy: 220, r: 2, color: '#FFD166', alpha: 0.5 },
            { cx: 1120, cy: 160, r: 3, color: '#FF8C42', alpha: 0.6 },
            { cx: 140, cy: 260, r: 2, color: '#FFD166', alpha: 0.4 },
            { cx: 370, cy: 330, r: 2.5, color: '#FFB347', alpha: 0.6 },
            { cx: 700, cy: 410, r: 2, color: '#FF4D4D', alpha: 0.5 },
            { cx: 980, cy: 450, r: 2.5, color: '#FFD166', alpha: 0.6 },
            { cx: 1240, cy: 390, r: 2, color: '#FF8C42', alpha: 0.5 },
            { cx: 180, cy: 590, r: 3, color: '#FFB347', alpha: 0.7 },
            { cx: 460, cy: 620, r: 2, color: '#FFD166', alpha: 0.5 },
            { cx: 840, cy: 680, r: 2.5, color: '#FF8C42', alpha: 0.6 },
            { cx: 1160, cy: 640, r: 2, color: '#FFB347', alpha: 0.5 },
          ].map((pt, idx) => (
            <g key={idx}>
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r={pt.r * 2.2}
                fill={pt.color}
                opacity={pt.alpha * 0.25}
              />
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r={pt.r}
                fill={pt.color}
                opacity={pt.alpha}
              />
            </g>
          ))}

          {/* Subtle connecting constellation lines */}
          <line x1="210" y1="110" x2="350" y2="90" stroke="rgba(255, 209, 102, 0.08)" strokeWidth="0.8" />
          <line x1="350" y1="90" x2="780" y2="140" stroke="rgba(255, 140, 66, 0.06)" strokeWidth="0.8" />
          <line x1="780" y1="140" x2="960" y2="220" stroke="rgba(255, 179, 71, 0.06)" strokeWidth="0.8" />
          <line x1="960" y1="220" x2="1120" y2="160" stroke="rgba(255, 209, 102, 0.06)" strokeWidth="0.8" />
          <line x1="140" y1="260" x2="370" y2="330" stroke="rgba(255, 179, 71, 0.06)" strokeWidth="0.8" />
          <line x1="700" y1="410" x2="980" y2="450" stroke="rgba(255, 140, 66, 0.06)" strokeWidth="0.8" />
          <line x1="180" y1="590" x2="460" y2="620" stroke="rgba(255, 209, 102, 0.08)" strokeWidth="0.8" />
          <line x1="840" y1="680" x2="1160" y2="640" stroke="rgba(255, 140, 66, 0.06)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div
        className="relative max-w-7xl mx-auto w-full will-change-transform"
        style={{
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        {/* Top Header Row with Location Beacon on Right */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-7">
          {/* Top Eyebrow Line */}
          <div
            className={`flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {/* Left terminal status */}
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-[#FF8C42] font-bold">&gt;_</span>
              <span>SYS // SYNTRONIX.CORE.26 // READY</span>
            </div>

            {/* Right theme & department badge */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8C42] animate-pulse shadow-[0_0_8px_#FF8C42]" />
              <span className="text-[#FF8C42] font-bold tracking-[0.24em]">
                HUMANIZING TECHNOLOGY
              </span>
              <span className="text-neutral-400 tracking-wider hidden sm:inline">
                // DEPT OF CSE • EGSPEC
              </span>
            </div>
          </div>

          {/* Top Right Location Badge */}
          <div
            className={`hidden lg:flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#A7A7A7] transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#FF8C42]" />
            <span>LOC // EGSPEC, NAGAPATTINAM</span>
            <span className="relative flex h-2.5 w-2.5 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD166] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD166]"></span>
            </span>
          </div>
        </div>

        {/* 2-Column Hero Layout matching user's image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Logo, Big Heading, Metadata, Actions, Countdown */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Syntronix Logo */}
            <div
              className={`mb-5 sm:mb-6 transition-all duration-700 delay-150 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <SyntronixLogo
                className="h-9 sm:h-11 md:h-12 w-auto max-w-[220px] sm:max-w-[260px]"
                glow={true}
              />
            </div>

            {/* Massive 3-Line Heading */}
            <h1
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-black leading-[0.9] tracking-tight uppercase mb-6 sm:mb-8 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="block text-white">INTERNATIONAL</span>
              <span className="block text-white">TECHNICAL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D]">
                SYMPOSIUM
              </span>
            </h1>

            {/* Metadata Grid (Dates, Format, Venue) */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 max-w-xl mb-7 sm:mb-8 transition-all duration-700 delay-450 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Row 1, Col 1: DATES */}
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A7A7A7] mb-1">
                  <span className="w-1.5 h-1.5 bg-[#FF8C42] shrink-0" />
                  <span>DATES</span>
                </div>
                <div className="font-serif italic text-2xl sm:text-3xl text-[#FFB347] font-normal leading-tight">
                  14 – 15 Oct 2026
                </div>
              </div>

              {/* Row 1, Col 2: FORMAT */}
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A7A7A7] mb-1">
                  <span className="w-1.5 h-1.5 bg-[#FF8C42] shrink-0" />
                  <span>FORMAT</span>
                </div>
                <div className="font-serif italic text-2xl sm:text-3xl text-[#FFB347] font-normal leading-tight">
                  Hybrid (Online &amp; Offline)
                </div>
              </div>

              {/* Row 2, Col 1: VENUE */}
              <div className="sm:col-span-2">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A7A7A7] mb-1">
                  <span className="w-1.5 h-1.5 bg-[#FF8C42] shrink-0" />
                  <span>VENUE</span>
                </div>
                <div className="font-serif italic text-2xl sm:text-3xl text-[#FFB347] font-normal leading-tight">
                  Unstop &amp; EGSPEC Campus
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div
              className={`flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-9 transition-all duration-700 delay-600 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* GET SYMPOSIUM PASS -> */}
              <button
                id="hero-register-btn"
                onClick={onOpenRegister}
                className="bg-gradient-to-r from-[#FF8C42] to-[#FF7026] hover:from-[#FF7722] hover:to-[#FF6015] text-white px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-sm flex items-center gap-2 shadow-[0_0_25px_rgba(255,140,66,0.35)] transition-all transform hover:scale-[1.02] border border-transparent"
                data-cursor="interactive"
              >
                <span>GET SYMPOSIUM PASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* EXPLORE 6 EVENTS */}
              <a
                href="#events"
                className="bg-black/60 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-sm flex items-center gap-2 transition-all"
                data-cursor="interactive"
              >
                <FileText className="w-4 h-4 text-[#FFB347]" />
                <span>EXPLORE 6 EVENTS</span>
              </a>

              {/* THEME dropdown / scroll */}
              <button
                id="hero-theme-btn"
                onClick={scrollToExplore}
                className="text-neutral-400 hover:text-white px-2.5 py-3.5 text-xs sm:text-sm font-mono tracking-widest uppercase flex items-center gap-1 transition-colors"
                data-cursor="interactive"
              >
                <span>THEME</span>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Bottom Left Countdown Box */}
            <div
              className={`p-4 sm:p-5 bg-black/60 border border-white/10 max-w-xl transition-all duration-700 delay-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3">
                <span className="text-[#FF8C42] font-semibold">
                  COUNTDOWN TO DAY 1 (ONLINE)
                </span>
                <span className="text-neutral-400">
                  14 OCT 2026 // UNSTOP
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="p-3 bg-white/[0.03] border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
                    DAYS
                  </div>
                </div>

                <div className="p-3 bg-white/[0.03] border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
                    HOURS
                  </div>
                </div>

                <div className="p-3 bg-white/[0.03] border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
                    MINUTES
                  </div>
                </div>

                <div className="p-3 bg-white/[0.03] border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white text-[#FF8C42]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
                    SECONDS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Symposium Events Card, 2 Fee Cards, Quote */}
          {/* ============================================================ */}
          <div
            className={`lg:col-span-5 flex flex-col gap-4 sm:gap-5 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Card 1: SYMPOSIUM EVENTS [01 - 06] */}
            <div className="p-5 sm:p-6 bg-black/60 border border-white/10 backdrop-blur-md">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 font-mono text-xs uppercase tracking-wider">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="w-1.5 h-1.5 bg-[#FF8C42]" />
                  <span>SYMPOSIUM EVENTS</span>
                </div>
                <span className="text-[#FFB347] font-semibold tracking-widest">
                  [01 — 06]
                </span>
              </div>

              {/* Event Rows */}
              <div className="space-y-3">
                {heroEvents.map((evt) => (
                  <a
                    key={evt.id}
                    href={evt.href}
                    className="block group p-2 hover:bg-white/[0.04] transition-colors rounded-sm"
                    data-cursor="interactive"
                  >
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-sm font-bold text-white group-hover:text-[#FFB347] transition-colors tracking-wide">
                        {evt.title}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 border ${evt.badgeColor}`}
                      >
                        {evt.badge}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 font-serif italic">
                      {evt.detail}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Card 2: Two Side-by-Side Fee Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Left Fee Card: FREE (Day 1 Online Unstop) */}
              <div className="p-4 sm:p-5 bg-black/60 border border-white/10 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#FFD166] mb-1">
                  FREE
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  DAY 1 ONLINE (UNSTOP)
                </div>
              </div>

              {/* Right Fee Card: ₹100 (Day 2 Offline + Food) */}
              <div className="p-4 sm:p-5 bg-black/60 border border-white/10 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-[#FFD166] mb-1">
                  ₹100
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  DAY 2 OFFLINE + FOOD
                </div>
              </div>
            </div>

            {/* Card 3: Symposium Motto & Quote */}
            <div className="text-xs text-neutral-400 font-serif italic leading-relaxed px-1">
              "MAKE IT. SHOW IT. ACHIEVE IT." – International Technical Symposium organized by Dept. of Computer Science &amp; Engineering, E.G.S. Pillay Engineering College, Nagapattinam.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
