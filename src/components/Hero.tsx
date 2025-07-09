import React, { useEffect, useRef } from 'react';
import { Play, ArrowDown } from 'lucide-react';
import LazyVideo from './LazyVideo';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax effect for mascots
  const mascot1Ref = useRef(null);
  const mascot2Ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (mascot1Ref.current) {
        (mascot1Ref.current as HTMLElement).style.transform = `translateY(${scrollY * 0.12}px)`;
      }
      if (mascot2Ref.current) {
        (mascot2Ref.current as HTMLElement).style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-teal-50 to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Mascot SVGs - Background Layer */}
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
        {/* Cupcake Mascot - Top Right */}
        <div
          ref={mascot1Ref}
          className="absolute top-0 right-0 mt-[-60px] mr-[-60px] opacity-20 blur-sm animate-float1"
          style={{ width: 180, height: 180 }}
        >
          {/* Placeholder SVG: Cupcake */}
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="32" cy="48" rx="20" ry="10" fill="#FBBF24" />
            <ellipse cx="32" cy="38" rx="18" ry="8" fill="#F472B6" />
            <ellipse cx="32" cy="28" rx="14" ry="7" fill="#FFF" />
            <circle cx="32" cy="20" r="6" fill="#A78BFA" />
            <ellipse cx="32" cy="18" rx="2" ry="1" fill="#FBBF24" />
          </svg>
        </div>
        {/* Dumbbell Mascot - Mid Left */}
        <div
          ref={mascot2Ref}
          className="absolute top-1/3 left-0 ml-[-70px] opacity-20 blur-sm animate-float2"
          style={{ width: 140, height: 140 }}
        >
          {/* Placeholder SVG: Dumbbell */}
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="20" y="28" width="24" height="8" rx="4" fill="#4ADE80" />
            <rect x="10" y="24" width="8" height="16" rx="4" fill="#A78BFA" />
            <rect x="46" y="24" width="8" height="16" rx="4" fill="#A78BFA" />
          </svg>
        </div>
        <style>{`
          @keyframes float1 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
          @keyframes float2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(12px); }
            100% { transform: translateY(0); }
          }
          .animate-float1 { animation: float1 6.2s ease-in-out infinite; }
          .animate-float2 { animation: float2 7.1s ease-in-out infinite 1.5s; }
        `}</style>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Už vás nebaví miznúť v dave?
              <br />
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600 block mt-2">
                Oživte svoju značku s jedinečným maskotom, ktorý predáva!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Premeňte divákov na verných zákazníkov s pútavou 30-sekundovou animovanou videoreklamou, vytvorenou presne pre váš biznis. Získajte pozornosť, zvýšte interakcie a definitívne sa odlíšte od konkurencie.
            </p>
            {/* Urgency/Exclusivity Banner */}
            <div className="mx-auto lg:mx-0 my-6 flex items-center justify-center w-fit rounded-xl bg-yellow-100/80 border border-yellow-200 shadow-sm px-5 py-2 gap-2 text-base font-medium text-gray-800 backdrop-blur-sm flex items-center" style={{fontFamily: 'inherit'}}>
              <span className="text-lg">🔥</span>
              <span>
                <span className="font-semibold text-purple-700">Pozor!</span> Prijímame len
                <span className="text-3xl font-extrabold text-teal-600 mx-1 align-middle">15</span>
                nových klientov mesačne, aby sme zaručili exkluzívnu kvalitu a osobný prístup.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                CHCEM ZDARMA NEZÁVÄZNÝ KONCEPT!
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-6 justify-center lg:justify-start">
              <span className="flex items-center gap-2 font-semibold text-gray-600 text-sm">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse-dot"></span>
                Do 21 dní hotové!
              </span>
              <span className="flex items-center gap-2 font-semibold text-gray-600 text-sm">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse-dot"></span>
                100 % Originál garantovaný!
              </span>
            </div>
            <style>{`
              @keyframes pulse-dot {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.6; transform: scale(1.3); }
              }
              .animate-pulse-dot {
                animation: pulse-dot 1.2s infinite;
              }
            `}</style>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-teal-100 rounded-3xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="aspect-video bg-black rounded-xl relative overflow-hidden">
                  <LazyVideo
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  >
                    <source src="/showcase.mp4" type="video/mp4" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-teal-400/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="font-medium">Mascot Sizzle Reel</p>
                      </div>
                    </div>
                  </LazyVideo>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-600">Ukážka maskotov</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              🎯
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
              💡
            </div>
          </div>
        </div>
      </div>
      {/* Fixed mascot image, always visible bottom left */}
      <img
        src="/lion-half.png"
        alt="Maskot Lion"
        className="absolute right-0 bottom-0 z-40 w-auto max-h-[40vh] pointer-events-none select-none hidden md:block"
        style={{ objectFit: 'contain' }}
      />
    </section>
  );
};

export default Hero;