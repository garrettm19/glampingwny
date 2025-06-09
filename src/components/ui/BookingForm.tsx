import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Sparkles, Heart, Star, Check, Mail, Download } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface BookingFormProps {
  onSubmit?: (formData: any) => void;
}

const themes = [
  { id: 'princess', name: 'Princess Party', icon: '👑', color: 'bg-pink-100 text-pink-800' },
  { id: 'superhero', name: 'Superhero Adventure', icon: '🦸', color: 'bg-blue-100 text-blue-800' },
  { id: 'unicorn', name: 'Unicorn Dreams', icon: '🦄', color: 'bg-purple-100 text-purple-800' },
  { id: 'dinosaur', name: 'Dinosaur Discovery', icon: '🦕', color: 'bg-green-100 text-green-800' },
  { id: 'space', name: 'Space Explorer', icon: '🚀', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'mermaid', name: 'Mermaid Magic', icon: '🧜‍♀️', color: 'bg-teal-100 text-teal-800' }
];

const packages = [
  { id: 'base', name: 'Indoor Base Package', price: 225, tents: 1, description: 'Perfect for intimate celebrations' },
  { id: 'group', name: 'Indoor Group Package', price: 375, tents: '4-6', description: 'Great for friend groups' },
  { id: 'ultimate', name: 'Indoor Ultimate Package', price: 525, tents: '7-10', description: 'The complete experience' }
];

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Package & Date
    package: '',
    date: '',
    time: 'afternoon',
    duration: '1',
    
    // Theme & Guests
    theme: '',
    guests: '6',
    childName: '',
    childAge: '7',
    
    // Contact Info
    name: '',
    email: '',
    phone: '',
    location: '',
    specialRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    trackEvent({ category: 'Booking', action: 'field_change', label: name });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      trackEvent({ category: 'Booking', action: 'step_complete', label: `Step ${step}` });
      return;
    }

    // Final submission
    trackEvent({ category: 'Booking', action: 'form_submit', label: formData.package });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    onSubmit?.(formData);
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center">
          <motion.div 
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= i ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {isSubmitted && i === 3 ? <Check className="w-5 h-5" /> : i}
          </motion.div>
          {i < 3 && (
            <div className={`h-1 w-16 mx-2 ${step > i ? 'bg-primary-600' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  );

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-10 h-10 text-green-600" />
        </motion.div>

        <h3 className="text-3xl font-bold text-primary-900 mb-4">
          🎉 Booking Confirmed!
        </h3>
        
        <p className="text-gray-600 mb-8">
          Your magical glamping experience is all set! We'll send you a confirmation email with all the details.
        </p>

        <div className="bg-primary-50 rounded-lg p-6 mb-8">
          <h4 className="font-bold text-primary-900 mb-4">Booking Summary</h4>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span>Date:</span>
              <span className="font-medium">{formData.date}</span>
            </div>
            <div className="flex justify-between">
              <span>Package:</span>
              <span className="font-medium">{packages.find(p => p.id === formData.package)?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Theme:</span>
              <span className="font-medium">
                {themes.find(t => t.id === formData.theme)?.icon} {themes.find(t => t.id === formData.theme)?.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Guests:</span>
              <span className="font-medium">{formData.guests}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-outline flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </button>
          <button className="btn btn-primary flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Confirmation
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-blue-800">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Confirmation email sent!</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass-card p-8 relative overflow-hidden max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Let's Create Magic! ✨
        </h2>
        <p className="text-gray-600">
          Fill out the form below to start planning your magical experience.
        </p>
      </div>

      {renderStepIndicator()}

      {/* Step 1: Package & Date */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-accent-500" />
            Choose Your Package & Date
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Package*
            </label>
            <div className="grid grid-cols-1 gap-4">
              {packages.map((pkg) => (
                <label
                  key={pkg.id}
                  className={`
                    relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${formData.package === pkg.id 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-200 hover:border-primary-300'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="package"
                    value={pkg.id}
                    checked={formData.package === pkg.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-primary-900">{pkg.name}</h4>
                      <span className="text-lg font-bold text-primary-700">${pkg.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                    <p className="text-sm text-gray-500">{pkg.tents} tent{pkg.tents !== 1 ? 's' : ''}</p>
                  </div>
                  {formData.package === pkg.id && (
                    <Check className="w-5 h-5 text-primary-600 ml-3" />
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                Preferred Date*
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
                Setup Time*
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              >
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (1pm - 4pm)</option>
                <option value="evening">Evening (5pm - 8pm)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Theme & Guests */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-accent-500" />
            Theme & Guest Details
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Your Theme*
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {themes.map((theme) => (
                <label
                  key={theme.id}
                  className={`
                    relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all
                    ${formData.theme === theme.id 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-200 hover:border-primary-300'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="theme"
                    value={theme.id}
                    checked={formData.theme === theme.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-2xl mr-3">{theme.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-primary-900">{theme.name}</div>
                  </div>
                  {formData.theme === theme.id && (
                    <Check className="w-5 h-5 text-primary-600" />
                  )}
                </label>
              ))}
            </div>
          </div>

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
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child's Name*
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child's Age*
              </label>
              <input
                type="number"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                min="5"
                max="12"
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent-500" />
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Setup Location*
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter the address for setup"
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
              />
            </div>
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
              placeholder="Tell us about any special requests, dietary restrictions, or additional information..."
            />
          </div>
        </div>
      )}

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