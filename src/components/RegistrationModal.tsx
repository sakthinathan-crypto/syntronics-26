import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Download, 
  Sparkles, 
  User, 
  Mail, 
  Building, 
  ExternalLink, 
  Utensils, 
  Laptop, 
  MapPin, 
  Phone 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DelegatePass } from '../types';
import { EVENTS, REGISTRATION_CONFIG } from '../data/symposiumData';
import { SyntronixLogo } from './SyntronixLogo';

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

  const handleBack = () => {
    if (step === 'form' || step === 'pass') {
      setStep('mode');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0B0B0B] border border-white/15 p-6 sm:p-9 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] my-6 sm:my-10 md:my-14 transition-all">
        
        {/* Top Header Navigation Bar with ONLY BACK Button */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-white/10">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-[#FF8C42]/50 hover:shadow-[0_0_15px_rgba(255,140,66,0.2)] transition-all duration-300 group rounded-sm"
            data-cursor="interactive"
            aria-label="Return to previous screen"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF8C42] group-hover:-translate-x-0.5 transition-all duration-300" />
            <span className="font-semibold">BACK</span>
          </button>

          <SyntronixLogo className="h-6 w-auto max-w-[140px] opacity-80" variant="mark" />
        </div>

        {/* Modal Top Institutional Header */}
        <div className="mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 uppercase tracking-[0.25em] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            <span>EGS PILLAY ENGINEERING COLLEGE // DEPT OF CSE</span>
          </div>
          <div className="text-white/60 font-mono text-xs tracking-widest">
            OFFICIAL HYBRID REGISTRATION PORTAL
          </div>
        </div>

        {/* Step 1: Mode Selection (Online vs Offline) */}
        {step === 'mode' && (
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Select Participation Mode
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8 font-serif italic">
              Everyone around the world can participate in SYNTRONIX '26. Choose whether you will attend virtually or in-person at our campus in Nagapattinam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-7 sm:mb-8">
              {/* Card 1: OFFLINE PARTICIPATION - Monochrome default, Color & Glow on Hover */}
              <div
                className="p-6 border border-white/15 hover:border-[#FF8C42]/70 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,140,66,0.2)] rounded-sm"
                data-cursor="interactive"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-lg text-white uppercase flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-neutral-400 group-hover:text-[#FF8C42] transition-colors duration-300" />
                      <span>OFFLINE PASS</span>
                    </span>
                    <span className="font-mono font-black text-2xl text-white group-hover:text-[#FFB347] transition-colors duration-300">
                      ₹100
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 group-hover:text-[#FF8C42] block mb-2 uppercase tracking-wider font-semibold transition-colors duration-300">
                    15 OCTOBER 2026 // EGSPEC CAMPUS
                  </span>
                  <p className="text-xs text-neutral-400 font-serif italic mb-5">
                    In-person experience at EGS Pillay Engineering College, Nagapattinam.
                  </p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2.5 pt-3 border-t border-white/10 text-[11px] text-neutral-300 font-mono">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFB347] shrink-0 transition-colors duration-300" />
                      <span><strong className="text-white">₹100 total registration fee</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFB347] shrink-0 transition-colors duration-300" />
                      <span><strong className="text-white">Attend ANY number of offline events</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFB347] shrink-0 transition-colors duration-300" />
                      <span><strong className="text-white">Delicious food banquet included</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFB347] shrink-0 transition-colors duration-300" />
                      <span>Hardcopy certificates &amp; cash prizes</span>
                    </li>
                  </ul>

                  <a
                    href={REGISTRATION_CONFIG.offlineGoogleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-white/10 hover:bg-[#FF8C42] border border-white/20 hover:border-transparent text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,140,66,0.35)] rounded-sm"
                  >
                    <span>OPEN OFFLINE GOOGLE FORM</span>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>

              {/* Card 2: ONLINE PARTICIPATION - Monochrome default, Color & Glow on Hover */}
              <div
                className="p-6 border border-white/15 hover:border-[#FFD166]/70 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,209,102,0.2)] rounded-sm"
                data-cursor="interactive"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-lg text-white uppercase flex items-center gap-2">
                      <Laptop className="w-5 h-5 text-neutral-400 group-hover:text-[#FFD166] transition-colors duration-300" />
                      <span>ONLINE PASS</span>
                    </span>
                    <span className="font-mono font-black text-2xl text-white group-hover:text-[#FFD166] transition-colors duration-300">
                      FREE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 group-hover:text-[#FFD166] block mb-2 uppercase tracking-wider font-semibold transition-colors duration-300">
                    14 OCTOBER 2026 // VIA UNSTOP
                  </span>
                  <p className="text-xs text-neutral-400 font-serif italic mb-5">
                    Virtual access conducted via Unstop platform for international scholars worldwide.
                  </p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2.5 pt-3 border-t border-white/10 text-[11px] text-neutral-300 font-mono">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD166] shrink-0 transition-colors duration-300" />
                      <span><strong className="text-white">100% Free worldwide registration</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD166] shrink-0 transition-colors duration-300" />
                      <span>Online Article Presentation event</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD166] shrink-0 transition-colors duration-300" />
                      <span>Cash awards for top presentations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD166] shrink-0 transition-colors duration-300" />
                      <span>Digital participation certificate by 17 Oct</span>
                    </li>
                  </ul>

                  <a
                    href={REGISTRATION_CONFIG.onlineUnstopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-white/10 hover:bg-[#FFB347] hover:text-black border border-white/20 hover:border-transparent text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,179,71,0.35)] rounded-sm"
                  >
                    <span>REGISTER FREE ON UNSTOP</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Clarification Notice */}
            <div className="p-4 bg-white/[0.02] border border-white/10 text-xs font-mono text-neutral-400 flex items-center gap-2 rounded-sm">
              <Sparkles className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Need support? Contact CSE Dept coordinators: <span className="text-white font-semibold">syntronix@egspec.org</span></span>
            </div>
          </div>
        )}

        {/* Step 2: Form for Offline / Delegate Details */}
        {step === 'form' && (
          <form onSubmit={handleOfflineSubmit} className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Offline Delegate Details
              </h3>
              <button
                type="button"
                onClick={() => setStep('mode')}
                className="text-xs font-mono text-neutral-400 hover:text-[#FF8C42] hover:underline uppercase tracking-wider transition-colors"
              >
                Change Mode ({mode})
              </button>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mb-5 font-serif italic">
              Offline pass fee: ₹100 per participant. Food provided. Select 2 events to attend.
            </p>

            <div className="space-y-4 mb-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Full Name (as printed on Badge &amp; Certificate) *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter delegate full name"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 transition-all duration-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
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
                      className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 transition-all duration-300 rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
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
                      className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 transition-all duration-300 rounded-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
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
                    className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 transition-all duration-300 rounded-sm"
                  />
                </div>
              </div>

              {/* Event Selection Checklist */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 flex items-center justify-between">
                  <span>Select Events (Included in ₹100 pass):</span>
                  <span className="text-neutral-400">
                    Selected: {formData.selectedEvents.length}
                  </span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {offlineEvents.map((ev) => {
                    const isChecked = formData.selectedEvents.includes(ev.id);
                    return (
                      <div
                        key={ev.id}
                        onClick={() => toggleEventSelection(ev.id)}
                        className={`p-3 border cursor-pointer text-xs font-mono transition-all duration-300 flex items-center justify-between rounded-sm ${
                          isChecked 
                            ? 'border-[#FF8C42]/60 bg-[#FF8C42]/10 text-white shadow-[0_0_15px_rgba(255,140,66,0.15)]' 
                            : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/30 hover:text-neutral-200'
                        }`}
                      >
                        <span className="truncate pr-2">{ev.title}</span>
                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#FF8C42] border-[#FF8C42] text-white' : 'border-white/30'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/10 text-[11px] font-mono text-neutral-400 flex items-center gap-2 rounded-sm">
                <Utensils className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Food banquet token included automatically with your ₹100 registration pass.</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-5 pb-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep('mode')}
                className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-7 py-3 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-[#FF8C42] border border-white/20 hover:border-transparent transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,140,66,0.3)] rounded-sm"
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
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-xs font-mono text-neutral-300 mb-2 uppercase tracking-wider">
                <Check className="w-3.5 h-3.5 text-[#FF8C42]" />
                <span>DELEGATE PASS CONFIRMED &amp; READY</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Official Delegate Pass
              </h3>
              <p className="text-xs text-neutral-400 font-serif italic">
                Present this digital credential or print it for entry and food token at EGSPEC campus.
              </p>
            </div>

            {/* Official Badge Card */}
            <div className="p-6 bg-[#0B0B0B] border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] mb-6 relative overflow-hidden rounded-sm">
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <SyntronixLogo className="h-10 sm:h-12 w-auto max-w-[220px]" variant="full" />
                  <div className="border-l border-white/10 pl-3 hidden sm:block">
                    <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                      EGSPEC CSE
                    </div>
                    <div className="text-[10px] font-mono text-neutral-300">
                      15 OCT 2026 // NAGAPATTINAM
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#FF8C42] block">
                    {generatedPass.passId}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-300 uppercase font-bold">
                    FOOD TOKEN: INCLUDED (₹100)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="sm:col-span-2 space-y-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-wider">Delegate Name</span>
                    <span className="font-black text-lg text-white uppercase">{generatedPass.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-wider">Institution</span>
                    <span className="text-xs font-serif italic text-neutral-300">{generatedPass.institution}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-wider">Registered Events</span>
                    <div className="text-xs text-neutral-200 font-mono flex flex-wrap gap-1 mt-0.5">
                      {generatedPass.eventsSelected.map((ev, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-white/5 border border-white/10">
                          {ev}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* QR Code Simulation */}
                <div className="flex flex-col items-center justify-center p-3 bg-black border border-white/10 rounded-sm">
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
                  <span className="text-[9px] font-mono text-neutral-400 mt-1.5 tracking-widest uppercase">EGSPEC CHECK-IN</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-2.5 border border-white/15 bg-white/[0.03] text-xs font-mono tracking-widest uppercase text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Print or Save Pass (PDF)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-[#FF8C42] border border-white/20 hover:border-transparent transition-all duration-300 rounded-sm"
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
