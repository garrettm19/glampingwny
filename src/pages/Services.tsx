import React, { useState } from 'react';
import { Check, Star, Plus, Users, Clock, MapPin, ArrowRight, Tent, Home, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const mainPackages = [
    {
      id: 'indoor',
      title: 'Indoor Glamping',
      subtitle: 'Teepee Sleepovers',
      icon: Home,
      basePrice: 225,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop',
      description: 'Perfect for any weather! Cozy teepee tents set up in your home with everything included.',
      bestFor: 'Birthday parties, sleepovers, family nights',
      ageRange: '5+ years',
      capacity: '1-10+ guests',
      duration: 'Overnight',
      features: [
        'Glamping teepee tents (4ft x 7ft each)',
        'Memory foam mattress & premium linens',
        'Fairy lights & ambient lanterns',
        'Breakfast tray & personalized letter board',
        'Complete setup & cleanup included'
      ],
      pricing: {
        base: { guests: 1, price: 225, description: 'Base Package (1 Tent)' },
        additional: { price: 50, description: 'Each Additional Tent' },
        packages: [
          { guests: 4, price: 375, description: '4 Tents Package' },
          { guests: 10, price: 675, description: '10 Tents Package' }
        ],
        extras: { price: 40, description: 'Extra Night (per tent)' }
      },
      popular: true,
      weatherProof: true
    },
    {
      id: 'outdoor-bell',
      title: 'Outdoor Bell Tents',
      subtitle: 'Authentic Glamping',
      icon: Tent,
      basePrice: 500,
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500&h=400&fit=crop',
      description: 'Authentic outdoor glamping experience with spacious, weatherproof bell tents.',
      bestFor: 'Special occasions, romantic getaways, unique celebrations',
      ageRange: '5+ years',
      capacity: '2-12 guests',
      duration: 'Overnight',
      features: [
        'Spacious weatherproof bell tent',
        'Memory foam beds with luxury bedding',
        'Themed décor & ambient lighting',
        'Side tables, rugs & comfort items',
        'Setup and cleanup included'
      ],
      pricing: {
        options: [
          {
            name: '16ft Bell Tent',
            capacity: 'Up to 6 guests',
            basePrice: 500,
            maxPrice: 600,
            description: 'Perfect for smaller groups'
          },
          {
            name: '23ft Bell Tent',
            capacity: 'Up to 12 guests',
            basePrice: 700,
            maxPrice: 950,
            description: 'Ideal for larger celebrations'
          },
          {
            name: 'Day Dreamer Lounge',
            capacity: 'Day events',
            basePrice: 500,
            description: 'Perfect for daytime celebrations'
          },
          {
            name: 'Canvas Tent Only',
            capacity: 'DIY setup',
            basePrice: 300,
            description: 'Tent rental for DIY enthusiasts'
          }
        ],
        extras: { price: 150, description: 'Additional Night' }
      },
      spaceRequired: '16ft tent: 20x20ft area • 23ft tent: 26x26ft area',
      seasonal: 'Best April-October'
    },
    {
      id: 'spa',
      title: 'Spa Parties',
      subtitle: 'Relaxation & Pampering',
      icon: Sparkles,
      basePrice: 325,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=400&fit=crop',
      description: 'Complete spa experience with all essentials included for the ultimate pampering party.',
      bestFor: 'Birthday parties, bachelorette parties, girls nights',
      ageRange: '5+ years',
      capacity: '4+ guests',
      duration: '3-4 hours',
      features: [
        'Low picnic table & comfortable floor pillows',
        'Complete spa essentials for each guest',
        'Face masks, manicure kits & nail polish',
        'Robes, cucumber eye masks & lotions',
        'Champagne flutes with sparkling juice'
      ],
      pricing: {
        standalone: { price: 325, guests: 4, description: 'Spa-Only Package (4 guests)' },
        addon: { price: 250, guests: 4, description: 'Add-On to Glamping (Save $75!)' },
        additional: { price: 50, description: 'Each Additional Guest' }
      },
      note: 'DIY setup - no spa host provided',
      savings: 'Save $75 when added to glamping packages!'
    }
  ];

  const addOns = [
    { 
      category: 'Entertainment',
      items: [
        { name: 'Movie Night Under the Stars', price: 150, description: 'Outdoor movie experience with projector' },
        { name: 'In-Tent Theater Experience', price: 35, description: 'Indoor movie setup with projector' },
        { name: 'Instant Print Camera', price: 20, description: 'Capture memories instantly' }
      ]
    },
    {
      category: 'Decorations',
      items: [
        { name: 'Luxe Lace Teepee + Balloons', price: 65, description: 'Premium lace teepee with balloons' },
        { name: 'Balloon Garland Topper', price: 25, description: 'Beautiful balloon garland decoration' }
      ]
    },
    {
      category: 'Food & Fun',
      items: [
        { name: 'S\'mores Bar Station', price: 65, description: 'Complete s\'mores setup' },
        { name: 'Picnic Party Add-On', price: 200, description: 'Complete picnic setup with decorations' }
      ]
    },
    {
      category: 'Comfort',
      items: [
        { name: 'Portable Air Conditioner', price: 50, description: 'Stay cool during warm weather' },
        { name: 'Additional Twin Bed', price: 25, description: 'Extra sleeping space' },
        { name: 'Bring Your Pet', price: 20, description: 'Pet-friendly accommodations (max 2 pets)' }
      ]
    }
  ];

  const themes = [
    { name: 'Barbie\'s World', popular: true },
    { name: 'Taylor\'s Swifties', popular: true },
    { name: 'Buffalo Bills', popular: true },
    { name: 'Harry Potter', popular: false },
    { name: 'Mermaid Magic', popular: true },
    { name: 'Unicorn Dream', popular: true },
    { name: 'Galaxy Getaway', popular: false },
    { name: 'Pokémon', popular: true },
    { name: 'Super Hero', popular: false },
    { name: 'Princess Party', popular: true },
    { name: 'Boho Blush', popular: false },
    { name: 'Winter Wonderland', popular: false },
    { name: 'Tropical Paradise', popular: false },
    { name: 'Simply Sage', popular: false },
    { name: 'Cozy Cabin', popular: false },
    { name: 'Retro Rewind: 90\'s', popular: false }
  ];

  const popularThemes = themes.filter(theme => theme.popular);
  const allThemes = themes.filter(theme => !theme.popular);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional glamping experiences delivered to your location in Western New York. 
            Select your package, add extras, and we'll handle everything else!
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-600">Themes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Ages 5+</div>
              <div className="text-sm text-gray-600">All Welcome</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">FREE</div>
              <div className="text-sm text-gray-600">Setup & Cleanup</div>
            </div>
          </div>
        </div>

        {/* Package Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Compare Our Packages</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}

                {/* Package Header */}
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <pkg.icon className="w-6 h-6 mr-2" />
                      <span className="text-lg font-bold">{pkg.title}</span>
                    </div>
                    <p className="text-sm opacity-90">{pkg.subtitle}</p>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-right">
                    <div className="text-2xl font-bold">From ${pkg.basePrice}</div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">Best For:</div>
                      <div className="text-gray-600">{pkg.bestFor}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Capacity:</div>
                      <div className="text-gray-600">{pkg.capacity}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Ages:</div>
                      <div className="text-gray-600">{pkg.ageRange}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Duration:</div>
                      <div className="text-gray-600">{pkg.duration}</div>
                    </div>
                  </div>

                  {/* Special Features */}
                  <div className="mb-6">
                    {pkg.weatherProof && (
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 mr-2">
                        <Check className="w-4 h-4 mr-1" />
                        Weather-Proof
                      </div>
                    )}
                    {pkg.savings && (
                      <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        💰 {pkg.savings}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6">{pkg.description}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{pkg.features.length - 3} more features included
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      {selectedPackage === pkg.id ? 'Hide Details' : 'View Pricing & Details'}
                    </button>
                    <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Book This Package
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedPackage === pkg.id && (
                  <div className="border-t bg-gray-50 p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Complete Pricing Details</h4>
                    
                    {/* Indoor Pricing */}
                    {pkg.id === 'indoor' && pkg.pricing && (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span>{pkg.pricing.base.description}</span>
                          <span className="font-bold text-blue-600">${pkg.pricing.base.price}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span>{pkg.pricing.additional.description}</span>
                          <span className="font-bold">+${pkg.pricing.additional.price}</span>
                        </div>
                        {pkg.pricing.packages.map((pack, i) => (
                          <div key={i} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                            <span className="font-medium">{pack.description}</span>
                            <span className="font-bold text-blue-600">${pack.price}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg text-sm">
                          <span>{pkg.pricing.extras.description}</span>
                          <span>+${pkg.pricing.extras.price}</span>
                        </div>
                      </div>
                    )}

                    {/* Outdoor Pricing */}
                    {pkg.id === 'outdoor-bell' && pkg.pricing && (
                      <div className="space-y-3">
                        {pkg.pricing.options?.map((option, i) => (
                          <div key={i} className="p-3 bg-white rounded-lg">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium">{option.name}</span>
                              <span className="font-bold text-blue-600">
                                ${option.basePrice}{option.maxPrice && `-$${option.maxPrice}`}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">{option.capacity} • {option.description}</div>
                          </div>
                        ))}
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg text-sm">
                          <span>{pkg.pricing.extras.description}</span>
                          <span>+${pkg.pricing.extras.price}</span>
                        </div>
                        {pkg.spaceRequired && (
                          <div className="text-sm text-gray-600 mt-3 p-3 bg-yellow-50 rounded-lg">
                            <strong>Space Required:</strong> {pkg.spaceRequired}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Spa Pricing */}
                    {pkg.id === 'spa' && pkg.pricing && (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span>{pkg.pricing.standalone.description}</span>
                          <span className="font-bold text-blue-600">${pkg.pricing.standalone.price}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="font-medium">{pkg.pricing.addon.description}</span>
                          <span className="font-bold text-green-600">${pkg.pricing.addon.price}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <span>{pkg.pricing.additional.description}</span>
                          <span>+${pkg.pricing.additional.price}</span>
                        </div>
                        {pkg.note && (
                          <div className="text-sm text-gray-600 p-3 bg-blue-50 rounded-lg">
                            <strong>Note:</strong> {pkg.note}
                          </div>
                        )}
                      </div>
                    )}

                    {/* All Features */}
                    <div className="mt-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Complete Feature List:</h5>
                      <ul className="grid grid-cols-1 gap-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Add these optional extras to make your celebration even more special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="font-bold text-blue-600">${item.price}</span>
                      </div>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Themes Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Theme</h2>
            <p className="text-gray-600">Over 25 themes available, plus custom designs</p>
          </div>

          {/* Popular Themes */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              Most Popular Themes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {popularThemes.map((theme, index) => (
                <div key={index} className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
                  <p className="text-sm font-medium text-blue-900">{theme.name}</p>
                  <div className="text-xs text-blue-600 mt-1">⭐ Popular</div>
                </div>
              ))}
            </div>
          </div>

          {/* All Other Themes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">More Theme Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allThemes.map((theme, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-medium text-gray-900">{theme.name}</p>
                </div>
              ))}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center border-2 border-dashed border-purple-300">
                <p className="text-sm font-medium text-purple-900">Custom Theme</p>
                <p className="text-xs text-purple-600">Additional fee applies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area & Important Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service Area */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Service Area & Delivery</h3>
            </div>
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
            <p className="text-sm text-gray-600 mt-3">
              Serving Buffalo, Cheektowaga, West Seneca, Orchard Park, East Aurora, Lancaster, and surrounding areas
            </p>
          </div>

          {/* Key Policies */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-gray-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Important Details</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Age Requirement:</strong> All guests must be 5 and older</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Setup:</strong> By 4 PM, pickup after 10 AM next day</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Cancellation:</strong> Full refund if canceled 14+ days in advance</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Weather:</strong> Light rain OK, severe weather = full refund</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Pets Welcome:</strong> $20 first pet, $30 second (max 2)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Experience?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the 200+ families who have created magical memories with Glamping WNY
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Book Your Package
            </button>
            <a
              href="tel:+17162007692"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Call (716) 200-7692
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;