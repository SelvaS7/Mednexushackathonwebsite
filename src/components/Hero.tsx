import image_e3ca48b59b673339fcde79baecddafdcd1ae5491 from 'figma:asset/e3ca48b59b673339fcde79baecddafdcd1ae5491.png';
import image_502e164215457556b0b9aa333c8fc217b56a6cc1 from 'figma:asset/502e164215457556b0b9aa333c8fc217b56a6cc1.png';
import image_0c79ead2911f3a802255d747c282d969b59834a8 from 'figma:asset/0c79ead2911f3a802255d747c282d969b59834a8.png';
import velsHeader from 'figma:asset/8f8ee5cdaad9e9ef99c6ea42a44c0f22196b94bf.png';
import velsAccreditation from 'figma:asset/57e90e930d262dc76deb5d81c1f7e1b6bb21845b.png';
import React, { useState, useEffect } from 'react';
import acutixLogo from 'figma:asset/1fa495b39f1c3d98a68aec11e57c680d5566de7b.png';

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
          <img src={image_0c79ead2911f3a802255d747c282d969b59834a8} alt="Acutix Soft LLP" className="h-24 md:h-32 object-contain" />
          <span className="text-cyan-400 text-3xl md:text-4xl">×</span>
          <div className="flex flex-col gap-2">
            <img src={image_e3ca48b59b673339fcde79baecddafdcd1ae5491} alt="VELS University" className="h-24 md:h-32 object-contain" />
            <img src={velsAccreditation} alt="Ranked and Accredited by" className="h-auto w-full max-w-md object-contain" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-4">
          <span className="text-cyan-400 font-normal">MEDNEXUS</span>
          <span className="text-pink-500">'26</span>
          <span className="text-[rgb(255,255,255)] text-[64px]"> - HACKATHON</span>
        </h1>
        
        <p className="text-[rgb(255,255,255)] text-lg mb-2">February 9, 2026</p>
        <p className="text-[rgb(255,255,255)] text-xl mb-8">A Low-Code /No-Code Innovation Challenge for Healthcare Systems</p>
        
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