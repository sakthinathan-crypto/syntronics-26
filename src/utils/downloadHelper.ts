import { PAPER_PRESENTATION_50_TOPICS } from '../data/paperTopics';
import { ASSETS_CONFIG } from '../data/assetsConfig';

/**
 * Generates and triggers download of the official 50 Paper Presentation topics document
 */
export async function download50TopicsDocument() {
  const pdfPath = ASSETS_CONFIG.documents.paperTopics50.path;
  try {
    const res = await fetch(pdfPath, { method: 'HEAD' });
    if (res.ok && res.status !== 404) {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = ASSETS_CONFIG.documents.paperTopics50.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch {
    // fallback to generated text document
  }

  const content = `================================================================================
SYNTRONIX '26 — INTERNATIONAL TECHNICAL SYMPOSIUM
DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
EGS PILLAY ENGINEERING COLLEGE (AUTONOMOUS), NAGAPATTINAM
Official Theme: HUMANIZING TECHNOLOGY
Tagline: MAKE IT. SHOW IT. ACHIEVE IT.
Dates: 10 & 14 October 2026 | Format: Hybrid
================================================================================

OFFICIAL PAPER PRESENTATION — 50 SUGGESTED RESEARCH TOPICS
Presentation Timing: 7 Minutes Presentation + 3 Minutes Q&A
Team Size: Individual or Team (Up to 3 members)
First Prize: ₹5,000 | Second Prize: ₹3,000 | Third Prize: ₹1,000 | Total Pool: ₹9,000

--------------------------------------------------------------------------------
50 OFFICIAL SUGGESTED TOPICS:
--------------------------------------------------------------------------------
${PAPER_PRESENTATION_50_TOPICS.map(
  (t) => `[Topic ${String(t.id).padStart(2, '0')}] ${t.title}\n  Category: ${t.category}\n`
).join('\n')}
--------------------------------------------------------------------------------
CUSTOM TOPIC PROPOSALS:
Authors are also free to propose custom research topics aligned with
"Humanizing Technology" and CSE domains.

Contact & Enquiries: syntronix@egspec.org
Website: https://egspec.org/
================================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'SYNTRONIX-26-Paper-Presentation-50-Topics.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Downloads the Official Problem Statement & Submission Guidelines
 */
export async function downloadProblemStatement() {
  const pdfPath = ASSETS_CONFIG.documents.problemStatement.path;
  try {
    const res = await fetch(pdfPath, { method: 'HEAD' });
    if (res.ok && res.status !== 404) {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = ASSETS_CONFIG.documents.problemStatement.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch {
    // fallback to generated text document
  }

  const content = `================================================================================
SYNTRONIX '26 — INTERNATIONAL TECHNICAL SYMPOSIUM
DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
EGS PILLAY ENGINEERING COLLEGE (AUTONOMOUS)
Official Theme: HUMANIZING TECHNOLOGY
Tagline: MAKE IT. SHOW IT. ACHIEVE IT.
Dates: 10 & 14 October 2026 | Format: Hybrid
================================================================================

OFFICIAL CFP PROBLEM STATEMENT & GUIDELINES

1. SCOPE & MOTIVATION
"Humanizing Technology" explores computing for a sustainable, inclusive, and ethical future.
Participants are invited to present breakthroughs in:
- AI, Machine Learning & Cognitive Systems
- Cybersecurity, Privacy & Cryptography
- Emerging Architectures (Quantum, IoT, Digital Twins)
- Software Engineering, Cloud Systems & DevSecOps
- Data Science, Analytics, Computer Vision & NLP

2. CONTEST CATEGORIES & PRIZES
Event 01: Online Article Presentation (Day 2 - 14 Oct via Unstop - FREE)
Event 02: Paper Presentation (Day 1 - 10 Oct Offline - ₹100 Pass covers all eligible events)
Event 03: Prompt Fest (Day 1 - 10 Oct Offline - Up to 2 members)
Event 04: Vibe Vista (Day 1 - 10 Oct Offline - Team of 2)
Event 05: Frenzy 2K26 (Day 1 - 10 Oct Offline - Team of 2)
Event 06: Memory Hunt (Day 1 - 10 Oct Offline - 1 or 2 members)
Event 07: The Imposter Game (Day 1 - 10 Oct Offline - Individual)

Prize Pool & Certificate Structure:
- Technical Events (Paper Presentation & Prompt Fest):
  • First Prize: ₹5,000 | Second Prize: ₹3,000 | Third Prize: ₹1,000
  • Hardcopy Certificates and cash prizes awarded on event day.
- Non-Technical Events:
  • Prize Pool Available
  • Participation E-Certificate Only
  • No Cash Prizes • No Hardcopy Certificates

3. CFP SUBMISSION FIELDS REQUIRED:
- Team Name
- Leader Name
- Unique ID
- Department
- College Name
- Email ID
- Phone Number
- Chosen Topic (From 50 Topics OR Custom Proposal)
- Draft Abstract / PPT / Document upload

Official Registration Links:
- Offline (Google Form): https://forms.gle/g2jZyi3sNytPFmcU7
- Online (Unstop): https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences
- Instagram: https://www.instagram.com/syntronix_26?utm_source=qr&stkn=YjVjMmJ3bnlid3Ns

Inquiries: syntronix@egspec.org
================================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'SYNTRONIX-26-Official-Problem-Statement.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
