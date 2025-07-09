import React, { useState } from 'react';
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
  return (
    <div className="min-h-screen">
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
    </div>
  );
}

export default App;