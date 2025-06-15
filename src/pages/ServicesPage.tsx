import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ui/ServiceCard';
import ComparisonTable from '../components/ui/ComparisonTable';
import ServiceAreaMap from '../components/ui/ServiceAreaMap';
import { Check, Award, MapPin, Tent, Plus, Sparkles, ArrowRight, Users, Clock, Star } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const basePackage = {
  title: 'Indoor Glamping Base Package',
  description: 'Perfect starting point for your magical celebration',
  price: '$225.00',
  duration: '1 Night',
  image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80',
  features: [
    '1 Glamping Tent Setup',
    'Memory Foam Mattress',
    'Cozy Blanket and Linens',
    'Custom Letter Board',
    'Decorative Pillows',
    'Breakfast Tray with Lantern',
    'Magical Fairy Lights',
    'Complete Setup and Cleanup',
    'Your Choice of Theme'
  ],
  note: 'Each tent with bed is about 4ft wide x 7ft long'
};

const additionalTent = {
  title: 'Additional Indoor Glamping Tent',
  description: 'Add more tents to accommodate extra guests',
  price: '$50.00',
  duration: '1 Night',
  image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80',
  features: [
    'Additional tent setup',
    'Memory foam mattress',
    'Matching theme decorations',
    'Coordinated with base package',
    'Same quality bedding',
    'Integrated lighting',
    'Professional arrangement'
  ],
  note: 'Each tent with bed is about 4ft wide x 7ft long'
};

const addons = [
  {
    title: 'Balloon Garland Topper for Indoor Teepee Tent',
    price: '$25.00',
    description: 'Beautiful balloon garland to enhance your teepee setup',
    icon: '🎈',
    color: 'bg-pink-50 border-pink-200',
    available: true
  },
  {
    title: 'Luxe Lace Teepee + Balloons',
    price: '$65.00',
    description: 'Premium lace teepee with elegant balloon decorations',
    icon: '✨',
    color: 'bg-purple-50 border-purple-200',
    available: true
  },
  {
    title: 'Picnic Party Add-On',
    price: '$200.00',
    description: 'Complete picnic setup with decorations and seating',
    icon: '🧺',
    color: 'bg-green-50 border-green-200',
    available: true
  },
  {
    title: 'In-Home Theater',
    price: '$35.00',
    description: 'Movie experience with projector and screen setup',
    icon: '🎬',
    color: 'bg-blue-50 border-blue-200',
    available: true
  },
  {
    title: 'Instant Print Camera',
    price: '$20.00',
    description: 'Capture memories with instant photo printing',
    icon: '📸',
    color: 'bg-yellow-50 border-yellow-200',
    available: true
  },
  {
    title: "S'Mores Bar Station",
    price: '$65.00',
    description: 'Complete s\'mores station with treats and supplies',
    icon: '🔥',
    color: 'bg-orange-50 border-orange-200',
    available: true
  },
  {
    title: 'Spa Party Add-On',
    price: '$250.00',
    description: 'Complete spa experience with treatments and activities',
    icon: '👑',
    color: 'bg-pink-50 border-pink-200',
    available: true
  },
  {
    title: '"Giant" Jenga',
    price: '$10.00',
    description: 'Oversized Jenga game for family fun',
    icon: '🎯',
    color: 'bg-indigo-50 border-indigo-200',
    available: true
  },
  {
    title: '"Jumbo" Connect 4',
    price: '$10.00',
    description: 'Large-scale Connect 4 game for group entertainment',
    icon: '🔴',
    color: 'bg-red-50 border-red-200',
    available: true
  }
];

