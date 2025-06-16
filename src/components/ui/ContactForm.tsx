import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { trackFormSubmit } from '../../utils/analytics';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      trackFormSubmit('contact');
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass-card p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lavender-400 rounded-full"
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

      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-lavender-100 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-lavender-600" />
        </div>
        <h3 className="text-2xl font-bold text-lavender-900 mb-2">
          Let's Create Magic Together! ✨
        </h3>
        <p className="text-gray-600">
          Questions about our magical experiences? We'd love to hear from you!
        </p>
      </div>

      {!isSuccess ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500 transition-shadow"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500 transition-shadow"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500 transition-shadow"
            >
              <option value="">Select a topic</option>
              <option value="booking">Booking Question</option>
              <option value="packages">Package Information</option>
              <option value="custom">Custom Request</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500 transition-shadow resize-none"
              placeholder="Tell us about your dream party..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full btn btn-primary bg-lavender-600 hover:bg-lavender-700 text-white group"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <motion.div
                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </motion.button>

          <p className="text-center text-sm text-gray-600">
            We typically respond within 24 hours 🌟
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-8 h-8 text-lavender-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-lavender-900 mb-4">
            Message Sent Successfully! ✨
          </h3>
          <p className="text-gray-700 mb-6">
            We'll get back to you faster than you can say "abracadabra"!
          </p>
          <motion.button
            onClick={() => setIsSuccess(false)}
            className="btn btn-outline border-lavender-200 text-lavender-900 hover:bg-lavender-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;