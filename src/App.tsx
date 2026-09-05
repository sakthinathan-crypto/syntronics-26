import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { AudioAmbience } from './components/AudioAmbience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ThemeSection } from './components/ThemeSection';
import { Events } from './components/Events';
import { Speakers } from './components/Speakers';
import { TimelineSection } from './components/TimelineSection';
import { ImportantDates } from './components/ImportantDates';
import { WhyParticipate } from './components/WhyParticipate';
import { Sponsors } from './components/Sponsors';
import { RegistrationCTA } from './components/RegistrationCTA';
import { Footer } from './components/Footer';
import { SectionTransition } from './components/SectionTransition';

import { RegistrationModal } from './components/RegistrationModal';
import { AbstractSubmissionModal } from './components/AbstractSubmissionModal';
import { DetailModal } from './components/DetailModal';

import { Track, SymposiumEvent, Speaker } from './types';

export default function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [abstractModalOpen, setAbstractModalOpen] = useState(false);
  const [selectedTrackForCFP, setSelectedTrackForCFP] = useState<Track | null>(null);

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState<SymposiumEvent | null>(null);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  const handleOpenRegister = () => {
    setRegisterModalOpen(true);
  };

  const handleOpenAbstractSubmit = (track?: Track) => {
    setSelectedTrackForCFP(track || null);
    setAbstractModalOpen(true);
  };

  const handleSelectEvent = (event: SymposiumEvent) => {
    setActiveEvent(event);
    setActiveSpeaker(null);
    setDetailModalOpen(true);
  };

  const handleSelectSpeaker = (speaker: Speaker) => {
    setActiveSpeaker(speaker);
    setActiveEvent(null);
    setDetailModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#FF8C42]/30 selection:text-[#FFD166] overflow-x-hidden">
      {/* 1. Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* 2. Layered Ambient Background System */}
      <BackgroundEffects />

      {/* 3. Audio Ambience Synthesizer Toggle */}
      <AudioAmbience />

      {/* 4. Glassmorphism Floating Navigation */}
      <Navbar
        onOpenRegister={handleOpenRegister}
        onOpenAbstractSubmit={() => handleOpenAbstractSubmit()}
      />

      {/* 5. Main Cinematic Journey Container */}
      <main className="relative z-10">
        {/* Full-Screen Hero Experience */}
        <Hero
          onOpenRegister={handleOpenRegister}
          onOpenAbstractSubmit={() => handleOpenAbstractSubmit()}
        />

        <SectionTransition code="01 // GENESIS & MANDATE" accent="orange" />

        {/* About Section: Editorial manifesto & dynamic stats */}
        <About />

        <SectionTransition code="02 // HUMAN × SILICON" accent="yellow" />

        {/* Curatorial Theme: "HUMANIZING TECHNOLOGY" & Interactive Synergy Slider */}
        <ThemeSection />

        <SectionTransition code="03 // OFFICIAL EVENTS" accent="orange" />

        {/* 6 Flagship Events & Competitions */}
        <Events onSelectEvent={handleSelectEvent} />

        <SectionTransition code="04 // PLENARY FACULTY" accent="yellow" />

        {/* Distinguished Speakers & Keynotes */}
        <Speakers onSelectSpeaker={handleSelectSpeaker} />

        <SectionTransition code="05 // SYNCHRONOUS ROADMAP" accent="orange" />

        {/* Chronological Vertical Timeline with glowing progress */}
        <TimelineSection />

        <SectionTransition code="06 // INDEXED TIMELINES" accent="neutral" />

        {/* Important Editorial Dates Blocks */}
        <ImportantDates />

        <SectionTransition code="07 // VALUE CATALYSTS" accent="orange" />

        {/* Why Participate & Scholar Fellowships */}
        <WhyParticipate onOpenRegister={handleOpenRegister} />

        <SectionTransition code="08 // GLOBAL PATRONS" accent="yellow" />

        {/* Dark Glassmorphic Sponsors & Partners */}
        <Sponsors />

        {/* Grand Final Registration CTA */}
        <RegistrationCTA
          onOpenRegister={handleOpenRegister}
          onOpenAbstractSubmit={() => handleOpenAbstractSubmit()}
        />
      </main>

      {/* 6. High-Impact Editorial Footer */}
      <Footer />

      {/* 7. Modals: Registration, CFP Abstract Submission, Details */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <AbstractSubmissionModal
        isOpen={abstractModalOpen}
        onClose={() => setAbstractModalOpen(false)}
        selectedTrack={selectedTrackForCFP}
      />

      <DetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        eventData={activeEvent}
        speakerData={activeSpeaker}
        onRegisterInterest={() => {
          setDetailModalOpen(false);
          setRegisterModalOpen(true);
        }}
      />
    </div>
  );
}
