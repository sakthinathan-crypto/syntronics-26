import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  ArrowRight, 
  ArrowLeft,
  Check,
  AlertCircle,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { PAPER_PRESENTATION_50_TOPICS } from '../data/paperTopics';
import { download50TopicsDocument } from '../utils/downloadHelper';
import { Track } from '../types';

// Centralized CFP API endpoint constant
export const CFP_API_URL = "https://script.google.com/macros/s/AKfycbxceQnocgEFxAyuUtKk_Au_wWqtwRqzeVazarxxStLVl7DiMrLqhWUOkhKfsyfMCWPO9w/exec";

interface AbstractSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack?: Track | null;
}

const ALLOWED_EXTENSIONS = ['.pdf', '.ppt', '.pptx', '.doc', '.docx'];
const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB

export const AbstractSubmissionModal: React.FC<AbstractSubmissionModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Field States (Exactly 11 fields)
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [department, setDepartment] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // Topic Selector: 50 Topics OR "OTHER"
  const [selectedTopicId, setSelectedTopicId] = useState<string>('1');
  const [customTopic, setCustomTopic] = useState('');
  
  // Presentation / Research Title & Abstract Summary
  const [presentationTitle, setPresentationTitle] = useState('');
  const [abstractText, setAbstractText] = useState('');
  
  // File Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  // Request & Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingStep, setSubmittingStep] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [fileDriveUrl, setFileDriveUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        setErrorMessage(`Invalid file format (${ext}). Allowed formats: PPT, PPTX, PDF, DOCX.`);
        setSelectedFile(null);
        setFileName(null);
        return;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setErrorMessage(`File size (${(file.size / (1024 * 1024)).toFixed(1)} MB) exceeds the maximum allowed limit of 25 MB.`);
        setSelectedFile(null);
        setFileName(null);
        return;
      }

      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const convertFileToBase64 = (file: File): Promise<{ fileName: string; mimeType: string; base64: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const result = reader.result as string;
          const base64Index = result.indexOf(';base64,');
          let base64 = '';
          if (base64Index !== -1) {
            base64 = result.substring(base64Index + 8);
          } else {
            base64 = result;
          }

          let mime = file.type;
          if (!mime || mime === 'application/octet-stream') {
            const ext = file.name.split('.').pop()?.toLowerCase();
            if (ext === 'pdf') mime = 'application/pdf';
            else if (ext === 'ppt') mime = 'application/vnd.ms-powerpoint';
            else if (ext === 'pptx') mime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
            else if (ext === 'doc') mime = 'application/msword';
            else if (ext === 'docx') mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            else mime = 'application/octet-stream';
          }

          resolve({
            fileName: file.name,
            mimeType: mime,
            base64: base64
          });
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const isCustom = selectedTopicId === 'OTHER';
  const selectedTopicObj = PAPER_PRESENTATION_50_TOPICS.find(t => String(t.id) === selectedTopicId);
  const effectiveTopic = isCustom ? customTopic : selectedTopicObj?.title;
  const wordCount = abstractText.trim() ? abstractText.trim().split(/\s+/).length : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Validate required fields
    if (!teamName.trim()) {
      setErrorMessage('Please enter your Team Name.');
      return;
    }
    if (!leaderName.trim()) {
      setErrorMessage('Please enter the Team Leader Name.');
      return;
    }
    if (!collegeName.trim()) {
      setErrorMessage('Please enter your College Name.');
      return;
    }
    if (!uniqueId.trim()) {
      setErrorMessage('Please enter your Unique ID (Roll / Reg. No / Student ID).');
      return;
    }
    if (!department.trim()) {
      setErrorMessage('Please enter your Department.');
      return;
    }
    if (!emailId.trim()) {
      setErrorMessage('Please enter your Email ID.');
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMessage('Please enter your Phone Number.');
      return;
    }

    // 2. Validate Topic
    const finalTopic = (isCustom ? customTopic.trim() : selectedTopicObj?.title) || '';
    if (!finalTopic) {
      setErrorMessage(isCustom ? 'Please enter your custom topic.' : 'Please select a topic from the 50 official topics.');
      return;
    }

    // 3. Validate Abstract Summary (Max 500 words)
    if (!abstractText.trim()) {
      setErrorMessage('Please enter your Abstract Summary.');
      return;
    }
    if (wordCount > 500) {
      setErrorMessage(`Abstract summary is ${wordCount} words, which exceeds the maximum limit of 500 words.`);
      return;
    }

    // 4. Validate File Upload
    if (!selectedFile) {
      setErrorMessage('Please upload your presentation or draft paper (PPT, PPTX, PDF, or DOCX, max 25MB).');
      return;
    }

    const finalTitle = presentationTitle.trim() || finalTopic;

    setIsSubmitting(true);
    setSubmittingStep('Encoding document for transmission...');

    try {
      // 5. Convert file to transferable format
      const fileData = await convertFileToBase64(selectedFile);

      // 6. Request Payload matching exact specification
      const payload = {
        team_name: teamName.trim(),
        leader_name: leaderName.trim(),
        college_name: collegeName.trim(),
        unique_id: uniqueId.trim(),
        department: department.trim(),
        email_id: emailId.trim(),
        phone_number: phoneNumber.trim(),
        topic: finalTopic,
        presentation_research_paper_title: finalTitle,
        abstract_summary: abstractText.trim(),
        file: {
          fileName: fileData.fileName,
          mimeType: fileData.mimeType,
          base64: fileData.base64
        }
      };

      setSubmittingStep('Transmitting CFP proposal to Google Apps Script...');

      const response = await fetch(CFP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let result: { success?: boolean; message?: string; fileUrl?: string } = {};
      try {
        result = JSON.parse(responseText);
      } catch {
        if (responseText.toLowerCase().includes('success')) {
          result = { success: true, message: 'Submission received successfully' };
        } else {
          throw new Error(responseText || 'Unable to parse response from CFP endpoint.');
        }
      }

      if (result.success === true) {
        const code = `SX26-CFP-${Math.floor(1000 + Math.random() * 9000)}`;
        setSubmissionId(code);
        setFileDriveUrl(result.fileUrl || null);
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || 'Submission could not be completed. Please try again.');
      }
    } catch (err: any) {
      console.error('CFP submission error:', err);
      setErrorMessage(err.message || 'Network or transmission error occurred. Please check your connection and retry.');
    } finally {
      setIsSubmitting(false);
      setSubmittingStep('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-[#0B0B0B] border border-white/15 p-6 sm:p-9 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] my-6 sm:my-10 md:my-14 transition-all">
        
        {/* Top Navigation Bar with ONLY BACK Button */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-[#FF8C42]/50 hover:shadow-[0_0_15px_rgba(255,140,66,0.2)] transition-all duration-300 group rounded-sm"
            data-cursor="interactive"
            aria-label="Return to previous screen"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF8C42] group-hover:-translate-x-0.5 transition-all duration-300" />
            <span className="font-semibold">BACK</span>
          </button>

          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            SYNTRONIX '26 // CFP DESK
          </span>
        </div>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 sm:mb-7">
              <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 mb-2 uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                <span>SYNTRONIX '26 // CALL FOR PAPERS &amp; ABSTRACT DESK</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight">
                Submit Research Paper / Abstract
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-serif italic">
                Official submission portal for Paper Presentation (Day 2 Offline) and Online Article Presentation (Day 1 Online).
              </p>
            </div>

            {/* Download Action Bar - ONLY 1 BUTTON: DOWNLOAD 50 SUGGESTED TOPICS */}
            <div className="mb-7 sm:mb-8 p-4 bg-white/[0.02] border border-white/10">
              <button
                type="button"
                onClick={download50TopicsDocument}
                className="w-full sm:w-auto px-4 py-2.5 bg-white/[0.04] border border-white/20 hover:border-[#FF8C42]/70 hover:bg-[#FF8C42]/10 text-neutral-300 hover:text-[#FFD166] text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center sm:justify-start gap-2.5 group hover:shadow-[0_0_20px_rgba(255,140,66,0.2)] rounded-sm"
                title="Download the official 50 suggested paper presentation topics document"
                data-cursor="interactive"
              >
                <Download className="w-4 h-4 text-neutral-400 group-hover:text-[#FF8C42] group-hover:scale-110 transition-all duration-300" />
                <span>DOWNLOAD 50 SUGGESTED TOPICS</span>
              </button>
            </div>

            {/* Submission Form with comfortable spacing */}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Row 1: Team Name & Leader Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    TEAM NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g. Neural Vanguard"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    LEADER NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>
              </div>

              {/* Row 2: College Name & Unique ID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    COLLEGE NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. EGS Pillay Engineering College"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    UNIQUE ID (Roll / Reg. No / Student ID) *
                  </label>
                  <input
                    type="text"
                    required
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                    placeholder="e.g. 810022104045"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>
              </div>

              {/* Row 3: Department, Email ID, Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    DEPARTMENT *
                  </label>
                  <input
                    type="text"
                    required
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="e.g. Computer Science &amp; Engg"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    EMAIL ID *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    placeholder="leader@college.edu"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. +91 90000 11111"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                  />
                </div>
              </div>

              {/* Row 4: Topic Selection (50 Suggested Topics OR Other) */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                    SELECT TOPIC (50 OFFICIAL TOPICS OR OTHER) *
                  </label>
                  <span className="text-[11px] font-mono text-neutral-400">
                    50 Official Topics available
                  </span>
                </div>

                <select
                  value={selectedTopicId}
                  onChange={(e) => setSelectedTopicId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 text-sm text-white hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 font-mono rounded-sm"
                >
                  <optgroup label="Official 50 Suggested Topics" className="bg-[#141414] text-white">
                    {PAPER_PRESENTATION_50_TOPICS.map((topic) => (
                      <option key={topic.id} value={String(topic.id)}>
                        Topic {String(topic.id).padStart(2, '0')}: {topic.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Custom Option" className="bg-[#141414] text-white">
                    <option value="OTHER">
                      ★ OTHER / PROPOSE YOUR OWN CUSTOM TOPIC
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Custom Topic Input if "OTHER" selected */}
              {isCustom && (
                <div className="p-3.5 bg-white/[0.02] border border-white/20 hover:border-[#FFD166]/50 focus-within:border-[#FFB347] transition-all duration-300 animate-in fade-in">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    ENTER YOUR CUSTOM TOPIC / TITLE *
                  </label>
                  <input
                    type="text"
                    required={isCustom}
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    placeholder="e.g. Energy-Efficient Swarm Robotics for Disaster Reconnaissance"
                    className="w-full px-3.5 py-2 bg-black/60 border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 transition-all duration-300 rounded-sm"
                  />
                </div>
              )}

              {/* Presentation / Research Title */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  PRESENTATION / RESEARCH PAPER TITLE
                </label>
                <input
                  type="text"
                  value={presentationTitle}
                  onChange={(e) => setPresentationTitle(e.target.value)}
                  placeholder="Enter full presentation or research paper title (defaults to chosen topic)"
                  className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 rounded-sm"
                />
              </div>

              {/* Abstract Text Area */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                    ABSTRACT SUMMARY (MAX 500 WORDS)
                  </label>
                  <span className={`text-[11px] font-mono ${wordCount > 500 ? 'text-[#FF4D4D]' : 'text-neutral-400'}`}>
                    {wordCount} / 500 words
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={abstractText}
                  onChange={(e) => setAbstractText(e.target.value)}
                  placeholder="Briefly state your objective, proposed technique, results, and relevance to Humanizing Technology..."
                  className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-white placeholder-neutral-500 hover:border-white/35 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FF8C42]/40 focus:shadow-[0_0_15px_rgba(255,140,66,0.15)] transition-all duration-300 resize-none rounded-sm"
                />
              </div>

              {/* FILE UPLOAD with Monochrome -> Color Hover */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  FILE UPLOAD (PPT / PPTX / PDF / DOCX)
                </label>
                <div className="relative border border-dashed border-white/20 hover:border-[#FF8C42]/60 p-4 sm:p-5 text-center cursor-pointer bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group rounded-sm hover:shadow-[0_0_20px_rgba(255,140,66,0.15)]">
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <Upload className="w-5 h-5 text-neutral-400 group-hover:text-[#FF8C42] group-hover:scale-110 transition-all duration-300" />
                    <span className="text-xs text-neutral-300 group-hover:text-white font-medium transition-colors">
                      {fileName ? fileName : "Click or drag draft file here (PDF or PPT, max 25MB)"}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      Presentation time: 7 minutes + 3 minutes Q&amp;A
                    </span>
                  </div>
                </div>
              </div>

              {/* Submission Error Banner */}
              {errorMessage && (
                <div className="p-3.5 bg-red-950/40 border border-red-500/50 text-red-200 text-xs font-mono flex items-start gap-2.5 rounded-sm animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-red-300">Submission Error: </span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Submit Actions with comfortable padding below */}
              <div className="pt-5 sm:pt-6 pb-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-neutral-400">
                  Continuous Rolling Review // Certificates &amp; Cash Prizes on Event Day
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-neutral-200 hover:text-white bg-white/10 hover:bg-[#FF8C42] border border-white/20 hover:border-transparent transition-all duration-300 shadow-none hover:shadow-[0_0_25px_rgba(255,140,66,0.4)] flex items-center justify-center gap-2 group rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  data-cursor="interactive"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span>{submittingStep || 'TRANSMITTING CFP...'}</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT CFP</span>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/20 text-[#FF8C42] mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tight">
              CFP Submission Received
            </h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6 font-serif italic">
              Your abstract and research paper have been submitted successfully to the SYNTRONIX '26 review queue. A confirmation has been logged for <span className="text-white font-semibold">{emailId}</span>.
            </p>

            <div className="p-5 bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left mb-8 space-y-2.5 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-400">Submission Code:</span>
                <span className="font-bold text-[#FF8C42]">{submissionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Team Name:</span>
                <span className="text-white truncate max-w-[200px]">{teamName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Leader:</span>
                <span className="text-white truncate max-w-[200px]">{leaderName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">College:</span>
                <span className="text-neutral-200 truncate max-w-[200px]">{collegeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Chosen Topic:</span>
                <span className="text-white truncate max-w-[200px]">{effectiveTopic}</span>
              </div>
              {fileDriveUrl && (
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-neutral-400">Google Drive:</span>
                  <a
                    href={fileDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD166] hover:text-white underline truncate max-w-[200px] flex items-center gap-1"
                  >
                    <span>View Uploaded Paper</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-neutral-400">Organizing Dept:</span>
                <span className="text-neutral-200">Dept of CSE, EGSPEC</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-[#FF8C42] border border-white/20 hover:border-transparent transition-all duration-300 rounded-sm"
              data-cursor="interactive"
            >
              DONE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
