import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventSchedule } from './components/EventSchedule';
import { AboutCompanies } from './components/AboutCompanies';
import { ContactInfo } from './components/ContactInfo';
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
        <About />
        <EventSchedule />
        <AboutCompanies />
        <ContactInfo />
        <Footer />
      </div>
    </div>
  );
}