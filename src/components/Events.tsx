import React, { useState, useRef } from 'react';
import { EVENTS } from '../data/symposiumData';
import { SymposiumEvent } from '../types';
import { Trophy, Users, Calendar, MapPin, ArrowUpRight, Sparkles, Laptop, Utensils, Award } from 'lucide-react';

interface EventsProps {
  onSelectEvent: (event: SymposiumEvent) => void;
}

const EventCard: React.FC<{
  event: SymposiumEvent;
  onSelect: () => void;
}> = ({ event, onSelect }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const isOnline = event.mode === 'ONLINE';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className={`group p-6 sm:p-7 border bg-[#0B0B0B]/75 flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-xl shadow-lg ${
        isOnline 
          ? 'border-[#FFD166]/30 hover:border-[#FFD166]' 
          : 'border-white/10 hover:border-[#FF8C42]/80'
      }`}
      data-cursor="interactive"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 179, 71, 0.14), transparent 80%)`,
          }}
        />
      )}

      {/* Card Top: Number, Mode & Category Badges */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#FFD166] tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 uppercase">
              {event.number}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 border uppercase font-bold ${
              isOnline 
                ? 'bg-[#FF8C42]/15 text-[#FF8C42] border-[#FF8C42]/30' 
                : 'bg-[#FF8C42]/10 text-[#FF8C42] border-[#FF8C42]/30'
            }`}>
              {event.mode}
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#A7A7A7] uppercase tracking-wider truncate">
            {event.category}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-[#FFB347] transition-colors leading-snug uppercase">
          {event.title}
        </h3>

        {event.isPlaceholder && (
          <span className="inline-block text-[10px] font-mono text-[#FFD166] bg-[#FFD166]/10 border border-[#FFD166]/20 px-2 py-0.5 uppercase mb-2">
            Specific title announced soon
          </span>
        )}

        <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-5 line-clamp-3">
          {event.description}
        </p>

        {/* Day & Venue pill */}
        <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-300 mb-4">
          <span className="px-2 py-1 bg-white/5 border border-white/10 flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-[#FFB347]" />
            <span>{event.day}</span>
          </span>
          <span className="px-2 py-1 bg-white/5 border border-white/10 flex items-center gap-1.5 truncate">
            <MapPin className="w-3 h-3 text-[#FF8C42]" />
            <span className="truncate">{event.venue}</span>
          </span>
        </div>
      </div>

      {/* Card Meta & CTA */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-2.5">
        {event.prizePool && (
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFD166]">
            <Trophy className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
            <span className="font-semibold">{event.prizePool}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-xs font-mono text-[#A7A7A7]">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-neutral-400" />
            <span className={isOnline ? 'text-[#FF8C42] font-bold' : 'text-neutral-300'}>
              {event.feeInfo}
            </span>
          </div>
          {event.teamSize && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-neutral-400" />
              <span>{event.teamSize}</span>
            </div>
          )}
        </div>

        {!isOnline && (
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
            <Utensils className="w-3 h-3 text-[#FF8C42]" />
            <span>Food provided • Attends 2 events</span>
          </div>
        )}

        <div className="mt-2 flex items-center justify-between text-xs font-mono text-white group-hover:text-[#FFB347] font-medium pt-2 border-t border-white/[0.04]">
          <span>View Guidelines & Details</span>
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export const Events: React.FC<EventsProps> = ({ onSelectEvent }) => {
  const [filterMode, setFilterMode] = useState<'All' | 'Online' | 'Offline Tech' | 'Offline Non-Tech'>('All');

  const filteredEvents = EVENTS.filter(event => {
    if (filterMode === 'All') return true;
    if (filterMode === 'Online') return event.mode === 'ONLINE';
    if (filterMode === 'Offline Tech') return event.mode === 'OFFLINE' && (event.category === 'Paper Presentation' || event.category === 'Poster Making');
    if (filterMode === 'Offline Non-Tech') return event.mode === 'OFFLINE' && event.category === 'Non-Technical';
    return true;
  });

  return (
    <section
      id="events"
      className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-[-8%] w-[500px] h-[500px] rounded-full bg-[#FFD166]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header and Mode Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>03 // OFFICIAL SYMPOSIUM EVENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
              6 FLAGSHIP
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                CHALLENGES.
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-serif italic text-[#A7A7A7] mt-2">
              1 Online Event via Unstop (Free) + 5 Offline Events at EGSPEC Campus (₹100, Food Included)
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/10 self-start md:self-auto">
            {(['All', 'Online', 'Offline Tech', 'Offline Non-Tech'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase transition-all ${
                  filterMode === mode
                    ? 'bg-[#FF8C42] text-white font-bold shadow-[0_0_15px_rgba(255,140,66,0.4)]'
                    : 'text-[#A7A7A7] hover:text-white hover:bg-white/5'
                }`}
                data-cursor="interactive"
              >
                {mode === 'All' ? `All (6)` : mode === 'Online' ? `Online (1)` : mode === 'Offline Tech' ? `Offline Tech (2)` : `Non-Tech (3)`}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid with cursor illumination */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={() => onSelectEvent(event)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
