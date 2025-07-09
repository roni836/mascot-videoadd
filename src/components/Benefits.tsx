import React from 'react';
import { Lightbulb, TrendingUp, Target, ArrowDown } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Lightbulb,
      emoji: '💡',
      title: 'Nezabudnuteľný branding',
      description: 'Odlíšte sa s unikátnou a priateľskou postavičkou, ktorú si vaši zákazníci okamžite zapamätajú a vytvoria si k nej vzťah.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Vyššia miera interakcie',
      description: 'Animované reklamy sú zábavné a ľahko sa šíria. Získajte až 3x viac interakcií v porovnaní so statickým obsahom.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Target,
      emoji: '🎯',
      title: 'Ideálne pre malé a stredné firmy',
      description: 'Cenovo dostupné a plne prispôsobené pre váš segment. Žiadne generické šablóny, len osobnosť vašej značky.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zákazníci milujú príbehy. Váš maskot je ten ich hrdina.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premeňte svoj biznis na ikonickú značku, ktorú si zákazníci nielen zapamätajú, ale aj zamilujú a ktorej budú bezpodmienečne dôverovať.
          </p>
          <div className="flex justify-center mt-8">
            <button
              className="border-2 border-[#6B21A8] text-[#6B21A8] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6B21A8] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
              onClick={() => {
                const el = document.getElementById('gallery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="w-5 h-5" />
              Pozrieť ukážky
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nezabudnuteľný Branding & Vzťah na celý život</h3>
              <p className="text-gray-600 leading-relaxed">Odlíšte sa od davu s jedinečnou a priateľskou postavičkou, ktorú si vaši zákazníci okamžite obľúbia a vytvoria si k nej hlboký emocionálny vzťah. Maskot je tvár, hlas a srdce vašej značky, ktorá sa nezabúda.</p>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Magnet na Pozornosť & Virálny Potenciál</h3>
              <p className="text-gray-600 leading-relaxed">Animované reklamy sú prirodzene zábavné, ľahko sa zdieľajú a šíria ako lavína! Získajte <strong>až 3x viac interakcií</strong> a premeňte pasívnych divákov na aktívnych fanúšikov, ktorí šíria vaše posolstvo.</p>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cenovo Dostupná Originalita pre Každý Biznis</h3>
              <p className="text-gray-600 leading-relaxed">Žiadne generické šablóny, len 100% vaša osobnosť! Naše riešenia sú ideálne pre malé a stredné firmy, pretože ponúkajú plne prispôsobený a cenovo efektívny spôsob, ako vyniknúť v akomkoľvek segmente.</p>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;