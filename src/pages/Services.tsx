import React from 'react';
import { Check, Star, Plus } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      title: 'Indoor Glamping',
      subtitle: 'Teepee Sleepovers',
      basePrice: '$225',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop',
      features: [
        'Glamping teepee tents (4ft x 7ft each)',
        'Memory foam mattress & cozy linens',
        'Fairy lights & lanterns',
        'Breakfast tray & letter board',
        'Complete setup & cleanup'
      ],
      pricing: [
        'Base Package (1 Tent): $225',
        'Each Additional Tent: +$50',
        '4 Tents: $375',
        '10 Tents: $675'
      ],
      popular: true
    },
    {
      title: 'Outdoor Bell Tents',
      subtitle: '16ft & 23ft Options',
      basePrice: '$500',
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500&h=400&fit=crop',
      features: [
        'Weatherproof Bell Tent',
        'Memory foam beds',
        'Themed décor & ambient lighting',
        'Side tables & rugs',
        'Setup and cleanup included'
      ],
      pricing: [
        '16ft Tent (up to 6): $500-$600',
        '23ft Tent (up to 12): $700-$950',
        'Day Dreamer Lounge: $500',
        'Canvas Tent Only: $300'
      ]
    },
    {
      title: 'Spa Parties',
      subtitle: 'Relaxation & Pampering',
      basePrice: '$325',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=400&fit=crop',
      features: [
        'Low picnic table & floor pillows',
        'Complete spa essentials per guest',
        'Face masks & manicure kits',
        'Robes & cucumber eye masks',
        'Champagne flutes with sparkling juice'
      ],
      pricing: [
        'Spa-Only Package: $325 (4 guests)',
        'Add-On to Other Parties: $250',
        '+$50 per additional guest',
        'DIY setup (no host provided)'
      ]
    }
  ];

  const addOns = [
    { name: 'Luxe Lace Teepee + Balloons', price: '$65' },
    { name: 'Picnic Party Add-On', price: '$200' },
    { name: 'Movie Night Under the Stars', price: '$150' },
    { name: 'In-Tent Theater Experience', price: '$35' },
    { name: 'S\'mores Bar Station', price: '$65' },
    { name: 'Instant Print Camera', price: '$20' },
    { name: 'Portable Air Conditioner', price: '$50' },
    { name: 'Balloon Garland Topper', price: '$25' }
  ];

  const themes = [
    'Barbie\'s World', 'Boho Blush', 'Buffalo Bills', 'Harry Potter',
    'Mermaid Magic', 'Taylor\'s Swifties', 'Unicorn Dream', 'Galaxy Getaway',
    'Pokémon', 'Super Hero', 'Winter Wonderland', 'Tropical Paradise',
    'Simply Sage', 'Cozy Cabin', 'Retro Rewind: 90\'s', 'Star Wars'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Experiences
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional glamping experiences delivered to your location in Western New York. 
            Perfect for birthdays, celebrations, and creating magical memories.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
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

                <div className="text-3xl font-bold text-blue-600 mb-6">{service.basePrice}</div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Pricing:</h4>
                  <ul className="space-y-1">
                    {service.pricing.map((price, i) => (
                      <li key={i} className="text-sm text-gray-600">{price}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book This Experience
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-Ons & Extras</h2>
            <p className="text-gray-600">Enhance your experience with these optional add-ons</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Plus className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="font-semibold text-blue-600">{addon.price}</span>
                </div>
                <p className="text-sm text-gray-700">{addon.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Themes Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">25+ Theme Options</h2>
            <p className="text-gray-600">Choose from our popular themes or request a custom design</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {themes.map((theme, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
                <p className="text-sm font-medium text-blue-900">{theme}</p>
              </div>
            ))}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center border-2 border-dashed border-purple-300">
              <p className="text-sm font-medium text-purple-900">Custom Theme</p>
              <p className="text-xs text-purple-600">Additional fee</p>
            </div>
          </div>
        </div>

        {/* Service Area & Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Area */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area & Delivery</h3>
            <p className="text-gray-700 mb-4">
              We serve Western New York with <strong>FREE delivery within 20 miles</strong> of Hamburg, NY (14075)
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Within 20 miles:</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>21-31 miles:</span>
                <span className="font-semibold">$50</span>
              </div>
              <div className="flex justify-between">
                <span>32-42 miles:</span>
                <span className="font-semibold">$100</span>
              </div>
            </div>
          </div>

          {/* Key Policies */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Details</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Age Requirement:</strong> All guests must be 5 and older</li>
              <li><strong>Setup Time:</strong> By 4 PM, pickup after 10 AM</li>
              <li><strong>Cancellation:</strong> Full refund if canceled 14+ days in advance</li>
              <li><strong>Weather:</strong> Light rain OK, severe weather = full refund</li>
              <li><strong>Space Requirements:</strong> 16ft tent needs 20x20ft area</li>
              <li><strong>Pets Welcome:</strong> $20 first pet, $30 second (max 2)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;