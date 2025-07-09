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
              Vytvárame nezabudnuteľné maskotové video reklamy, ktoré pomáhajú malým a stredným firmám vyniknúť, zapojiť zákazníkov a zvýšiť predaj.
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
            <h3 className="text-lg font-semibold mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Ako to funguje</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Cenník</a></li>
              <li><a href="#examples" className="text-gray-300 hover:text-white transition-colors">Ukážky</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Získať ponuku</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Ochrana osobných údajov</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Obchodné podmienky</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Impresum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;