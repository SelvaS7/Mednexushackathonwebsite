import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PrizesOpportunities } from './components/PrizesOpportunities';
import { About } from './components/About';
import { EventSchedule } from './components/EventSchedule';
import { ProblemStatements } from './components/ProblemStatements';
import { ContactInfo } from './components/ContactInfo';
import { AboutCompanies } from './components/AboutCompanies';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { MedicalTechBackground } from './components/MedicalTechBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <div className="fixed inset-0 z-0">
        <MedicalTechBackground />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PrizesOpportunities />
        <ProblemStatements />
        <EventSchedule />
        <About />
        <AboutCompanies />
        <Partners />
        <ContactInfo />
        <Footer />
      </div>
    </div>
  );
}