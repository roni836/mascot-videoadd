import React from 'react';

const ResultShowcase: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-teal-50 to-purple-50">
      <div className="relative overflow-hidden">
        {/* Confetti background - full width, contained */}
        <img
          src="/confetti3.webp"
          alt="confetti background"
          className="pointer-events-none select-none absolute left-0 bottom-0 w-full h-auto max-w-none opacity-60 z-0"
          style={{ minWidth: '100vw', filter: 'blur(0.5px)' }}
        />
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center mb-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Vytvárame maskotov, ktorí sa stávajú hviezdami.
          </h2>
          <div className="text-gray-600 text-base md:text-lg mb-2">
            Podobného maskota môžeme vytvoriť aj pre vašu značku – prijímame akúkoľvek výzvu!
          </div>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 relative z-10">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="aspect-video bg-gradient-to-br from-teal-50 to-purple-50 rounded-lg overflow-hidden relative">
              <img
                src="/vysledok2.webp"
                alt="Najlepšie výsledky na Facebooku"
                className="w-full h-full object-contain"
                style={{ maxHeight: 540 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultShowcase; 