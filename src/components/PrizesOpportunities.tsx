import React from 'react';

export function PrizesOpportunities() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-float-smooth bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl text-center mb-6 md:mb-8">
            <span className="text-white">Prizes & </span>
            <span className="text-cyan-400">Opportunities</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-center max-w-3xl mx-auto">
            <div className="animate-card bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-500/40 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
              <div className="text-5xl md:text-6xl mb-3 animate-bounce">🏆</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-2xl md:text-3xl font-bold mb-3 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">Cash Prizes</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-lg md:text-xl font-semibold leading-relaxed drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Exciting Cash Prizes For The Top 2 Teams</div>
            </div>
            <div className="animate-card bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-500/40 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
              <div className="text-5xl md:text-6xl mb-3 animate-bounce">💼</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-xl md:text-2xl font-bold mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Free Internship For</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse">10 Students</div>
              <div className="text-gray-300 text-sm font-medium">Live Project Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
