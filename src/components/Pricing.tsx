import React, { useState } from 'react';
import { Check, Star, User, Zap, Clock, Plus } from 'lucide-react';

export const packages = [
  {
    key: 'short',
    name: 'Krátke video',
    label: 'Video do 30 sekúnd',
    price: 390,
    priceText: '390 €',
    duration: 'do 30 sekúnd',
    features: [
      'Animované video s maskotom na mieru',
      'Základný voiceover a zvukové efekty',
      'Dodanie videa v HD kvalite (1080p)',
      'Kompletné komerčné práva',
      'Až 3 kolá revízií',
      'Dodanie do 21 dní'
    ]
  },
  {
    key: 'medium',
    name: 'Stredné video',
    label: 'Video do 60 sekúnd',
    price: 490,
    priceText: '490 €',
    duration: 'do 60 sekúnd',
    features: [
      'Animované video s maskotom na mieru',
      'Základný voiceover a zvukové efekty',
      'Dodanie videa v HD kvalite (1080p)',
      'Kompletné komerčné práva',
      'Až 3 kolá revízií',
      'Dodanie do 21 dní'
    ]
  },
  {
    key: 'long',
    name: 'Dlhé video',
    label: 'Video do 90 sekúnd',
    price: 590,
    priceText: '590 €',
    duration: 'do 90 sekúnd',
    features: [
      'Animované video s maskotom na mieru',
      'Základný voiceover a zvukové efekty',
      'Dodanie videa v HD kvalite (1080p)',
      'Kompletné komerčné práva',
      'Až 3 kolá revízií',
      'Dodanie do 21 dní'
    ]
  }
];

export const addOns = [
  { key: 'shorts', name: 'Skrátené verzie pre siete', price: 30, icon: <Zap className="w-8 h-8 text-purple-400" /> },
  { key: 'script', name: 'Tvorba scenára a príbehu na mieru', price: 70, icon: <User className="w-8 h-8 text-purple-400" /> },
  { key: 'mascot', name: '8x príspevkov na soc. siete', price: 90, icon: <Star className="w-8 h-8 text-purple-400" /> },
  { key: 'express', name: 'Expresné dodanie do 7 dní', price: 100, icon: <Clock className="w-8 h-8 text-purple-400" /> },
];

