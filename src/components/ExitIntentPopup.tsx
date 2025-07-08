import React, { useState, useEffect } from 'react';

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    business: '',
    personality: '',
    email: '',
    name: '',
    businessName: '',
    website: '',
    product: '',
    brandTone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Load tracking script once
  useEffect(() => {
    if (document.getElementById('ecomail-tracker')) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.id = 'ecomail-tracker';
    script.innerHTML = `
      (function(p,l,o,w,i,n,g){
        if(!p[i]){
          p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
          p.GlobalSnowplowNamespace.push(i);
          p[i] = function(){ (p[i].q = p[i].q || []).push(arguments) };
          p[i].q = p[i].q || [];
          n = l.createElement(o);
          g = l.getElementsByTagName(o)[0];
          n.async = 1;
          n.src = "//d70shl7vidtft.cloudfront.net/ecmtr-2.4.2.js";
          g.parentNode.insertBefore(n, g);
        }
      }(window, document, "script", "//d70shl7vidtft.cloudfront.net/ecmtr-2.4.2.js", "ecotrack"));

      window.ecotrack('newTracker', 'cf', 'd2dpiwfhf3tz0r.cloudfront.net', { appId: 'leonlogic' });
      window.ecotrack('setUserIdFromLocation', 'ecmid');
      window.ecotrack('trackPageView');
    `;
    document.body.appendChild(script);
  }, []);

  // Exit intent listener (once per session)
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

  const submitToEcomail = (data: typeof formData) => {
    const form = document.createElement('form');
    form.action = 'https://leonlogic.ecomailapp.cz/public/subscribe/1/43c2cd496486bcc27217c3e790fb4088';
    form.method = 'POST';
    form.style.display = 'none';

    const addField = (name: string, value: string) => {
      const input = document.createElement('input');
      input.name = name;
      input.value = value;
      input.type = 'hidden';
      form.appendChild(input);
    };

    addField('name', data.name || data.business); // fallback
    addField('email', data.email);
    addField('businessName', data.business);
    addField('website', data.website);
    addField('product', data.product);
    addField('brandTone', data.personality);
    addField('newsletter', '1');
    addField('comingFrom', 'popup');

    document.body.appendChild(form);
    form.submit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitToEcomail(formData);
    setSubmitted(true);
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">WAIT! Don't Leave Without Your Free Mascot Idea!</h2>
            <p className="text-gray-700 text-base mb-8 text-center">Answer 3 simple questions and our artists will sketch a custom mascot concept for your brand, 100% free. No commitment.</p>
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white text-lg font-semibold py-4 rounded-full shadow-lg hover:scale-105 transition-transform mb-4"
              onClick={() => setStep(2)}
            >
              ✨ Get My Free Mascot Concept
            </button>
            <button
              className="block text-sm text-gray-400 hover:text-gray-600 underline mx-auto"
              onClick={closePopup}
              tabIndex={0}
            >
              No thanks, I'm not interested.
            </button>
          </>
        )}
        {/* Step 2: Questionnaire */}
        {step === 2 && !submitted && (
          <form className="w-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center">Awesome! Let's bring your brand to life.</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">What is your business name?</label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g. Sweet Dreams Café"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Describe your brand's personality...</label>
              <input
                type="text"
                name="personality"
                value={formData.personality}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g. Fun, friendly, energetic"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">Where should we send your free concept?</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="you@email.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white text-lg font-semibold py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              🎨 Send My Concept!
            </button>
            <button
              className="block text-sm text-gray-400 hover:text-gray-600 underline mx-auto mt-4"
              onClick={closePopup}
              type="button"
              tabIndex={0}
            >
              No thanks, I'm not interested.
            </button>
          </form>
        )}
        {/* Step 3: Success Message */}
        {submitted && (
          <div className="w-full text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-4">Success! Our artists are warming up.</h2>
            <p className="text-gray-700 text-base mb-2">Your free mascot concept is being created. Keep an eye on your inbox—you'll receive it in 2-3 business days!</p>
            <button
              className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup; 