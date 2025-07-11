import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Monika O.',
      business: 'TortyM',
      text: 'Naša reklama s maskotom mala 5x väčší dosah ako čokoľvek predtým! Zákazníci milujú nášho Cupkáčika a často ju spomínajú pri návšteve.',
      rating: 5,
      avatar: '👩‍🍳'
    },
    {
      name: 'Igor K.',
      business: '',
      text: "Je to ako mať ambasádora značky vo videu! Maskot skvele vysvetľuje naše služby a robí nás prístupnejšími ako konkurencia.",
      rating: 5,
      avatar: '👨‍🔧'
    },
    {
      name: 'Mária Š.',
      business: '',
      text: 'Animovaná postavička dokonale vystihuje energiu nášej značky. Noví členovia často hovoria, že sa pridali práve kvôli nášmu zábavnému maskotovému videu na Instagrame!',
      rating: 5,
      avatar: '👩‍💼'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            "Zmenili nám biznis!" - Skutočné príbehy úspechu
          </h2>
          <p className="text-xl text-gray-600">
            Pozrite si, ako naše maskotové videá zmenili biznis našich klientov. Reálne výsledky, reálne príbehy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-purple-200 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Customer info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.business}</div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Desiatky</div>
              <div className="text-sm text-gray-600">spokojných klientov</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">100%</div>
              <div className="text-sm text-gray-600">garancia spokojnosti</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">14</div>
              <div className="text-sm text-gray-600">Dodanie do 14 dní</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Dôverujú nám firmy ako vy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;