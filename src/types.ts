export interface TrackTopic {
  id: string;
  name: string;
}

export interface Track {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  suggestedTopics: string[];
  accentColor: string;
}

export interface SymposiumEvent {
  id: string;
  number: string;
  title: string;
  category: 'Online Technical' | 'Offline Technical' | 'Non-Technical' | 'Paper Presentation' | 'Poster Making';
  day: 'Day 1 — 14 Oct (Online)' | 'Day 2 — 15 Oct (Offline)';
  date: string;
  time: string;
  venue: string;
  mode: 'ONLINE' | 'OFFLINE';
  platform?: string;
  prizePool?: string;
  teamSize?: string;
  feeInfo: string;
  description: string;
  highlights: string[];
  isPlaceholder?: boolean;
}

export interface Speaker {
  id: string;
  number?: string;
  name: string;
  designation: string;
  organization: string;
  sessionTitle: string;
  sessionType: string;
  photo: string;
  bio: string;
  sessionTime: string;
  isPlaceholder?: boolean;
  socials?: {
    linkedin?: string;
    twitter?: string;
    scholar?: string;
  };
}

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  department: string;
  contact?: string;
}

export interface TimelineMilestone {
  number: string;
  dateStr: string;
  title: string;
  subtitle?: string;
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
  badge?: string;
}

export interface Sponsor {
  name: string;
  tier: 'Title Sponsor' | 'Diamond Sponsor' | 'Gold Sponsor' | 'Silver Sponsor' | 'Knowledge Partner' | 'Technology Partner';
  logoPlaceholder: string;
  role: string;
  isPlaceholder?: boolean;
}

export interface DelegatePass {
  passId: string;
  name: string;
  email: string;
  phone?: string;
  institution: string;
  mode: 'OFFLINE' | 'ONLINE';
  eventsSelected: string[];
  foodTokenIncluded: boolean;
  registeredAt: string;
  qrValue: string;
}
