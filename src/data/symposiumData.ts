import { Track, SymposiumEvent, Speaker, TimelineMilestone, ImportantDateItem, Sponsor, Coordinator } from '../types';

export const INSTITUTION_INFO = {
  collegeName: "EGS PILLAY ENGINEERING COLLEGE",
  collegeTagline: "An Autonomous Institution | Approved by AICTE, Affiliated to Anna University",
  accreditation: "Accredited by NBA & NAAC 'A++' Grade",
  departmentName: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
  departmentTagline: "Innovating for Human Progress & Technological Excellence",
  campusLocation: "Nagapattinam – 611 002, Tamil Nadu, India",
  campusMapQuery: "E.G.S. Pillay Engineering College, Nagapattinam",
  contactEmail: "syntronix@egspec.org",
  contactPhone: "+91 (0) 4365 251112 / Dept of CSE",
  websiteUrl: "https://egspec.org/",
  mapsUrl: "https://maps.app.goo.gl/ZYQb9saFAJeq94rY7",
  instagramUrl: "https://www.instagram.com/syntronix_26?utm_source=qr&stkn=YjVjMmJ3bnlid3Ns"
};

export const SYMPOSIUM_META = {
  name: "SYNTRONIX '26",
  shortName: "SYNTRONIX '26",
  edition: "2026",
  theme: "HUMANIZING TECHNOLOGY",
  themeSubtitle: "Computing for a Sustainable, Inclusive and Ethical Future",
  tagline: "MAKE IT. SHOW IT. ACHIEVE IT.",
  dates: "10 & 14 October 2026",
  mode: "HYBRID",
  isoStartDate: "2026-10-10T09:00:00+05:30",
  links: {
    onlineRegistration: "https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences",
    offlineRegistration: "https://forms.gle/g2jZyi3sNytPFmcU7",
    instagram: "https://www.instagram.com/syntronix_26?utm_source=qr&stkn=YjVjMmJ3bnlid3Ns",
    collegeWebsite: "https://egspec.org/",
    mapsLocation: "https://maps.app.goo.gl/ZYQb9saFAJeq94rY7"
  },
  onlineDetails: {
    dayLabel: "DAY 02",
    date: "14 October 2026",
    mode: "ONLINE",
    platform: "Online Article Presentation via Unstop Platform",
    fee: "FREE",
    unstopEventUrl: "https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences"
  },
  offlineDetails: {
    dayLabel: "DAY 01",
    date: "10 October 2026",
    mode: "OFFLINE / IN PERSON",
    venue: "E.G.S. Pillay Engineering College, Nagapattinam",
    fee: "₹100 / PERSON",
    foodIncluded: "Includes food provided as part of registration",
    includedEvents: "Allows participants to participate in all eligible events",
    additionalEventNote: "Individual participation is allowed wherever applicable according to event rules",
    registrationDeadline: "09 October 2026",
    onSpotRegistration: "ON-SPOT REGISTRATION AVAILABLE at the Venue",
    googleFormUrl: "https://forms.gle/g2jZyi3sNytPFmcU7"
  },
  eligibility: "Open to students, scholars, researchers & innovators worldwide",
  teamRules: "Individual participation or teams (Up to 3 members; Prompt Fest up to 2 members; Vibe Vista team of 2; Frenzy 2K26 team of 2; Memory Hunt 1-2 members; Imposter individual)",
  stats: [
    { value: 500, suffix: "+", label: "EXPECTED PARTICIPANTS", detail: "Enthusiastic delegates from across regions" },
    { value: 50, suffix: "+", label: "PARTICIPATING COLLEGES", detail: "Academic institutions & universities" },
    { value: 6, suffix: "", label: "OFFLINE EVENTS", detail: "2 Technical + 4 Non-Technical events" },
    { value: 9000, suffix: " ₹", label: "PRIZE POOL / CONTEST", detail: "₹5,000 (1st) • ₹3,000 (2nd) • ₹1,000 (3rd)" },
    { value: 50, suffix: "", label: "OFFICIAL TOPICS", detail: "50 Suggested Topics or propose custom idea" },
    { value: 100, suffix: " ₹", label: "OFFLINE ALL-EVENT PASS", detail: "₹100/person • Food included • All eligible events" }
  ]
};

