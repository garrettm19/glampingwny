import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ui/ServiceCard';
import ComparisonTable from '../components/ui/ComparisonTable';
import ServiceAreaMap from '../components/ui/ServiceAreaMap';
import { Check, Award, MapPin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const services = [
  {
    title: 'Indoor Base Package',
    description: 'Perfect for intimate celebrations',
    price: '$225',
    image: 'https://picsum.photos/400/300?random=2',
    features: [
      '1 Glamping Tent',
      'Memory Foam Mattress',
      'Cozy Blanket and Linens',
      'Custom Letter Board',
      'Décor Pillows',
      'Breakfast Tray with Lantern',
      'Fairy Lights',
      'Setup and Cleanup',
      'Your Choice of Theme'
    ]
  },
  {
    title: 'Indoor Group Package',
    description: '4-6 Tents Setup',
    price: '$375-$475',
    image: 'https://picsum.photos/400/300?random=3',
    features: [
      '4-6 Glamping Tents',
      'All Base Package Features',
      'Coordinated Theme',
      'Group Activity Space',
      'Extended Setup Area',
      'Perfect for Sleepovers'
    ]
  },
  {
    title: 'Indoor Ultimate Package',
    description: '7-10 Tents Setup',
    price: '$525-$675',
    image: 'https://picsum.photos/400/300?random=4',
    features: [
      '7-10 Glamping Tents',
      'All Group Package Features',
      'Premium Party Space',
      'Enhanced Decorations',
      'Special Group Activities',
      'Perfect for Large Parties'
    ]
  }
];

const addons = [
  {
    title: 'Balloon Garland',
    price: '$25',
    description: 'Custom balloon garland for indoor teepee'
  },
  {
    title: 'Luxe Lace Teepee',
    price: '$65',
    description: 'Premium lace teepee with balloon decoration'
  },
  {
    title: 'Picnic Party Add-On',
    price: '$200',
    description: 'Complete picnic setup with decorations'
  },
  {
    title: 'Movie Experience',
    price: '$35',
    description: 'Indoor/outdoor movie setup with screen'
  },
  {
    title: "S'mores Bar",
    price: '$65',
    description: 'Complete s\'mores station with treats'
  },
  {
    title: 'Spa Party Add-On',
    price: '$250',
    description: 'Spa-themed activities and supplies'
  },
  {
    title: 'Yard Games',
    price: '$10',
    description: 'Choice of giant Jenga or Connect 4'
  },
  {
    title: 'Air Conditioner',
    price: '$50',
    description: 'Portable AC unit for outdoor tents'
  },
  {
    title: 'Instant Camera',
    price: '$20',
    description: 'Camera rental with film included'
  },
  {
    title: 'Pet Package',
    price: '$20',
    description: 'Pet-friendly accommodations'
  }
];

const ServicesPage: React.FC = () => {
  const handleAddonClick = (addonTitle: string) => {
    trackEvent('Addon', 'addon_click', addonTitle);
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

      {/* Packages */}
      <section className="section bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Indoor Family Glamping Packages
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Select from our popular packages, each designed to create unforgettable family memories.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
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
                Enhance Your Family Experience
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Customize your package with these magical add-ons.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 flex flex-col h-full hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{addon.title}</h3>
                  <span className="text-orange-600 font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{addon.description}</p>
                <Link 
                  to="/book-now"
                  onClick={() => handleAddonClick(addon.title)}
                  className="btn btn-primary mt-auto py-2 px-4 text-sm"
                >
                  Add to Package
                </Link>
              </motion.div>
            ))}
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