import React from 'react';

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Prizes & Opportunities */}
        <div className="animate-float-smooth mb-12 md:mb-16 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl text-center mb-2">
            <span className="text-white">Prizes & </span>
            <span className="text-cyan-400">Opportunities</span>
          </h3>
          <p className="text-center text-yellow-400 text-lg md:text-xl mb-6 md:mb-8">FREE REGISTRATION</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="animate-card bg-black/30 rounded-xl md:rounded-2xl p-5 md:p-6 border border-yellow-500/30">
              <div className="text-white text-lg md:text-xl mb-2">First Prize</div>
              <div className="text-yellow-400 text-2xl md:text-3xl">₹4,000/-</div>
            </div>
            <div className="animate-card bg-black/30 rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-400/30">
              <div className="text-white text-lg md:text-xl mb-2">Second Prize</div>
              <div className="text-gray-300 text-2xl md:text-3xl">₹2,000/-</div>
            </div>
            <div className="animate-card bg-black/30 rounded-xl md:rounded-2xl p-5 md:p-6 border border-cyan-500/30 sm:col-span-2 md:col-span-1">
              <div className="text-white text-lg md:text-xl mb-2">Internships</div>
              <div className="text-cyan-400 text-2xl md:text-3xl">10 Students</div>
              <div className="text-gray-300 text-sm mt-2">Live Project Internships</div>
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
        
        <div>
          <h3 className="text-3xl md:text-4xl text-center mb-8 md:mb-12">
            <span className="text-white">FEATURED </span>
            <span className="text-cyan-400">EVENT</span>
          </h3>
          
          <div className="max-w-md mx-auto animate-float-delay-1">
            <div className="animate-card bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-pink-500/50 transition-all cursor-pointer">
              <div className="h-32 md:h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg md:rounded-xl mb-4"></div>
              <h4 className="text-white text-lg md:text-xl mb-2">MEDNEXUS'26 HACKATHON</h4>
              <p className="text-gray-400 text-xs md:text-sm">Innovate and transform healthcare with cutting-edge technology solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}