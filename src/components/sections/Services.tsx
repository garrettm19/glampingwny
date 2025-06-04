import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';
import { trackEvent } from '../../utils/analytics';

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

const Services: React.FC = () => {
  const handleViewPackages = () => {
    trackEvent('Navigation', 'view_all_packages_click');
  };

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Birthday Packages
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Choose from our carefully designed packages or contact us for a custom experience tailored to your child's dreams.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-700 mb-6">
            Looking for something different? We offer custom packages to suit your specific needs and budget.
          </p>
          <Link 
            to="/book-now" 
            className="btn btn-primary"
            onClick={handleViewPackages}
          >
            Let's Create Magic! ✨
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;