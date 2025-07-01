import React from 'react';
import { Play, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-teal-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bring Your Brand to Life with a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">
                Custom Mascot Video Ad!
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Capture attention, boost engagement, and stand out with a 30-second 
              animated mascot video tailored to your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowDown className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Examples
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                30-day delivery
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                100% custom
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Unlimited revisions
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-teal-100 rounded-3xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="aspect-video bg-black rounded-xl relative overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-teal-400/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="font-medium">Mascot Sizzle Reel</p>
                      </div>
                    </div>
                  </video>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-600">20-second</span> sizzle reel showcase
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
              🎯
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
              💡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;