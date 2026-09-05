import React from 'react';
import { X, Calendar, MapPin, Trophy, Users, User, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { SymposiumEvent, Speaker } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventData?: SymposiumEvent | null;
  speakerData?: Speaker | null;
  onRegisterInterest?: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  eventData,
  speakerData,
  onRegisterInterest,
}) => {
  if (!isOpen || (!eventData && !speakerData)) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0B0B0B] border border-white/20 p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.95)] overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
          data-cursor="interactive"
        >
          <X className="w-5 h-5" />
        </button>

        {/* EVENT MODAL VIEW */}
        {eventData && (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF8C42] mb-2 uppercase tracking-[0.3em]">
              <span>{eventData.number}</span>
              <span>•</span>
              <span>{eventData.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-snug uppercase tracking-tight">
              {eventData.title}
            </h3>

            <p className="text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-6">
              {eventData.description}
            </p>

            {/* Event Metrics Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white/5 border border-white/10 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-neutral-300">
                <Calendar className="w-4 h-4 text-[#FFD166]" />
                <span>{eventData.date} ({eventData.time})</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#FF8C42]" />
                <span>{eventData.venue}</span>
              </div>
              {eventData.prizePool && (
                <div className="flex items-center gap-2 text-[#FFD166] font-bold">
                  <Trophy className="w-4 h-4 text-[#FFB347]" />
                  <span>Awards: {eventData.prizePool}</span>
                </div>
              )}
              {eventData.teamSize && (
                <div className="flex items-center gap-2 text-neutral-300">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span>Team: {eventData.teamSize}</span>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C42] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFD166]" />
                <span>Key Guidelines & Deliverables:</span>
              </h4>
              <div className="space-y-2">
                {eventData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 p-2.5 bg-white/[0.02] border border-white/10">
                    <span className="text-[#FF8C42] font-mono font-bold">•</span>
                    <span className="font-serif italic">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="text-xs font-mono text-[#A7A7A7]">
                Coordinator: {eventData.coordinator}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onRegisterInterest?.();
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,179,71,0.2)]"
                data-cursor="interactive"
              >
                <span>REGISTER FOR THIS EVENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SPEAKER MODAL VIEW */}
        {speakerData && (
          <div>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <img
                src={speakerData.photo}
                alt={speakerData.name}
                className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-white/20 shrink-0 grayscale contrast-125"
              />
              <div>
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-white/10 text-[#FFD166] border border-white/20 mb-2 inline-block">
                  {speakerData.sessionType}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {speakerData.name}
                </h3>
                <p className="text-xs font-mono text-[#FF8C42] mt-0.5 font-bold">
                  {speakerData.designation}
                </p>
                <p className="text-xs text-[#A7A7A7] mt-0.5 font-serif italic">
                  {speakerData.organization}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-mono text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>{speakerData.sessionTime}</span>
                </div>
              </div>
            </div>

            {/* Session Abstract */}
            <div className="p-5 bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-mono text-[#FF8C42] uppercase tracking-[0.2em] block mb-1">
                KEYNOTE ABSTRACT
              </span>
              <h4 className="font-bold text-base text-white mb-2 uppercase">
                "{speakerData.sessionTitle}"
              </h4>
              <p className="text-xs text-[#A7A7A7] leading-relaxed font-serif italic">
                {speakerData.bio}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="text-xs font-mono text-[#A7A7A7]">
                Grand Plenary Hall // Live Broadcast
              </div>

              <button
                onClick={() => {
                  onClose();
                  onRegisterInterest?.();
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,179,71,0.2)]"
                data-cursor="interactive"
              >
                <span>RESERVE KEYNOTE SEAT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