export const REGISTRATION_CONFIG = {
  onlineUnstopUrl: "https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences",
  offlineGoogleFormUrl: "https://forms.gle/g2jZyi3sNytPFmcU7",
  instagramUrl: "https://www.instagram.com/syntronix_26?utm_source=qr&stkn=YjVjMmJ3bnlid3Ns",
  collegeWebsite: "https://egspec.org/",
  mapsLocation: "https://maps.app.goo.gl/ZYQb9saFAJeq94rY7",
  status: "REGISTRATION OPEN NOW",
  regularDeadline: "09 October 2026",
  onSpotRegistration: "ON-SPOT REGISTRATION AVAILABLE",
  onSpotNotice: "On-Spot Registration Available at the Venue",
  offlineFeeInRupees: 100,
  offlineFeeDisplay: "₹100 / PERSON",
  onlineFeeDisplay: "FREE",
  offlineAccessNote: "₹100 registration allows participants to participate in all eligible events. Food included.",
  foodProvided: true
};

export const PRIZE_STRUCTURE = {
  firstPrize: "₹5,000",
  secondPrize: "₹3,000",
  thirdPrize: "₹1,000",
  totalPerContest: "₹9,000",
  certificateNote: "Paper Presentation and Prompt Fest winners receive hardcopy certificates and cash prizes on event day. Non-Technical events offer Prize Pool Available with Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)."
};

