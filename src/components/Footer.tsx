import React from 'react';
import { Video, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">MascotAds</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating memorable mascot video ads that help small and medium businesses 
              stand out, engage customers, and drive more sales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <span className="text-sm">🎬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Why It Works</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">hello@mascotads.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+49 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Berlin, Germany</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 MascotAds. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Imprint</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;