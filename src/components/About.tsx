import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Prizes & Opportunities */}
        <div className="mb-16 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
          <h3 className="text-3xl text-center mb-2">
            <span className="text-white">Prizes & </span>
            <span className="text-cyan-400">Opportunities</span>
          </h3>
          <p className="text-center text-yellow-400 text-xl mb-8">FREE REGISTRATION</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-black/30 rounded-2xl p-6 border border-yellow-500/30">
              <div className="text-white text-xl mb-2">First Prize</div>
              <div className="text-yellow-400 text-3xl">₹6,000/-</div>
            </div>
            <div className="bg-black/30 rounded-2xl p-6 border border-gray-400/30">
              <div className="text-white text-xl mb-2">Second Prize</div>
              <div className="text-gray-300 text-3xl">₹4,000/-</div>
            </div>
            <div className="bg-black/30 rounded-2xl p-6 border border-cyan-500/30">
              <div className="text-white text-xl mb-2">Internships</div>
              <div className="text-cyan-400 text-3xl">10 Students</div>
              <div className="text-gray-300 text-sm mt-2">Live Project Internships</div>
            </div>
          </div>
        </div>

        {/* Why Participate */}
        <div className="mb-16">
          <h3 className="text-3xl text-center mb-8">
            <span className="text-white">Why </span>
            <span className="text-cyan-400">Participate?</span>
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 text-white bg-black/30 p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-xl">✔</span>
              <span className="text-lg">Industry-relevant problem statements</span>
            </div>
            <div className="flex items-start gap-3 text-white bg-black/30 p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-xl">✔</span>
              <span className="text-lg">Cash prizes sponsored by ACUTIX SOFT LLP</span>
            </div>
            <div className="flex items-start gap-3 text-white bg-black/30 p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-xl">✔</span>
              <span className="text-lg">Live Project Internship opportunities</span>
            </div>
            <div className="flex items-start gap-3 text-white bg-black/30 p-4 rounded-xl border border-purple-500/20">
              <span className="text-cyan-400 text-xl">✔</span>
              <span className="text-lg">E-Certificate will be provided for the Participants</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-4xl text-center mb-12">
            <span className="text-white">FEATURED </span>
            <span className="text-cyan-400">EVENT</span>
          </h3>
          
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/50 transition-all cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-4"></div>
              <h4 className="text-white text-xl mb-2">MEDNEXUS'26 HACKATHON</h4>
              <p className="text-gray-400 text-sm">Innovate and transform healthcare with cutting-edge technology solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}