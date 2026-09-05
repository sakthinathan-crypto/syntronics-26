import { Track, SymposiumEvent, Speaker, TimelineMilestone, ImportantDateItem, Sponsor } from '../types';

export const SYMPOSIUM_META = {
  name: "NEXORA '26",
  edition: "Annual International Symposium on Human-Centered Computing",
  theme: "HUMANIZING TECHNOLOGY",
  themeSubtitle: "Computing for a Sustainable, Inclusive and Ethical Future",
  dates: "October 12 – 14, 2026",
  isoStartDate: "2026-10-12T09:00:00Z",
  venue: "Grand Horizon Tech Pavilion & Virtual Global Hub",
  city: "San Francisco, CA & Global Virtual Stream",
  stats: [
    { value: 500, suffix: "+", label: "Global Delegates", detail: "Researchers, scholars, and industry builders" },
    { value: 50, suffix: "+", label: "Institutions", detail: "Leading universities & research centers" },
    { value: 20, suffix: "+", label: "Sessions & Tracks", detail: "Peer-reviewed papers, workshops, and panels" },
    { value: 12, suffix: "+", label: "Global Keynotes", detail: "Turing laureates & industry chiefs" },
    { value: 25, suffix: "K$", label: "Innovation Awards", detail: "Grant prizes for emerging researchers" }
  ]
};

export const TRACKS: Track[] = [
  {
    id: "ai-human",
    number: "01",
    title: "Artificial Intelligence & Cognitive Synergy",
    subtitle: "Human-centered intelligent systems & ethical agents",
    description: "Explores the transition from autonomous black-box intelligence to transparent, co-creative systems where machine cognition amplifies human agency, judgment, and collective problem-solving.",
    chair: "Dr. Elena Rostova",
    chairAffiliation: "Institute for Ethical Computation, Zurich",
    topics: [
      "Explainable & Transparent Agentic Models",
      "Human-in-the-Loop Reinforcement Learning",
      "Cognitive Load Optimization in Generative Tools",
      "Algorithmic Bias, Fairness & Accountability"
    ],
    paperDeadline: "Sept 10, 2026",
    accentColor: "#FFB347"
  },
  {
    id: "cyber-trust",
    number: "02",
    title: "Cybersecurity, Privacy & Zero-Trust",
    subtitle: "Trust, post-quantum cryptography and resilient computing",
    description: "Addresses foundational paradigms of digital sovereignty, user privacy rights, hardware security enclaves, and cryptographic proofs in an era of automated cyber threats.",
    chair: "Prof. Tariq Al-Mansoor",
    chairAffiliation: "Center for Cryptographic Integrity, London",
    topics: [
      "Zero-Knowledge Proof Architectures",
      "Post-Quantum Cryptographic Protocols",
      "Privacy-Preserving Federated Intelligence",
      "Autonomous Cyber Defense Systems"
    ],
    paperDeadline: "Sept 12, 2026",
    accentColor: "#FF8C42"
  },
  {
    id: "cloud-edge",
    number: "03",
    title: "Cloud & Distributed Systems",
    subtitle: "Scalable infrastructure and decentralized mesh computing",
    description: "Investigates next-generation cloud architectures, peer-to-peer verifiable computing, distributed consensus without planetary energy waste, and ultra-low-latency edge fabrics.",
    chair: "Dr. Maya Lin-Sutherland",
    chairAffiliation: "Distributed Systems Laboratory, MIT",
    topics: [
      "Serverless & Edge-Native Runtimes",
      "Decentralized Data Meshes & Orchestration",
      "Fault-Tolerant Microservice Fabrics",
      "Geo-Distributed State Synchronization"
    ],
    paperDeadline: "Sept 15, 2026",
    accentColor: "#FFD166"
  },
  {
    id: "sustainable-tech",
    number: "04",
    title: "Sustainable & Carbon-Aware Computing",
    subtitle: "Technology engineered with environmental responsibility",
    description: "Pioneering the roadmap toward net-zero silicon lifecycles, carbon-aware cloud scheduling, energy-proportional software engineering, and circular hardware design.",
    chair: "Dr. Arvind Sundaram",
    chairAffiliation: "Nordic Center for Green Informatics, Stockholm",
    topics: [
      "Carbon-Intensity Driven Task Scheduling",
      "Ultra-Low Power Neuromorphic Accelerators",
      "Lifecycle Carbon Footprint Auditing in AI",
      "Renewable Energy Microgrid Data Centers"
    ],
    paperDeadline: "Sept 18, 2026",
    accentColor: "#FF8C42"
  },
  {
    id: "emerging-frontiers",
    number: "05",
    title: "Emerging Technologies & Quantum Horizons",
    subtitle: "Exploring the next computational frontier",
    description: "Unraveling revolutionary modalities spanning practical quantum annealing, brain-computer interfaces (BCIs), biological data storage, and spatial sensory computation.",
    chair: "Dr. Seraphina Vance",
    chairAffiliation: "Quantum Information Science Consortium",
    topics: [
      "Noisy Intermediate-Scale Quantum (NISQ) Algorithms",
      "Non-Invasive Brain-Machine Interfaces",
      "DNA & Synthetic Molecular Storage",
      "Spatial & Neuromorphic Sensory Arrays"
    ],
    paperDeadline: "Sept 20, 2026",
    accentColor: "#FF4D4D"
  }
];