/* Official Events: 1 Online + 2 Offline Technical + 4 Offline Non-Technical */
export const EVENTS: SymposiumEvent[] = [
  {
    id: "online-article-presentation",
    number: "EVENT 01",
    title: "ONLINE ARTICLE PRESENTATION",
    category: "Online Technical",
    day: "Day 2 — 14 Oct (Online)",
    date: "14 October 2026",
    time: "Schedule announced on Unstop",
    venue: "Hosted through Unstop Platform",
    mode: "ONLINE",
    platform: "Unstop",
    prizePool: "Cash Prizes & Digital Merit Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "FREE Registration",
    rounds: "Online Submissions & Live Presentation",
    duration: "10 minutes presentation + Q&A",
    description: "The premier global online event of SYNTRONIX '26 conducted through the Unstop platform. Present pioneering research articles and technological breakthroughs centered on 'Humanizing Technology' from anywhere in the world.",
    highlights: [
      "Conducted entirely online via Unstop",
      "PPT Submission Deadline: 28 September 2026 on Unstop",
      "Cash prizes for top presentation teams",
      "Interactive evaluation by academic & industry juries",
      "Digital participation certificates issued to all verified attendees"
    ],
    isPlaceholder: false
  },
  {
    id: "offline-paper-presentation",
    number: "EVENT 02",
    title: "PAPER PRESENTATION",
    category: "Paper Presentation",
    day: "Day 1 — 10 Oct (Offline)",
    date: "10 October 2026",
    time: "10:00 AM – 01:00 PM IST",
    venue: "CSE Seminar Complex, EGSPEC Campus",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    rounds: "1 Presentation Round + Viva",
    duration: "7 mins presentation + 3 mins Q&A",
    description: "In-person research symposium presentation. Defend your findings on human-centered computing, AI ethics, sustainable architectures, or your self-proposed theme topic before senior faculty and expert evaluators.",
    highlights: [
      "Presentation duration: 7 minutes + 3 minutes Q&A / viva",
      "50 official suggested topics available or propose your own custom topic",
      "Winners & Runners receive cash prizes + hardcopy certificates on event day",
      "Offline registration ₹100 includes delicious food banquet with access to all eligible events"
    ],
    isPlaceholder: false
  },
  {
    id: "offline-prompt-fest",
    number: "EVENT 03",
    title: "PROMPT FEST",
    category: "Prompt Fest",
    day: "Day 1 — 10 Oct (Offline)",
    date: "10 October 2026",
    time: "11:30 AM – 01:30 PM IST",
    venue: "CSE Computing Lab & AI Center, EGSPEC Campus",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 2)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    rounds: "2 Rounds",
    duration: "45–60 minutes",
    description: "A high-intensity AI prompt crafting & engineering competition testing participants' skill in designing prompt architectures, context conditioning, and zero-shot/few-shot problem solving across generative models.",
    highlights: [
      "Round 1: Rapid Prompt Optimization & Benchmark Precision",
      "Round 2: Complex Task Decomposition & Creative Reasoning Challenge",
      "Live evaluation on prompt effectiveness, token efficiency, and output quality",
      "Winners receive cash awards and hardcopy certificates on event day",
      "Covered by ₹100 offline pass (Food Included)"
    ],
    isPlaceholder: false
  },
  {
    id: "offline-vibe-vista",
    number: "EVENT 04",
    title: "VIBE VISTA",
    category: "Non-Technical",
    day: "Day 1 — 10 Oct (Offline)",
    date: "10 October 2026",
    time: "01:30 PM – 02:45 PM IST",
    venue: "Auditorium Hall, EGSPEC Campus",
    mode: "OFFLINE",
    prizePool: "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)",
    teamSize: "Team of 2 (Person 1 – Round 1, Person 2 – Round 2)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    rounds: "2 Rounds",
    duration: "Round 1 – 10 seconds | Round 2 – 1 minute",
    description: "VIBE VISTA is a fun-filled non-technical event that tests participants’ reflexes, hand-eye coordination, observation and quick-thinking skills across two exciting levels. Participants compete against the clock, moving from a hand-reflex challenge in Level 1 to a number-identification challenge in Level 2.",
    highlights: [
      "ROUND 1: Level 1 – Hand & Circle Reflex Game (Closed fist on circle papers, open palm on hand outlines within time limit)",
      "ROUND 2: Level 2 – Number Cup Game (5 numbered cups 1–5; identify and lift called cup quickly with 3 chances)",
      "Duration: Round 1 – 10 seconds | Round 2 – 1 minute",
      "Team Size: 2 (Person 1 – Round 1, Person 2 – Round 2)",
      "Winning Criteria: Shortest total time with highest speed and accuracy across both levels wins",
      "Requirements: All materials provided by organizers • Report 10 mins before slot",
      "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)"
    ],
    winningCriteria: "Participants are judged based on speed and accuracy across both levels. The team completing both levels correctly in the shortest total time wins.",
    requirements: "All materials will be provided by the organizers.",
    importantNote: "Participants should report 10 minutes before their slot.",
    isPlaceholder: false
  },
  {
    id: "offline-frenzy-2k26",
    number: "EVENT 05",
    title: "FRENZY 2K26",
    category: "Non-Technical",
    day: "Day 1 — 10 Oct (Offline)",
    date: "10 October 2026",
    time: "02:30 PM – 03:45 PM IST",
    venue: "EGSPEC Campus Arena",
    mode: "OFFLINE",
    prizePool: "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)",
    teamSize: "Team (2 participants per session)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    rounds: "3 Rounds",
    duration: "2–5 minutes per game",
    description: "A fun-filled three-round challenge that tests participants’ skill, logic, creativity and quick thinking.",
    highlights: [
      "ROUND 1: Flip & Freeze (Flip bottle and make it land upright; must remain standing for 5 seconds)",
      "ROUND 2: Puzzle Solving (Solve puzzles and brain teasers within given time using provided materials)",
      "ROUND 3: Wire Wizard (Navigate a loop through wire course without touching wire within given time)",
      "Scoring: 10 pts (Bottle challenge) • 10 pts (Puzzle) • 10 pts (Wire course) • +2 pts (Fastest completion)",
      "Winning Criteria: Participants are ranked based on their total score across all three rounds",
      "Requirements: Bottle, puzzle materials and wire-loop setup provided by organizers (No special materials needed)",
      "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)"
    ],
    winningCriteria: "• 10 points – Bottle challenge completed successfully\n• 10 points – Puzzle solved correctly\n• 10 points – Wire course completed successfully\n• +2 points – Fastest completion in a round\nRanked based on total score across all three rounds.",
    requirements: "Bottle, puzzle materials and wire-loop setup will be provided by the organizers. No special materials are required.",
    isPlaceholder: false
  },
  {
    id: "offline-memory-hunt",
    number: "EVENT 06",
    title: "MEMORY HUNT",
    category: "Non-Technical",
    day: "Day 1 — 10 Oct (Offline)",
    date: "10 October 2026",
    time: "03:30 PM – 04:45 PM IST",
    venue: "EGSPEC Drawing Hall / Seminar Complex",
    mode: "OFFLINE",
    prizePool: "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)",
    teamSize: "Team (1 or 2 members • 10–20 participants per session)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    rounds: "2 Rounds",
    duration: "15–20 minutes",
    description: "Participants will play a fun memory-based game by observing, remembering and finding hidden clues. They will solve simple puzzles and complete tasks within a given time.",
    highlights: [
      "ROUND 1: Image Memory (View projected images for 30s; recall and answer questions when hidden)",
      "ROUND 2: Memory Chain (Observe sequence of 8–12 items/numbers/words; re-arrange mixed list in correct order)",
      "Winning Criteria: The team with the highest score and correct answers will be the winner",
      "Requirements: Pen and paper provided by organizers",
      "Important: Participants must follow instructions. Mobile phones and electronic devices are strictly not allowed",
      "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)"
    ],
    winningCriteria: "The team with the highest score and correct answers will be the winner.",
    requirements: "Pen and paper will be provided by the organizers.",
    importantNote: "Participants must follow all instructions. Mobile phones and other electronic devices are not allowed during the game.",
    isPlaceholder: false
  },
  {
    id: "offline-the-imposter-game",
    number: "EVENT 07",
    title: "THE IMPOSTER GAME",
    category: "Non-Technical",
    day: "Day 1 — 10 Oct (Offline)",
    date: "10 October 2026",
    time: "04:30 PM – 05:45 PM IST",
    venue: "Main Open-Air Amphitheatre / Seminar Hall",
    mode: "OFFLINE",
    prizePool: "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)",
    teamSize: "Individual (3–5 participants per session)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    rounds: "3 Rounds + Grand Finale",
    duration: "5–8 minutes per game",
    description: "The Imposter Game is a fun and engaging non-technical game that tests observation, communication, logical thinking, confidence and bluffing skills. All players except one receive the same secret word. One player is secretly selected as the Imposter and does not know the word. Players give clues and ask questions to identify the Imposter without directly revealing the secret word. After the discussion, players vote for the person they believe is the Imposter. If the Imposter is identified, they get one final chance to guess the secret word.",
    highlights: [
      "ROUND 1: Clue Round (Each player gives one short clue related to the secret word)",
      "ROUND 2: Question & Voting Round (Players ask questions, discuss clues and secretly vote for the Imposter)",
      "ROUND 3: Imposter Final Guess (If caught, Imposter gets one final chance to guess secret word)",
      "GRAND FINALE: Top 5 participants qualify for the Grand Finale",
      "Scoring: 10 pts (Imposter fools everyone) • 10 pts (Players catch Imposter) • 5 pts (Caught Imposter guesses word) • +2 pts (Best clue/bluff)",
      "Requirements: Secret-word cards provided • No mobile phones or outside assistance allowed",
      "Prize Pool Available • Participation E-Certificate Only (No Cash Prizes • No Hardcopy Certificates)"
    ],
    winningCriteria: "• 10 points – Imposter successfully fools everyone\n• 10 points – Players correctly identify the Imposter\n• 5 points – Imposter is caught but correctly guesses the secret word\n• +2 points – Best clue/bluff",
    requirements: "Secret-word cards will be provided by the coordinators. No mobile phones or outside assistance are allowed.",
    isPlaceholder: false
  }
];

