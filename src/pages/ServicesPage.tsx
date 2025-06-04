import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ui/ServiceCard';
import ComparisonTable from '../components/ui/ComparisonTable';
import { Check, Award } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const services = [
  {
    title: 'Enchanted Dreams',
    description: 'Perfect for intimate celebrations',
    price: '$299',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/basic-setup.jpg',
    features: [
      'Cozy tent setup for up to 6 kids',
      'Twinkling fairy lights',
      'Comfy sleeping arrangements',
      'Fresh breakfast delivery',
      'Hassle-free setup & cleanup'
    ]
  },
  {
    title: 'Magical Moments',
    description: 'Our most-loved package',
    price: '$499',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/premium-setup.jpg',
    features: [
      'Spacious setup for up to 8 kids',
      'Custom theme & decorations',
      'Fun party activities',
      'Special treats & snacks',
      'Breakfast included',
      'Photo memories package'
    ]
  },
  {
    title: 'Ultimate Adventure',
    description: 'The complete experience',
    price: '$699',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/ultimate-setup.jpg',
    features: [
      'Luxury setup for up to 10 kids',
      'Full theme customization',
      'Outdoor movie night',
      'Guided activities',
      'Full catering available',
      'Custom party favors',
      'Professional photo & video'
    ]
  }
];

const addons = [
  {
    title: 'Custom Themed Decor',
    price: '$99',
    description: 'Additional themed decorations to match your child\'s interests'
  },
  {
    title: 'Outdoor Movie Night',
    price: '$149',
    description: 'Projector, screen, and themed movie selection'
  },
  {
    title: 'S\'mores & Treats Bar',
    price: '$79',
    description: 'Complete s\'mores station with additional sweet treats'
  },
  {
    title: 'Craft Activity Station',
    price: '$99',
    description: 'Themed craft activities for all party guests'
  },
  {
    title: 'Professional Photography',
    price: '$199',
    description: '1-hour professional photo session with digital delivery'
  },
  {
    title: 'Extended Party Time',
    price: '$149',
    description: 'Add 2 extra hours to your glamping experience'
  }
];

const ServicesPage: React.FC = () => {
  const handleAddonClick = (addonTitle: string) => {
    trackEvent('Addon', 'addon_click', addonTitle);
  };

  return (
    <>
      <Helmet>
        <title>Birthday Party Packages & Pricing | Glamping WNY</title>
        <meta 
          name="description" 
          content="Choose from our magical glamping birthday packages. All-inclusive pricing with setup, decorations, and cleanup included. Perfect for kids ages 4-12." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <span 
              key={i}
              className="sparkle-dot"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Packages</h1>
            <p className="text-xl text-white/90 mb-6">
              Choose from our carefully designed packages or customize your own magical experience.
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
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Why Choose Glamping?
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Compare your birthday party options and see why families love our magical glamping experience.
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
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Birthday Packages
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Select from our popular birthday packages, each designed to create unforgettable memories.
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
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Enhance Your Experience
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
                className="glass-card p-6 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary-900">{addon.title}</h3>
                  <span className="text-accent-600 font-bold">{addon.price}</span>
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

      {/* CTA */}
      <section className="section bg-primary-900 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Planning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to check availability and start creating the perfect birthday experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-now"
                className="btn btn-secondary"
                onClick={() => trackEvent('CTA', 'book_now_click', 'services_page')}
              >
                Book Your Experience
              </Link>
              <Link 
                to="/contact"
                className="btn btn-outline border-white text-white hover:bg-white/20"
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