import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Package, Plus, Star, Info, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  capacity: string;
  image: string;
}

interface AddOn {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
}

const packages: Package[] = [
  {
    id: '16ft-tent',
    name: '16 ft Bell Tent',
    price: '$500.00',
    description: 'Perfect for up to 6 people',
    capacity: 'Fits up to 6 people',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/16ft-tent.jpg'
  },
  {
    id: '23ft-tent',
    name: '23 ft Bell Tent',
    price: '$700.00',
    description: 'Spacious setup for larger groups',
    capacity: 'Fits 7 to 12 people',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/23ft-tent.jpg'
  },
  {
    id: 'day-dreamer',
    name: 'Day Dreamer Lounge Tent',
    price: '$500.00',
    description: 'Perfect for daytime events',
    capacity: 'Flexible seating',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/day-dreamer.jpg'
  },
  {
    id: 'canvas-only',
    name: 'Canvas Tent Only',
    price: '$300.00',
    description: 'Bring your own furnishings',
    capacity: 'Basic tent setup',
    image: 'https://glampingwny.com/wp-content/uploads/2024/03/canvas-tent.jpg'
  }
];

const addons: AddOn[] = [
  {
    id: 'lace-teepee',
    name: 'Luxe Lace Teepee + Balloons',
    price: '$65.00',
    description: 'Beautiful photo backdrop'
  },
  {
    id: 'bean-bag',
    name: 'Outdoor Bean Bag',
    price: '$10.00',
    description: 'Comfortable seating option'
  },
  {
    id: 'picnic',
    name: 'Picnic Party Add-On',
    price: '$200.00',
    description: 'Complete picnic setup'
  },
  {
    id: 'theater',
    name: 'In-Tent Theater Experience',
    price: '$35.00',
    description: 'Movie night setup'
  },
  {
    id: 'outdoor-movie',
    name: 'Movie Night Under the Stars',
    price: '$150.00',
    description: 'Complete outdoor cinema'
  },
  {
    id: 'ac',
    name: 'Portable Air Conditioner',
    price: '$50.00',
    description: 'Keep cool in summer'
  },
  {
    id: 'camera',
    name: 'Instant Print Camera',
    price: '$20.00',
    description: 'Capture memories instantly'
  },
  {
    id: 'extra-bed',
    name: 'Additional Twin Bed',
    price: '$25.00',
    description: 'Extra sleeping space'
  },
  {
    id: 'smores',
    name: "S'mores Bar Station",
    price: '$65.00',
    description: 'Complete s\'mores setup'
  },
  {
    id: 'spa',
    name: 'Spa Party Add-On',
    price: '$250.00',
    description: 'Relaxation package'
  },
  {
    id: 'games',
    name: 'Yard Games',
    price: '$10.00',
    description: 'Fun outdoor activities'
  },
  {
    id: 'lounger',
    name: 'Lounger Sofa',
    price: '$50.00',
    description: 'Comfortable outdoor seating'
  }
];

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    trackEvent('Booking', 'date_select', date);
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    trackEvent('Booking', 'package_select', packageId);
  };

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => {
      if (prev.includes(addonId)) {
        trackEvent('Booking', 'addon_remove', addonId);
        return prev.filter(id => id !== addonId);
      } else {
        trackEvent('Booking', 'addon_add', addonId);
        return [...prev, addonId];
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Book Your Glamping Experience | Glamping WNY</title>
        <meta 
          name="description" 
          content="Book your magical glamping experience with Glamping WNY. Choose your perfect package, customize with add-ons, and create unforgettable memories." 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Experience</h1>
            <p className="text-xl text-white/90">
              Choose your perfect package and create unforgettable memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Step 1: Date Selection */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary-900">
                1. Choose Your Date
              </h2>
            </div>

            <div className="glass-card p-6">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateSelect(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="text-sm text-gray-600 mt-2">
                * Weekends book up fast! Reserve early to secure your preferred date.
              </p>
            </div>
          </div>

          {/* Step 2: Package Selection */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary-900">
                2. Select Your Package
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className={`glass-card p-6 cursor-pointer relative overflow-hidden ${
                    selectedPackage === pkg.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                  whileHover={{ y: -5 }}
                >
                  {selectedPackage === pkg.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-accent-500 mb-2">{pkg.price}</p>
                  <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                  <p className="text-sm text-primary-600">{pkg.capacity}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Plus className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary-900">
                3. Customize Your Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon) => (
                <motion.div
                  key={addon.id}
                  className={`glass-card p-6 cursor-pointer ${
                    selectedAddons.includes(addon.id) ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => handleAddonToggle(addon.id)}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-primary-900">{addon.name}</h3>
                    <span className="text-accent-500 font-bold">{addon.price}</span>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Space Requirements Notice */}
          <div className="mb-16">
            <div className="glass-card p-6 bg-primary-50">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">
                    Space Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standard 16ft Bell Tent: 20' x 20' grassy area for staking</li>
                    <li>• Large 23ft Bell Tent: 26' x 26' grassy area for staking</li>
                    <li>• Clean, level ground required for setup</li>
                    <li>• Easy access for equipment required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Review & Book */}
          <div className="text-center">
            <motion.button
              className="btn btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!selectedDate || !selectedPackage}
              onClick={() => {
                trackEvent('Booking', 'submit_booking', selectedPackage);
                // Handle booking submission
              }}
            >
              Complete Booking
            </motion.button>
            <p className="text-sm text-gray-600 mt-4">
              Need help? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                200+ Happy Families
              </h3>
              <p className="text-gray-600">
                Join our growing community of satisfied customers
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Package className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                All-Inclusive Packages
              </h3>
              <p className="text-gray-600">
                Everything you need for a magical experience
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-8 h-8 text-accent-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Book your perfect date with ease
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;