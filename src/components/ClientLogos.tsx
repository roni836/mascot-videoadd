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
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted By Businesses Like Yours
          </h3>
          <p className="text-gray-600">
            Join 50+ happy clients who've transformed their marketing with mascot videos
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.width} h-12 bg-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors duration-200`}
            >
              <span className="text-xs font-medium text-gray-600 text-center px-2">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>All clients received their videos within 30 days</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;