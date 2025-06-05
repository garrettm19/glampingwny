import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import BookingForm from '../components/ui/BookingForm';
import { Star, Calendar, Shield } from 'lucide-react';

const BookingPage: React.FC = () => {
  const handleBookingSubmit = (formData: any) => {
    console.log('Booking submitted:', formData);
    // Handle form submission
  };

  return (
    <>
      <Helmet>
        <title>Book Your Indoor Glamping Experience | Glamping WNY</title>
        <meta 
          name="description" 
          content="Book your magical indoor glamping experience with Glamping WNY. Choose your perfect package, customize with add-ons, and create unforgettable memories." 
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
              Transform your space into a magical wonderland. Available year-round!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <BookingForm onSubmit={handleBookingSubmit} />
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
              <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Book your perfect date with ease
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Shield className="w-8 h-8 text-accent-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">
                Safe & Clean
              </h3>
              <p className="text-gray-600">
                All equipment sanitized between uses
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;