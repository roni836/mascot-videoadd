import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Nášmu klientovi aktuálne pripravujeme
        </h2>
        <div className="text-lg md:text-xl text-purple-700 mb-6">(...psst! už čoskoro nový maskot!)</div>
        {/* Loader */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-sm text-gray-700 font-medium">pripravujeme...</span>
            <span className="text-green-600 font-bold text-base">78%</span>
          </div>
          <div className="w-full max-w-xl h-4 bg-gray-200 rounded-full overflow-hidden relative">
            <div
              className="h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-700 animate-pulse-bar"
              style={{ width: '78%' }}
            ></div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/pripravujeme.webp"
            alt="Pripravujeme pre klienta"
            className="w-full h-auto object-cover"
            style={{ maxHeight: 480 }}
          />
        </div>
        {/* Duplicated CTA: Info text and button directly below coming soon image */}
        <div className="text-center mt-8 mb-0">
          <p className="text-gray-600 mb-6">
            Vyplňte formulár a získajte návrh vášho maskota na mieru. Postaráme sa o unikát.
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
      </div>
      <style>{`
        @keyframes pulse-bar {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-bar {
          animation: pulse-bar 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default ComingSoon; 