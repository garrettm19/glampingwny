import React from 'react';
import { Check, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Indoor Glamping',
      subtitle: 'Teepee Sleepovers',
      price: 'Starting at $225',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop',
      features: [
        'Indoor setup - weather proof',
        'Themed decorations',
        'Comfortable bedding',
        'Party activities included',
        'Ages 5+ welcome'
      ],
      popular: true
    },
    {
      title: 'Outdoor Bell Tents',
      subtitle: '16ft & 23ft Options',
      price: 'Starting at $500',
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500&h=400&fit=crop',
      features: [
        'Authentic bell tent experience',
        'Memory foam beds',
        'In-tent movie theater',
        '25+ themes available',
        'Stargazing experience'
      ]
    },
    {
      title: 'Spa Parties',
      subtitle: 'Relaxation & Pampering',
      price: 'Starting at $325',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=400&fit=crop',
      features: [
        'Professional spa setup',
        'Kid-safe treatments',
        'Relaxing ambiance',
        'Spa accessories included',
        'All ages welcome'
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional glamping experiences delivered to your location in Western New York
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Most Popular
                </div>
              )}

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-blue-600 font-semibold">{service.subtitle}</p>
                </div>

                <div className="text-3xl font-bold text-blue-600 mb-6">{service.price}</div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Area</h3>
          <p className="text-gray-700 mb-4">
            We serve the Buffalo Metro Area with <strong>FREE delivery within 20 miles</strong> of Hamburg, NY
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">FREE</div>
              <div className="text-sm text-gray-600">Within 20 miles</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">$50</div>
              <div className="text-sm text-gray-600">21-31 miles</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">$100</div>
              <div className="text-sm text-gray-600">32-42 miles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;