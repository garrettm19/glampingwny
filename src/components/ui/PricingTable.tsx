import React from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, Info } from 'lucide-react';

const PricingTable: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Delivery Information */}
      <motion.div 
        className="glass-card p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">
              Delivery Information
            </h3>
            <p className="text-gray-700 mb-4">
              We offer delivery, setup, and cleanup at no extra charge if you are within a 20-mile radius of Hamburg, NY (Zip Code 14075).
            </p>
            <div className="bg-primary-50 rounded-lg p-4">
              <h4 className="font-medium text-primary-900 mb-2">Additional Delivery Fees:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600" />
                  21-31 miles: $50.00
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600" />
                  32-42 miles: $100.00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Indoor Glamping Pricing */}
      <div>
        <h3 className="text-xl font-bold text-primary-900 mb-4">
          Indoor Glamping Packages
        </h3>
        <div className="grid gap-4">
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-primary-900 mb-2">Base Package</h4>
            <p className="text-gray-700 mb-4">Includes 1 Tent - $225</p>
            <div className="space-y-2">
              <p className="text-gray-700">Additional Tents:</p>
              <ul className="space-y-2 text-gray-700">
                <li>4 Tents: $375</li>
                <li>5 Tents: $425</li>
                <li>6 Tents: $475</li>
                <li>7 Tents: $525</li>
                <li>8 Tents: $575</li>
                <li>9 Tents: $625</li>
                <li>10 Tents: $675</li>
              </ul>
            </div>
            <div className="mt-4 bg-primary-50 rounded-lg p-4">
              <Info className="w-5 h-5 text-primary-600 mb-2" />
              <p className="text-sm text-gray-700">
                For multiple consecutive nights, keep everything for an additional $40 per teepee per night (subject to availability).
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Outdoor Glamping Pricing */}
      <div>
        <h3 className="text-xl font-bold text-primary-900 mb-4">
          Outdoor Glamping Packages
        </h3>
        <div className="grid gap-4">
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-primary-900 mb-2">16ft Bell Tent</h4>
            <div className="space-y-2 text-gray-700">
              <p>2 Glampers: $500</p>
              <p>3 Glampers: $525</p>
              <p>4 Glampers: $550</p>
              <p>5 Glampers: $575</p>
              <p>6 Glampers: $600</p>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-primary-900 mb-2">23ft Bell Tent</h4>
            <div className="space-y-2 text-gray-700">
              <p>7 Glampers: $825</p>
              <p>8 Glampers: $850</p>
              <p>9 Glampers: $875</p>
              <p>10 Glampers: $900</p>
              <p>11 Glampers: $925</p>
              <p>12 Glampers: $950</p>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-primary-900 mb-2">Additional Options</h4>
            <div className="space-y-2 text-gray-700">
              <p>Day Dreamer Lounge Tent: $500/night</p>
              <p>Canvas Tent Only: $300/night</p>
              <p>Additional Days: $150 per night</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;