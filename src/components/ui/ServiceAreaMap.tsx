import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Check } from 'lucide-react';

interface ServiceAreaMapProps {
  showPricing?: boolean;
  className?: string;
}

const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ 
  showPricing = true, 
  className = '' 
}) => {
  const popularAreas = [
    'Buffalo', 'Cheektowaga', 'West Seneca', 'Orchard Park', 
    'East Aurora', 'Lancaster', 'Depew', 'Williamsville',
    'Amherst', 'Tonawanda', 'Kenmore', 'Grand Island',
    'Hamburg', 'Blasdell', 'Eden', 'Angola'
  ];

  return (
    <div className={`bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
          <MapPin className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Proudly Servicing the Buffalo Metro Area 🗺️
        </h3>
        <p className="text-green-700">
          We bring magical family experiences throughout Western New York
        </p>
      </div>
      
      {/* Interactive Map */}
      <div className="aspect-video bg-white rounded-lg shadow-md p-2 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93589.72503288712!2d-78.87433459754272!3d42.88644610607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3126152dfe5a1%3A0x982304a5181f8171!2sHamburg%2C%20NY%2014075!5e0!3m2!1sen!2sus!4v1709347721813!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Glamping WNY Service Area - Hamburg, NY"
        />
      </div>

      {/* Delivery Pricing */}
      {showPricing && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div 
            className="text-center p-4 bg-white rounded-lg border border-green-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-green-800 mb-2">FREE Delivery Zone</h4>
            <p className="text-sm text-green-700 mb-2">Within 20 miles of Hamburg, NY</p>
            <p className="text-lg font-bold text-green-600">$0 Delivery Fee</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-4 bg-white rounded-lg border border-yellow-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <h4 className="font-bold text-yellow-800 mb-2">Extended Zone 1</h4>
            <p className="text-sm text-yellow-700 mb-2">21-31 miles from Hamburg</p>
            <p className="text-lg font-bold text-yellow-600">$50 Delivery Fee</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-4 bg-white rounded-lg border border-orange-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-bold text-orange-800 mb-2">Extended Zone 2</h4>
            <p className="text-sm text-orange-700 mb-2">32-42 miles from Hamburg</p>
            <p className="text-lg font-bold text-orange-600">$100 Delivery Fee</p>
          </motion.div>
        </div>
      )}

      {/* Popular Areas */}
      <div className="text-center">
        <h4 className="font-bold text-green-800 mb-3">Popular Service Areas Include:</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {popularAreas.map((city, index) => (
            <motion.span 
              key={index}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {city}
            </motion.span>
          ))}
        </div>
        <p className="text-sm text-green-600 mt-4">
          Don't see your area? <a href="/contact" className="font-medium hover:underline">Contact us</a> - we may still be able to serve you!
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaMap;