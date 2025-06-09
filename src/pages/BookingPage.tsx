import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import BookingForm from '../components/ui/BookingForm';
import { Star, Calendar, Shield, MapPin, Info, Clock, Users, Sparkles } from 'lucide-react';

const BookingPage: React.FC = () => {
  const handleBookingSubmit = (formData: any) => {
    console.log('Booking submitted:', formData);
    // Handle form submission - send to backend, etc.
  };

  return (
    <>
      <Helmet>
        <title>Book Your Glamping Experience | Magical Birthday Parties</title>
        <meta 
          name="description" 
          content="Book your magical glamping experience with Glamping WNY. Choose your package, select your theme, and create unforgettable memories." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Magical Experience
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Simple booking • Instant confirmation • Magical memories
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Calendar, label: 'Easy Booking', desc: 'Book in just 3 simple steps' },
                { icon: Sparkles, label: 'Instant Confirmation', desc: 'Get confirmed immediately' },
                { icon: Shield, label: 'Secure & Safe', desc: 'Trusted by 200+ families' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                  <h3 className="font-bold text-white mb-1">{feature.label}</h3>
                  <p className="text-sm text-white/80">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>
      </section>

      {/* Information Cards */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Important Information
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Everything you need to know about your glamping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Setup & Pickup",
                description: "Setup by 4 PM, pickup after 10 AM next day",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: MapPin,
                title: "Service Area",
                description: "Free delivery within 20 miles of Hamburg, NY",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Users,
                title: "Age Requirement",
                description: "All guests must be 5 years or older",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "All equipment sanitized between uses",
                color: "bg-orange-50 text-orange-600"
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              What's Included in Every Package
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              No hidden fees. Everything you need for a magical experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: '🏕️', label: 'Professional Setup' },
                { icon: '🧹', label: 'Complete Cleanup' },
                { icon: '🎨', label: 'Themed Decorations' },
                { icon: '🛡️', label: 'Safety Equipment' },
                { icon: '✨', label: 'Fairy Lights' },
                { icon: '🛏️', label: 'Comfortable Bedding' },
                { icon: '📝', label: 'Custom Letter Board' },
                { icon: '🥞', label: 'Breakfast Tray' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;