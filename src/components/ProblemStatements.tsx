import React from 'react';

export function ProblemStatements() {
  const problems = [
    {
      id: '1',
      title: 'Clinical Decision Assistant for Fertility Treatment',
      category: 'Software',
      theme: 'AI in Healthcare',
      description: 'Build a decision-support system that analyzes patient parameters and suggests optimized fertility treatment protocols. The system must accept structured patient inputs such as age, AMH, hormone levels, and medical history. It should compare patient data with similar patient cohorts and suggest treatment plan options with clear explanations for each recommendation. The system must always allow doctor override, ensuring clinicians have final authority.',
      focus: 'Hybrid AI (rules + machine learning), similarity search, explainable AI outputs.'
    },
    {
      id: '2',
      title: 'Patient Companion for IVF Treatment Compliance',
      category: 'Software',
      theme: 'AI in Healthcare',
      description: 'Develop an intelligent patient-facing system designed to improve IVF treatment adherence and patient confidence. The system must provide daily treatment guidance, medication reminders with clear instructions, and contextual responses to patient queries. It should reduce dependency on clinic calls and actively track patient compliance throughout the treatment journey.',
      focus: 'Conversational AI, workflow engine, and user-centric UX design.'
    },
    {
      id: '3',
      title: 'Pregnancy Monitoring & Risk Alert System',
      category: 'Software',
      theme: 'AI in Healthcare',
      description: 'Create a maternal health monitoring platform for clinics and primary care centres. The system must collect periodic vitals and symptom data, detect abnormal patterns, generate early warning alerts, and display a clear risk score. All alerts must include interpretable reasoning to support clinical understanding and decision-making.',
      focus: 'Time-series analysis, anomaly detection, and explainable alert mechanisms.'
    }
  ];

  return (
    <section id="problem-statements" className="py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl text-center mb-3 md:mb-4">
          <span className="text-white">PROBLEM </span>
          <span className="text-cyan-400">STATEMENTS</span>
        </h2>
        
        <p className="text-center text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
          Choose your challenge and build the future of healthcare AI
        </p>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border-2 border-purple-500/40 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 border-b-2 border-purple-500/50">
                  <th className="px-4 py-4 text-left text-cyan-400 text-sm font-bold uppercase tracking-wide">
                    Problem Statement ID
                  </th>
                  <th className="px-4 py-4 text-left text-cyan-400 text-sm font-bold uppercase tracking-wide">
                    Title of the Problem
                  </th>
                  <th className="px-4 py-4 text-left text-cyan-400 text-sm font-bold uppercase tracking-wide">
                    Category
                  </th>
                  <th className="px-4 py-4 text-left text-cyan-400 text-sm font-bold uppercase tracking-wide">
                    Theme
                  </th>
                  <th className="px-4 py-4 text-left text-cyan-400 text-sm font-bold uppercase tracking-wide">
                    Problem Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {problems.map((problem, index) => (
                  <tr 
                    key={problem.id}
                    className={`border-b border-purple-500/30 hover:bg-purple-900/30 transition-colors ${
                      index === problems.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <td className="px-4 py-4 text-white font-bold text-lg align-top">
                      {problem.id}
                    </td>
                    <td className="px-4 py-4 text-white font-semibold align-top">
                      {problem.title}
                    </td>
                    <td className="px-4 py-4 text-gray-300 align-top">
                      {problem.category}
                    </td>
                    <td className="px-4 py-4 text-gray-300 align-top">
                      {problem.theme}
                    </td>
                    <td className="px-4 py-4 text-gray-300 text-sm leading-relaxed text-justify align-top">
                      {problem.description}
                      <div className="mt-3 pt-3 border-t border-purple-500/30">
                        <span className="text-purple-400 font-semibold">Engineering Focus: </span>
                        <span className="text-gray-300">{problem.focus}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {problems.map((problem) => (
            <div 
              key={problem.id}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border-2 border-purple-500/40 rounded-2xl p-5 hover:border-purple-500/70 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-xl w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {problem.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">{problem.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-xs font-semibold">
                      {problem.category}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-xs font-semibold">
                      {problem.theme}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-3 text-justify">
                {problem.description}
              </p>
              
              <div className="pt-3 border-t border-purple-500/30">
                <span className="text-purple-400 font-semibold text-sm">Engineering Focus: </span>
                <span className="text-gray-300 text-sm">{problem.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
