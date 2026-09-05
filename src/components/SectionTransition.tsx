import React from 'react';

interface SectionTransitionProps {
  fromColor?: string; // e.g. '#FFB347'
  toColor?: string;   // e.g. '#FF8C42'
  code?: string;      // e.g. 'COORD // LAT 37.7749° N'
  accent?: 'orange' | 'yellow' | 'red' | 'neutral';
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromColor = '#FFB347',
  toColor = '#FF8C42',
  code,
  accent = 'orange',
}) => {
  const accentGlow = {
    orange: 'rgba(255, 140, 66, 0.12)',
    yellow: 'rgba(255, 209, 102, 0.12)',
    red: 'rgba(255, 77, 77, 0.10)',
    neutral: 'rgba(255, 255, 255, 0.05)',
  }[accent];

  return (
    <div className="relative w-full h-16 sm:h-20 flex items-center justify-center overflow-hidden pointer-events-none z-10">
      {/* Central ambient light blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[35px] rounded-full blur-2xl"
        style={{ background: accentGlow }}
      />

      {/* Fine technical line spanning width */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20" />
        
        {/* Center Node Diamond */}
        <div className="mx-4 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rotate-45 border border-[#FFB347] bg-[#050505]" />
          {code && (
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 hidden sm:inline-block">
              {code}
            </span>
          )}
          <div className="w-1.5 h-1.5 rotate-45 border border-[#FF8C42] bg-[#050505]" />
        </div>

        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
      </div>
    </div>
  );
};
