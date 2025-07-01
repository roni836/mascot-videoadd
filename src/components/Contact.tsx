import React, { useState } from 'react';
import { Send, Upload, Calendar, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    product: '',
    brandTone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        email: ''
      });
    }, 3000);
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Make Your Brand Unforgettable
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Tell us a bit about your business and we'll send you a free custom concept idea
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
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
                      Business Name *
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
                    Website / Social Media
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
                    What do you sell? *
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
                    Describe your brand tone (Optional)
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
                    Email Address *
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
                  Submit & Get Free Concept Idea
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Or book a free call →</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="bg-gradient-to-br from-purple-600 to-teal-600 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Concept Creation</h4>
                    <p className="text-purple-100">We'll create a custom mascot concept based on your brand</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free Consultation</h4>
                    <p className="text-purple-100">30-minute call to discuss your vision and requirements</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Quote</h4>
                    <p className="text-purple-100">Detailed pricing based on your specific needs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-purple-100">
                  💡 <strong>Free Bonus:</strong> We'll also include 3 social media post ideas featuring your mascot!
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