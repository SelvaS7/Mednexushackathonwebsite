import React from 'react';
import brochureImage from 'figma:asset/0cb80c33778c77950facb736d9bcf6123e7c7a75.png';

export function About() {
  return (
    <section id="about" className="pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Featured Event */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl text-center mb-8 md:mb-12">
            <span className="text-white">FEATURED </span>
            <span className="text-cyan-400">EVENT</span>
          </h3>
          
          <div className="max-w-md mx-auto animate-float-delay-1">
            <div className="animate-card bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-pink-500/50 transition-all cursor-pointer">
              <div className="h-56 md:h-64 rounded-lg md:rounded-xl mb-4 overflow-hidden bg-black/20">
                <img 
                  src={brochureImage}
                  alt="MEDNEXUS'26 Brochure - Healthcare Innovation Hackathon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white text-lg md:text-xl mb-2">MEDNEXUS'26 HACKATHON</h4>
              <p className="text-gray-400 text-xs md:text-sm">Innovate and transform healthcare with cutting-edge technology solutions.</p>
            </div>
          </div>
        </div>

        {/* Why Participate */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl text-center mb-6 md:mb-8">
            <span className="text-white">Why </span>
            <span className="text-cyan-400">Participate?</span>
          </h3>
          <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">Industry-Relevant Problem Statements</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">Win Exciting Cash Prices</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">Live Project Internship Opportunities</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">E-Certificate Will Be Provided For All The Participants</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">Build Portfolio-Grade Project</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}