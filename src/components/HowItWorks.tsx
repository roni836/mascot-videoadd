import React from 'react';
import { Lightbulb, Wand2, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Lightbulb,
      number: '1',
      title: 'Konzultácia a návrh',
      description: 'Poviete nám o svojej značke a vízii. My na základe toho vytvoríme koncept maskota a nápad na scenár.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wand2,
      number: '2',
      title: 'Dizajn a animácia',
      description: 'Naši umelci vdýchnu vášmu maskotovi život pomocou profesionálnej animácie, hlasu a zvukových efektov.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Rocket,
      number: '3',
      title: 'Schválenie a dodanie',
      description: 'Video si pozriete, požiadate o prípadné úpravy a my vám dodáme finálne HD súbory pripravené na použitie.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="howitworks" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Váš sen, naša animácia: Od nápadu k výsledku v troch jednoduchých krokoch.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od nápadu až po hotové video – celý proces je s nami jednoduchý a bez stresu.
          </p>
          <div className="text-gray-500 text-sm mt-6">
            Priemerná doba dodania: 14 dní<br />
            100% garancia spokojnosti
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
            <div className="pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konzultácia & Kreatívny Návrh</h3>
              <p className="text-gray-600 leading-relaxed">Poviete nám o svojej značke, cieľoch a vízií. My na základe toho vytvoríme <strong>unikátny koncept maskota a pútavý scenár</strong>, ktorý bude rezonovať s vaším publikom.</p>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
            <div className="pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Majstrovská Animácia & Produkcia</h3>
              <p className="text-gray-600 leading-relaxed">Naši špičkoví umelci vdýchnu vášmu maskotovi život pomocou profesionálnej animácie, doplnkovej hudby, hlasu a zvukových efektov, ktoré <strong>maximalizujú dojem z videa.</strong></p>
            </div>
          </div>
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
            <div className="pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finálne Schválenie & Rýchle Dodanie</h3>
              <p className="text-gray-600 leading-relaxed">Video si prezriete, požiadate o prípadné úpravy (samozrejme, <strong>neobmedzene, kým nebudete 100% spokojní!</strong>) a my vám dodáme finálne HD súbory pripravené okamžite na použitie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;