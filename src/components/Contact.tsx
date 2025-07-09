import React, { useState, useEffect } from 'react';
import { Send, Upload, Calendar, CheckCircle } from 'lucide-react';
import { packages, addOns } from './Pricing';

type ContactProps = {
  selectedPackageKey?: string;
  selectedAddOns?: string[];
};

type AddOn = { key: string; name: string; price: number; icon: React.ReactNode };

const Contact: React.FC<ContactProps> = ({ selectedPackageKey, selectedAddOns = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    product: '',
    brandTone: '',
    email: '',
    package: selectedPackageKey || packages[0].key,
    addOns: selectedAddOns,
  });
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (selectedPackageKey && selectedPackageKey !== formData.package) {
      setFormData((prev) => ({ ...prev, package: selectedPackageKey }));
    }
    // Sync add-ons if prop changes
    if (
      selectedAddOns &&
      (selectedAddOns.length !== (formData.addOns?.length || 0) ||
        !selectedAddOns.every((k) => formData.addOns?.includes(k)))
    ) {
      setFormData((prev) => ({ ...prev, addOns: selectedAddOns }));
    }
  }, [selectedPackageKey, selectedAddOns]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        businessName: '',
        website: '',
        product: '',
        brandTone: '',
        email: '',
        package: packages[0].key,
        addOns: [],
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name === 'addOns') {
      // Only checkboxes for addOns
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        addOns: checked
          ? [...(prev.addOns || []), value]
          : (prev.addOns || []).filter((k: string) => k !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You! We'll Be In Touch Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your request and will send you a custom concept idea within 24 hours.
            </p>
            <div className="bg-green-50 rounded-2xl p-6">
              <p className="text-green-800 font-medium">
                📧 Check your email for our welcome message and next steps!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xl md:text-2xl font-semibold text-purple-200 mb-2">Váš sen, naša animácia: Od nápadu k výsledku v troch jednoduchých krokoch.</div>
          <div className="text-base md:text-lg text-purple-100 mb-4">Od nápadu až po hotové video – celý proces je s nami jednoduchý a bez stresu.</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Začnime vašu úspešnú príbehovú kampaň
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-4">
            Vyplňte formulár a my vám pošleme bezplatný koncept maskota na mieru vašej značky.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form container */}
          <div className="bg-white rounded-3xl shadow-2xl w-full lg:w-1/2 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vyberte si balík *
                </label>
                <div className="mb-2">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full">Uvítacia zľava -10%</span>
                </div>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-purple-400 bg-purple-50 rounded-xl text-purple-700 font-semibold focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  {packages.map(pkg => (
                    <option key={pkg.key} value={pkg.key}>
                      {pkg.name} ({pkg.duration}) – {(pkg.price * 0.9).toFixed(0)} €
                    </option>
                  ))}
                </select>
              </div>
              {/* Doplnky (Add-ons) checkboxes - moved here */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pridať doplnky (voliteľné)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(addOns as AddOn[]).map((addon) => (
                    <label key={addon.key} className="flex items-center gap-3 bg-purple-50 rounded-xl px-4 py-3 cursor-pointer border border-purple-100 hover:border-purple-400 transition-all">
                      <input
                        type="checkbox"
                        name="addOns"
                        value={addon.key}
                        checked={formData.addOns?.includes(addon.key) || false}
                        onChange={handleChange}
                        className="accent-purple-600 w-5 h-5 rounded"
                      />
                      <span className="text-sm text-purple-800 font-medium">{addon.name} <span className="text-purple-500 font-semibold">+{addon.price} €</span></span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vaše meno *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Ján Novák"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Názov firmy *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Vaša firma s.r.o."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Webstránka / Sociálne siete
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://vasafirma.sk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Čo predávate? *
                </label>
                <textarea
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Opíšte vaše produkty alebo služby..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opíšte tón vašej značky (Voliteľné)
                </label>
                <textarea
                  name="brandTone"
                  value={formData.brandTone}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Veselý, profesionálny, dôveryhodný..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mailová adresa *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="jan@vasafirma.sk"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-4 rounded-xl font-semibold text-base hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                disabled={!agreed}
              >
                <Send className="w-5 h-5" />
                CHCEM BEZPLATNÝ KONCEPT A ZAČAŤ SVOJ PRÍBEH!
              </button>
              <div className="flex items-center justify-center mt-4 mb-2">
                <input
                  id="gdpr-agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  required
                  className="w-5 h-5 accent-purple-600 rounded mr-2"
                />
                <label htmlFor="gdpr-agree" className="text-sm text-gray-700 select-none cursor-pointer">
                  Súhlasím s ochranou osobných údajov
                </label>
              </div>
              <div className="text-center mt-3">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
                  Dostupných 13 z 15 miest tento mesiac
                </span>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Alebo si rezervujte hovor →</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Dohodnúť termín
                </button>
              </div>
            </div>
          </div>
          {/* Sticky info panel */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 self-start bg-gradient-to-br from-purple-600 to-teal-600 p-8 lg:p-12 text-white rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Čo dostanete zadarmo?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bezplatný koncept maskota</h4>
                  <p className="text-purple-100">Vytvoríme koncept maskota na základe vašej značky</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bezplatná konzultácia</h4>
                  <p className="text-purple-100">30-minútový hovor na prebratie vašej vízie a požiadaviek</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cenová ponuka na mieru</h4>
                  <p className="text-purple-100">Cenová ponuka prispôsobená vašim potrebám</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-xl">
              <p className="text-sm text-purple-100">
                💡 <strong>Bonus zadarmo:</strong> Pridáme vám aj 3 nápady na príspevky na sociálne siete s vaším novým maskotom!
              </p>
            </div>
            <img src="/badge.webp" alt="100% Garancia spokojnosti" className="mx-auto mt-6 w-32 h-auto drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;