import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Examples from './components/Examples';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import AudioWaveformPlayer from './components/AudioWaveformPlayer';

function App() {
  const [selectedPackageKey, setSelectedPackageKey] = useState<string | undefined>();
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  // Track when preloader was shown
  const preloaderStart = useRef(Date.now());

  useEffect(() => {
    preloaderStart.current = Date.now();
    const MIN_TIME = 3000;
    let finished = false;
    const hide = () => {
      if (finished) return;
      finished = true;
      const elapsed = Date.now() - preloaderStart.current;
      if (elapsed < MIN_TIME) {
        setTimeout(() => setLoading(false), MIN_TIME - elapsed);
      } else {
        setLoading(false);
      }
    };
    window.addEventListener('load', hide);
    const timeout = setTimeout(hide, 6000); // fallback max
    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white/15 via-purple-100/15 to-teal-100/15 backdrop-blur-sm">
          <img src="/preloader.gif" alt="Načítava sa..." className="w-28 h-28 mb-4" />
          <span className="text-lg font-semibold text-gray-700 drop-shadow">Načítava sa...</span>
        </div>
      )}
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/421915376588"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-[9998] flex items-center gap-2 bg-white/30 backdrop-blur-xl hover:bg-white/50 shadow-xl rounded-full px-4 py-2 border border-green-200 hover:border-green-400 transition-all duration-200 group"
        style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.10)' }}
      >
        <img src="/whtasapp.svg" alt="WhatsApp" className="w-8 h-8" />
        <span className="text-green-700 font-semibold text-base group-hover:underline">Napíšte nám</span>
      </a>
      {/* Main app content */}
      <ExitIntentPopup />
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing onSelectPackage={setSelectedPackageKey} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} />
      <Examples />
      <Testimonials />
      <ClientLogos />
      <FAQ />
      <Contact selectedPackageKey={selectedPackageKey} selectedAddOns={selectedAddOns} />
      <Footer />
    </>
  );
}

export default App;