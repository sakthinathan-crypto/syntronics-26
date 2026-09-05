import React, { useState } from 'react';
import { X, Check, ArrowRight, Download, Sparkles, ShieldCheck, QrCode, User, Mail, Building, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DelegatePass } from '../types';
import { TRACKS } from '../data/symposiumData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialTrack,
}) => {
  const [step, setStep] = useState<'tier' | 'form' | 'pass'>('tier');
  const [selectedTier, setSelectedTier] = useState<'Student Scholar' | 'Academic Delegate' | 'Industry Innovator' | 'Virtual Access'>('Student Scholar');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    track: initialTrack || TRACKS[0].title,
    dietary: 'None',
  });

  const [generatedPass, setGeneratedPass] = useState<DelegatePass | null>(null);

  if (!isOpen) return null;

  const tiers = [
    {
      id: 'Student Scholar',
      name: 'Student Scholar Pass',
      price: '$45',
      grantNote: 'Or full travel fellowship',
      desc: 'For currently enrolled undergraduate, master\'s, or PhD researchers presenting papers or attending sessions.',
      features: ['Access to all 5 tracks & keynotes', 'Hackathon & Quiz participation', 'Delegate kit & lunch banquet', 'Certificate of Participation']
    },
    {
      id: 'Academic Delegate',
      name: 'Academic Delegate',
      price: '$120',
      grantNote: 'Institutional rate',
      desc: 'For faculty, postdocs, and university researchers chairing sessions or presenting peer-reviewed papers.',
      features: ['Full 3-day access + Proceedings', 'VIP Networking Luncheon', 'Track Chair & Reviewer Sessions', 'IEEE Indexed Proceedings volume']
    },
    {
      id: 'Industry Innovator',
      name: 'Industry Innovator',
      price: '$250',
      grantNote: 'Corporate pass',
      desc: 'For technology architects, startup founders, research directors, and venture scouts.',
      features: ['Full access + Startup Expo Lounge', 'Direct pitch access to Hackathon teams', 'VIP Speaker Dinner invite', 'Front-row Keynote reserved seating']
    },
    {
      id: 'Virtual Access',
      name: 'Virtual Global Pass',
      price: '$0',
      grantNote: 'Open access initiative',
      desc: 'Live high-definition streaming for delegates globally who cannot travel to San Francisco.',
      features: ['Live interactive 4K streams', 'Discord research chat access', 'Virtual Q&A participation', 'Digital certificate of attendance']
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.institution) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const pass: DelegatePass = {
      passId: `NX26-${randomNum}-${selectedTier.slice(0, 3).toUpperCase()}`,
      name: formData.name,
      email: formData.email,
      institution: formData.institution,
      tier: selectedTier,
      track: formData.track,
      registeredAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      qrValue: `https://nexora2026.org/verify/NX26-${randomNum}`
    };

    setGeneratedPass(pass);
    setStep('pass');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
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
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#FF8C42] mb-2 uppercase tracking-[0.3em]">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
          <span>NEXORA '26 // OFFICIAL DELEGATE REGISTRATION</span>
        </div>

        {/* Step 1: Select Tier */}
        {step === 'tier' && (
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Select Your Symposium Pass
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mb-6 font-serif italic">
              Choose the delegate category that matches your participation format.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {tiers.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedTier(t.id as any)}
                  className={`p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    selectedTier === t.id
                      ? 'border-[#FFB347] bg-white/5 shadow-[0_0_20px_rgba(255,179,71,0.2)]'
                      : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                  }`}
                  data-cursor="interactive"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-base text-white uppercase">
                        {t.name}
                      </span>
                      <span className="font-mono font-black text-xl text-[#FFD166]">
                        {t.price}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#FF8C42] block mb-2 uppercase tracking-widest">
                      {t.grantNote}
                    </span>
                    <p className="text-xs text-[#A7A7A7] font-serif italic mb-4">
                      {t.desc}
                    </p>
                  </div>

                  <ul className="space-y-1 pt-3 border-t border-white/10 text-[11px] text-neutral-300 font-mono">
                    {t.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#FFB347] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep('form')}
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,179,71,0.2)]"
                data-cursor="interactive"
              >
                <span>CONTINUE TO DETAILS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Form */}
        {step === 'form' && (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Delegate Information
              </h3>
              <button
                type="button"
                onClick={() => setStep('tier')}
                className="text-xs font-mono text-[#FF8C42] hover:underline uppercase tracking-wider"
              >
                Change Pass ({selectedTier})
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mb-6 font-serif italic">
              Enter the details to be encoded onto your cryptographic symposium credentials.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  Full Name (as printed on Badge) *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Jordan Mitchell"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  Institutional / Academic Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan.m@stanford.edu"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  University / Organization Affiliation *
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="Stanford University / DeepTech Research Lab"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  Primary Research Track of Interest
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-white/15 text-sm text-white focus:outline-none focus:border-[#FFB347]"
                >
                  {TRACKS.map((t) => (
                    <option key={t.id} value={t.title}>
                      Track {t.number}: {t.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep('tier')}
                className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-7 py-3 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,179,71,0.2)]"
                data-cursor="interactive"
              >
                <span>CONFIRM & GENERATE PASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Generated Digital Pass */}
        {step === 'pass' && generatedPass && (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
                <Check className="w-3.5 h-3.5" />
                <span>REGISTRATION CONFIRMED & ISSUED</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Your Official Digital Delegate Pass
              </h3>
              <p className="text-xs text-[#A7A7A7] mt-1 font-serif italic">
                Present this digital credential or print it for check-in at the Grand Horizon Tech Pavilion.
              </p>
            </div>

            {/* Holographic Badge Card */}
            <div className="p-6 bg-[#0B0B0B] border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] mb-6 relative overflow-hidden">
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-[#FFD166] font-mono font-bold">
                    NX
                  </div>
                  <div>
                    <div className="font-black text-lg text-white uppercase tracking-tight">NEXORA '26</div>
                    <div className="text-[10px] font-mono text-[#FFD166]">OCTOBER 12–14, 2026 // SAN FRANCISCO</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#FF8C42] block">
                    {generatedPass.passId}
                  </span>
                  <span className="text-[10px] font-mono text-[#A7A7A7] uppercase">
                    {generatedPass.tier}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="sm:col-span-2 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#A7A7A7] uppercase block tracking-wider">Delegate Name</span>
                    <span className="font-black text-xl text-white uppercase">{generatedPass.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7A7A7] uppercase block tracking-wider">Institution</span>
                    <span className="text-xs font-serif italic text-neutral-300">{generatedPass.institution}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7A7A7] uppercase block tracking-wider">Allocated Track</span>
                    <span className="text-xs text-[#FFD166] font-mono">{generatedPass.track}</span>
                  </div>
                </div>

                {/* QR Code Simulation */}
                <div className="flex flex-col items-center justify-center p-3 bg-black border border-white/10">
                  <div className="w-24 h-24 p-1.5 bg-white flex items-center justify-center">
                    {/* SVG Stylized QR Code */}
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
                  <span className="text-[9px] font-mono text-neutral-400 mt-1.5 tracking-widest uppercase">SCAN AT CHECK-IN</span>
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
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-all"
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
