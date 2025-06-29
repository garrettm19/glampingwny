import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Sparkles, Check, Mail, Phone, User, MessageCircle, Calendar, Clock } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface BookingFormProps {
  onSubmit?: (formData: any) => void;
  preselectedData?: any;
}

const themes = [
  { id: 'princess', name: 'Princess Party', icon: '👑', popular: true },
  { id: 'superhero', name: 'Superhero Adventure', icon: '🦸', popular: false },
  { id: 'unicorn', name: 'Unicorn Dreams', icon: '🦄', popular: true },
  { id: 'spa', name: 'Spa Party', icon: '💅', popular: true },
  { id: 'boho', name: 'Boho Chic', icon: '🌸', popular: false },
  { id: 'elegant', name: 'Elegant Celebration', icon: '✨', popular: false },
  { id: 'tropical', name: 'Tropical Paradise', icon: '🌺', popular: false },
  { id: 'vintage', name: 'Vintage Glam', icon: '🎭', popular: false },
  { id: 'buffalo-bills', name: 'Buffalo Bills', icon: '🏈', popular: true },
  { id: 'video-game', name: 'Video Game Night', icon: '🎮', popular: false },
  { id: 'farm', name: 'Farm Adventure', icon: '🚜', popular: false },
  { id: 'space', name: 'Space Adventure', icon: '🚀', popular: false },
  { id: 'pokemon', name: 'Pokémon Fun', icon: '⚡', popular: true },
  { id: 'harry-potter', name: 'Harry Potter Magic', icon: '⚡', popular: false },
  { id: 'mermaid', name: 'Mermaid Magic', icon: '🧜‍♀️', popular: true },
  { id: 'taylor-swift', name: 'Taylor Swift Swifties', icon: '💜', popular: true },
  { id: 'custom', name: 'Custom Theme', icon: '🎨', popular: false }
];

const occasions = [
  { id: 'birthday', name: 'Birthday Party', icon: '🎂', popular: true },
  { id: 'sleepover', name: 'Sleepover Party', icon: '🌙', popular: true },
  { id: 'spa-day', name: 'Spa Day', icon: '💆‍♀️', popular: false },
  { id: 'girls-night', name: 'Girls Night', icon: '👯‍♀️', popular: false },
  { id: 'family-celebration', name: 'Family Celebration', icon: '👨‍👩‍👧‍👦', popular: true },
  { id: 'graduation', name: 'Graduation', icon: '🎓', popular: false },
  { id: 'sweet-16', name: 'Sweet 16', icon: '🎉', popular: false },
  { id: 'bachelorette', name: 'Bachelorette Party', icon: '👰', popular: false },
  { id: 'anniversary', name: 'Anniversary', icon: '💍', popular: false },
  { id: 'date-night', name: 'Date Night', icon: '💕', popular: false },
  { id: 'other', name: 'Other Celebration', icon: '🎊', popular: false }
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
    eventDate: '',
    setupTime: '',
    notes: '',
    specialRequests: '',
    ...preselectedData
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Date validation (must be in the future)
    if (formData.eventDate) {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = 'Event date must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    trackEvent({ category: 'Booking', action: 'form_submit', label: formData.occasion });
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit?.(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass-card p-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">Complete Your Booking Details</h2>
        <p className="text-gray-600">Help us create the perfect experience for your special celebration</p>
      </div>

      <div className="space-y-8">
        {/* Booking Summary from Calendar */}
        {preselectedData && (
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-primary-900 mb-4">Your Selected Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {preselectedData.date && (
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                  <p className="font-medium text-primary-900">
                    {new Date(preselectedData.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
              {preselectedData.time && (
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                  <p className="font-medium text-primary-900">{preselectedData.time}</p>
                </div>
              )}
              {preselectedData.total && (
                <div className="text-center">
                  <Sparkles className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                  <p className="font-medium text-primary-900">${preselectedData.total}</p>
                </div>
              )}
            </div>
            
            {preselectedData.services && (
              <div className="mt-4 pt-4 border-t border-primary-200">
                <h4 className="font-medium text-primary-900 mb-2">Selected Services:</h4>
                <div className="space-y-1">
                  {preselectedData.services.map((service: any, index: number) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{service.name} {service.quantity > 1 && `(×${service.quantity})`}</span>
                      <span>${service.price * service.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Event Details */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Event Details</h3>
          
          {/* Occasion Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What's the Occasion?*
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
                    {occasion.popular && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                    )}
                    <span className="text-2xl mb-2 block">{occasion.icon}</span>
                    <div className="font-medium text-primary-900 text-sm">{occasion.name}</div>
                    
                    {formData.occasion === occasion.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 left-2 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Your Theme*
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
                    {theme.popular && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></div>
                    )}
                    <span className="text-2xl mb-2 block">{theme.icon}</span>
                    <div className="font-medium text-primary-900 text-sm">{theme.name}</div>
                    
                    {formData.theme === theme.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 left-2 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
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

          {/* Event Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                Preferred Event Date*
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                min={getMinDate()}
                required
                className={`w-full px-4 py-2 bg-white rounded-lg border ${
                  errors.eventDate ? 'border-red-500' : 'border-gray-200'
                } focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              />
              {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
            </div>
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Clock className="w-4 h-4 mr-2" />
                Preferred Setup Time
              </label>
              <select
                name="setupTime"
                value={formData.setupTime}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning Setup (9am-12pm)</option>
                <option value="afternoon">Afternoon Setup (1pm-4pm)</option>
                <option value="evening">Evening Setup (5pm-8pm)</option>
                <option value="flexible">I'm flexible</option>
              </select>
            </div>
          </div>

          {/* Guest Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
                max="20"
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
                placeholder="Age of guest of honor"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                placeholder="Your full name"
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
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                placeholder="(716) 555-1234"
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
              <p className="text-xs text-gray-500 mt-1">
                We serve the Buffalo Metro Area with FREE delivery within 20 miles of Hamburg, NY
              </p>
            </div>
          </div>
        </div>

        {/* Special Requirements */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Additional Information</h3>
          
          <div className="space-y-6">
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
                placeholder="Tell us about any special requests, dietary restrictions, accessibility needs, or additional information..."
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Sparkles className="w-4 h-4 mr-2" />
                Custom Theme Details (if applicable)
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="If you selected 'Custom Theme', please describe your vision here..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary py-4 text-lg relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Processing Your Booking...
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Complete Booking
            </span>
          )}
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
            <span>Free cancellation (14+ days)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>200+ happy families</span>
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default BookingForm;