/* Core Research Tracks aligned with Humanizing Technology */
export const TRACKS: Track[] = [
  {
    id: "track-ai-ethics",
    number: "TRACK 01",
    title: "AI, Cognitive Systems & Human Empathy",
    subtitle: "Human-centric intelligent systems & ethical agents",
    description: "Transitioning from opaque algorithms to transparent, collaborative intelligence that amplifies human potential, ethical decision-making, and societal welfare.",
    suggestedTopics: [
      "Explainable & Transparent Artificial Intelligence (XAI)",
      "Human-in-the-Loop Reinforcement Learning Frameworks",
      "Ethical Autonomous Agents & Moral Alignment",
      "Algorithmic Bias Mitigation in Healthcare & Public Systems"
    ],
    accentColor: "#FFB347"
  },
  {
    id: "track-sustainable-tech",
    number: "TRACK 02",
    title: "Sustainable, Green & Carbon-Neutral Computing",
    subtitle: "Responsible engineering for ecological balance",
    description: "Architectures, algorithms, and microelectronics engineered to shrink computational carbon footprint, optimize renewable data centers, and ensure eco-resilience.",
    suggestedTopics: [
      "Carbon-Intensity Aware Distributed Task Scheduling",
      "Low-Power Neuromorphic Silicon for Edge Devices",
      "E-Waste Reduction & Circular Computing Lifecycles",
      "Renewable Energy Optimization using Deep Learning"
    ],
    accentColor: "#FF8C42"
  },
  {
    id: "track-trust-privacy",
    number: "TRACK 03",
    title: "Trustworthy Cybersecurity, Privacy & Data Sovereignty",
    subtitle: "Protecting human rights in the digital age",
    description: "Preserving individual privacy, digital identity, and cryptographic integrity against automated adversarial threats through decentralized and zero-trust foundations.",
    suggestedTopics: [
      "Privacy-Preserving Federated Machine Learning",
      "Zero-Knowledge Proof Architectures for Identity Verification",
      "Post-Quantum Cryptography & Resilient Networks",
      "Autonomous Threat Hunting with Human Oversight"
    ],
    accentColor: "#FFD166"
  },
  {
    id: "track-assistive-tech",
    number: "TRACK 04",
    title: "Inclusive Computing, Assistive Technologies & Healthcare",
    subtitle: "Accessible systems empowering diverse abilities",
    description: "Creating accessible digital interfaces, affordable assistive hardware, telemedicine innovations, and technology that bridges demographic and accessibility divides.",
    suggestedTopics: [
      "Brain-Computer Interfaces for Neuro-Rehabilitation",
      "Multilingual Speech & Natural Language Tools for Rural Access",
      "Computer Vision for Visually & Hearing Impaired Assistive Tools",
      "Predictive AI for Early Disease Diagnostics & Affordable Care"
    ],
    accentColor: "#FF4D4D"
  },
  {
    id: "track-open-proposal",
    number: "TRACK 05",
    title: "Propose Your Own Relevant Topic",
    subtitle: "Open research proposals aligned with Humanizing Technology",
    description: "Participants are NOT restricted to suggested topics. Propose your own innovative problem, thesis, or technical implementation aligned with the symposium theme during submission.",
    suggestedTopics: [
      "50 Suggested Topics to be Published Soon",
      "Custom Participant-Proposed Ideas Highly Welcomed",
      "Interdisciplinary Computing & Humanities Symbiosis",
      "Mention your proposed topic details during submission"
    ],
    accentColor: "#FFB347"
  }
];

