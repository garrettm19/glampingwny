'use client';
import React from 'react';
import { Check, ArrowRight, Calendar, Users, Star } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  status?: string;
  popular?: boolean;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'outdoor-glamping',
      title: 'Outdoor Glamping',
      subtitle: 'Bell Tent Adventures',
      description: 'Experience authentic glamping delivered right to your backyard! Cozy memory foam beds, in-tent movie theater, and customizable themes.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
      features: ['16ft & 23ft Bell Tents', 'Memory Foam Beds', 'In-tent Movie Theater', '25+ Themes Available'],
      price: 'Starting at $500',
      status: 'Available Spring/Summer 2025'
    },
    {
      id: 'teepee-sleepovers',
      title: 'Teepee Sleepovers',
      subtitle: 'Indoor Glamping',
      description: 'Cozy indoor glamping experience with themed teepee setups. Perfect for birthday parties, sleepovers, and special celebrations.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      features: ['Indoor Setup', 'Themed Decorations', 'Comfortable Bedding', 'Party Activities'],
      price: 'Starting at $225',
      popular: true
    },
    {
      id: 'spa-party',
      title: 'Spa Party',
      subtitle: 'Luxury Relaxation',
      description: 'Luxury spa experience for parties and celebrations. Pamper your guests with professional spa treatments and relaxation.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
      features: ['Spa Treatments', 'Relaxation Setup', 'Luxury Amenities', 'Group Activities'],
      price: 'Starting at $325'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Explore Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cozy indoor sleepovers to outdoor glamping adventures - we handle everything so you can relax and enjoy the moment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="group bg-white rounded-3xl shadow-lg card-hover overflow-hidden relative">
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {service.status && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.status}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">{service.price}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-primary-600 font-semibold">{service.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group">
                  <span className="flex items-center justify-center">
                    Learn More & Book
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving Western New York</h3>
            <p className="text-gray-700 mb-6">
              We proudly serve the Buffalo Metro Area with <strong>FREE delivery within 20 miles</strong> of Hamburg, NY (14075).
              Extended delivery available for surrounding areas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-primary-600">FREE</div>
                <div className="text-sm text-gray-600">Within 20 miles</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-primary-600">$50</div>
                <div className="text-sm text-gray-600">21-31 miles</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-primary-600">$100</div>
                <div className="text-sm text-gray-600">32-42 miles</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="text-2xl font-bold text-primary-600">24hr</div>
                <div className="text-sm text-gray-600">Response time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;