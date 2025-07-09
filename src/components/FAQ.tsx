import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Budem mať plné práva na maskota?',
      answer: 'Áno! Po dokončení projektu získate plné komerčné práva na finálne video aj samotný dizajn maskota. Je 100 % váš.'
    },
    {
      question: 'Už mám maskota. Viete ho len animovať?',
      answer: 'Samozrejme! Radi vdýchneme život aj existujúcim postavičkám. Stačí nám poslať podklady a o animáciu sa postaráme.'
    },
    {
      question: 'Čo ak sa mi prvý návrh nebude páčiť?',
      answer: 'Vaša spokojnosť je pre nás prioritou. V cene máte až 3 kolá revízií a na začiatku spolu detailne doladíme koncept, aby sme vystihli vašu predstavu.'
    },
    {
      question: 'V akom formáte dostanem video?',
      answer: 'Dostanete video vo vysokom rozlíšení (1080p) vo formáte MP4, vhodné pre sociálne siete, web aj prezentácie. Na požiadanie vieme dodať aj iné formáty.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Otázky, ktoré si kladú všetci
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Odpovede na najčastejšie otázky o našich maskotových videách.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Stále máte otázky?
            </h3>
            <p className="text-gray-600 mb-4">
              Sme tu pre vás! Kontaktujte nás a odpovieme na všetky vaše otázky.
            </p>
            <a
              href="mailto:cyril@leonlogic.sk"
              className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Kontaktovať nás
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;