type PricingProps = {
  onSelectPackage: (key: string) => void;
  selectedAddOns: string[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<string[]>>;
};

const Pricing: React.FC<PricingProps> = ({ onSelectPackage, selectedAddOns, setSelectedAddOns }) => {
  const handleAddOnToggle = (key: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-base md:text-lg text-teal-700 font-semibold mb-2">Investícia, ktorá sa Vám vráti:</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jasný cenník, ohromujúce výsledky.
            <div className="mt-2 text-lg font-semibold text-purple-600">Uvítacia zľava pre prvých 15 zakazníkov</div>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Vyberte si balík, ktorý vám najviac vyhovuje. Všetky balíky obsahujú kompletné služby od návrhu po finálne video.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <div key={pkg.key} className={`bg-white rounded-3xl shadow-xl border-2 flex flex-col ${idx === 1 ? 'border-purple-500 scale-105 z-10 border-4 relative -mt-8' : 'border-gray-200'} flex-1 min-w-[360px] w-full`}>
              <div className="px-8 py-6">
                <div className="flex flex-col items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-teal-600 mb-1">{pkg.label}</span>
                  <span className={`text-xs font-semibold ${idx === 1 ? 'text-purple-500' : 'text-gray-400'}`}>{idx === 0 ? 'Získajte pozornosť hneď!' : idx === 1 ? 'Rozšírte svoj príbeh!' : 'Dominujte trhu s príbehom!'}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                {/* Discount badge */}
                <div className="mb-2">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full">Uvítacia zľava -10%</span>
                </div>
                {/* Price with discount */}
                <div className="flex items-center gap-3 justify-start mt-2 mb-1">
                  <span className="text-2xl font-semibold text-gray-400 line-through">{pkg.priceText}</span>
                  <span className={`text-4xl font-bold ${idx === 1 ? 'text-purple-600' : 'text-teal-600'}`}>{(pkg.price * 0.9).toFixed(0)} €</span>
                </div>
                <p className={`text-sm ${idx === 1 ? 'text-purple-400' : 'text-gray-400'}`}>bez DPH</p>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">{feature}</span></li>
                  ))}
                </ul>
                <button onClick={() => { onSelectPackage(pkg.key); scrollToContact(); }} className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full text-center text-lg leading-snug">
                  CHCEM TENTO BALÍK
                </button>
                <div className="mt-2 text-xs text-gray-500 text-center font-medium">
                  {idx === 0 ? 'a prilákať nových zákazníkov!' : idx === 1 ? 'a posilniť svoj branding!' : 'a získať maximálny dosah!'}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-8 text-sm">
          Všetky ceny sú uvedené bez DPH / nie sme platitelia DPH. Nakombinujte si doplnky podľa vašich potrieb.
        </p>
        {/* Doplnky Section */}
        <div id="gallery" className="max-w-5xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Obľúbené doplnky</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {addOns.map(addon => {
              const selected = selectedAddOns.includes(addon.key);
              return (
                <label
                  key={addon.key}
                  className={`relative bg-white rounded-2xl border transition-all duration-200 flex flex-col items-center p-8 text-center shadow cursor-pointer select-none ${selected ? 'border-purple-500 ring-2 ring-purple-200 shadow-lg' : 'border-gray-200'}`}
                  tabIndex={0}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => handleAddOnToggle(addon.key)}
                    className="absolute top-4 right-4 w-6 h-6 accent-purple-600 rounded focus:ring-2 focus:ring-purple-400 opacity-0 cursor-pointer"
                    aria-label={`Pridať doplnok ${addon.name}`}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${selected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 border border-purple-200'}`}
                    onClick={e => { e.preventDefault(); handleAddOnToggle(addon.key); }}
                  >
                    <Plus className="w-4 h-4" /> Pridať
                  </button>
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-50 to-teal-50">{addon.icon}</div>
                  <div className="font-bold text-lg text-gray-900 mb-2">{addon.name}</div>
                  <div className="text-2xl font-bold text-purple-600">{addon.price} €</div>
                </label>
              );
            })}
          </div>
        </div>
        {/* Animated Gallery Section */}
        <div className="max-w-6xl mx-auto mt-20 mb-20 overflow-hidden relative">
          {/* Left gradient overlay */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#faf6fe] to-transparent"></div>
          {/* Right gradient overlay */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#faf6fe] to-transparent"></div>
          <div className="relative">
            <div className="flex gap-8 animate-gallery-scroll items-center">
              {[
                '/gallery/gallery1.png',
                '/gallery/gallery2.png',
                '/gallery/gallery3.png',
                '/gallery/gallery4.png',
                '/gallery/gallery5.png',
                '/gallery/gallery6.png',
                '/gallery/gallery7.png',
                '/gallery/gallery8.png',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Galéria ${i + 1}`}
                  className="h-40 w-auto rounded-2xl shadow-lg object-cover select-none pointer-events-none"
                  draggable={false}
                />
              ))}
              {/* Duplicate for seamless loop */}
              {[
                '/gallery/gallery1.png',
                '/gallery/gallery2.png',
                '/gallery/gallery3.png',
                '/gallery/gallery4.png',
                '/gallery/gallery5.png',
                '/gallery/gallery6.png',
                '/gallery/gallery7.png',
                '/gallery/gallery8.png',
              ].map((src, i) => (
                <img
                  key={`dup-${i}`}
                  src={src}
                  alt={`Galéria ${i + 1}`}
                  className="h-40 w-auto rounded-2xl shadow-lg object-cover select-none pointer-events-none"
                  draggable={false}
                />
              ))}
            </div>
            <style>{`
              @keyframes gallery-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-gallery-scroll {
                animation: gallery-scroll 32s linear infinite;
                width: max-content;
              }
            `}</style>
          </div>
        </div>
        {/* Facebook Results Section */}
        <div className="max-w-5xl mx-auto mt-20 mb-20 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Skutočné výsledky našich videí na Facebooku</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 text-center">Naše videá dosahujú virálne výsledky už v prvých dňoch kampane.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src="/dosah1.png" alt="Facebook výsledok 1" className="rounded-2xl shadow-lg max-w-md w-full object-contain mx-auto" />
              <div className="mt-4 text-center text-lg font-semibold text-purple-700">122 666 pozretí za 6 dní</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/dosah2.png" alt="Facebook výsledok 2" className="rounded-2xl shadow-lg max-w-md w-full object-contain mx-auto" />
              <div className="mt-4 text-center text-lg font-semibold text-purple-700">28 170 pozretí za 2 dni od zverejnenia</div>
            </div>
          </div>
        </div>
      </div>
      {/* Mascot image at the absolute bottom-left of the entire Pricing section */}
      <img
        src="/cupko.png"
        alt="Maskot Cupko"
        className="absolute left-0 bottom-0 z-40 w-auto max-h-[40vh] pointer-events-none select-none hidden md:block"
        style={{ objectFit: 'contain' }}
      />
    </section>
  );
};

export default Pricing;