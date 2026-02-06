import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function EventSchedule() {
  const [expandedRound, setExpandedRound] = useState<number | null>(null);

  const schedule = [
    { 
      round: 'Round 1', 
      title: 'Solution Proposal Submission',
      date: '9th February',
      mode: 'Online',
      description: [
        'Teams must submit a detailed solution proposal for one of the given problem statements.',
        'Clearly explain the healthcare problem being addressed and why it matters in real clinical or patient settings.',
        'Describe the proposed AI-driven approach, including how the system supports doctors or patients without replacing human judgment.',
        'Outline the end-to-end workflow of the solution, from input data to final output.',
        'Highlight the feasibility of implementing the solution in real-world healthcare environments, considering data availability, integration, and deployment practicality.',
        'No coding is required in this round.',
        'Evaluation focuses on clinical relevance, innovation, feasibility, and completeness of the proposal.',
        'Shortlisted teams will advance to the next round.'
      ]
    },
    { 
      round: 'Round 2', 
      title: 'Technical Design Review',
      date: '16th February',
      mode: 'Online',
      description: [
        'Shortlisted teams will present a detailed technical design and system architecture.',
        'Explain the data flow, including data ingestion, preprocessing, and decision-making logic.',
        'Describe the AI approach used (machine learning, rule-based, or hybrid models).',
        'Clearly explain how the system ensures explainable and interpretable outputs, especially for clinical decision support.',
        'Justify technology choices with respect to scalability, reliability, and real-world deployment feasibility.',
        'Jury members may ask technical questions and provide feedback to help teams refine their solution.',
        'Evaluation emphasizes technical implementation strength, explainable AI, and feasibility.'
      ]
    },
    { 
      round: 'Round 3', 
      title: 'Prototype Evaluation',
      date: '2nd & 3rd March',
      mode: 'Online',
      description: [
        'Teams must submit a working prototype demonstrating the core functionality of their solution.',
        'The prototype should include:',
        '• Data ingestion (forms, datasets, or simulated inputs)',
        '• AI-based decision logic',
        '• Recommendations or alerts',
        '• Clear explanation for outputs',
        '• A basic but usable web or mobile interface',
        'The system must demonstrate a complete end-to-end workflow, not just isolated features.',
        'Teams should show how the solution can realistically be used by clinics, doctors, or patients.',
        'Evaluation focuses on functional correctness, usability, completeness, and real-world feasibility.',
        'Only teams with stable and practical implementations will qualify for the final round.'
      ]
    },
    { 
      round: 'Round 4', 
      title: 'Live Hackathon & Final Demo',
      date: '13th March',
      mode: 'Offline (On-Campus)',
      description: [
        'Finalists will participate in a live on-campus hackathon.',
        'Teams will further enhance and finalize their prototype within the given time.',
        'Final submission must include:',
        '• A working prototype',
        '• System architecture diagram',
        '• A 3-minute technical pitch',
        '• A realistic demonstration scenario',
        'Teams must clearly explain:',
        '• How the system works',
        '• How it fits into real healthcare workflows',
        '• The feasibility of real-world implementation and adoption',
        'Final evaluation considers all judging criteria, with strong emphasis on impact, feasibility, and execution quality.',
        'Winners will be announced at the end of the event.'
      ]
    }
  ];

  const toggleRound = (index: number) => {
    setExpandedRound(expandedRound === index ? null : index);
  };

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
            {schedule.map((event, index) => {
              const isExpanded = expandedRound === index;
              
              return (
                <div key={index} className="relative">
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-1/2 border-4 border-purple-900 z-10"></div>
                  
                  <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="text-pink-400 text-lg md:text-xl mb-1 md:mb-2">{event.round}</div>
                      <div className="text-cyan-400 text-sm md:text-base">{event.date}</div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <div 
                        className={`animate-card bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg md:rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-purple-500/80 shadow-lg shadow-purple-500/20' : 'hover:border-purple-500/60'
                        }`}
                        onClick={() => toggleRound(index)}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="text-white text-base md:text-xl mb-1">{event.title}</h3>
                            {!isExpanded && (
                              <p className="text-gray-400 text-xs md:text-sm italic">...more info</p>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 md:w-6 md:h-6 text-pink-400 flex-shrink-0 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="border-t border-purple-500/30 pt-4">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-xs md:text-sm px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/40">
                                🖥️ {event.mode}
                              </span>
                            </div>
                            
                            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
                              {event.description.map((item, idx) => (
                                <li key={idx} className={`${item.startsWith('•') ? 'ml-4' : ''}`}>
                                  {!item.startsWith('•') && !item.endsWith(':') && '• '}
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
