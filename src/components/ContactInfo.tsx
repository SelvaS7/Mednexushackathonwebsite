import React from 'react';
import { User } from 'lucide-react';

export function ContactInfo() {
  const coordinators = [
    { name: 'Selvakumar S', dept: 'Dept of AI&DS', phone: '6374663588' },
    { name: 'Prasanth M', dept: 'Dept of AI&DS', phone: '8233523023' },
    { name: 'Dharini Kavya', dept: 'Dept of AI&DS', phone: '7604851080' },
    { name: 'Akshara S', dept: 'Dept of IT', phone: '9345204369' },
    { name: 'Sowmiya E', dept: 'Dept of AI&DS', phone: '8838002150' }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-3 md:mb-4">
          <span className="text-cyan-400">Contact Information</span>
        </h2>
        <p className="text-white/80 text-center mb-8 md:mb-12 text-base md:text-lg">
          Please contact: Our Student Co-Ordinator's
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 max-w-2xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className={`animate-card bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg md:rounded-xl p-2 md:p-3 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20 ${
                index === coordinators.length - 1 ? 'sm:col-span-2 md:col-span-2 md:max-w-xs md:mx-auto' : ''
              }`}
            >
              <div className="flex items-center gap-2 md:gap-2.5">
                <div className="bg-cyan-500/20 p-1.5 md:p-2 rounded-full border border-cyan-400/50">
                  <User className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-sm md:text-base font-semibold mb-0.5">{coordinator.name}</h3>
                  <p className="text-gray-400 text-xs mb-0.5 md:mb-1">{coordinator.dept}</p>
                  <a 
                    href={`tel:+91${coordinator.phone}`}
                    className="inline-flex items-center gap-1.5 text-cyan-400 text-xs md:text-sm font-mono hover:text-cyan-300 hover:underline active:text-cyan-200 transition-colors cursor-pointer touch-manipulation py-0.5"
                    aria-label={`Call ${coordinator.name} at +91 ${coordinator.phone}`}
                  >
                    <span className="text-cyan-400/70">📞</span>
                    +91-{coordinator.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}