/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ParticleHelixCanvas } from './components/ParticleHelixCanvas.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { WhyNowSection } from './components/WhyNowSection.tsx';
import { AmbitionsSection } from './components/AmbitionsSection.tsx';
import { ResearchProgramsSection } from './components/ResearchProgramsSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { RoadmapSection } from './components/RoadmapSection.tsx';
import { EthicsSafetySection } from './components/EthicsSafetySection.tsx';
import { LeadershipSection } from './components/LeadershipSection.tsx';
import { PartnersSection } from './components/PartnersSection.tsx';
import { FundingSection } from './components/FundingSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { DeckRequestModal } from './components/DeckRequestModal.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDeckModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseDeckModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#070B14] text-slate-100 flex flex-col selection:bg-teal-500/30 selection:text-teal-200">
      {/* Background Interactive Particle and DNA Helix Animation */}
      <ParticleHelixCanvas />

      {/* Sticky Header with Navigation and Progress Indicator */}
      <Navbar onRequestDeck={handleOpenDeckModal} />

      {/* Main Content Sections (Strict Order) */}
      <main className="relative z-10 flex-grow">
        {/* 1. HERO */}
        <HeroSection onRequestDeck={handleOpenDeckModal} />

        {/* 2. THE PROBLEM */}
        <ProblemSection />

        {/* 3. WHY NOW */}
        <WhyNowSection />

        {/* 4. OUR THREE AMBITIONS */}
        <AmbitionsSection />

        {/* 5. RESEARCH PROGRAMS */}
        <ResearchProgramsSection />

        {/* 6. PRODUCTS */}
        <ProductsSection />

        {/* 7. ROADMAP */}
        <RoadmapSection />

        {/* 8. ETHICS & SAFETY */}
        <EthicsSafetySection />

        {/* 9. LEADERSHIP & ADVISORS */}
        <LeadershipSection />

        {/* 10. PARTNERS */}
        <PartnersSection />

        {/* 11. THE OPPORTUNITY / FUNDING */}
        <FundingSection />

        {/* 12. CONTACT */}
        <ContactSection />
      </main>

      {/* Institutional Footer with Strict Legal & Medical Disclaimer */}
      <Footer />

      {/* Modal Dialog for Instant Deck Request */}
      <DeckRequestModal isOpen={isModalOpen} onClose={handleCloseDeckModal} />
    </div>
  );
}
