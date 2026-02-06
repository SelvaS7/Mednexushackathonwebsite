import image_b7b9f7bb278f99cbaed681c51c2e3683f24cba44 from 'figma:asset/b7b9f7bb278f99cbaed681c51c2e3683f24cba44.png';
import image_e3ca48b59b673339fcde79baecddafdcd1ae5491 from 'figma:asset/e3ca48b59b673339fcde79baecddafdcd1ae5491.png';
import image_502e164215457556b0b9aa333c8fc217b56a6cc1 from 'figma:asset/502e164215457556b0b9aa333c8fc217b56a6cc1.png';
import image_0c79ead2911f3a802255d747c282d969b59834a8 from 'figma:asset/0c79ead2911f3a802255d747c282d969b59834a8.png';
import velsHeader from 'figma:asset/8f8ee5cdaad9e9ef99c6ea42a44c0f22196b94bf.png';
import velsAccreditation from 'figma:asset/2798a6e9d4907a68040ab5ab697a86a3b0020b7a.png';
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

  const [animationPhase, setAnimationPhase] = useState(0);

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

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('mednexusAnimationShown');
    
    if (!hasSeenAnimation) {
      setTimeout(() => setAnimationPhase(1), 100);   // Diagnostic HUD (0.5s)
      setTimeout(() => setAnimationPhase(2), 600);   // Logo entrance (1.2s)
      setTimeout(() => setAnimationPhase(3), 1800);  // Diagnostic scan + fusion (0.6s)
      setTimeout(() => setAnimationPhase(4), 2400);  // Particle transformation (0.6s)
      setTimeout(() => setAnimationPhase(5), 3000);  // Title reveal with ECG (0.7s)
      setTimeout(() => setAnimationPhase(6), 3700);  // Content fade
      setTimeout(() => {
        setAnimationPhase(7);
        sessionStorage.setItem('mednexusAnimationShown', 'true');
      }, 4200);
    } else {
      setAnimationPhase(7);
    }
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 relative overflow-hidden"
    >
      <style>{`
        @keyframes medicalFloat {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
            transform: translateY(90vh) translateX(10px) scale(1);
          }
          90% {
            opacity: 0.4;
            transform: translateY(10vh) translateX(-10px) scale(1);
          }
          100% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
        }

        /* Phase 1: Diagnostic HUD Interface */
        @keyframes hudFadeIn {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }

        @keyframes scanLineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        /* Phase 2: Magnetic precision entrance */
        @keyframes medicalEntranceLeft {
          0% {
            transform: translateX(-70vw) scale(0.95);
            opacity: 0;
            filter: blur(4px) brightness(0.7);
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
            filter: blur(0px) brightness(1);
          }
        }

        @keyframes medicalEntranceRight {
          0% {
            transform: translateX(70vw) scale(0.95);
            opacity: 0;
            filter: blur(4px) brightness(0.7);
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
            filter: blur(0px) brightness(1);
          }
        }

        /* Medical visuals during entrance */
        @keyframes ecgWave {
          0% { 
            transform: translateX(-100%); 
            opacity: 0;
          }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { 
            transform: translateX(100%); 
            opacity: 0;
          }
        }

        @keyframes dnaHelix {
          0% { 
            transform: scaleY(0) rotate(0deg);
            opacity: 0;
          }
          50% { 
            opacity: 0.5;
            transform: scaleY(1) rotate(180deg);
          }
          100% { 
            transform: scaleY(0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes neuralConnect {
          0% { 
            stroke-dashoffset: 100;
            opacity: 0;
          }
          50% { 
            opacity: 0.7;
          }
          100% { 
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes moleculeNode {
          0%, 100% { 
            transform: scale(0);
            opacity: 0;
          }
          50% { 
            transform: scale(1);
            opacity: 0.6;
          }
        }

        /* Phase 3: Diagnostic scan */
        @keyframes diagnosticScan {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        /* Phase 3: MRI-style circular ripple */
        @keyframes mriPulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }

        @keyframes mriPulseSecondary {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        /* Phase 4: Particle disintegration and reorganization */
        @keyframes logoDisintegrate {
          0% {
            transform: scale(1);
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            transform: scale(0.6);
            opacity: 0;
            filter: blur(6px);
          }
        }

        @keyframes particleScatter {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes particleReform {
          0% {
            transform: translate(var(--tx), var(--ty)) scale(0.3);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        /* Phase 5: Title materialization - letter by letter */
        @keyframes titleAssemble {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
            filter: blur(6px);
            letter-spacing: -0.1em;
          }
          70% {
            opacity: 1;
            transform: translateY(0) scale(1.01);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
            letter-spacing: 0.02em;
          }
        }

        @keyframes cyanGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.4)) drop-shadow(0 0 16px rgba(34, 211, 238, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 24px rgba(34, 211, 238, 0.3));
          }
        }

        /* ECG spike animation */
        @keyframes ecgSpike {
          0% { 
            transform: scaleX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          20% { 
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
          }
          100% { 
            opacity: 0;
          }
        }

        @keyframes ecgHeartbeat {
          0% { d: path("M 0 0 L 100 0"); }
          10% { d: path("M 0 0 L 30 0 L 35 -20 L 40 30 L 45 -10 L 50 0 L 100 0"); }
          20% { d: path("M 0 0 L 100 0"); }
        }

        /* Surgical light sweep */
        @keyframes surgicalSweep {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        /* Logo stable return */
        @keyframes stableReturn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="text-center max-w-4xl w-full relative">
        {/* Phase 1: Diagnostic HUD - Authority builder */}
        {animationPhase === 1 && (
          <>
            {/* Scanning grid lines */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(34, 211, 238, 0.1) 49px, rgba(34, 211, 238, 0.1) 50px),
                  repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(34, 211, 238, 0.1) 49px, rgba(34, 211, 238, 0.1) 50px)
                `,
                animation: 'gridPulse 0.5s ease-in-out'
              }}
            />
            {/* Horizontal scan line */}
            <div 
              className="absolute top-1/2 h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), transparent)',
                animation: 'scanLineMove 0.5s ease-out'
              }}
            />
            {/* Corner HUD elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-cyan-500/30" style={{ animation: 'hudFadeIn 0.5s ease-in-out' }} />
            <div className="absolute top-4 right-4 w-12 h-12 border-r border-t border-cyan-500/30" style={{ animation: 'hudFadeIn 0.5s ease-in-out' }} />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-cyan-500/30" style={{ animation: 'hudFadeIn 0.5s ease-in-out' }} />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-cyan-500/30" style={{ animation: 'hudFadeIn 0.5s ease-in-out' }} />
          </>
        )}

        {/* Phase 2: Medical visuals during logo entrance */}
        {animationPhase === 2 && (
          <>
            {/* ECG wave */}
            <svg className="absolute top-1/3 left-0 w-full h-20 pointer-events-none" style={{ animation: 'ecgWave 1.2s ease-in-out' }}>
              <path d="M 0 40 L 100 40 L 120 40 L 125 20 L 130 60 L 135 30 L 140 40 L 200 40" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="1" fill="none" />
            </svg>
            
            {/* DNA helix visualization */}
            <svg className="absolute top-1/2 left-1/4 w-20 h-40 pointer-events-none" style={{ animation: 'dnaHelix 1.2s ease-in-out' }}>
              <path d="M 10 0 Q 15 20 10 40 Q 5 60 10 80" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" fill="none" />
              <path d="M 10 0 Q 5 20 10 40 Q 15 60 10 80" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" fill="none" />
            </svg>

            {/* Molecular nodes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-cyan-400/40 pointer-events-none"
                style={{
                  left: 20 + i * 15 + '%',
                  top: 45 + (i % 2 ? 5 : -5) + '%',
                  animation: `moleculeNode 1.2s ease-in-out ${i * 0.1}s`
                }}
              />
            ))}
          </>
        )}

        {/* Phase 3: Diagnostic scan line before fusion */}
        {animationPhase === 3 && (
          <div 
            className="absolute top-1/2 h-0.5 w-1 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 1) 50%, transparent)',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)',
              animation: 'diagnosticScan 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 100
            }}
          />
        )}

        {/* Phase 3: MRI-style circular ripples at fusion point */}
        {animationPhase === 3 && (
          <>
            <div 
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(34, 211, 238, 0.6)',
                animation: 'mriPulse 0.6s ease-out',
                zIndex: 99
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(236, 72, 153, 0.4)',
                animation: 'mriPulseSecondary 0.6s ease-out 0.15s',
                zIndex: 98
              }}
            />
          </>
        )}

        {/* Phase 4: Particle scattering effect */}
        {animationPhase === 4 && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {[...Array(80)].map((_, i) => {
              const angle = (i / 80) * Math.PI * 2;
              const distance = 50 + Math.random() * 100;
              const tx = Math.cos(angle) * distance;
              const ty = Math.sin(angle) * distance;
              return (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 rounded-full bg-cyan-400"
                  style={{
                    '--tx': `${tx}px`,
                    '--ty': `${ty}px`,
                    animation: `particleReform 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${i * 0.005}s`,
                    left: '50%',
                    top: '50%'
                  } as React.CSSProperties}
                />
              );
            })}
          </div>
        )}

        {/* Partnership Logos */}
        <div 
          className="flex flex-row items-center justify-center gap-0.5 sm:gap-3 md:gap-8 mb-2 md:mb-8 relative px-0 sm:px-4"
          style={{
            opacity: animationPhase >= 5 ? 1 : 0,
            animation: animationPhase === 5 ? 'stableReturn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
            transition: 'opacity 0.4s ease-in-out'
          }}
        >
          {/* VELS University - Top Left */}
          <div 
            className="flex flex-col gap-0 flex-shrink-0 items-center"
            style={{
              animation: animationPhase === 2 ? 'medicalEntranceLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' :
                         animationPhase === 4 ? 'logoDisintegrate 0.6s ease-in forwards' : 'none',
              opacity: (animationPhase >= 2 && animationPhase < 4) || animationPhase >= 5 ? 1 : 0
            }}
          >
            <img src={image_b7b9f7bb278f99cbaed681c51c2e3683f24cba44} alt="VELS University" className="h-24 sm:h-20 md:h-28 lg:h-32 object-contain max-w-[200px] sm:max-w-none mx-[0px] my-[8px] md:my-[20px]" />
            <img src={velsAccreditation} alt="Ranked and Accredited by" className="h-auto w-full max-w-[200px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-md object-contain px-0 sm:px-[70px] py-[0px] -mt-2" />
          </div>

          {/* In Collaboration */}
          <div 
            className="flex flex-col items-center justify-center flex-shrink-0 px-0 sm:px-4 md:px-6"
            style={{
              opacity: animationPhase >= 5 ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <div className="relative">
              <div className="text-[8px] sm:text-xs md:text-sm text-cyan-400/80 mb-0 sm:mb-1 tracking-wider font-light">in</div>
              <div 
                className="text-[14px] sm:text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap leading-none"
                style={{
                  textShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
                  filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))'
                }}
              >
                Collaboration
              </div>
              <div className="text-[8px] sm:text-xs md:text-sm text-pink-400/80 mt-0 sm:mt-1 tracking-wider font-light">with</div>
              {/* Decorative elements */}
              
              
            </div>
          </div>
          
          {/* Acutix Logo */}
          <div 
            className="flex flex-col gap-0 flex-shrink-0 items-center"
            style={{
              animation: animationPhase === 2 ? 'medicalEntranceRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' :
                         animationPhase === 4 ? 'logoDisintegrate 0.6s ease-in forwards' : 'none',
              opacity: (animationPhase >= 2 && animationPhase < 4) || animationPhase >= 5 ? 1 : 0
            }}
          >
            <img 
              src={image_0c79ead2911f3a802255d747c282d969b59834a8} 
              alt="Acutix Soft LLP" 
              className="h-24 sm:h-28 md:h-36 lg:h-44 object-contain max-w-[200px] sm:max-w-[280px] md:max-w-none" 
            />
          </div>
        </div>
        
        {/* Hackathon Title - Healthcare Authority */}
        <div className="relative">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 md:mb-4 leading-tight relative whitespace-nowrap px-2"
            style={{
              animation: animationPhase === 5 ? 'titleAssemble 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards, cyanGlow 3s ease-in-out 1s infinite' : 'none',
              opacity: animationPhase >= 5 ? 1 : 0,
              textShadow: animationPhase >= 5 ? '0 0 20px rgba(34, 211, 238, 0.3), 0 1px 2px rgba(0, 0, 0, 0.8)' : 'none'
            }}
          >
            <span className="text-cyan-400 font-normal">MEDNEXUS</span>
            <span className="text-pink-500">'26</span>
            <span className="text-white"> - HACKATHON</span>
          </h1>

          {/* ECG spike beneath title */}
          {animationPhase === 5 && (
            <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-8" style={{ animation: 'ecgSpike 0.7s ease-out' }}>
              <path 
                d="M 0 15 L 80 15 L 90 15 L 95 5 L 100 25 L 105 10 L 110 15 L 200 15" 
                stroke="rgba(34, 211, 238, 0.8)" 
                strokeWidth="1.5" 
                fill="none"
                style={{ filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.6))' }}
              />
            </svg>
          )}
          
          {/* Surgical light sweep overlay */}
          {animationPhase === 5 && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.15) 55%, transparent 100%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '-200% center',
                animation: 'surgicalSweep 0.8s 0.5s ease-out',
                mixBlendMode: 'overlay'
              }}
            />
          )}
        </div>
        
        <div
          style={{
            opacity: animationPhase >= 6 ? 1 : 0,
            transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}
        >
          <p className="text-white text-base md:text-lg mb-2 mt-4">February 9, 2026</p>
          <a 
            href="https://maps.app.goo.gl/yCQW1NGAJkU1xLBa8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-base md:text-lg mb-2 underline hover:underline"
          >
            <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span>VISTAS - Pallavaram</span>
          </a>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-4">National Level Healthcare AI Hackathon</p>
          
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
      </div>
    </section>
  );
}