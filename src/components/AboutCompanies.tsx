import React from 'react';

export function AboutCompanies() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-center mb-8 md:mb-12">
          <span className="text-white">ABOUT </span>
          <span className="text-cyan-400">US</span>
        </h2>
        
        <div className="space-y-8 md:space-y-12">
          {/* About Acutix Soft LLP */}
          <div className="animate-float-delay-3 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-6">
              <span className="text-cyan-400">About Acutix Soft LLP</span>
            </h3>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
              Acutix Soft LLP is a technology-driven organization focused on building enterprise solutions, 
              low-code/no-code platforms, and scalable digital frameworks. The company works closely with 
              academic institutions to promote industry-relevant innovation, live projects, and hands-on 
              skill development. Through mentorship and real-world problem statements, Acutix helps students 
              and young engineers build solutions that meet professional and ethical industry standards.
            </p>
          </div>
          
          {/* About VISTAS */}
          <div className="animate-float-delay-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-6">
              <span className="text-cyan-400">About Vels Institute of Science, Technology and Advanced Studies (VISTAS)</span>
            </h3>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
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