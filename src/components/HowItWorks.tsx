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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Náš jednoduchý 3-krokový proces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od nápadu až po hotové video – celý proces je s nami jednoduchý a bez stresu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step number */}
              <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {step.number}
              </div>
              
              <div className="pt-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Average delivery: 21 days</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;