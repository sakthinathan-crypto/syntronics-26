import React, { useState } from 'react';
import { X, Upload, FileText, CheckCircle2, Sparkles, Compass, Lightbulb, ArrowRight } from 'lucide-react';
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
  const [isCustomTopic, setIsCustomTopic] = useState(selectedTrack?.id === 'track-open-proposal');
  const [customTopicTitle, setCustomTopicTitle] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [abstractText, setAbstractText] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  if (!isOpen) return null;

  const handleTrackChange = (newTrackId: string) => {
    setTrackId(newTrackId);
    if (newTrackId === 'track-open-proposal') {
      setIsCustomTopic(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !authors || !email || !abstractText) return;

    const code = `SX26-CFP-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(code);
    setIsSubmitted(true);
  };

  const wordCount = abstractText.trim() ? abstractText.trim().split(/\s+/).length : 0;

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

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#FF8C42] mb-2 uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8C42]" />
              <span>SYNTRONIX '26 // RESEARCH ABSTRACT & PROPOSAL DESK</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Submit Research Abstract
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mb-5 font-serif italic">
              Submit your abstract for double-blind technical evaluation by the CSE editorial board.
            </p>

            {/* Topic Freedom Notice */}
            <div className="p-3 bg-[#FF8C42]/10 border border-[#FF8C42]/30 text-xs font-mono text-neutral-200 mb-5 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-[#FFD166] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Author Topic Flexibility:</strong> You may select from suggested topics across our tracks, or check "Propose Custom Topic" to submit your own original idea aligned with <span className="text-[#FFD166]">Humanizing Technology</span>.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                    Select Research Track *
                  </label>
                  <select
                    value={trackId}
                    onChange={(e) => handleTrackChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#141414] border border-white/15 text-sm text-white focus:outline-none focus:border-[#FFB347]"
                  >
                    {TRACKS.map((t) => (
                      <option key={t.id} value={t.id}>
                        Track {t.number}: {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end pb-1.5">
                  <label className="flex items-center gap-2 text-xs font-mono text-neutral-300 cursor-pointer p-2.5 bg-white/5 border border-white/10 w-full hover:border-[#FFB347]/50">
                    <input
                      type="checkbox"
                      checked={isCustomTopic}
                      onChange={(e) => setIsCustomTopic(e.target.checked)}
                      className="accent-[#FFB347] w-4 h-4"
                    />
                    <span>Propose My Own Custom Topic</span>
                  </label>
                </div>
              </div>

              {isCustomTopic && (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#FFD166] mb-1">
                    Proposed Custom Topic / Subject Area *
                  </label>
                  <input
                    type="text"
                    required={isCustomTopic}
                    value={customTopicTitle}
                    onChange={(e) => setCustomTopicTitle(e.target.value)}
                    placeholder="e.g. Decentralized Energy Micro-Grids via Edge Computing"
                    className="w-full px-4 py-2 bg-white/5 border border-[#FFD166]/40 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                  Presentation / Paper Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter full title of your research or presentation"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                    Author(s) & College/Affiliation *
                  </label>
                  <input
                    type="text"
                    required
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}
                    placeholder="e.g., A. Kumar, S. Priya (EGSPEC)"
                    className="w-full px-4 py-2 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                    Corresponding Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="author@college.edu"
                    className="w-full px-4 py-2 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5]">
                    Abstract (Max 500 words) *
                  </label>
                  <span className={`text-[11px] font-mono ${wordCount > 500 ? 'text-[#FF4D4D]' : 'text-neutral-400'}`}>
                    {wordCount} / 500 words
                  </span>
                </div>
                <textarea
                  rows={4}
                  required
                  value={abstractText}
                  onChange={(e) => setAbstractText(e.target.value)}
                  placeholder="Outline the domain problem, methodology, practical application, and alignment with Humanizing Technology..."
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB347] resize-none"
                />
              </div>

              {/* PDF Draft Upload */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#F5F5F5] mb-1">
                  Draft PPT / PDF Document (Optional at abstract stage)
                </label>
                <div className="relative border border-dashed border-white/20 hover:border-[#FFB347] p-3 text-center cursor-pointer bg-white/[0.02] transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Upload className="w-4 h-4 text-[#FF8C42]" />
                    <span className="text-xs text-neutral-300 font-medium">
                      {fileName ? fileName : "Click or drop file (PDF or PPT, max 25MB)"}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">For Online Article Presentation, final PPT upload deadline is 13 Oct 2026 via Unstop</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD166]">
                  Notification: Continuous Rolling Review
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-colors shadow-[0_0_20px_rgba(255,140,66,0.3)] flex items-center gap-2"
                  data-cursor="interactive"
                >
                  <span>SUBMIT ABSTRACT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF8C42]/15 border border-[#FF8C42]/30 text-[#FF8C42] mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              Abstract Received
            </h3>
            <p className="text-sm text-[#A7A7A7] max-w-md mx-auto mb-5 font-serif italic">
              Your submission has entered the CSE symposium peer-review queue. A confirmation has been registered for <span className="text-[#FFD166]">{email}</span>.
            </p>

            <div className="p-4 bg-white/5 border border-white/10 max-w-md mx-auto text-left mb-6 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-400">Submission Code:</span>
                <span className="font-bold text-[#FF8C42]">{submissionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Paper Title:</span>
                <span className="text-white truncate max-w-[200px]">{title}</span>
              </div>
              {isCustomTopic && customTopicTitle && (
                <div className="flex justify-between">
                  <span className="text-neutral-400">Proposed Topic:</span>
                  <span className="text-[#FFD166] truncate max-w-[200px]">{customTopicTitle}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-neutral-400">Review Board:</span>
                <span className="text-[#FF8C42]">Dept of CSE, EGSPEC</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#FF8C42] hover:bg-[#FF7722] transition-all"
            >
              DONE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
