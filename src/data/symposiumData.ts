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
  dates: "14–15 October 2026",
  mode: "HYBRID",
  isoStartDate: "2026-10-14T09:00:00+05:30",
  links: {
    onlineRegistration: "https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences",
    offlineRegistration: "https://forms.gle/8Cv5J5qu1VCjvNMDC9",
    instagram: "https://www.instagram.com/syntronix_26?utm_source=qr&stkn=YjVjMmJ3bnlid3Ns",
    collegeWebsite: "https://egspec.org/",
    mapsLocation: "https://maps.app.goo.gl/ZYQb9saFAJeq94rY7"
  },
  onlineDetails: {
    date: "14 October 2026",
    mode: "ONLINE",
    platform: "Hosted through the Unstop platform",
    fee: "FREE",
    unstopEventUrl: "https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences"
  },
  offlineDetails: {
    date: "15 October 2026",
    mode: "OFFLINE",
    venue: "EGS Pillay Engineering College, Nagapattinam, Tamil Nadu, India",
    fee: "₹100 per participant",
    foodIncluded: "Food provided as part of registration",
    includedEvents: "Allows participant to attend ANY NUMBER of offline events",
    additionalEventNote: "No additional event-wise registration fee",
    googleFormUrl: "https://forms.gle/8Cv5J5qu1VCjvNMDC9"
  },
  eligibility: "Open to students, scholars, researchers & innovators worldwide",
  teamRules: "Individual participation or teams (Up to 3 members; Poster Making up to 2 members)",
  stats: [
    { value: 500, suffix: "+", label: "EXPECTED PARTICIPANTS", detail: "Enthusiastic delegates from across regions" },
    { value: 50, suffix: "+", label: "PARTICIPATING COLLEGES", detail: "Academic institutions & universities" },
    { value: 6, suffix: "", label: "OFFICIAL EVENTS", detail: "1 Online flagship + 5 Offline events" },
    { value: 9000, suffix: " ₹", label: "PRIZE POOL / CONTEST", detail: "₹5,000 (1st) • ₹3,000 (2nd) • ₹1,000 (3rd)" },
    { value: 50, suffix: "", label: "OFFICIAL TOPICS", detail: "50 Suggested Topics or propose custom idea" },
    { value: 100, suffix: " ₹", label: "OFFLINE ALL-EVENT PASS", detail: "Food included • Attend any events" }
  ]
};

export const REGISTRATION_CONFIG = {
  onlineUnstopUrl: "https://unstop.com/o/xraF2L6?lb=usevAC8O&utm_medium=Share&utm_source=syntrcse45102&utm_campaign=Conferences",
  offlineGoogleFormUrl: "https://forms.gle/8Cv5J5qu1VCjvNMDC9",
  instagramUrl: "https://www.instagram.com/syntronix_26?utm_source=qr&stkn=YjVjMmJ3bnlid3Ns",
  collegeWebsite: "https://egspec.org/",
  mapsLocation: "https://maps.app.goo.gl/ZYQb9saFAJeq94rY7",
  offlineFeeInRupees: 100,
  offlineFeeDisplay: "₹100 per participant",
  onlineFeeDisplay: "FREE",
  offlineAccessNote: "Total offline registration fee. Attend ANY number of events with no additional fee.",
  foodProvided: true
};

export const PRIZE_STRUCTURE = {
  firstPrize: "₹5,000",
  secondPrize: "₹3,000",
  thirdPrize: "₹1,000",
  totalPerContest: "₹9,000",
  certificateNote: "Winners and runners/merit recipients receive hardcopy certificates and cash prizes on the event day."
};

