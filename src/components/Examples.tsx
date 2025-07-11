import React from 'react';
import { ShoppingBag, Dumbbell, Home, Wrench, Baby, Store } from 'lucide-react';
import FacebookPostMockup from './FacebookPostMockup';
import InstagramPostMockup from './InstagramPostMockup';
import TikTokPostMockup from './TikTokPostMockup';
import AudioWaveformPlayer from './AudioWaveformPlayer';
import LazyVideo from './LazyVideo';

const Examples = () => {
  const industries = [
    {
      icon: ShoppingBag,
      emoji: '🧁',
      title: 'Cukrárne a kaviarne',
      description: 'Ideálne pre sladké obchody, pekárne a útulné kaviarne.',
      color: 'from-pink-400 to-yellow-300',
      videoUrl: '/cupkac.mp4'
    },
    {
      icon: Dumbbell,
      emoji: '🏋️‍♂️',
      title: 'Fitness a štúdiá',
      description: 'Skvelé pre fitnescentrá, jogové štúdiá a športové značky.',
      color: 'from-teal-400 to-blue-300',
      videoUrl: '/pitbull.mp4'
    },
    {
      icon: Home,
      emoji: '🏠',
      title: 'Realitné kancelárie',
      description: 'Vyniknite na trhu s nehnuteľnosťami s priateľským maskotom.',
      color: 'from-orange-400 to-yellow-200',
      videoUrl: '/sova.mp4'
    },
    {
      icon: Wrench,
      emoji: '🔧',
      title: 'Požičovne strojov',
      description: 'Zviditeľnite svoju požičovňu a urobte ju prístupnejšou.',
      color: 'from-gray-400 to-yellow-200',
      videoUrl: '/pozicovna.mp4'
    },
    {
      icon: Baby,
      emoji: '🧸',
      title: 'Produkty pre deti',
      description: 'Potešte deti aj rodičov hravým maskotom.',
      color: 'from-yellow-400 to-pink-200',
      videoUrl: '/toys.mp4'
    },
    {
      icon: Store, // or another relevant icon if you prefer
      emoji: '🍽️',
      title: 'Gastro a reštaurácie',
      description: 'Odlíšte svoju reštauráciu alebo gastro prevádzku originálnym maskotom!',
      color: 'from-red-400 to-yellow-200',
      videoUrl: '/sef.mp4'
    }
  ];

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pozrite si, ako maskoti oživujú biznis v každom odvetví
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od pekární po fitness štúdiá, naši maskoti sa dokonale prispôsobia atmosfére vašej značky a pomôžu vám vyniknúť.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                    <LazyVideo
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={industry.videoUrl} type="video/mp4" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {industry.title} Mascot
                        </span>
                      </div>
                    </LazyVideo>
                  </div>
                </div>
              </div>
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">▶</span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered E-commerce container below the grid */}
        <div className="flex justify-center mt-8">
          <div className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer max-w-md w-full">
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">E-commerce</h3>
              <p className="text-gray-600 mb-6">Zvýšte osobnosť a dôveryhodnosť vášho e-shopu.</p>
              <div className="bg-white rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <LazyVideo
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/racoon.mp4" type="video/mp4" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">E-commerce Mascot</span>
                    </div>
                  </LazyVideo>
                </div>
              </div>
            </div>
            {/* Hover indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm">▶</span>
            </div>
          </div>
        </div>

        {/* Audio waveform player section above social media mockups */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Ukážky hlasových stôp pre Lip-Sync</h3>
          <div className="text-center text-gray-600 mb-6">Aj takto skvelo môže znieť vaša postavička! Vypočujte si naše ukážky a inšpirujte sa pre vaše animované projekty.</div>
          <AudioWaveformPlayer src="/maskot3.mp3" />
          <AudioWaveformPlayer src="/maskot1.mp3" />
          <AudioWaveformPlayer src="/maskot2.mp3" />
        </section>

        {/* CTA: Info text and button moved here */}
        <div className="text-center mt-4 mb-0">
          <p className="text-gray-600 mb-6">
            Nenašli ste svoje odvetvie? Vytvoríme maskota na mieru pre akýkoľvek typ podnikania!
          </p>
          <button
            className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Objednať maskota
          </button>
        </div>

        {/* Social media video post mockups for client imagination */}
        <div className="mt-20 flex flex-col md:flex-row gap-8 items-start justify-center">
          <div className="w-full max-w-md mx-auto mb-8 md:mb-0 hidden md:block">
            <InstagramPostMockup />
          </div>
          <div className="w-full max-w-md lg:max-w-xl mx-auto mb-8 md:mb-0 block">
            <FacebookPostMockup />
          </div>
          <div className="w-full max-w-xs sm:max-w-sm mx-auto hidden md:block">
            <TikTokPostMockup />
          </div>
        </div>
        {/* Duplicated CTA: Info text and button directly under cinema image */}
        <div className="text-center mt-8 mb-0">
          <p className="text-gray-600 mb-6">
            Nenašli ste svoje odvetvie? Vytvoríme maskota na mieru pre akýkoľvek typ podnikania!
          </p>
          <button
            className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Objednať maskota
          </button>
        </div>
        {/* Audio waveform player section will be inserted here by App.tsx */}
        {/* Move the call-to-action below the audio section */}
      </div>
    </section>
  );
};

export default Examples;