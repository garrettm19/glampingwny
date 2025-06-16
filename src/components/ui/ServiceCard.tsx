import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
  features,
}) => {
  const handleBookNow = () => {
    trackEvent('Conversion', 'service_card_click', title);
  };

  return (
    <motion.div 
      className="glass-card-premium rounded-xl overflow-hidden shadow-lg h-full flex flex-col hover-lift"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div 
        className="h-52 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white/90 text-sm mt-1">{description}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-sm text-gray-400">Starting at</span>
          <p className="text-2xl font-bold text-lavender-400">{price}</p>
        </div>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-lavender-400 mr-2 font-bold">✓</span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to="/book-now" 
          onClick={handleBookNow}
          className="btn btn-primary mt-auto group inline-flex items-center justify-center"
        >
          <span>Make Their Day Special ✨</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;