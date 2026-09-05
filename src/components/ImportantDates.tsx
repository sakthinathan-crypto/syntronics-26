import React, { useState } from 'react';
import { IMPORTANT_DATES } from '../data/symposiumData';
import { Calendar, Bell, Check, Sparkles, Award } from 'lucide-react';

export const ImportantDates: React.FC = () => {
  const [copiedDate, setCopiedDate] = useState<string | null>(null);

  const handleReminder = (item: typeof IMPORTANT_DATES[0]) => {
    const text = `SYNTRONIX '26 Milestone: ${item.title} (${item.day} ${item.month} ${item.year}) - EGS Pillay Engineering College`;
    navigator.clipboard.writeText(text);
    setCopiedDate(item.title);
    setTimeout(() => setCopiedDate(null), 2500);
  };

  return (
    <section
      id="dates"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFB347]/08 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>06 // OFFICIAL DATES & DEADLINES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              IMPORTANT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                DATES.
              </span>
            </h2>
          </div>
          <div className="max-w-md p-3.5 bg-white/5 border border-white/10 text-xs font-mono text-[#A7A7A7]">
            <div className="text-[#FFD166] font-bold flex items-center gap-1.5 mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>EVENT-DAY CEREMONY & CERTIFICATES</span>
            </div>
            Hardcopy merit certificates and cash prizes for winners and runners are awarded directly on event day at EGSPEC campus. Digital participation certificates are issued by 17 October 2026.
          </div>
        </div>

        {/* Editorial Date Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPORTANT_DATES.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 border relative overflow-hidden flex flex-col justify-between group transition-all duration-300 backdrop-blur-xl ${
                item.isMilestone
                  ? 'border-[#FFB347] bg-white/[0.08] shadow-[0_10px_35px_rgba(255,140,66,0.15)] hover:-translate-y-1'
                  : 'border-white/10 bg-[#0B0B0B]/75 hover:border-white/25 hover:-translate-y-1'
              }`}
            >
              {/* Highlight Tag / Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-wider text-[#FFD166] px-2 py-0.5 bg-[#FF8C42]/20 border border-[#FF8C42]/40">
                {item.isMilestone ? <Sparkles className="w-3 h-3 text-[#FFB347]" /> : null}
                <span>{item.badge || 'SCHEDULE'}</span>
              </div>

              {/* Huge Editorial Date Typography */}
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter group-hover:text-[#FFD166] transition-colors font-mono">
                    {item.day}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#FF8C42] tracking-wider uppercase">
                    {item.month}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    '{item.year.slice(2)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Reminder Action */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => handleReminder(item)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#FFB347] transition-colors"
                  data-cursor="interactive"
                >
                  {copiedDate === item.title ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FF8C42]" />
                      <span className="text-[#FF8C42] font-semibold">Saved to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-3.5 h-3.5 text-[#FFB347]" />
                      <span>Copy Date</span>
                    </>
                  )}
                </button>

                <div className="text-[10px] font-mono text-white/40">
                  IST (UTC+05:30)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