/* Distinguished Keynote Speakers from reference website */
export const SPEAKERS: Speaker[] = [
  {
    id: "elena-rostova",
    number: "01",
    name: "Dr. Elena Rostova",
    designation: "Director of Ethical Artificial Intelligence",
    organization: "Global Institute of Computational Ethics, Zurich",
    sessionTitle: "Empathy by Design: Architecting Non-Coercive Autonomous Systems",
    sessionType: "Keynote Address",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneer in moral alignment architectures and computational linguistics. Former principal advisor to the UN Panel on Autonomous Software Systems.",
    sessionTime: "Oct 10, 10:00 AM IST (Day 1 Keynote)",
    socials: {
      linkedin: "https://linkedin.com",
      scholar: "https://scholar.google.com"
    }
  },
  {
    id: "marcus-vance",
    number: "02",
    name: "Marcus Vance",
    designation: "VP of Quantum Systems Architecture",
    organization: "Horizon Quantum Labs & Stanford Adjunct",
    sessionTitle: "Quantum Supremacy to Utility: Practical Fault-Tolerant Workloads",
    sessionType: "Keynote Address",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Architect behind the first 1,000-qubit topological coherence experiment. Author of 'The Geometry of Coherence'.",
    sessionTime: "Oct 10, 02:00 PM IST (Day 1 Plenary)",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "dr-aris-thorne",
    number: "03",
    name: "Prof. Aris Thorne",
    designation: "Chair of Human-Computer Interaction",
    organization: "Oxford Humanitas Computing Initiative",
    sessionTitle: "Beyond Screens: Spatial Telepresence and Neural Tactile Interfaces",
    sessionType: "Plenary Session",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Lead inventor of electro-tactile neurohaptic feedback fabrics. Recipient of the ACM SIGCHI Lifetime Innovation Fellowship.",
    sessionTime: "Oct 10, 04:00 PM IST (Day 1 Address)",
    socials: {
      linkedin: "https://linkedin.com",
      scholar: "https://scholar.google.com"
    }
  },
  {
    id: "priya-sundaram",
    number: "04",
    name: "Dr. Priya Sundaram",
    designation: "Chief Sustainability Architect",
    organization: "EcoSilicon Research & Nordic Tech Consortium",
    sessionTitle: "The Carbon-Neutral Datacenter: Thermodynamic Computing at Scale",
    sessionType: "Special Address",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneered carbon-intensity reactive cloud task brokers now saving millions of metric tons of data center emissions annually.",
    sessionTime: "Oct 14, 10:30 AM IST (Day 2 Online)",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "liam-chen",
    number: "05",
    name: "Liam K. Chen",
    designation: "Head of Decentralized Cryptography",
    organization: "ZeroTrust Foundation, Singapore",
    sessionTitle: "Verifiable Humanity: Cryptographic Proof of Personhood in the Age of Synthesis",
    sessionType: "Fireside Chat",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Co-author of recursive zk-SNARK protocols safeguarding digital identities across millions of sovereign human credentials.",
    sessionTime: "Oct 14, 02:00 PM IST (Day 2 Online)",
    socials: {
      linkedin: "https://linkedin.com",
      scholar: "https://scholar.google.com"
    }
  },
  {
    id: "sarah-al-rashid",
    number: "06",
    name: "Dr. Sarah Al-Rashid",
    designation: "Director of Bio-Algorithmic Computing",
    organization: "NeuroVerve Biosystems",
    sessionTitle: "Silicon Synapses: Bridging Wetware and Neuromorphic Matrix Systems",
    sessionType: "Special Address",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Leading translational research integrating biological cellular computations with low-energy neuromorphic co-processors.",
    sessionTime: "Oct 14, 04:00 PM IST (Day 2 Online)",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

/* Official Staff Coordinators */
export const STAFF_COORDINATORS: Coordinator[] = [
  {
    id: "convenor-01",
    name: "Dr. K. Balasubramaniam",
    role: "Convenor",
    department: "Professor & Head / Department of Computer Science and Engineering",
    contact: "syntronix@egspec.org"
  },
  {
    id: "coord-01",
    name: "Dr. G. Pushpa",
    role: "Co-Convenor",
    department: "Assistant Professor / CSE",
    contact: "syntronix@egspec.org"
  },
  {
    id: "coord-02",
    name: "Mrs. L. Mohana Priya",
    role: "Co-Convenor",
    department: "Assistant Professor / CSE",
    contact: "syntronix@egspec.org"
  }
];

export const ALUMNI_MENTORS = [
  {
    id: "alumni-01",
    name: "Alumni Mentor 01",
    batch: "Department of CSE Alumnus",
    currentRole: "Lead Software Architect",
    company: "Global Tech Enterprise"
  },
  {
    id: "alumni-02",
    name: "Alumni Mentor 02",
    batch: "Department of CSE Alumnus",
    currentRole: "AI / ML Research Engineer",
    company: "Frontier Cloud Systems"
  }
];

/* Timeline Milestones matching the exact dates in section 18 */
export const TIMELINE: TimelineMilestone[] = [
  {
    number: "01",
    dateStr: "10 September 2026",
    title: "Registration Opens",
    subtitle: "Online & Offline Delegate Portals Live",
    description: "Official registration begins. Online participants can register via Unstop (Free), while offline delegates register for ₹100 via Google Form.",
    status: "upcoming",
    tag: "Registration Opens"
  },
  {
    number: "02",
    dateStr: "20 September 2026",
    title: "Abstract Submission Opens",
    subtitle: "Call for Papers & Presentation Submissions",
    description: "Authors and delegates may submit extended abstracts (theme-based or self-proposed topic) via Unstop (online) or the website CFP portal (offline).",
    status: "upcoming",
    tag: "CFP Opens"
  },
  {
    number: "03",
    dateStr: "28 September 2026",
    title: "PPT Submission Deadline (Online Event)",
    subtitle: "Slide Deck Upload on Unstop",
    description: "Deadline for submitting presentation slide decks for the Online Article Presentation via the Unstop platform on or before 28 September 2026.",
    status: "upcoming",
    tag: "Online Event"
  },
  {
    number: "04",
    dateStr: "02 October 2026",
    title: "Abstract Submission Deadline",
    subtitle: "Manuscripts Queue Finalizes",
    description: "Final cutoff date for submitting abstracts and presentation drafts for double-blind peer review.",
    status: "upcoming",
    tag: "Submission Closes"
  },
  {
    number: "05",
    dateStr: "05 October 2026",
    title: "Acceptance Notification",
    subtitle: "Review Results Dispatched to Authors",
    description: "Peer-review results and formal acceptance notifications are delivered to all registered authors.",
    status: "upcoming",
    tag: "Notifications"
  },
  {
    number: "06",
    dateStr: "09 October 2026",
    title: "Regular Registration Deadline",
    subtitle: "Online & Offline Portals Conclude (On-Spot Available)",
    description: "Regular registration cutoff for online and offline participation. Note: On-Spot Registration is also available at the venue on 10 October 2026.",
    status: "upcoming",
    tag: "Registration Deadline"
  },
  {
    number: "07",
    dateStr: "10 October 2026",
    title: "Symposium Day 1 — OFFLINE",
    subtitle: "EGS Pillay Engineering College, Nagapattinam",
    description: "On-campus Day 1: Paper Presentation, Prompt Fest, and 4 Non-Technical events (Vibe Vista, Frenzy 2K26, Memory Hunt, The Imposter Game). Food banquet included. On-spot registration available.",
    status: "upcoming",
    tag: "Day 1 In-Person"
  },
  {
    number: "08",
    dateStr: "14 October 2026",
    title: "Symposium Day 2 — ONLINE",
    subtitle: "Hosted through the Unstop Platform",
    description: "Flagship Day 2: Online Article Presentation conducted through Unstop with global delegates, jury evaluations, and cash prizes.",
    status: "upcoming",
    tag: "Day 2 Online"
  },
  {
    number: "09",
    dateStr: "17 October 2026",
    title: "Certificate Distribution",
    subtitle: "Digital Participation Certificates Issued",
    description: "Official digital participation certificates issued to all verified online and offline delegates by 17 October 2026.",
    status: "upcoming",
    tag: "Certificates"
  }
];

/* Exact Dates matching Section 18 */
export const IMPORTANT_DATES: ImportantDateItem[] = [
  {
    day: "10",
    month: "SEP",
    year: "2026",
    title: "Registration Opens",
    description: "Registration commences for both Online (Unstop) and Offline delegates.",
    badge: "PORTAL OPEN"
  },
  {
    day: "20",
    month: "SEP",
    year: "2026",
    title: "Abstract Submission Opens",
    description: "Submit abstracts on suggested topics or propose your own theme-relevant idea.",
    badge: "CFP ACTIVE"
  },
  {
    day: "28",
    month: "SEP",
    year: "2026",
    title: "PPT Submission Deadline (Online Event)",
    description: "Slide deck submissions cutoff for the Online Article Presentation on Unstop.",
    badge: "ONLINE EVENT"
  },
  {
    day: "02",
    month: "OCT",
    year: "2026",
    title: "Abstract Submission Deadline",
    description: "Final cutoff for submitting paper abstracts across all tracks.",
    badge: "CRITICAL"
  },
  {
    day: "05",
    month: "OCT",
    year: "2026",
    title: "Acceptance Notification",
    description: "Evaluation results and acceptance letters communicated to authors.",
    badge: "RESULTS"
  },
  {
    day: "09",
    month: "OCT",
    year: "2026",
    title: "Regular Registration Deadline",
    description: "Registration open until 09 October 2026. On-Spot Registration is also available at the venue.",
    badge: "09 OCT DEADLINE"
  },
  {
    day: "10",
    month: "OCT",
    year: "2026",
    title: "Symposium Day 1 (OFFLINE)",
    description: "E.G.S. Pillay Engineering College Campus: Paper Presentation, Prompt Fest & 4 Non-Technical Events. Food included. On-spot registration available.",
    isMilestone: true,
    badge: "DAY 1 // OFFLINE"
  },
  {
    day: "14",
    month: "OCT",
    year: "2026",
    title: "Symposium Day 2 (ONLINE)",
    description: "Fully online: Online Article Presentation conducted through the Unstop platform.",
    isMilestone: true,
    badge: "DAY 2 // ONLINE"
  },
  {
    day: "17",
    month: "OCT",
    year: "2026",
    title: "Participation Certificates Issued",
    description: "Official participation certificates distributed to all eligible attendees.",
    badge: "CERTIFICATION"
  }
];

export const WHY_PARTICIPATE = [
  {
    number: "01",
    title: "Present on an International Stage",
    description: "Showcase your technical research and problem-solving solutions to an international academic panel from EGS Pillay Engineering College and partner networks.",
    icon: "BookOpen"
  },
  {
    number: "02",
    title: "Cash Prizes & Hardcopy Honors",
    description: "Winners and runners in both online and offline events receive prestigious cash awards and hardcopy certificates conferred on event day.",
    icon: "Trophy"
  },
  {
    number: "03",
    title: "Flexible Hybrid Participation",
    description: "Participate in person on 10 October at EGSPEC for 6 exciting offline events with food included, or join online from anywhere in the world on 14 October via Unstop.",
    icon: "Globe"
  },
  {
    number: "04",
    title: "Inclusive Registration & Food",
    description: "Online event registration is 100% FREE. Offline participation is just ₹100 per person and includes delicious food + entry to all eligible offline events.",
    icon: "Award"
  },
  {
    number: "05",
    title: "Student, Faculty & Alumni Synergy",
    description: "Connect with Department of CSE professors, active research scholars, industry alumni, and peer innovators across 50+ colleges.",
    icon: "Users"
  },
  {
    number: "06",
    title: "Theme Freedom & Propose Your Topic",
    description: "Choose from ~50 suggested topics or propose any original, relevant topic under 'Humanizing Technology' for your presentation.",
    icon: "Cpu"
  }
];

export const SPONSORS: Sponsor[] = [
  {
    name: "EGS Pillay Engineering College",
    tier: "Title Sponsor",
    logoPlaceholder: "EGSPEC",
    role: "Autonomous Institution, Nagapattinam | Patron Institution",
    isPlaceholder: false
  },
  {
    name: "Department of CSE",
    tier: "Diamond Sponsor",
    logoPlaceholder: "CSE",
    role: "Department of Computer Science & Engineering | Organizing Department",
    isPlaceholder: false
  },
  {
    name: "Unstop",
    tier: "Technology Partner",
    logoPlaceholder: "UNSTOP",
    role: "Official Digital Platform Partner for Online Day 1 Events",
    isPlaceholder: false
  },
  {
    name: "Industry / Corporate Sponsor 01",
    tier: "Gold Sponsor",
    logoPlaceholder: "IND-1",
    role: "Technology Innovation Sponsor (To be announced upon finalization)",
    isPlaceholder: true
  },
  {
    name: "Industry / Corporate Sponsor 02",
    tier: "Silver Sponsor",
    logoPlaceholder: "IND-2",
    role: "Student Ecosystem Partner (To be announced upon finalization)",
    isPlaceholder: true
  }
];
