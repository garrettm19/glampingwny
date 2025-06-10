import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Sparkles, Check, Mail, Phone, User, MessageCircle } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface BookingFormProps {
  onSubmit?: (formData: any) => void;
  preselectedData?: any;
}

const themes = [
  { id: 'princess', name: 'Princess Party', icon: '👑' },
  { id: 'superhero', name: 'Superhero Adventure', icon: '🦸' },
  { id: 'unicorn', name: 'Unicorn Dreams', icon: '🦄' },
  { id: 'romantic', name: 'Romantic Evening', icon: '💕' },
  { id: 'boho', name: 'Boho Chic', icon: '🌸' },
  { id: 'elegant', name: 'Elegant Celebration', icon: '✨' },
  { id: 'tropical', name: 'Tropical Paradise', icon: '🌺' },
  { id: 'vintage', name: 'Vintage Glam', icon: '🎭' },
  { id: 'custom', name: 'Custom Theme', icon: '🎨' }
];

const occasions = [
  { id: 'birthday', name: 'Birthday Party', icon: '🎂' },
  { id: 'bachelorette', name: 'Bachelorette Party', icon: '👰' },
  { id: 'anniversary', name: 'Anniversary', icon: '💍' },
  { id: 'date-night', name: 'Date Night', icon: '💕' },
  { id: 'girls-night', name: 'Girls Night', icon: '👯‍♀️' },
  { id: 'graduation', name: 'Graduation', icon: '🎓' },
  { id: 'proposal', name: 'Proposal', icon: '💎' },
  { id: 'other', name: 'Other Celebration', icon: '🎉' }
];

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit, preselectedData }) => {
  const [formData, setFormData] = useState({
    theme: '',
    guests: '6',
    occasion: '',
    guestOfHonor: '',
    guestAge: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: '',
    ...preselectedData
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    trackEvent({ category: 'Booking', action: 'field_change', label: name });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.location.trim()) newErrors.location = 'Setup location is required';
    if (!formData.occasion) newErrors.occasion = 'Please select an occasion';
    if (!formData.theme) newErrors.theme = 'Please select a theme';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    trackEvent({ category: 'Booking', action: 'form_submit', label: formData.occasion });
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit?.(formData);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass-card p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">Tell Us About Your Celebration</h2>
        <p className="text-gray-600">Help us create the perfect experience for your special day</p>
      </div>

      <div className="space-y-8">
        {/* Occasion Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What's the Occasion?*
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {occasions.map((occasion) => (
              <motion.label
                key={occasion.id}
                className={`relative cursor-pointer group ${
                  formData.occasion === occasion.id 
                    ? 'ring-2 ring-primary-500' 
                    : 'hover:ring-2 hover:ring-primary-300'
                } ${errors.occasion ? 'ring-2 ring-red-500' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="radio"
                  name="occasion"
                  value={occasion.id}
                  checked={formData.occasion === occasion.id}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="glass-card p-4 text-center relative overflow-hidden">
                  <span className="text-2xl mb-2 block">{occasion.icon}</span>
                  <div className="font-medium text-primary-900 text-sm">{occasion.name}</div>
                  
                  {formData.occasion === occasion.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.label>
            ))}
          </div>
          {errors.occasion && <p className="text-red-500 text-sm mt-1">{errors.occasion}</p>}
        </div>

        {/* Theme Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Choose Your Theme*
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {themes.map((theme) => (
              <motion.label
                key={theme.id}
                className={`relative cursor-pointer group ${
                  formData.theme === theme.id 
                    ? 'ring-2 ring-primary-500' 
                    : 'hover:ring-2 hover:ring-primary-300'
                } ${errors.theme ? 'ring-2 ring-red-500' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="radio"
                  name="theme"
                  value={theme.id}
                  checked={formData.theme === theme.id}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="glass-card p-4 text-center relative overflow-hidden">
                  <span className="text-2xl mb-2 block">{theme.icon}</span>
                  <div className="font-medium text-primary-900 text-sm">{theme.name}</div>
                  
                  {formData.theme === theme.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.label>
            ))}
          </div>
          {errors.theme && <p className="text-red-500 text-sm mt-1">{errors.theme}</p>}
        </div>

        {/* Guest Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Users className="w-4 h-4 mr-2" />
              Number of Guests*
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="12"
              required
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guest of Honor
            </label>
            <input
              type="text"
              name="guestOfHonor"
              value={formData.guestOfHonor}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Birthday person, couple, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age (if applicable)
            </label>
            <input
              type="number"
              name="guestAge"
              value={formData.guestAge}
              onChange={handleChange}
              min="1"
              max="100"
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 mr-2" />
              Your Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 bg-white rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 mr-2" />
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 bg-white rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 mr-2" />
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 bg-white rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 mr-2" />
              Setup Location*
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter the address for setup"
              className={`w-full px-4 py-2 bg-white rounded-lg border ${
                errors.location ? 'border-red-500' : 'border-gray-200'
              } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
        </div>

        {/* Special Notes */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <MessageCircle className="w-4 h-4 mr-2" />
            Special Requirements or Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Tell us about any special requests, dietary restrictions, or additional information..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full btn btn-primary py-4 text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Complete Booking
        </motion.button>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Secure booking</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Instant confirmation</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Free cancellation</span>
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default BookingForm;