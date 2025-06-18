import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
  category?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
  features,
  popular = false,
  category = "Experience"
}) => {
  return (
    <motion.div 
      className="group relative"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass-card overflow-hidden h-full flex flex-col">
        {/* Popular Badge */}
        {popular && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Most Popular
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm opacity-80">{category}</div>
            <div className="text-2xl font-bold">{price}</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          
          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <span className="text-emerald-500 mr-2 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{features.length - 3} more features
              </li>
            )}
          </ul>
          
          {/* CTA Button */}
          <Link 
            to="/book-now" 
            className="btn btn-primary mt-auto group inline-flex items-center justify-center"
          >
            <span>Book Experience</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;