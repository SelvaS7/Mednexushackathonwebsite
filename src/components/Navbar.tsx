import React from 'react';
import logo from 'figma:asset/b0b27142d39df003b0c761094021f17cb793bcf9.png';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src={logo} alt="MEDNEXUS" className="h-12 w-12" />
            <div className="text-white">
              <div className="text-sm opacity-80">MEDNEXUS'26</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors animate-scale">HOME</a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors animate-scale">ABOUT</a>
            <a href="#event" className="text-white hover:text-cyan-400 transition-colors animate-scale">EVENT</a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors animate-scale">CONTACT</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScl1th-1kopWbRzwokbhoQsS_tvTBvUOUQd674j5Q7JatlTPg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-button px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors border border-cyan-400"
            >
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}