import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Sparkles, Heart } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface BookingFormProps {
  onSubmit?: (formData: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    eventType: '',
    date: '',
    time: '',
    guests: '',
    childAge: '',
    
    // Step 2: Setup Details
    location: 'indoor',
    theme: '',
    addons: [] as string[],
    
    // Step 3: Contact Info
    name: '',
    email: '',
    phone: '',
    specialRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      trackEvent({
        category: 'Booking',
        action: 'step_complete',
        label: `Step ${step}`
      });
    } else {
      trackEvent({
        category: 'Booking',
        action: 'form_submit',
        label: formData.eventType
      });
      onSubmit?.(formData);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Step 1: Event Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Type*
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              >
                <option value="">Select event type</option>
                <option value="birthday">Birthday Party</option>
                <option value="sleepover">Sleepover Party</option>
                <option value="special">Special Occasion</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date*
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  Time*
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (1pm - 4pm)</option>
                  <option value="evening">Evening (5pm - 8pm)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Child's Age*
                </label>
                <input
                  type="number"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  min="4"
                  max="12"
                  required
                  className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Step 2: Setup Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location*
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-primary-50 transition-colors">
                  <input
                    type="radio"
                    name="location"
                    value="indoor"
                    checked={formData.location === 'indoor'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className={`text-sm font-medium ${formData.location === 'indoor' ? 'text-primary-600' : 'text-gray-600'}`}>
                    Indoor Setup
                  </span>
                  {formData.location === 'indoor' && (
                    <motion.div
                      layoutId="locationIndicator"
                      className="absolute inset-0 border-2 border-primary-500 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </label>
                <label className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-primary-50 transition-colors">
                  <input
                    type="radio"
                    name="location"
                    value="outdoor"
                    checked={formData.location === 'outdoor'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className={`text-sm font-medium ${formData.location === 'outdoor' ? 'text-primary-600' : 'text-gray-600'}`}>
                    Outdoor Setup
                  </span>
                  {formData.location === 'outdoor' && (
                    <motion.div
                      layoutId="locationIndicator"
                      className="absolute inset-0 border-2 border-primary-500 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </label>
              </div>
              {formData.location === 'outdoor' && (
                <p className="mt-2 text-sm text-accent-600">
                  Note: Outdoor setups available Spring/Summer 2025
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theme
              </label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              >
                <option value="">Select a theme</option>
                <option value="princess">Princess Party</option>
                <option value="superhero">Superhero Adventure</option>
                <option value="unicorn">Unicorn Dreams</option>
                <option value="dinosaur">Dinosaur Discovery</option>
                <option value="space">Space Explorer</option>
                <option value="custom">Custom Theme</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requirements or Notes
              </label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                placeholder="Tell us about any special requests or requirements..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Step 3: Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass-card p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-2">
          Let's Create Magic! ✨
        </h3>
        <p className="text-gray-600">
          Fill out the form below to start planning your magical experience.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= i ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {i}
            </div>
            {i < 3 && (
              <div 
                className={`h-1 w-16 ${
                  step > i ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {renderStepContent()}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="btn btn-outline"
          >
            Back
          </button>
        )}
        <motion.button
          type="submit"
          className="btn btn-primary ml-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {step === 3 ? (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Complete Booking
            </>
          ) : (
            'Continue'
          )}
        </motion.button>
      </div>

      {/* Step Indicator */}
      <div className="mt-4 text-center text-sm text-gray-600">
        Step {step} of 3
      </div>
    </motion.form>
  );
};

export default BookingForm;