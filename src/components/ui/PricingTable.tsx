import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Calendar, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

const packages = [
  {
    name: "Indoor Base Package",
    price: "$225",
    description: "Perfect for intimate celebrations",
    features: [
      "1 Glamping Tent",
      "Memory Foam Mattress", 
      "Cozy Blanket and Linens",
      "Custom Letter Board",
      "Décor Pillows",
      "Breakfast Tray with Lantern",
      "Fairy Lights",
      "Setup and Cleanup",
      "Your Choice of Theme"
    ],
    maxGuests: 2,
    isPopular: false
  },
  {
    name: "Indoor Group Package",
    price: "$375-$475",
    description: "4-6 Tents Setup",
    features: [
      "4-6 Glamping Tents",
      "All Base Package Features",
      "Coordinated Theme",
      "Group Activity Space", 
      "Extended Setup Area",
      "Perfect for Sleepovers"
    ],
    maxGuests: 6,
    isPopular: true
  },
  {
    name: "Indoor Ultimate Package", 
    price: "$525-$675",
    description: "7-10 Tents Setup",
    features: [
      "7-10 Glamping Tents",
      "All Group Package Features",
      "Premium Party Space",
      "Enhanced Decorations",
      "Special Group Activities", 
      "Perfect for Large Parties"
    ],
    maxGuests: 10,
    isPopular: false
  }
];

const PricingTable: React.FC = () => {
  const handlePackageClick = (packageName: string) => {
    trackEvent({
      category: 'Pricing',
      action: 'package_click', 
      label: packageName
    });
  };

  return (
    <div className="space-y-8">
      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`glass-card relative overflow-hidden ${
              pkg.isPopular ? 'ring-2 ring-secondary-500' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {pkg.isPopular && (
              <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-primary-900">{pkg.price}</span>
                <span className="text-gray-500 ml-2">per night</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Up to {pkg.maxGuests} guests</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>One night rental</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book-now"
                onClick={() => handlePackageClick(pkg.name)}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Book This Package
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-secondary-500" />
          Important Information
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• All prices include setup, cleanup, and basic amenities</li>
          <li>• Free delivery within 20 miles of Hamburg, NY (14075)</li>
          <li>• Additional night rentals available at discounted rates</li>
          <li>• Custom themes and add-ons available for all packages</li>
          <li>• Minimum age requirement: 5 years old</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;