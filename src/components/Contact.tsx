import React, { useState, useEffect } from 'react';
import { Send, Upload, Calendar, CheckCircle } from 'lucide-react';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    product: '',
    brandTone: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitToEcomail = (formData: any) => {
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

    addField('name', formData.name);
    addField('email', formData.email);
    addField('businessName', formData.businessName);
    addField('website', formData.website);
    addField('product', formData.product);
    addField('brandTone', formData.brandTone);
    addField('newsletter', '1');

    document.body.appendChild(form);
    form.submit();
  };
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  submitToEcomail(formData);
  setIsSubmitted(true); // ✅ add this to trigger thank you UI
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Urobme vašu značku nezabudnuteľnou
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Povedzte nám niečo o svojom biznise a my vám pošleme bezplatný koncept na mieru.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Form */}
            <div className="md:col-span-7 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="John Doe"
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
                      placeholder="Your Amazing Business"
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
                    placeholder="https://yourwebsite.com"
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
                    placeholder="Describe your products or services..."
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
                    placeholder="Fun and playful, professional and trustworthy, etc."
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
                    placeholder="john@yourbusiness.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Odoslať a získať koncept zadarmo
                </button>
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

            {/* Info Panel */}
            <div className="md:col-span-5 bg-gradient-to-br from-purple-600 to-teal-600 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Čo bude nasledovať?</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tvorba konceptu</h4>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;