import React from 'react';
import ascasLogo from 'figma:asset/e20dd04fd3ff734db1674050b2a78506b3784433.png';
import youtubeLogo from 'figma:asset/63ed5cd5f654df8c571ff5525345d613ed1e2ae8.png';

export function Partners() {
  return (
    <section id="partners" className="py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-3 md:mb-4">
          <span className="text-white">CERTIFICATES &</span>
          <span className="text-cyan-400"> TROPHIES SPONSERS</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 md:mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Medical Partner - ASCAS */}
          <a
            href="https://www.ascasclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-card animate-float-smooth bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border-2 border-purple-500/40 rounded-2xl p-5 md:p-6 hover:border-purple-500/70 transition-all hover:shadow-xl hover:shadow-purple-500/30 cursor-pointer group text-[rgb(0,0,0)] font-bold font-normal not-italic no-underline text-justify"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img 
                    src={ascasLogo} 
                    alt="ASCAS Fertility & Women's Centre" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                  />
                </div>
              </div>
              
              <p className="text-purple-400 text-center text-xs md:text-sm font-semibold mb-2 uppercase tracking-wide">
                Medical Partner
              </p>
              
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  ASCAS Fertility & Women's Centre
                </span>
              </h3>
              
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3 text-justify">
                ASCAS is a specialized fertility and women's healthcare centre supporting research-driven and ethical AI adoption in reproductive medicine and obstetrics. The centre provides real clinical workflows and validation support for innovative healthcare technologies.
              </p>
              
              <div className="mt-auto pt-3 border-t border-purple-500/30">
                <p className="text-purple-400 text-center text-xs md:text-sm font-semibold group-hover:text-purple-300 transition-colors">
                  Click to visit website →
                </p>
              </div>
            </div>
          </a>

          {/* YouTube Media Partner - Doctor Mommies */}
          <a
            href="https://youtube.com/@doctormommies?si=yALegWQvjLqsxOrW"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-card animate-float-delay-1 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border-2 border-cyan-500/40 rounded-2xl p-5 md:p-6 hover:border-cyan-500/70 transition-all hover:shadow-xl hover:shadow-cyan-500/30 cursor-pointer group text-justify"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img 
                    src={youtubeLogo} 
                    alt="YouTube - Doctor Mommies" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                  />
                </div>
              </div>
              
              <p className="text-cyan-400 text-center text-xs md:text-sm font-semibold mb-2 uppercase tracking-wide">
                Youtube Media Partner
              </p>
              
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Doctor Mommies Channel
                </span>
              </h3>
              
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3 text-justify">
                Dr. Abinaya is a pediatrician and lactation specialist practicing in Namakkal, is a postgraduate from the prestigious PGIMER, Chandigarh and Dr. Aishwarya is Gynecologist and Fertility specialist practicing in Chennai and is a post-graduate from the prestigious AIIMS New Delhi.
              </p>
              
              <div className="mt-auto pt-3 border-t border-cyan-500/30">
                <p className="text-cyan-400 text-center text-xs md:text-sm font-semibold group-hover:text-cyan-300 transition-colors">
                  Click to visit channel →
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}