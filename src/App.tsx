import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Examples />
      <Testimonials />
      <ClientLogos />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;