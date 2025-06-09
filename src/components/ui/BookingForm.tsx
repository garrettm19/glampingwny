import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Sparkles, Check, Mail, Download } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface BookingFormProps {
  onSubmit?: (formData: any) => void;
}

const themes = [
  { id: 'princess', name: 'Princess Party', icon: '👑' },
  { id: 'superhero', name: 'Superhero Adventure', icon: '🦸' },
  { id: 'unicorn', name: 'Unicorn Dreams', icon: '🦄' },
  { id: 'dinosaur', name: 'Dinosaur Discovery', icon: '🦕' },
  { id: 'space', name: 'Space Explorer', icon: '🚀' },
  { id: 'mermaid', name: 'Mermaid Magic', icon: '🧜‍♀️' }
];

const packages = [
  { id: 'base', name: 'Indoor Base Package', price: 225, description: 'Perfect for intimate celebrations' },
  { id: 'group', name: 'Indoor Group Package', price: 375, description: 'Great for friend groups' },
  { id: 'ultimate', name: 'Indoor Ultimate Package', price: 525, description: 'The complete experience' }
];

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    package: '', date: '', time: 'afternoon', theme: '', guests: '6',
    childName: '', childAge: '7', name: '', email: '', phone: '', location: '', notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    trackEvent({ category: 'Booking', action: 'field_change', label: name });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent({ category: 'Booking', action: 'form_submit', label: formData.package });
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    onSubmit?.(formData);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-primary-900 mb-4">🎉 Booking Confirmed!</h3>
        <p className="text-gray-600 mb-8">Your magical glamping experience is all set!</p>
        
        <div className="bg-primary-50 rounded-lg p-6 mb-8">
          <h4 className="font-bold text-primary-900 mb-4">Booking Summary</h4>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span>Date:</span><span className="font-medium">{formData.date}</span>
            </div>
            <div className="flex justify-between">
              <span>Package:</span><span className="font-medium">{packages.find(p => p.id === formData.package)?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Theme:</span><span className="font-medium">{themes.find(t => t.id === formData.theme)?.icon} {themes.find(t => t.id === formData.theme)?.name}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="btn btn-outline flex items-center gap-2">
            <Calendar className="w-5 h-5" />Add to Calendar
          </button>
          <button className="btn btn-primary flex items-center gap-2">
            <Download className="w-5 h-5" />Download Confirmation
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass-card p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">Let's Create Magic! ✨</h2>
        <p className="text-gray-600">Fill out the form below to start planning your magical experience.</p>
      </div>

      <div className="space-y-6">
        {/* Package Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Select Package*</label>
          <div className="grid gap-4">
            {packages.map((pkg) => (
              <label key={pkg.id} className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.package === pkg.id ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                <input type="radio" name="package" value={pkg.id} checked={formData.package === pkg.id} onChange={handleChange} className="sr-only" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-primary-900">{pkg.name}</h4>
                    <span className="text-lg font-bold text-primary-700">${pkg.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>
                {formData.package === pkg.id && <Check className="w-5 h-5 text-primary-600 ml-3" />}
              </label>
            ))}
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 mr-2" />Preferred Date*
            </label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Clock className="w-4 h-4 mr-2" />Setup Time*
            </label>
            <select name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option value="morning">Morning (9am - 12pm)</option>
              <option value="afternoon">Afternoon (1pm - 4pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
            </select>
          </div>
        </div>

        {/* Theme Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Choose Your Theme*</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <label key={theme.id} className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.theme === theme.id ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                <input type="radio" name="theme" value={theme.id} checked={formData.theme === theme.id} onChange={handleChange} className="sr-only" />
                <span className="text-2xl mr-3">{theme.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-primary-900">{theme.name}</div>
                </div>
                {formData.theme === theme.id && <Check className="w-5 h-5 text-primary-600" />}
              </label>
            ))}
          </div>
        </div>

        {/* Guest Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Users className="w-4 h-4 mr-2" />Number of Guests*
            </label>
            <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="12" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name*</label>
            <input type="text" name="childName" value={formData.childName} onChange={handleChange} required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Child's Age*</label>
            <input type="number" name="childAge" value={formData.childAge} onChange={handleChange} min="5" max="12" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 mr-2" />Setup Location*
            </label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="Enter the address for setup" className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
        </div>

        {/* Special Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements or Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about any special requests..." />
        </div>

        {/* Submit Button */}
        <motion.button type="submit" className="w-full btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Sparkles className="w-5 h-5 mr-2" />Complete Booking
        </motion.button>
      </div>
    </motion.form>
  );
};

export default BookingForm;