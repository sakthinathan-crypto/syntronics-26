/**
 * Centralized Asset & Media Configuration
 *
 * IMAGE FOLDER: /public/images/institution/
 * To replace an image, save your image file in /public/images/institution/ with the exact filename below.
 *
 * AEGIS ACADEMY LOGO: /public/images/aegis-academy-logo.png
 * To replace the Aegis Academy logo, save your logo file in /public/images/aegis-academy-logo.png
 *
 * DOCUMENTS: /public/documents/
 * Save PDF/docs in /public/documents/ with the filenames defined below.
 */

export interface InstitutionImageSlot {
  id: string;
  slotNumber: string;
  filename: string;
  relativePath: string;
  title: string;
  category: string;
  description: string;
  placeholderFallback: string;
}

export const ASSETS_CONFIG = {
  // Institution Gallery: 6 configurable image slots
  institutionFolder: "/images/institution/",
  institutionImages: [
    {
      id: "college-01",
      slotNumber: "01",
      filename: "college-01.jpg",
      relativePath: "/images/institution/college-01.jpg",
      title: "Campus Architecture & Main Administrative Block",
      category: "EGSPEC Campus",
      description: "State-of-the-art academic blocks and modern autonomous collegiate infrastructure.",
      placeholderFallback: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "college-02",
      slotNumber: "02",
      filename: "college-02.jpg",
      relativePath: "/images/institution/college-02.jpg",
      title: "Department of Computer Science & Engineering",
      category: "Academic Laboratories",
      description: "Advanced computing laboratories, AI compute nodes, and high-performance development clusters.",
      placeholderFallback: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "college-03",
      slotNumber: "03",
      filename: "college-03.jpg",
      relativePath: "/images/institution/college-03.jpg",
      title: "Symposium & Technical Conferences Heritage",
      category: "Symposium Highlights",
      description: "Scholars, jury panels, and technical delegations presenting cutting-edge research.",
      placeholderFallback: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "college-04",
      slotNumber: "04",
      filename: "college-04.jpg",
      relativePath: "/images/institution/college-04.jpg",
      title: "Innovation Hub & Collaborative Workspaces",
      category: "Innovation & Incubation",
      description: "Dedicated project incubation labs, student hackathon arenas, and hardware prototyping bays.",
      placeholderFallback: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "college-05",
      slotNumber: "05",
      filename: "college-05.jpg",
      relativePath: "/images/institution/college-05.jpg",
      title: "Grand Auditorium & Presentation Amphitheatre",
      category: "Convention Venues",
      description: "Acoustically engineered auditorium hosting inaugural ceremonies and keynote plenary addresses.",
      placeholderFallback: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "college-06",
      slotNumber: "06",
      filename: "college-06.jpg",
      relativePath: "/images/institution/college-06.jpg",
      title: "Student Tech Community & Award Celebrations",
      category: "Student Life & Excellence",
      description: "Fostering leadership, technical synergy, and valedictory recognition across inter-collegiate teams.",
      placeholderFallback: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
    }
  ] as InstitutionImageSlot[],

  // Aegis Academy Logo configuration
  aegisAcademy: {
    filename: "aegis-academy-logo.png",
    primaryPath: "/images/aegis-academy-logo.png",
    uploadedAssetFallback: "/WhatsApp_Image_2026-09-06_at_11.35.02_AM-removebg-preview.png",
    title: "Aegis Academy",
    copyrightNotice: "all copy rights owned by Aegis Academy"
  },

  // Official Documents
  documents: {
    paperTopics50: {
      filename: "syntronix-26-paper-presentation-suggested-topics.pdf",
      path: "/documents/syntronix-26-paper-presentation-suggested-topics.pdf",
      title: "SYNTRONIX '26 Paper Presentation — 50 Suggested Topics"
    },
    problemStatement: {
      filename: "syntronix-26-problem-statement.pdf",
      path: "/documents/syntronix-26-problem-statement.pdf",
      title: "Official Problem Statement & Submission Guidelines"
    }
  },

  // Future Google Sheet submission endpoint for CFP submissions
  googleSheetEndpoint: ""
};
