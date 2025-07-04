import React from 'react';
import { Check, Star, Zap, Clock, Users } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addOns = [
    { name: 'Vlastný dizajn maskota', price: '89 €', icon: Star },
    { name: 'Tvorba scenára', price: '50 €', icon: Users },
    { name: 'Skrátené verzie pre siete', price: '29 €', icon: Zap },
    { name: 'Expresné dodanie', price: '99 €', icon: Clock },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jednoduchý cenník, veľké výsledky
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Náš základný balík začína na 500 € za 30-sekundovú reklamu. Potrebujete viac? Jednoducho si pridajte, čo potrebujete.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Package */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border-2 border-purple-200">
            <div className="bg-gradient-to-r from-purple-600 to-teal-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Štartovací balík</h3>
                  <p className="text-purple-100">Perfektný pre väčšinu firiem</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white">500&nbsp;€</div>
                  <p className="text-purple-100 text-sm">bez DPH</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Čo je v cene:</h4>
                  <ul className="space-y-3">
                    {[
                      'Animovaná 30-sekundová reklama s maskotom na mieru',
                      'Základný voiceover a zvukové efekty',
                      'Dodanie videa v HD kvalite (1080p)',
                      'Kompletné komerčné práva',
                      'Až 3 kolá revízií',
                      'Dodanie do 21 dní'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Ideálne pre:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reklama na sociálnych sieťach</li>
                    <li>• Úvodné sekcie webstránok</li>
                    <li>• E-mailové kampane</li>
                    <li>• Prezentácie na veľtrhoch</li>
                    <li>• Budovanie povedomia o značke</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Začať teraz
                </button>
                <button className="flex-1 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
                  Pozrieť ukážky
                </button>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Obľúbené doplnky
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all duration-200 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <addon.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                  <div className="text-2xl font-bold text-purple-600">{addon.price}</div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-500 mt-6">
              All prices shown without VAT. Mix and match add-ons to create your perfect package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;