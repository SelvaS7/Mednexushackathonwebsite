import React from 'react';

export function AboutCompanies() {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl text-center mb-12">
          <span className="text-white">ABOUT </span>
          <span className="text-cyan-400">US</span>
        </h2>
        
        <div className="space-y-12">
          {/* About Acutix Soft LLP */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
            <h3 className="text-3xl mb-6">
              <span className="text-cyan-400">About Acutix Soft LLP</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Acutix Soft LLP is a technology-driven organization focused on building enterprise solutions, 
              low-code/no-code platforms, and scalable digital frameworks. The company works closely with 
              academic institutions to promote industry-relevant innovation, live projects, and hands-on 
              skill development. Through mentorship and real-world problem statements, Acutix helps students 
              and young engineers build solutions that meet professional and ethical industry standards.
            </p>
          </div>
          
          {/* About VISTAS */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
            <h3 className="text-3xl mb-6">
              <span className="text-cyan-400">About Vels Institute of Science, Technology and Advanced Studies (VISTAS)</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              VISTAS is a Deemed-to-be University established under the VAELS Educational Trust, with a 
              strong mission to empower learners through quality education and holistic development. The 
              university focuses on developing Knowledge, Skills, and Attitude (KSA), preparing students 
              to become industry-ready professionals. With modern infrastructure, flexible academic systems, 
              and a culture of innovation and inclusivity, VISTAS provides an environment that encourages 
              learning, research, and real-world application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
