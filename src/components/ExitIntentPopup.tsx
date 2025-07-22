import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  business: string;
  personality: string;
  email: string;
}

const ExitIntentPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    business: '',
    personality: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // ❌ removed Ecomail tracker

  // 2) Exit-intent listener (once per session)
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

  // 3) Send via EmailJS (replaces Ecomail hidden form)
  const submitToEcomail = ({ business, personality, email }: FormData) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!

    const params = {
      name: business,
      email,
      businessName: business,
      brandTone: personality,
      newsletter: '1',
      comingFrom: 'popup',
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitToEcomail(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Email send failed', err);
      alert('Failed to send. Please try again.');
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={closePopup}
      />

      {/* popup */}
      <div
        className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Step 1 */}
        {step === 1 && !submitted && (
          <>
            <h2 className="text-center text-2xl font-extrabold mb-4">
              POČKAJTE! Neodchádzajte bez svojho bezplatného návrhu maskota!
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Odpovedzte na 3 jednoduché otázky a naši umelci vám zdarma navrhnú maskota na mieru.
            </p>
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white py-3 rounded-full mb-2 transform hover:scale-105 transition"
              onClick={() => setStep(2)}
            >
              ✨ Chcem bezplatný návrh maskota
            </button>
            <button
              className="block mx-auto text-sm text-gray-400 underline"
              onClick={closePopup}
            >
              Nie, nemám záujem.
            </button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && !submitted && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-extrabold mb-4">
              Super! Poďme vdýchnuť život vašej značke.
            </h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Ako sa volá vaša firma?</label>
              <input
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500"
                placeholder="napr. Sladké Sny Café"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Opíšte osobnosť vašej značky</label>
              <input
                name="personality"
                value={formData.personality}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500"
                placeholder="napr. Veselá, priateľská, energická"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 font-medium">Kam vám môžeme poslať návrh?</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500"
                placeholder="vas@email.com"
              />
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white py-3 rounded-full transform hover:scale-105 transition mb-4"
            >
              🎨 Poslať návrh!
            </button>

            <div className="flex items-center justify-center mb-4">
              <input
                id="gdpr-agree-popup"
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="mr-2 w-5 h-5 accent-purple-600"
                required
              />
              <label htmlFor="gdpr-agree-popup" className="text-sm cursor-pointer">
                Súhlasím s ochranou osobných údajov
              </label>
            </div>

            <button
              type="button"
              className="block mx-auto text-sm text-gray-400 underline"
              onClick={closePopup}
            >
              Nie, nemám záujem.
            </button>
          </form>
        )}

        {/* Success */}
        {submitted && (
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-teal-600 mb-4">
              Hotovo! Naši umelci sa už pripravujú.
            </h2>
            <p className="text-gray-700">
              Váš bezplatný návrh maskota je na ceste. Sledujte svoju e-mailovú schránku do 2–3 pracovných dní!
            </p>
            <button
              className="mt-6 text-sm text-gray-400 underline"
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
