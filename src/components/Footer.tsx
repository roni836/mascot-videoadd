import React from 'react';
import { Video, Mail, Phone, MapPin, Briefcase, BadgePercent, BadgeCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.webp" alt="LeoMedia logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Vytvárame nezabudnuteľné maskotové video reklamy, ktoré pomáhajú malým a stredným firmám vyniknúť, zapojiť zákazníkov a zvýšiť predaj.
            </p>
          </div>
          {/* Kontakt - now its own column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-300 text-base">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>cyril@leonlogic.sk</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+421 915 376 588</span>
              </li>
            </ul>
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
          {/* Other Services */}
          <div className="border-t md:border-t-0 md:border-l border-gray-800 pl-0 md:pl-8 pt-8 md:pt-0">
            <h3 className="text-lg font-semibold mb-4">Ostatné služby</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webdizajn a tvorba webstránok</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Optimalizácia SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marketingové služby</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Grafické práce</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <img src="/slovakia.svg" alt="Slovak flag" className="w-5 h-5" />
              <span>Made in Slovakia</span>
              <a href="/ochrana-osobnych-udajov" className="ml-4 underline text-gray-500 hover:text-white text-xs">Ochrana osobných údajov</a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-400 w-full sm:w-auto justify-end">
              <span className="font-semibold">OREM VENTURES s.r.o.</span>
              <span className="hidden sm:inline-block">|</span>
              <span>IČO: 52514901</span>
              <span className="hidden sm:inline-block">|</span>
              <span>DIČ: 2121045058</span>
              <span className="hidden sm:inline-block">|</span>
              <span>nie sme platiteľ DPH</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 <a href="https://leonlogic.sk/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-400">Leonlogic</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;