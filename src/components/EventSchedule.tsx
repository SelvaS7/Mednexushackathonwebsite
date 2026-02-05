import React from 'react';

export function EventSchedule() {
  const schedule = [
    { 
      round: 'Round 1', 
      title: 'Solution Proposal Submission',
      date: '9th February'
    },
    { 
      round: 'Round 2', 
      title: 'Technical Design Review',
      date: '16th February'
    },
    { 
      round: 'Round 3', 
      title: 'Prototype Evaluation',
      date: '2nd & 3rd March'
    },
    { 
      round: 'Round 4', 
      title: 'Live Hackathon & Final Demo',
      date: '13th March'
    }
  ];

  return (
    <section id="event" className="py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl animate-float-delay-2">
        <h2 className="text-3xl md:text-5xl text-center mb-3 md:mb-4">
          <span className="text-white">EVENT </span>
          <span className="text-cyan-400">SCHEDULE</span>
        </h2>
        
        <p className="text-center text-gray-300 mb-8 md:mb-12 text-sm md:text-base">
          From ideas to impact, one step at a time!
        </p>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-6 md:space-y-8">
            {schedule.map((event, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-1/2 border-4 border-purple-900"></div>
                
                <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="text-pink-400 text-lg md:text-xl mb-1 md:mb-2">{event.round}</div>
                    <div className="text-cyan-400 text-sm md:text-base">{event.date}</div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="animate-card bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-purple-500/60 transition-all">
                      <h3 className="text-white text-base md:text-xl">{event.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}