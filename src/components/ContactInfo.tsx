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
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          <span className="text-cyan-400">Contact Information</span>
        </h2>
        <p className="text-white/80 text-center mb-12 text-lg">
          Please contact: Our Student Co-Ordinator's
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className={`animate-card bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-5 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20 ${
                index === coordinators.length - 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-full border border-cyan-400/50">
                  <User className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-1">{coordinator.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{coordinator.dept}</p>
                  <a 
                    href={`tel:+91${coordinator.phone}`}
                    className="text-cyan-400 text-base font-mono hover:text-cyan-300 transition-colors cursor-pointer"
                  >
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