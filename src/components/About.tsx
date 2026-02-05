import React from 'react';
import brochureImage from 'figma:asset/0cb80c33778c77950facb736d9bcf6123e7c7a75.png';

export function About() {
  return (
    <section id="about" className="pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Prizes & Opportunities */}
        <div className="animate-float-smooth mb-12 md:mb-16 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl text-center mb-2">
            <span className="text-white">Prizes & </span>
            <span className="text-cyan-400">Opportunities</span>
          </h3>
          <p className="text-center text-yellow-400 text-lg md:text-xl mb-6 md:mb-8">FREE REGISTRATION</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
            <div className="animate-card bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-500/40 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
              <div className="text-5xl md:text-6xl mb-3 animate-bounce"></div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-2xl md:text-3xl font-bold mb-3 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">Cash Prizes</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-lg md:text-xl font-semibold leading-relaxed drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Exciting cash prizes for the top 2 teams</div>
            </div>
            <div className="animate-card bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-500/40 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
              <div className="text-5xl md:text-6xl mb-3 animate-bounce"></div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-xl md:text-2xl font-bold mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Free Internship for</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse">10 Students</div>
              <div className="text-gray-300 text-sm font-medium">Live Project Internships</div>
            </div>
          </div>
        </div>

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
              <span className="text-sm md:text-lg">Industry-relevant problem statements</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">Cash prizes sponsored by ACUTIX SOFT LLP</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">Live Project Internship opportunities</span>
            </div>
            <div className="animate-card flex items-start gap-3 text-white bg-black/30 p-3 md:p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-lg md:text-xl">✔</span>
              <span className="text-sm md:text-lg">E-Certificate will be provided for the Participants</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}