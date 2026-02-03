import React, { useState, useEffect } from 'react';
import acutixLogo from 'figma:asset/1fa495b39f1c3d98a68aec11e57c680d5566de7b.png';
import velsLogo from 'figma:asset/e3ca48b59b673339fcde79baecddafdcd1ae5491.png';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-02-09T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl">
        {/* Partnership Logos */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 flex-wrap">
          <img src={acutixLogo} alt="Acutix Soft LLP" className="h-16 md:h-20 object-contain" />
          <span className="text-cyan-400 text-3xl md:text-4xl">×</span>
          <img src={velsLogo} alt="VELS University" className="h-16 md:h-20 object-contain bg-white/90 rounded-lg px-4 py-2" />
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-4">
          <span className="text-cyan-400">MEDNEXUS</span>
          <span className="text-pink-500">'26</span>
          <span className="text-white"> - HACKATHON</span>
        </h1>
        
        <p className="text-cyan-400 text-lg mb-2">February 9, 2026</p>
        <p className="text-white text-xl mb-8">A Low-Code /No-Code Innovation Challenge for Healthcare Systems</p>
        
        <div className="mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all">
            Register now
          </button>
          <p className="text-yellow-400 text-lg mt-3">FREE REGISTRATION</p>
        </div>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 min-w-[120px]">
            <div className="text-4xl text-white mb-2">{timeLeft.days}</div>
            <div className="text-gray-400 text-sm">Days</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 min-w-[120px]">
            <div className="text-4xl text-white mb-2">{timeLeft.hours}</div>
            <div className="text-gray-400 text-sm">Hours</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 min-w-[120px]">
            <div className="text-4xl text-white mb-2">{timeLeft.minutes}</div>
            <div className="text-gray-400 text-sm">Minutes</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 min-w-[120px]">
            <div className="text-4xl text-white mb-2">{timeLeft.seconds}</div>
            <div className="text-gray-400 text-sm">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}