import React, { useState } from 'react';
import { X, Check, ArrowRight, Download, Sparkles, ShieldCheck, QrCode, User, Mail, Building, Ticket, ExternalLink, Utensils, Laptop, MapPin, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DelegatePass } from '../types';
import { EVENTS, INSTITUTION_INFO, REGISTRATION_CONFIG, SYMPOSIUM_META } from '../data/symposiumData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'ONLINE' | 'OFFLINE';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'OFFLINE',
}) => {
  const [mode, setMode] = useState<'OFFLINE' | 'ONLINE'>(initialMode);
  const [step, setStep] = useState<'mode' | 'form' | 'pass'>('mode');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    selectedEvents: ['offline-paper-presentation', 'offline-poster-making'],
  });

  const [generatedPass, setGeneratedPass] = useState<DelegatePass | null>(null);

  if (!isOpen) return null;

  const offlineEvents = EVENTS.filter(e => e.mode === 'OFFLINE');

  const toggleEventSelection = (eventId: string) => {
    setFormData(prev => {
      const exists = prev.selectedEvents.includes(eventId);
      if (exists) {
        return { ...prev, selectedEvents: prev.selectedEvents.filter(id => id !== eventId) };
      } else {
        return { ...prev, selectedEvents: [...prev.selectedEvents, eventId] };
      }
    });
  };

  const handleOfflineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.institution) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const passId = `SX26-OFFLINE-${randomNum}`;

    const selectedTitles = formData.selectedEvents.map(id => {
      const ev = EVENTS.find(e => e.id === id);
      return ev ? ev.title : id;
    });

    const pass: DelegatePass = {
      passId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      institution: formData.institution,
      mode: 'OFFLINE',
      eventsSelected: selectedTitles.length > 0 ? selectedTitles : ['Paper Presentation', 'Poster Making'],
      foodTokenIncluded: true,
      registeredAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      qrValue: `https://egspec.org/syntronix26/verify/${passId}`
    };

    setGeneratedPass(pass);
    setStep('pass');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD166', '#FFB347', '#FF8C42', '#FF4D4D']
      });
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

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

        {/* Modal Top Institutional Header */}
        <div className="mb-2">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#FF8C42] uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
            <span>EGS PILLAY ENGINEERING COLLEGE // DEPT OF CSE</span>
          </div>
          <div className="text-white font-mono text-xs font-bold tracking-widest mt-0.5">
            SYNTRONIX '26 // OFFICIAL HYBRID REGISTRATION
          </div>
        </div>

        {/* Step 1: Mode Selection (Online vs Offline) */}
        {step === 'mode' && (
          <div className="mt-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Select Participation Mode
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mb-6 font-serif italic">
              Everyone around the world can participate in SYNTRONIX '26. Choose whether you will attend virtually or at our campus in Nagapattinam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Card 1: OFFLINE PARTICIPATION */}
              <div
                onClick={() => setMode('OFFLINE')}
                className={`p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  mode === 'OFFLINE'
                    ? 'border-[#FFB347] bg-white/[0.08] shadow-[0_0_20px_rgba(255,179,71,0.25)]'
                    : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                }`}
                data-cursor="interactive"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-white uppercase flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#FF8C42]" />
                      <span>OFFLINE PASS</span>
                    </span>
                    <span className="font-mono font-black text-xl text-[#FFB347]">
                      ₹100
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FF8C42] block mb-2 uppercase tracking-wider font-semibold">
                    15 OCTOBER 2026 // EGSPEC CAMPUS
                  </span>
                  <p className="text-xs text-[#A7A7A7] font-serif italic mb-4">
                    In-person experience at EGS Pillay Engineering College, Nagapattinam.
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/10 text-[11px] text-neutral-300 font-mono">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
                    <span>Food banquet provided with entry</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
                    <span>Allows attending 2 events (Tech/Non-Tech)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFB347] shrink-0" />
                    <span>Hardcopy certificates & cash prizes</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-neutral-400">
                    <span className="text-[10px]">• Additional fee applies if &gt;2 events</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: ONLINE PARTICIPATION */}
              <div
                onClick={() => setMode('ONLINE')}
                className={`p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  mode === 'ONLINE'
                    ? 'border-[#FFD166] bg-white/[0.08] shadow-[0_0_20px_rgba(255,209,102,0.25)]'
                    : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                }`}
                data-cursor="interactive"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-white uppercase flex items-center gap-1.5">
                      <Laptop className="w-4 h-4 text-[#FFD166]" />
                      <span>ONLINE PASS</span>
                    </span>
                    <span className="font-mono font-black text-xl text-[#FF8C42]">
                      FREE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FFD166] block mb-2 uppercase tracking-wider font-semibold">
                    14 OCTOBER 2026 // UNSTOP PLATFORM
                  </span>
                  <p className="text-xs text-[#A7A7A7] font-serif italic mb-4">
                    Virtual access conducted via Unstop platform for international scholars worldwide.
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/10 text-[11px] text-neutral-300 font-mono">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
                    <span>100% Free worldwide registration</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
                    <span>Online Article Presentation access</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
                    <span>Cash prizes for winning presentation teams</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
                    <span>Digital participation certificate by 17 Oct</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mode Action Dispatcher */}
            {mode === 'OFFLINE' ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
                <a
                  href={REGISTRATION_CONFIG.offlineGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 border border-white/20 bg-white/5 text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF8C42]" />
                  <span>Open Google Form (Direct)</span>
                </a>

                <button
                  onClick={() => setStep('form')}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,140,66,0.3)]"
                  data-cursor="interactive"
                >
                  <span>REGISTER OFFLINE (₹100 PASS)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-4 bg-white/5 border border-white/15">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FFD166]" />
                      <span>Conducted via Unstop Platform</span>
                    </div>
                    <div className="text-xs text-[#A7A7A7] mt-1 font-serif italic">
                      Online registration opens on 10 September 2026. Register directly on Unstop for Free.
                    </div>
                  </div>

                  <a
                    href={REGISTRATION_CONFIG.onlineUnstopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#FF8C42] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FF7722] transition-colors flex items-center gap-2 shrink-0 shadow-[0_0_15px_rgba(255,140,66,0.35)]"
                  >
                    <span>GO TO UNSTOP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Form for Offline / Delegate Details */}
        {step === 'form' && (
          <form onSubmit={handleOfflineSubmit} className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Offline Delegate Details
              </h3>
              <button
                type="button"
                onClick={() => setStep('mode')}
                className="text-xs font-mono text-[#FF8C42] hover:underline uppercase tracking-wider"
              >
                Change Mode ({mode})
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mb-5 font-serif italic">
              Offline pass fee: ₹100 per participant. Food provided. Select 2 events to attend.
            </p>

            <div className="space-y-3.5 mb-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                  Full Name (as printed on Badge & Certificate) *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter delegate full name"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-2.5 w-4 h-4 text-neutral-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="delegate@institution.edu"
                      className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-2.5 w-4 h-4 text-neutral-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                  College / University / Institution *
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. EGS Pillay Engineering College / Anna University"
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              {/* Event Selection Checklist (Allows attending 2 events) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#FFB347] mb-1.5 flex items-center justify-between">
                  <span>Select Events (Choose 2 included in ₹100 pass):</span>
                  <span className="text-white/60">
                    Selected: {formData.selectedEvents.length} {formData.selectedEvents.length > 2 && '(Additional fee applies for >2)'}
                  </span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {offlineEvents.map((ev) => {
                    const isChecked = formData.selectedEvents.includes(ev.id);
                    return (
                      <div
                        key={ev.id}
                        onClick={() => toggleEventSelection(ev.id)}
                        className={`p-2.5 border cursor-pointer text-xs font-mono transition-all flex items-center justify-between ${
                          isChecked 
                            ? 'border-[#FFB347] bg-[#FFB347]/10 text-white' 
                            : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20'
                        }`}
                      >
                        <span className="truncate pr-2">{ev.title}</span>
                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#FF8C42] border-[#FF8C42] text-white' : 'border-white/30'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 text-[11px] font-mono text-[#A7A7A7] flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#FF8C42] shrink-0" />
                <span>Food banquet token included automatically with your ₹100 registration pass.</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep('mode')}
                className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-7 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,140,66,0.3)]"
                data-cursor="interactive"
              >
                <span>GENERATE PASS (₹100)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Generated Digital Pass */}
        {step === 'pass' && generatedPass && (
          <div className="mt-2">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF8C42]/15 border border-[#FF8C42]/30 text-xs font-mono text-[#FF8C42] mb-1.5 uppercase tracking-wider">
                <Check className="w-3.5 h-3.5" />
                <span>DELEGATE PASS CONFIRMED & READY</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Official Delegate Pass
              </h3>
              <p className="text-xs text-[#A7A7A7] font-serif italic">
                Present this digital credential or print it for entry and food token at EGSPEC campus.
              </p>
            </div>

            {/* Official Badge Card */}
            <div className="p-6 bg-[#0B0B0B] border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] mb-5 relative overflow-hidden">
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-tr from-[#FF8C42] to-[#FF6B2B] rounded flex items-center justify-center text-white font-mono font-bold text-sm shadow-[0_0_15px_rgba(255,140,66,0.35)]">
                    SX
                  </div>
                  <div>
                    <div className="font-black text-base text-white uppercase tracking-tight">
                      SYNTRONIX '26 // EGSPEC CSE
                    </div>
                    <div className="text-[10px] font-mono text-[#FFD166]">
                      15 OCTOBER 2026 // NAGAPATTINAM, TAMIL NADU
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#FF8C42] block">
                    {generatedPass.passId}
                  </span>
                  <span className="text-[9px] font-mono text-[#FF8C42] uppercase font-bold">
                    FOOD TOKEN: INCLUDED (₹100)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="sm:col-span-2 space-y-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-[#A7A7A7] uppercase block tracking-wider">Delegate Name</span>
                    <span className="font-black text-lg text-white uppercase">{generatedPass.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7A7A7] uppercase block tracking-wider">Institution</span>
                    <span className="text-xs font-serif italic text-neutral-300">{generatedPass.institution}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7A7A7] uppercase block tracking-wider">Registered Events</span>
                    <div className="text-xs text-[#FFD166] font-mono flex flex-wrap gap-1 mt-0.5">
                      {generatedPass.eventsSelected.map((ev, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-white/5 border border-white/10">
                          {ev}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* QR Code Simulation */}
                <div className="flex flex-col items-center justify-center p-3 bg-black border border-white/10">
                  <div className="w-24 h-24 p-1.5 bg-white flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                      <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                      <rect x="5" y="5" width="20" height="20" fill="white" />
                      <rect x="10" y="10" width="10" height="10" fill="currentColor" />

                      <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                      <rect x="75" y="5" width="20" height="20" fill="white" />
                      <rect x="80" y="10" width="10" height="10" fill="currentColor" />

                      <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                      <rect x="5" y="75" width="20" height="20" fill="white" />
                      <rect x="10" y="80" width="10" height="10" fill="currentColor" />

                      <rect x="40" y="10" width="15" height="15" fill="currentColor" />
                      <rect x="40" y="40" width="20" height="20" fill="currentColor" />
                      <rect x="70" y="45" width="15" height="15" fill="currentColor" />
                      <rect x="40" y="70" width="15" height="20" fill="currentColor" />
                      <rect x="65" y="75" width="25" height="15" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-mono text-[#FFD166] mt-1.5 tracking-widest uppercase">EGSPEC CHECK-IN</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-2.5 border border-white/15 bg-white/5 text-xs font-mono tracking-widest uppercase text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#FFD166]" />
                <span>Print or Save Pass (PDF)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-all"
              >
                DONE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
