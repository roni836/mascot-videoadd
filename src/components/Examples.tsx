import React from 'react';
import { ShoppingBag, Dumbbell, Home, Wrench, Baby, Store } from 'lucide-react';

const Examples = () => {
  const industries = [
    {
      icon: ShoppingBag,
      emoji: '🧁',
      title: 'Pastry Shops',
      description: 'Sweet mascots for bakeries and cafés',
      color: 'from-pink-400 to-rose-500',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
      icon: Dumbbell,
      emoji: '💪',
      title: 'Gyms & Studios',
      description: 'Energetic characters for fitness brands',
      color: 'from-orange-400 to-red-500',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    },
    {
      icon: Home,
      emoji: '🏠',
      title: 'Real Estate',
      description: 'Trustworthy guides for property services',
      color: 'from-blue-400 to-indigo-500',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
    {
      icon: Wrench,
      emoji: '🛠️',
      title: 'Machinery Rentals',
      description: 'Professional mascots for B2B services',
      color: 'from-gray-400 to-gray-600',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    },
    {
      icon: Baby,
      emoji: '👶',
      title: 'Kids Products',
      description: 'Playful characters for family brands',
      color: 'from-purple-400 to-pink-500',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
    },
    {
      icon: Store,
      emoji: '🛍️',
      title: 'E-commerce',
      description: 'Engaging mascots for online stores',
      color: 'from-teal-400 to-cyan-500',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
    }
  ];

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mascots That Match Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bakeries to fitness studios, our mascots are made to fit your brand vibe perfectly
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {industry.emoji}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                
                <div className="bg-white rounded-xl p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={industry.videoUrl} type="video/mp4" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {industry.title} Mascot
                        </span>
                      </div>
                    </video>
                  </div>
                </div>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">▶</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your industry? We create custom mascots for any business type!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            View All Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default Examples;