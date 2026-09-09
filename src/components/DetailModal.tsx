import React from 'react';
import { X, Calendar, MapPin, Trophy, Users, User, ArrowRight, ExternalLink, Sparkles, Award, Utensils, CheckCircle2 } from 'lucide-react';
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
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* EVENT MODAL VIEW */}
        {eventData && (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF8C42] mb-2 uppercase tracking-[0.25em]">
              <span>{eventData.number}</span>
              <span>•</span>
              <span className={`px-2 py-0.5 border ${
                eventData.mode === 'ONLINE' ? 'bg-[#FF8C42]/15 text-[#FF8C42] border-[#FF8C42]/30' : 'bg-[#FF8C42]/10 text-[#FF8C42] border-[#FF8C42]/30'
              }`}>
                {eventData.mode}
              </span>
              <span>•</span>
              <span>{eventData.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-snug uppercase tracking-tight">
              {eventData.title}
            </h3>

            {eventData.isPlaceholder && (
              <div className="inline-block text-[11px] font-mono text-[#FFD166] bg-[#FFD166]/10 border border-[#FFD166]/20 px-2.5 py-0.5 uppercase mb-3">
                Official round format & specific title will be announced with final circular
              </div>
            )}

            <p className="text-xs sm:text-sm text-[#A7A7A7] font-serif italic leading-relaxed mb-5">
              {eventData.description}
            </p>

            {/* Event Metrics Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white/5 border border-white/10 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-neutral-300">
                <Calendar className="w-4 h-4 text-[#FFD166]" />
                <span>{eventData.day} ({eventData.time})</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#FF8C42]" />
                <span>{eventData.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-[#FFD166] font-bold">
                <Award className="w-4 h-4 text-[#FFB347]" />
                <span>Fee: {eventData.feeInfo}</span>
              </div>
              {eventData.prizePool && (
                <div className="flex items-start gap-2 text-[#FFD166] font-bold">
                  <Trophy className="w-4 h-4 text-[#FFB347] shrink-0 mt-0.5" />
                  <span className="leading-snug">Awards: {eventData.prizePool}</span>
                </div>
              )}
              {eventData.teamSize && (
                <div className="flex items-center gap-2 text-neutral-300">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span>Team Size: {eventData.teamSize}</span>
                </div>
              )}
              {eventData.mode === 'OFFLINE' && (
                <div className="flex items-center gap-2 text-neutral-300">
                  <Utensils className="w-4 h-4 text-[#FF8C42]" />
                  <span>Food Banquet Included</span>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C42] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFD166]" />
                <span>Format & Evaluation Guidelines:</span>
              </h4>
              <div className="space-y-2">
                {eventData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 p-2.5 bg-white/[0.02] border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C42] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            {eventData.rules && eventData.rules.length > 0 && (
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2">
                  Official Rules:
                </h4>
                <ul className="list-disc list-inside text-xs font-serif italic text-neutral-400 space-y-1">
                  {eventData.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="text-xs font-mono text-[#A7A7A7]">
                Coordinator: <span className="text-white">{eventData.coordinator}</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onRegisterInterest?.();
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,140,66,0.3)]"
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
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover border border-white/20 shrink-0 grayscale contrast-125"
              />
              <div>
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-white/10 text-[#FFD166] border border-white/20 mb-2 inline-block font-bold">
                  {speakerData.sessionType}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
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
              <span className="text-[10px] font-mono text-[#FF8C42] uppercase tracking-[0.2em] block mb-1 font-bold">
                KEYNOTE SYNOPSIS & PERSPECTIVE
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
                SYNTRONIX '26 Plenary Hall // Tech Pavilion & Virtual Hub
              </div>

              <button
                onClick={() => {
                  onClose();
                  onRegisterInterest?.();
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,140,66,0.3)]"
                data-cursor="interactive"
              >
                <span>REGISTER AS ATTENDEE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
