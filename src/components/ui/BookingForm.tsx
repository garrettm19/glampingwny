import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Package, Plus, Star, Info, Check } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface BookingFormProps {
  onSubmit: (formData: any) => void;
}

const indoorPackages = [
  {
    id: 'base',
    name: 'Base Package',
    description: '1 Tent Setup',
    price: '$225',
    capacity: '1 Tent'
  },
  {
    id: '4-tents',
    name: '4 Tents Package',
    description: 'Perfect for small groups',
    price: '$375',
    capacity: '4 Tents'
  },
  {
    id: '6-tents',
    name: '6 Tents Package',
    description: 'Ideal for medium groups',
    price: '$475',
    capacity: '6 Tents'
  },
  {
    id: '8-tents',
    name: '8 Tents Package',
    description: 'Great for large groups',
    price: '$575',
    capacity: '8 Tents'
  }
];

const addons = [
  {
    id: 'balloon-garland',
    name: 'Balloon Garland Topper',
    price: '$25',
    description: 'For indoor teepee tent'
  },
  {
    id: 'luxe-teepee',
    name: 'Luxe Lace Teepee + Balloons',
    price: '$65',
    description: 'Premium decoration'
  },
  {
    id: 'picnic',
    name: 'Picnic Party Add-On',
    price: '$200',
    description: 'Complete setup'
  },
  {
    id: 'theater',
    name: 'In-Home Theater',
    price: '$35',
    description: 'Movie night setup'
  },
  {
    id: 'camera',
    name: 'Instant Print Camera',
    price: '$20',
    description: 'Capture memories'
  },
  {
    id: 'smores',
    name: "S'mores Bar Station",
    price: '$65',
    description: 'Complete setup'
  },
  {
    id: 'spa',
    name: 'Spa Party Add-On',
    price: '$250',
    description: 'Relaxation package'
  },
  {
    id: 'jenga',
    name: '"Giant" Jenga',
    price: '$10',
    description: 'Fun activity'
  },
  {
    id: 'connect4',
    name: '"Jumbo" Connect 4',
    price: '$10',
    description: 'Fun activity'
  }
];

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('Booking', 'form_submit', selectedPackage);
    onSubmit({
      date: selectedDate,
      package: selectedPackage,
      addons: selectedAddons,
      ...formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Date Selection */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-4">
          1. Choose Your Date
        </h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateSelect(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      {/* Package Selection */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-4">
          2. Select Your Package
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {indoorPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
                selectedPackage === pkg.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => handlePackageSelect(pkg.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-primary-900">{pkg.name}</h4>
                <span className="text-accent-500 font-bold">{pkg.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{pkg.description}</p>
              <p className="text-sm text-primary-600 mt-2">{pkg.capacity}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-4">
          3. Choose Add-ons (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {addons.map((addon) => (
            <motion.div
              key={addon.id}
              className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
                selectedAddons.includes(addon.id)
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => handleAddonToggle(addon.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-primary-900">{addon.name}</h4>
                <span className="text-accent-500 font-bold">{addon.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{addon.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-4">
          4. Your Information
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Space Requirements Notice */}
      <div className="glass-card p-6 bg-primary-50">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-primary-900 mb-2">
              Space Requirements
            </h3>
            <p className="text-gray-700">
              Each tent with bed is about 4ft wide x 7ft long. Please ensure you have adequate space for your selected package.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full btn btn-primary py-4 text-lg font-medium"
        disabled={!selectedDate || !selectedPackage}
      >
        Complete Booking
      </button>
    </form>
  );
};

export default BookingForm;