import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: 'Sweet Dreams Café', width: 'w-24' },
    { name: 'Pro Tools Rental', width: 'w-28' },
    { name: 'FitLife Studio', width: 'w-20' },
    { name: 'Urban Bakery', width: 'w-26' },
    { name: 'Tech Solutions', width: 'w-24' },
    { name: 'Kids Corner', width: 'w-22' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Medzi našich klientov patria</h3>
          <p className="text-gray-600 text-lg">Pridajte sa k firmám, ktoré si zvolili maskot video na posilnenie svojho marketingu</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/leonlogic.png" alt="Leonlogic logo" className="h-12 object-contain" />
          <img src="/tortym.png" alt="Tortym logo" className="h-12 object-contain" />
          <img src="/kovaco.png" alt="Kovaco logo" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;