export const EVENTS: SymposiumEvent[] = [
  {
    id: "paper-colloquium",
    number: "EV-01",
    title: "International Research Paper Presentation",
    category: "Paper Presentation",
    date: "Oct 12 & 13, 2026",
    time: "10:00 AM – 4:30 PM PST",
    venue: "Auditorium A & Virtual Stream 1",
    prizePool: "$8,000 + IEEE Publication",
    teamSize: "1–4 Authors",
    description: "Peer-reviewed paper oral presentations across all 5 tracks. Top papers will be recommended for fast-track publication in prestigious indexed journals.",
    highlights: ["Double-blind peer review", "Session chair Q&A feedback", "Best Paper Trophy & $5K top grant", "Indexed conference proceedings"],
    coordinator: "Prof. Karen Zhang"
  },
  {
    id: "nexora-hackathon",
    number: "EV-02",
    title: "The Nexora Sprint: 36-Hour Global AI Hackathon",
    category: "Hackathon",
    date: "Oct 12 – 13, 2026 (Continuous)",
    time: "Kickoff: Oct 12, 11:00 AM PST",
    venue: "Innovation Arena & Discord Virtual Lab",
    prizePool: "$12,000 + Cloud Credits",
    teamSize: "2–4 Innovators",
    description: "Build groundbreaking human-centric software in 36 continuous hours. Tackle real-world challenges in ethical AI, healthcare access, climate adaptation, and privacy tech.",
    highlights: ["24/7 Industry mentors", "Direct venture scout pitch", "Free cloud compute quotas", "Hardware loaner kits for IoT"],
    coordinator: "Julian Thorne"
  },
  {
    id: "project-expo",
    number: "EV-03",
    title: "Frontier Project Expo & Startup Showcase",
    category: "Competition",
    date: "Oct 13, 2026",
    time: "02:00 PM – 06:00 PM PST",
    venue: "Central Exhibition Hall",
    prizePool: "$5,000 Seed Grant",
    teamSize: "1–5 Members",
    description: "Showcase working physical prototypes, research testbeds, and deep-tech prototypes to industry delegates, venture partners, and research directors.",
    highlights: ["Dedicated exhibition booth", "Direct investor speed-networking", "Public choice voting prize", "Live demo testing stations"],
    coordinator: "Dr. Liam Zhao"
  },
  {
    id: "algo-quiz",
    number: "EV-04",
    title: "Turing's Arena: Technical Quiz & Algorithm Sprint",
    category: "Competition",
    date: "Oct 12, 2026",
    time: "03:30 PM – 05:30 PM PST",
    venue: "Seminar Hall 2",
    prizePool: "$2,000 + Gadgets",
    teamSize: "Teams of 2",
    description: "High-octane rapid-fire contest challenging delegates in computational complexity, system architecture puzzles, cryptography ciphers, and computer history.",
    highlights: ["Live visual leaderboard", "Rapid buzzer round", "Cryptographic cipher sprint", "Instant merit certificates"],
    coordinator: "Siddharth Rao"
  },
  {
    id: "poster-forum",
    number: "EV-05",
    title: "Emerging Scholar Poster Presentation",
    category: "Paper Presentation",
    date: "Oct 14, 2026",
    time: "10:30 AM – 01:00 PM PST",
    venue: "Atrium Gallery",
    prizePool: "$2,500 Best Poster",
    teamSize: "1–3 Researchers",
    description: "Interactive visual presentations providing undergraduate and early doctoral scholars an intimate platform to pitch ongoing research.",
    highlights: ["Print & digital interactive screens", "1-on-1 mentor evaluations", "Immediate peer networking", "Certificate of research merit"],
    coordinator: "Dr. Fiona O'Connor"
  },
  {
    id: "frontier-workshops",
    number: "EV-06",
    title: "Hands-on Deep Dive: Zero-Knowledge & Neuromorphic Toolchains",
    category: "Workshop",
    date: "Oct 14, 2026",
    time: "09:30 AM – 12:30 PM PST",
    venue: "Compute Lab 4 & Hybrid Zoom",
    prizePool: "Pro Toolchain Licences",
    teamSize: "Individual / Pairs",
    description: "Intensive 3-hour masterclass by chief research scientists. Hands-on coding of zk-SNARK circuits and training spiking neural networks for edge silicon.",
    highlights: ["Provided sandbox environments", "Take-home code repositories", "Official certificate of completion", "Industry trainer Q&A"],
    coordinator: "Marcus Vance"
  },
  {
    id: "ethics-panel",
    number: "EV-07",
    title: "The Human Algorithm: International Plenary & Ethics Panel",
    category: "Panel Discussion",
    date: "Oct 14, 2026",
    time: "02:30 PM – 04:30 PM PST",
    venue: "Grand Plenary Hall",
    prizePool: "Open Access Manifesto",
    teamSize: "Open to all attendees",
    description: "A flagship summit debating governance frameworks for superintelligent agent swarms, equitable digital rights, and the ethical accountability of developers.",
    highlights: ["Global keynote speakers", "Audience live question voting", "Drafting of the Nexora '26 Accord", "Broadcast live globally"],
    coordinator: "Dr. Elena Rostova"
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "elena-rostova",
    name: "Dr. Elena Rostova",
    designation: "Director of Ethical Artificial Intelligence",
    organization: "Global Institute of Computational Ethics, Zurich",
    sessionTitle: "Empathy by Design: Architecting Non-Coercive Autonomous Systems",
    sessionType: "Keynote Address",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneer in moral alignment architectures and computational linguistics. Former principal advisor to the UN Panel on Autonomous Software Systems.",
    sessionTime: "Oct 12, 10:00 AM PST",
    socials: { linkedin: "https://linkedin.com", scholar: "https://scholar.google.com" }
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    designation: "VP of Quantum Systems Architecture",
    organization: "Horizon Quantum Labs & Stanford Adjunct",
    sessionTitle: "Quantum Supremacy to Utility: Practical Fault-Tolerant Workloads",
    sessionType: "Keynote Address",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Architect behind the first 1,000-qubit topological coherence experiment. Author of 'The Geometry of Coherence'.",
    sessionTime: "Oct 12, 02:00 PM PST",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
  },
  {
    id: "dr-aris-thorne",
    name: "Prof. Aris Thorne",
    designation: "Chair of Human-Computer Interaction",
    organization: "Oxford Humanitas Computing Initiative",
    sessionTitle: "Beyond Screens: Spatial Telepresence and Neural Tactile Interfaces",
    sessionType: "Plenary Session",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Lead inventor of electro-tactile neurohaptic feedback fabrics. Recipient of the ACM SIGCHI Lifetime Innovation Fellowship.",
    sessionTime: "Oct 13, 09:30 AM PST",
    socials: { linkedin: "https://linkedin.com", scholar: "https://scholar.google.com" }
  },
  {
    id: "priya-sundaram",
    name: "Dr. Priya Sundaram",
    designation: "Chief Sustainability Architect",
    organization: "EcoSilicon Research & Nordic Tech Consortium",
    sessionTitle: "The Carbon-Neutral Datacenter: Thermodynamic Computing at Scale",
    sessionType: "Special Address",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneered carbon-intensity reactive cloud task brokers now saving millions of metric tons of data center emissions annually.",
    sessionTime: "Oct 13, 01:30 PM PST",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
  },
  {
    id: "liam-chen",
    name: "Liam K. Chen",
    designation: "Head of Decentralized Cryptography",
    organization: "ZeroTrust Foundation, Singapore",
    sessionTitle: "Verifiable Humanity: Cryptographic Proof of Personhood in the Age of Synthesis",
    sessionType: "Fireside Chat",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Co-author of recursive zk-SNARK protocols safeguarding digital identities across millions of sovereign human credentials.",
    sessionTime: "Oct 14, 11:00 AM PST",
    socials: { linkedin: "https://linkedin.com", scholar: "https://scholar.google.com" }
  },
  {
    id: "sarah-al-rashid",
    name: "Dr. Sarah Al-Rashid",
    designation: "Director of Bio-Algorithmic Computing",
    organization: "NeuroVerve Biosystems",
    sessionTitle: "Silicon Synapses: Bridging Wetware and Neuromorphic Matrix Systems",
    sessionType: "Special Address",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Leading translational research integrating biological cellular computations with low-energy neuromorphic co-processors.",
    sessionTime: "Oct 14, 03:00 PM PST",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    number: "01",
    title: "Registration & Portal Inauguration",
    date: "June 15, 2026",
    description: "Official portal opens for global delegate registrations, early bird fellowship passes, and track selection.",
    status: "completed",
    tag: "Milestone Complete"
  },
  {
    number: "02",
    title: "Call for Papers & Abstract Submissions",
    date: "July 01 – August 30, 2026",
    description: "Researchers submit extended abstracts and full draft manuscripts via the EasyChair peer portal.",
    status: "completed",
    tag: "Submissions Active"
  },
  {
    number: "03",
    title: "Blind Peer Review & Acceptance Notification",
    date: "September 15, 2026",
    description: "International committee finalizes double-blind evaluations; author acceptance letters dispatched.",
    status: "active",
    tag: "Review Phase"
  },
  {
    number: "04",
    title: "Camera-Ready Papers & Slides Due",
    date: "September 28, 2026",
    description: "Final publication-ready manuscripts, author copyright agreements, and presentation slide decks uploaded.",
    status: "upcoming",
    tag: "Deadline Ahead"
  },
  {
    number: "05",
    title: "Symposium Day 1: Vision & Keynotes",
    date: "October 12, 2026",
    description: "Grand inauguration, Dr. Elena Rostova keynote, tracks 01 & 02 presentations, and 36-hr Hackathon kickoff.",
    status: "upcoming",
    tag: "Kickoff Day"
  },
  {
    number: "06",
    title: "Symposium Day 2: Frontiers & Expo",
    date: "October 13, 2026",
    description: "Tracks 03 & 04 colloquium, Project Expo, venture scout pitches, and Hackathon prototype evaluations.",
    status: "upcoming",
    tag: "Execution Day"
  },
  {
    number: "07",
    title: "Symposium Day 3: Synthesis & Grand Awards",
    date: "October 14, 2026",
    description: "Track 05 presentations, Hands-on Workshops, International Ethics Plenary, and $25K Valedictory Gala.",
    status: "upcoming",
    tag: "Grand Finale"
  }
];

