import image_b7b9f7bb278f99cbaed681c51c2e3683f24cba44 from 'figma:asset/b7b9f7bb278f99cbaed681c51c2e3683f24cba44.png';
import image_e3ca48b59b673339fcde79baecddafdcd1ae5491 from 'figma:asset/e3ca48b59b673339fcde79baecddafdcd1ae5491.png';
import image_502e164215457556b0b9aa333c8fc217b56a6cc1 from 'figma:asset/502e164215457556b0b9aa333c8fc217b56a6cc1.png';
import image_0c79ead2911f3a802255d747c282d969b59834a8 from 'figma:asset/0c79ead2911f3a802255d747c282d969b59834a8.png';
import velsHeader from 'figma:asset/8f8ee5cdaad9e9ef99c6ea42a44c0f22196b94bf.png';
import velsAccreditation from 'figma:asset/57e90e930d262dc76deb5d81c1f7e1b6bb21845b.png';
import React, { useState, useEffect } from 'react';
import acutixLogo from 'figma:asset/1fa495b39f1c3d98a68aec11e57c680d5566de7b.png';
import { MapPin } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6">
      <div className="text-center max-w-4xl w-full">
        {/* Partnership Logos */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8 mb-6 md:mb-8 flex-wrap">
          <img src={image_0c79ead2911f3a802255d747c282d969b59834a8} alt="Acutix Soft LLP" className="h-24 sm:h-28 md:h-32 lg:h-40 object-contain" />
          <span className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl">×</span>
          <div className="flex flex-col gap-0">
            <img src={image_b7b9f7bb278f99cbaed681c51c2e3683f24cba44} alt="VELS University" className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain" />
            <img src={velsAccreditation} alt="Ranked and Accredited by" className="h-auto w-full max-w-[250px] sm:max-w-xs md:max-w-md object-contain" />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-4 leading-tight">
          <span className="text-cyan-400 font-normal">MEDNEXUS</span>
          <span className="text-pink-500">'26</span>
          <span className="text-[rgb(255,255,255)] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]"> - HACKATHON</span>
        </h1>
        
        <p className="text-[rgb(255,255,255)] text-base md:text-lg mb-2">February 9, 2026</p>
        <a 
          href="https://maps.app.goo.gl/yCQW1NGAJkU1xLBa8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-base md:text-lg mb-2"
        >
          <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <span>VISTAS - Pallavaram</span>
        </a>
        <p className="text-[rgb(255,255,255)] text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-4">A Low-Code /No-Code Innovation Challenge for Healthcare Systems</p>
        
        <div className="mb-8 md:mb-12">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScl1th-1kopWbRzwokbhoQsS_tvTBvUOUQd674j5Q7JatlTPg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-button animate-shine inline-block px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all"
          >
            Register now
          </a>
          <p className="text-yellow-400 text-base md:text-lg mt-3">FREE REGISTRATION</p>
        </div>
        
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap px-2">
          <div className="animate-card bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-1 md:mb-2">{timeLeft.days}</div>
            <div className="text-gray-400 text-xs md:text-sm">Days</div>
          </div>
          <div className="animate-card bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-1 md:mb-2">{timeLeft.hours}</div>
            <div className="text-gray-400 text-xs md:text-sm">Hours</div>
          </div>
          <div className="animate-card bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-1 md:mb-2">{timeLeft.minutes}</div>
            <div className="text-gray-400 text-xs md:text-sm">Minutes</div>
          </div>
          <div className="animate-card bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-1 md:mb-2">{timeLeft.seconds}</div>
            <div className="text-gray-400 text-xs md:text-sm">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}