const ServicesPage: React.FC = () => {
  const handleAddonClick = (addonTitle: string) => {
    trackEvent('Addon', 'addon_click', addonTitle);
  };

  const handlePackageClick = (packageName: string) => {
    trackEvent('Package', 'package_click', packageName);
  };

  return (
    <>
      <Helmet>
        <title>Family Glamping Packages & Pricing | Buffalo Metro Area | Glamping WNY</title>
        <meta 
          name="description" 
          content="Choose from our luxury family glamping packages in the Buffalo Metro Area. All-inclusive pricing with setup, decorations, and cleanup included. FREE delivery within 20 miles of Hamburg, NY." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Family Packages 🏕️</h1>
            <p className="text-xl text-white/90 mb-8">
              Choose from our carefully designed packages or customize your own magical family experience.
            </p>
            
            {/* Service Area Highlight */}
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">Serving Buffalo Metro • FREE delivery within 20 miles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="py-6 bg-green-50 border-b border-green-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-800">Proudly Servicing the Buffalo Metro Area</span>
            </div>
            <p className="text-green-700">
              <strong>FREE delivery within 20 miles of Hamburg, NY (14075)</strong> • 
              Extended delivery: 21-31 miles ($50) • 32-42 miles ($100)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Glamping WNY?
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Compare your celebration options and see why families love our luxury glamping experience.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ComparisonTable />
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Booking Process */}
      <section className="section bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Build Your Perfect Family Experience 🎯
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Follow these simple steps to create your magical family glamping celebration. Start with our base package and customize to your heart's content!
              </p>
            </motion.div>
          </div>

          {/* Step 1: Base Package */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Reserve Your Base Package
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose 1 Base Package per reservation & add extra tents in Step 3
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *Please note, each tent with bed is about 4ft wide x 7ft long
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-orange-200">
                {/* Available Badge */}
                <div className="bg-green-500 text-white px-4 py-2 text-sm font-bold">
                  ✓ Available
                </div>

                {/* Package Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={basePackage.image} 
                    alt={basePackage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-2xl font-bold text-gray-800">{basePackage.price}</span>
                      <span className="text-sm text-gray-600 ml-2">{basePackage.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Tent className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{basePackage.title}</h4>
                      <p className="text-gray-600">{basePackage.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {basePackage.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mb-6 italic">
                    {basePackage.note}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to="/book-now"
                    onClick={() => handlePackageClick(basePackage.title)}
                    className="block w-full text-center py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Reserve Base Package
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 2: Additional Tents */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Add Additional Tents (Optional)
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Perfect for larger groups or families with more guests
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *Please note, each tent with bed is about 4ft wide x 7ft long
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-blue-200">
                {/* Available Badge */}
                <div className="bg-green-500 text-white px-4 py-2 text-sm font-bold">
                  ✓ Available
                </div>

                {/* Package Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={additionalTent.image} 
                    alt={additionalTent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-2xl font-bold text-gray-800">{additionalTent.price}</span>
                      <span className="text-sm text-gray-600 ml-2">{additionalTent.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Plus className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{additionalTent.title}</h4>
                      <p className="text-gray-600">{additionalTent.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {additionalTent.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mb-6 italic">
                    {additionalTent.note}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to="/book-now"
                    onClick={() => handlePackageClick(additionalTent.title)}
                    className="block w-full text-center py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Add Extra Tent
                      <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Personalize it with Fun Add-ons (Optional)
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Make your family glamping experience even more special with these magical enhancements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.title}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${addon.color} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Available Badge */}
                  {addon.available && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ✓ Available
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{addon.icon}</div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-gray-800">
                        {addon.price}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                    {addon.title}
                  </h4>
                  
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {addon.description}
                  </p>

                  <Link
                    to="/book-now"
                    onClick={() => handleAddonClick(addon.title)}
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Add to Package
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Space Requirements */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Space Requirements 📏
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Make sure you have enough space for your magical family experience!
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-orange-50 border border-orange-200 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tent className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Indoor Family Tents
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Each family tent is approximately <strong>4ft wide x 7ft long</strong>. 
                    We suggest leaving 1-2 feet of walkway space for safe family movement.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> For 4 tents, you'll need approximately 12ft x 16ft of space
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Planning Tips
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Living rooms work great for 2-4 tents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Basements are perfect for larger groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>We can work with most indoor spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Contact us if you're unsure about space</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Service Area
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We proudly serve families throughout the Buffalo Metro Area with convenient delivery options.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ServiceAreaMap />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Planning Your Family Adventure? 🎉
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to check availability and start creating the perfect family celebration experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-now"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => trackEvent('CTA', 'book_now_click', 'services_page')}
              >
                Book Your Family Experience
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                onClick={() => trackEvent('CTA', 'contact_click', 'services_page')}
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;