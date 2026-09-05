export interface Track {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  chair: string;
  chairAffiliation: string;
  topics: string[];
  paperDeadline: string;
  accentColor: string;
}

export interface SymposiumEvent {
  id: string;
  number: string;
  title: string;
  category: 'Hackathon' | 'Paper Presentation' | 'Workshop' | 'Competition' | 'Panel Discussion';
  date: string;
  time: string;
  venue: string;
  prizePool?: string;
  teamSize?: string;
  description: string;
  highlights: string[];
  coordinator: string;
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  sessionTitle: string;
  sessionType: 'Keynote Address' | 'Plenary Session' | 'Special Address' | 'Fireside Chat';
  photo: string;
  bio: string;
  sessionTime: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    scholar?: string;
  };
}

export interface TimelineMilestone {
  number: string;
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  tag: string;
}

export interface ImportantDateItem {
  day: string;
  month: string;
  year: string;
  title: string;
  description: string;
  isMilestone?: boolean;
}

export interface Sponsor {
  name: string;
  tier: 'Title Sponsor' | 'Diamond Sponsor' | 'Gold Sponsor' | 'Silver Sponsor' | 'Knowledge Partner' | 'Technology Partner';
  logoPlaceholder: string;
  role: string;
}

export interface DelegatePass {
  passId: string;
  name: string;
  email: string;
  institution: string;
  tier: 'Student Scholar' | 'Academic Delegate' | 'Industry Innovator' | 'Virtual Access';
  track: string;
  registeredAt: string;
  qrValue: string;
}