/* Exactly 6 Official Events */
export const EVENTS: SymposiumEvent[] = [
  {
    id: "online-article-presentation",
    number: "EVENT 01",
    title: "ONLINE ARTICLE PRESENTATION",
    category: "Online Technical",
    day: "Day 1 — 14 Oct (Online)",
    date: "14 October 2026",
    time: "Schedule announced on Unstop",
    venue: "Hosted through Unstop Platform",
    mode: "ONLINE",
    platform: "Unstop",
    prizePool: "Cash Prizes & Digital Merit Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "FREE Registration",
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
    day: "Day 2 — 15 Oct (Offline)",
    date: "15 October 2026",
    time: "10:00 AM – 01:00 PM IST",
    venue: "CSE Seminar Complex, EGSPEC Campus",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    description: "In-person research symposium presentation. Defend your findings on human-centered computing, AI ethics, sustainable architectures, or your self-proposed theme topic before senior faculty and expert evaluators.",
    highlights: [
      "Presentation duration: 7 minutes + 3 minutes Q&A / viva",
      "50 official suggested topics available or propose your own custom topic",
      "Winners & Runners receive cash prizes + hardcopy certificates on event day",
      "Offline registration ₹100 includes delicious food banquet with access to any events"
    ],
    isPlaceholder: false
  },
  {
    id: "offline-poster-making",
    number: "EVENT 03",
    title: "POSTER MAKING",
    category: "Poster Making",
    day: "Day 2 — 15 Oct (Offline)",
    date: "15 October 2026",
    time: "11:30 AM – 02:00 PM IST",
    venue: "Main Drawing Hall & Innovation Gallery, EGSPEC",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 2)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    description: "Translate complex computational and societal challenges into visually arresting, conceptually profound scientific posters. Showcase innovative design thinking where human empathy meets state-of-the-art technology.",
    highlights: [
      "Team size: Maximum 2 members",
      "Judged on conceptual depth, clarity, visual aesthetics & technical rigor",
      "Interactive Q&A walk-through with visiting evaluators",
      "Winners receive cash awards and hardcopy certificates on event day"
    ],
    isPlaceholder: false
  },
  {
    id: "offline-non-tech-01",
    number: "EVENT 04",
    title: "NON-TECHNICAL EVENT 01",
    category: "Non-Technical",
    day: "Day 2 — 15 Oct (Offline)",
    date: "15 October 2026",
    time: "01:30 PM – 03:00 PM IST",
    venue: "Auditorium Hall, EGSPEC Campus",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    description: "Exciting non-technical challenge designed to test creative lateral thinking, collaboration, and spontaneous problem-solving under pressure. (Official title and specific round rules to be announced shortly).",
    highlights: [
      "High-energy interactive challenge for all participants",
      "Covered by the ₹100 offline registration (no additional fee)",
      "Promotes interdisciplinary thinking and team synergy",
      "Cash awards and hardcopy certificates for winners and runners"
    ],
    isPlaceholder: true
  },
  {
    id: "offline-non-tech-02",
    number: "EVENT 05",
    title: "NON-TECHNICAL EVENT 02",
    category: "Non-Technical",
    day: "Day 2 — 15 Oct (Offline)",
    date: "15 October 2026",
    time: "02:30 PM – 04:00 PM IST",
    venue: "EGSPEC Campus Arena",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    description: "Engaging analytical and communication face-off exploring human instincts, perception, and fast-paced deductive acumen. (Official title and specific round rules to be announced shortly).",
    highlights: [
      "Spirited contest blending cognitive agility with humor and intuition",
      "Covered by the ₹100 offline registration (no additional fee)",
      "Open to all registered delegates",
      "Exciting cash awards for standout performances on event day"
    ],
    isPlaceholder: true
  },
  {
    id: "offline-non-tech-03",
    number: "EVENT 06",
    title: "NON-TECHNICAL EVENT 03",
    category: "Non-Technical",
    day: "Day 2 — 15 Oct (Offline)",
    date: "15 October 2026",
    time: "03:30 PM – 05:00 PM IST",
    venue: "Main Open-Air Amphitheatre / Hall",
    mode: "OFFLINE",
    prizePool: "Cash Prizes: 1st ₹5,000 | 2nd ₹3,000 | 3rd ₹1,000 + Hardcopy Certificates",
    teamSize: "Individual or Team (Up to 3)",
    feeInfo: "Covered by ₹100 Offline Pass (Food Included)",
    description: "Grand finale non-technical showcase celebrating student expression, strategic communication, and cultural wit. (Official title and specific round rules to be announced shortly).",
    highlights: [
      "Electrifying multi-round finale",
      "Covered by the ₹100 offline registration (no additional fee)",
      "Immediate audience engagement and live score tallies",
      "Winners and runners awarded during valedictory session on event day"
    ],
    isPlaceholder: true
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
    sessionTime: "Oct 12, 10:00 AM PST",
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
    sessionTime: "Oct 12, 02:00 PM PST",
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
    sessionTime: "Oct 13, 09:30 AM PST",
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
    sessionTime: "Oct 13, 01:30 PM PST",
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
    sessionTime: "Oct 14, 11:00 AM PST",
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
    sessionTime: "Oct 14, 03:00 PM PST",
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
    department: "Head / Department of Computer Science and Engineering",
    contact: "syntronix@egspec.org"
  },
  {
    id: "coord-01",
    name: "Dr. G. Pushpa",
    role: "Faculty Coordinator",
    department: "Assistant Professor / CSE",
    contact: "syntronix@egspec.org"
  },
  {
    id: "coord-02",
    name: "Mrs. L. Mohana Priya",
    role: "Faculty Coordinator",
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
    dateStr: "01 October 2026",
    title: "Registration Deadline",
    subtitle: "Final Date to Register as a Participant",
    description: "Registration concludes for both online (Unstop) and offline participation categories.",
    status: "upcoming",
    tag: "Important Deadline"
  },
  {
    number: "05",
    dateStr: "02 October 2026",
    title: "Abstract Submission Deadline",
    subtitle: "Manuscripts Queue Finalizes",
    description: "Final cutoff date for submitting abstracts and presentation drafts for double-blind peer review.",
    status: "upcoming",
    tag: "Submission Closes"
  },
  {
    number: "06",
    dateStr: "04 October 2026",
    title: "Acceptance Notification",
    subtitle: "Review Results Dispatched to Authors",
    description: "Peer-review results and formal acceptance notifications are delivered to all registered authors.",
    status: "upcoming",
    tag: "Notifications"
  },
  {
    number: "07",
    dateStr: "14 October 2026",
    title: "Symposium Day 1 — ONLINE",
    subtitle: "Hosted through the Unstop Platform",
    description: "Flagship Online Article Presentation conducted through Unstop with international delegates, jury evaluations, and cash prizes.",
    status: "upcoming",
    tag: "Online Symposium"
  },
  {
    number: "08",
    dateStr: "15 October 2026",
    title: "Symposium Day 2 — OFFLINE",
    subtitle: "EGS Pillay Engineering College, Nagapattinam",
    description: "On-campus Paper Presentation, Poster Making, and 3 Non-Technical events. Food provided. Winners receive hardcopy certificates and cash prizes.",
    status: "upcoming",
    tag: "Offline Symposium"
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
    day: "01",
    month: "OCT",
    year: "2026",
    title: "Registration Deadline",
    description: "Last day to register for SYNTRONIX '26 participation.",
    badge: "DEADLINE"
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
    day: "04",
    month: "OCT",
    year: "2026",
    title: "Acceptance Notification",
    description: "Evaluation results and acceptance letters communicated to authors.",
    badge: "RESULTS"
  },
  {
    day: "14",
    month: "OCT",
    year: "2026",
    title: "Symposium Day 1 (ONLINE)",
    description: "Online Article Presentation conducted through the Unstop platform.",
    isMilestone: true,
    badge: "UNSTOP // ONLINE"
  },
  {
    day: "15",
    month: "OCT",
    year: "2026",
    title: "Symposium Day 2 (OFFLINE)",
    description: "EGS Pillay Engineering College Campus: Paper Presentation, Poster Making & 3 Non-Technical Events.",
    isMilestone: true,
    badge: "CAMPUS // OFFLINE"
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
    description: "Participate online from anywhere in the world on 14 October via Unstop, or join in-person on 15 October at EGSPEC for an energetic campus experience.",
    icon: "Globe"
  },
  {
    number: "04",
    title: "Inclusive Registration & Food",
    description: "Online event registration is 100% FREE. Offline participation is just ₹100 per person and includes delicious food + entry to 2 events.",
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
