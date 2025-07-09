import React, { useState, useEffect } from 'react';

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ business: '', personality: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Only show once per session
  useEffect(() => {
    if (sessionStorage.getItem('exitPopupShown')) return;
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 40) {
        setVisible(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        document.removeEventListener('mouseout', handleMouseOut);
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  const closePopup = () => setVisible(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity" onClick={closePopup}></div>
      {/* Pop-up Window */}
      <div className="relative z-10 w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn flex flex-col items-center">
        {/* Step 1: The Hook */}
        {step === 1 && !submitted && (
          <>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">POČKAJTE! Neodchádzajte bez svojho bezplatného návrhu maskota!</h2>
            <p className="text-gray-700 text-base mb-8 text-center">Odpovedzte na 3 jednoduché otázky a naši umelci vám zdarma navrhnú maskota na mieru vašej značky. Žiadny záväzok.</p>
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white text-lg font-semibold py-4 rounded-full shadow-lg hover:scale-105 transition-transform mb-4"
              onClick={() => setStep(2)}
            >
              ✨ Chcem bezplatný návrh maskota
            </button>
            <button
              className="block text-sm text-gray-400 hover:text-gray-600 underline mx-auto"
              onClick={closePopup}
              tabIndex={0}
            >
              Nie, nemám záujem.
            </button>
          </>
        )}
        {/* Step 2: Questionnaire */}
        {step === 2 && !submitted && (
          <form className="w-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">Super! Poďme vdýchnuť život vašej značke.</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Ako sa volá vaša firma?</label>
              <input
                type="text"
                name="business"
                value={form.business}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="napr. Sladké Sny Café"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Opíšte osobnosť vašej značky...</label>
              <input
                type="text"
                name="personality"
                value={form.personality}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="napr. Veselá, priateľská, energická"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">Kam vám môžeme poslať návrh?</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="vas@email.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white text-lg font-semibold py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              disabled={!agreed}
            >
              🎨 Poslať návrh!
            </button>
            <div className="flex items-center justify-center mt-4 mb-2">
              <input
                id="gdpr-agree-popup"
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                required
                className="w-5 h-5 accent-purple-600 rounded mr-2"
              />
              <label htmlFor="gdpr-agree-popup" className="text-sm text-gray-700 select-none cursor-pointer">
                Súhlasím s ochranou osobných údajov
              </label>
            </div>
            <button
              className="block text-sm text-gray-400 hover:text-gray-600 underline mx-auto mt-4"
              onClick={closePopup}
              type="button"
              tabIndex={0}
            >
              Nie, nemám záujem.
            </button>
          </form>
        )}
        {/* Step 3: Success Message */}
        {submitted && (
          <div className="w-full text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-4">Hotovo! Naši umelci sa už pripravujú.</h2>
            <p className="text-gray-700 text-base mb-2">Váš bezplatný návrh maskota je na ceste. Sledujte svoju e-mailovú schránku – návrh dostanete do 2-3 pracovných dní!</p>
            <button
              className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
              onClick={closePopup}
            >
              Zavrieť
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup; 