export const IMPORTANT_DATES: ImportantDateItem[] = [
  {
    day: "30",
    month: "AUG",
    year: "2026",
    title: "Call for Papers Deadline",
    description: "Final deadline to submit papers across all 5 symposium research tracks."
  },
  {
    day: "15",
    month: "SEP",
    year: "2026",
    title: "Acceptance Notification",
    description: "Formal notifications sent to primary authors with peer reviewer comments."
  },
  {
    day: "28",
    month: "SEP",
    year: "2026",
    title: "Camera-Ready Submission",
    description: "Final formatted paper and presentation slides must be submitted."
  },
  {
    day: "05",
    month: "OCT",
    year: "2026",
    title: "Early Bird Delegate Registration",
    description: "Discounted delegate passes and student fellowship reservations close."
  },
  {
    day: "12",
    month: "OCT",
    year: "2026",
    title: "Symposium Inauguration (Day 1)",
    description: "Grand opening, opening keynote, and research tracks kickoff.",
    isMilestone: true
  },
  {
    day: "14",
    month: "OCT",
    year: "2026",
    title: "Valedictory & Awards Ceremony",
    description: "Best Paper awards, $25K innovation grants, and closing banquet.",
    isMilestone: true
  }
];

export const WHY_PARTICIPATE = [
  {
    number: "01",
    title: "Present Your Research",
    description: "Earn publication in globally indexed proceedings (IEEE / Springer). Receive rigorous, constructive feedback from world-class editorial boards.",
    icon: "BookOpen"
  },
  {
    number: "02",
    title: "Connect with Global Experts",
    description: "Engage in intimate breakout roundtables, VIP luncheons, and 1-on-1 office hours with keynote luminaries and institute chairs.",
    icon: "Users"
  },
  {
    number: "03",
    title: "Build Your International Network",
    description: "Connect with delegates from 50+ world-leading institutions, venture accelerators, and premier technology labs spanning 24 countries.",
    icon: "Globe"
  },
  {
    number: "04",
    title: "Showcase Deep Innovation",
    description: "Compete for $25,000 in non-dilutive innovation grants, cloud compute credits, and venture incubation pipelines for breakthrough ideas.",
    icon: "Trophy"
  },
  {
    number: "05",
    title: "Earn Certified Credentials",
    description: "Receive an internationally recognized IEEE-partnered Symposium Certificate and verifiable cryptographic attendee badge.",
    icon: "Award"
  },
  {
    number: "06",
    title: "Hands-on Frontier Tech Labs",
    description: "Gain live access to neuromorphic testbeds, quantum simulation SDKs, and zero-knowledge circuit development environments.",
    icon: "Cpu"
  }
];

