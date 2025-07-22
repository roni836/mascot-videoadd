import React, { useState, useEffect } from 'react';
import { Send, Upload, Calendar, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { packages, addOns } from './Pricing';

interface ContactProps {
  selectedPackageKey?: string;
  selectedAddOns?: string[];
}
interface FormData {
  name: string;
  businessName: string;
  website: string;
  product: string;
  brandTone: string;
  email: string;
  phone: string;
  package: string;
  addOns: string[];
}

const Contact: React.FC<ContactProps> = ({
  selectedPackageKey,
  selectedAddOns = []
}) => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    website: '',
    product: '',
    brandTone: '',
    email: '',
    phone: '',
    package: selectedPackageKey || packages[0].key,
    addOns: selectedAddOns,
  });

  // Sync props -> state
  useEffect(() => {
    setFormData(fd => ({
      ...fd,
      package: selectedPackageKey || packages[0].key,
      addOns: selectedAddOns,
    }));
  }, [selectedPackageKey, selectedAddOns]);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleAddOnToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(fd => ({
      ...fd,
      addOns: checked
        ? [...fd.addOns, value]
        : fd.addOns.filter(key => key !== value)
    }));
  };

  const sendViaEmailJS = async (data: FormData) => {
    // Map to your EmailJS template variable names
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      businessName: data.businessName,
      website: data.website,
      product: data.product,
      brandTone: data.brandTone,
      package: data.package,
      addOns: data.addOns.join(', '),
      comingFrom: 'contact-enquiry',
      newsletter: '1'
    };

    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY! }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSending(true);
    try {
      await sendViaEmailJS(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Email send failed', err);
      alert('Failed to send. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto p-12 bg-white rounded-3xl shadow-xl text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ďakujeme! Čoskoro sa vám ozveme
          </h2>
          <p className="text-xl text-gray-600 mb-8">
           Dostali sme vašu žiadosť a do 24 hodín vám pošleme nápad na vlastný koncept.
          </p>
          <div className="bg-green-50 rounded-2xl p-6">
            <p className="text-green-800 font-medium">
              📧 Check your email for our welcome message and next steps!
            </p>
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
          <div className="bg-white rounded-3xl shadow-2xl w-full lg:w-1/2 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* package select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vyberte si balík *
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                >
                  {packages.map(pkg => (
                    <option key={pkg.key} value={pkg.key}>
                      {pkg.name} ({pkg.duration}) – {(pkg.price * 0.9).toFixed(0)} €
                    </option>
                  ))}
                </select>
              </div>

              {/* add-ons */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pridať doplnky (voliteľné)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addOns.map(addon => (
                    <label
                      key={addon.key}
                      className="flex items-center gap-3 border rounded-xl px-4 py-3"
                    >
                      <input
                        type="checkbox"
                        value={addon.key}
                        checked={formData.addOns.includes(addon.key)}
                        onChange={handleAddOnToggle}
                        className="accent-purple-600 w-5 h-5"
                      />
                      <span className="text-sm">
                        {addon.name} <strong>+{addon.price} €</strong>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* name, business */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Vaše meno *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                    placeholder="Ján Novák"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Názov firmy *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                    placeholder="Vaša firma s.r.o."
                  />
                </div>
              </div>

              {/* website */}
              <div>
                <label className="block text-sm mb-2">
                  Webstránka / Sociálne siete
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  placeholder="https://vasafirma.sk"
                />
              </div>

              {/* product */}
              <div>
                <label className="block text-sm mb-2">Čo predávate? *</label>
                <textarea
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  placeholder="Opíšte vaše produkty alebo služby..."
                />
              </div>

              {/* brand tone */}
              <div>
                <label className="block text-sm mb-2">
                  Opíšte tón vašej značky (Voliteľné)
                </label>
                <textarea
                  name="brandTone"
                  value={formData.brandTone}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  placeholder="Veselý, profesionálny, dôveryhodný..."
                />
              </div>

              {/* email */}
              <div>
                <label className="block text-sm mb-2">E-mailová adresa *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  placeholder="jan@vasafirma.sk"
                />
              </div>

              {/* phone */}
              <div>
                <label className="block text-sm mb-2">Telefónne číslo</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
                  placeholder="09123456789"
                />
              </div>

              {/* submit */}
              <button
                type="submit"
                disabled={!agreed}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-xl font-semibold transform hover:scale-105 transition"
              >
                <Send className="w-5 h-5" />
                CHCEM BEZPLATNÝ KONCEPT A ZAČAŤ SVOJ PRÍBEH!
              </button>

              {/* GDPR */}
              <div className="flex items-center justify-center mt-4">
                <input
                  id="gdpr-agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="w-5 h-5 accent-purple-600 rounded mr-2"
                />
                <label htmlFor="gdpr-agree" className="text-sm cursor-pointer">
                  Súhlasím s{' '}
                  <a
                    href="/ochrana-osobnych-udajov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-700"
                  >
                    ochranou osobných údajov
                  </a>
                </label>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Alebo si rezervujte hovor →</span>
                <a
                  href="https://cal.com/leonlogic/stretnutie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium underline"
                >
                  Dohodnúť termín
                </a>
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
                  <p className="text-purple-100">15-minútový hovor na prebratie vašej vízie a požiadaviek</p>
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
