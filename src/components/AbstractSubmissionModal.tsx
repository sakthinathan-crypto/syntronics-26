import React, { useState } from 'react';
import { X, Upload, FileText, CheckCircle2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { TRACKS } from '../data/symposiumData';
import { Track } from '../types';

interface AbstractSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack?: Track | null;
}

export const AbstractSubmissionModal: React.FC<AbstractSubmissionModalProps> = ({
  isOpen,
  onClose,
  selectedTrack,
}) => {
  const [trackId, setTrackId] = useState(selectedTrack ? selectedTrack.id : TRACKS[0].id);
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [email, setEmail] = useState('');
  const [abstractText, setAbstractText] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !authors || !email || !abstractText) return;

    const code = `SYN-CFP-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(code);
    setIsSubmitted(true);
  };

  const wordCount = abstractText.trim() ? abstractText.trim().split(/\s+/).length : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0B0B0B] border border-white/20 p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.95)] overflow-hidden my-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
          data-cursor="interactive"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF8C42] mb-2 uppercase tracking-[0.3em]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
              <span>CALL FOR PAPERS // EASYCHAIR SYNC PORTAL</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Submit Research Abstract
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mb-6 font-serif italic">
              Submit your manuscript or extended abstract (max 400 words) for double-blind peer review. Accepted submissions will be published in the indexed proceedings.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  Symposium Track *
                </label>
                <select
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141414] border border-white/15 text-sm text-white focus:outline-none focus:border-[#FFB347]"
                >
                  {TRACKS.map((t) => (
                    <option key={t.id} value={t.id}>
                      Track {t.number}: {t.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  Manuscript Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Thermodynamic Coherence in Neuromorphic Edge Enclaves"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                    Author(s) & Affiliation(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}
                    placeholder="e.g., E. Rostova (Zurich), J. Thorne (MIT)"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                    Corresponding Author Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="lead.author@lab.org"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5]">
                    Abstract (200 – 400 words) *
                  </label>
                  <span className={`text-[11px] font-mono ${wordCount > 400 ? 'text-[#FF4D4D]' : 'text-neutral-400'}`}>
                    {wordCount} / 400 words
                  </span>
                </div>
                <textarea
                  rows={4}
                  required
                  value={abstractText}
                  onChange={(e) => setAbstractText(e.target.value)}
                  placeholder="Outline the research problem, methodology, findings, and human-centered computational implications..."
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347] resize-none"
                />
              </div>

              {/* PDF Draft Upload Simulator */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1.5">
                  Draft Manuscript PDF (Optional at Abstract Stage)
                </label>
                <div className="relative border border-dashed border-white/20 hover:border-[#FFB347] p-4 text-center cursor-pointer bg-white/[0.02] transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload className="w-5 h-5 text-[#FF8C42]" />
                    <span className="text-xs text-neutral-300 font-medium">
                      {fileName ? fileName : "Click or drag IEEE double-column PDF file here"}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Max size 25MB • Blinded for review</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Notification: Sept 15, 2026
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-colors shadow-[0_0_20px_rgba(255,179,71,0.2)] flex items-center gap-2"
                  data-cursor="interactive"
                >
                  <span>SUBMIT MANUSCRIPT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Manuscript Received
            </h3>
            <p className="text-sm text-[#A7A7A7] max-w-md mx-auto mb-6 font-serif italic">
              Your submission has entered the double-blind review queue. A confirmation digest has been dispatched to <span className="text-[#FFD166]">{email}</span>.
            </p>

            <div className="p-5 bg-white/5 border border-white/10 max-w-md mx-auto text-left mb-6 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-400">Submission Code:</span>
                <span className="font-bold text-[#FF8C42]">{submissionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Paper Title:</span>
                <span className="text-white truncate max-w-[200px]">{title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Review Decision:</span>
                <span className="text-emerald-400">September 15, 2026</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#FFB347] transition-all"
            >
              CLOSE PORTAL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
