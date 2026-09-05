import React, { useState } from 'react';
import { EVENTS } from '../data/symposiumData';
import { SymposiumEvent } from '../types';
import { Trophy, Users, Calendar, MapPin, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

interface EventsProps {
  onSelectEvent: (event: SymposiumEvent) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hackathon', 'Paper Presentation', 'Competition', 'Workshop', 'Panel Discussion'];

  const filteredEvents = selectedCategory === 'All'
    ? EVENTS
    : EVENTS.filter(e => e.category === selectedCategory);

  return (
    <section
      id="events"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-[-8%] w-[500px] h-[500px] rounded-full bg-[#FFD166]/08 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#FF8C42] tracking-[0.5em] uppercase">
              <span className="w-8 h-[1px] bg-[#FF8C42]" />
              <span>04 // SYMPOSIUM SCHEDULE & CHALLENGES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
              FLAGSHIP
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FF8C42] to-[#FF4D4D] ml-3">
                EVENTS.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FFB347] text-black font-bold shadow-[0_0_15px_rgba(255,179,71,0.4)]'
                    : 'text-[#A7A7A7] hover:text-white hover:bg-white/5'
                }`}
                data-cursor="interactive"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="group p-6 sm:p-7 border border-white/10 bg-[#0B0B0B]/60 flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-[#FFB347] hover:-translate-y-1 backdrop-blur-md"
              data-cursor="interactive"
            >
              {/* Card Top: Number & Category */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#FFD166] tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 uppercase">
                    {event.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#A7A7A7] uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-[#FFB347] transition-colors leading-snug uppercase">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-6 line-clamp-3">
                  {event.description}
                </p>
              </div>

              {/* Card Meta & CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                {event.prizePool && (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FFD166]">
                    <Trophy className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
                    <span className="font-semibold">{event.prizePool}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-mono text-[#A7A7A7]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{event.date}</span>
                  </div>
                  {event.teamSize && (
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{event.teamSize}</span>
                    </div>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between text-xs font-mono text-white group-hover:text-[#FFB347] font-medium pt-2 border-t border-white/[0.04]">
                  <span>Explore Guidelines</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
