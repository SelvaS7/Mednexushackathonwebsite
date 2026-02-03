import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventSchedule } from './components/EventSchedule';
import { AboutCompanies } from './components/AboutCompanies';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-blue-900/40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-pink-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <EventSchedule />
        <AboutCompanies />
        <Footer />
      </div>
    </div>
  );
}