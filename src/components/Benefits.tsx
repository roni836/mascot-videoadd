import React from 'react';
import { Lightbulb, TrendingUp, Target } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Lightbulb,
      emoji: '💡',
      title: 'Memorable Branding',
      description: 'Stand out with a unique, friendly character that customers will remember and connect with your brand.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'More Engagement',
      description: 'Mascot ads are fun, watchable, and shareable - driving 3x more engagement than static content.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Target,
      emoji: '🎯',
      title: 'Targeted for SMBs',
      description: 'Affordable and fully custom for your niche - no generic templates, just your brand personality.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Mascot Ads Drive More Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your business into a memorable brand that customers love and trust
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background gradient that appears on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.emoji}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${benefit.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;