export const SPONSORS: Sponsor[] = [
  {
    name: "AnthroTech Systems",
    tier: "Title Sponsor",
    logoPlaceholder: "AT",
    role: "Global Leader in Human-Aligned Cognitive Computing"
  },
  {
    name: "QuantumMatrix Labs",
    tier: "Diamond Sponsor",
    logoPlaceholder: "QM",
    role: "Pioneering Coherent Fault-Tolerant Architectures"
  },
  {
    name: "Horizon DeepTech Ventures",
    tier: "Diamond Sponsor",
    logoPlaceholder: "HZ",
    role: "Accelerating Next-Gen Frontier Science"
  },
  {
    name: "EcoSilicon Hardware",
    tier: "Gold Sponsor",
    logoPlaceholder: "ES",
    role: "Net-Zero Thermodynamic Microelectronics"
  },
  {
    name: "NeuralFlux AI",
    tier: "Gold Sponsor",
    logoPlaceholder: "NF",
    role: "Autonomous Multi-Agent Orchestration"
  },
  {
    name: "Veritas Zero-Trust",
    tier: "Silver Sponsor",
    logoPlaceholder: "VZ",
    role: "Cryptographic Privacy & Verifiable Proofs"
  },
  {
    name: "MeshCloud Global",
    tier: "Silver Sponsor",
    logoPlaceholder: "MC",
    role: "High-Performance Edge Data Runtimes"
  },
  {
    name: "International Computing Society",
    tier: "Knowledge Partner",
    logoPlaceholder: "ICS",
    role: "Academic Indexing & Publication Oversight"
  },
  {
    name: "Open Ethics Consortium",
    tier: "Knowledge Partner",
    logoPlaceholder: "OEC",
    role: "Independent Ethical Governance Frameworks"
  },
  {
    name: "Frontier Cloud Network",
    tier: "Technology Partner",
    logoPlaceholder: "FCN",
    role: "Global Low-Latency Streaming & Hybrid Cloud Infrastructure"
  }
];
