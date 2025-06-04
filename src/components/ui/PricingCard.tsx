import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

const PricingCard: React.FC = () => {
  return (
    <motion.div 
      className="glass-card p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 -z-10" />
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
              x: Math.random() * 40 - 20,
              y: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
          />
        ))}
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold text-primary-900 mb-2">$199</h3>
        <p className="text-xl font-medium text-primary-700">Standard Glamp Party</p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-center mb-8">
        Includes setup, decor, tent, table, and cleanup.
      </p>

      {/* Checklist */}
      <div className="space-y-3 mb-8">
        {[
          'Professional tent setup',
          'Themed decorations',
          'Comfortable seating',
          'Ambient lighting',
          'Complete cleanup'
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </motion.div>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="flex items-center justify-center gap-2 mb-8 text-gray-600 bg-white/50 rounded-lg p-3">
        <Shield className="w-5 h-5" />
        <span className="text-sm">Payment is secure and your date is locked in.</span>
      </div>

      {/* CTA Button */}
      <motion.button
        className="btn btn-primary w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Reserve Now
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;