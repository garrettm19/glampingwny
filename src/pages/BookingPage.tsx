import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, Users, Gift, MapPin, Phone, Mail, Star } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const BookingPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Your Glamping Experience | Glamping WNY</title>
        <meta name="description" content="Reserve your magical glamping experience today. Easy booking, instant confirmation, and unforgettable memories await." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Magical Experience</h1>
            <p className="text-xl text-white/90">
              Choose your perfect date and let's start creating memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Important Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                {/* Service Area */}
                <div className="glass-card p-6 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-primary-600" />
                    <h2 className="text-xl font-bold text-primary-900">Service Area</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We proudly serve all of Western New York, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li>• Buffalo</li>
                    <li>• Amherst</li>
                    <li>• Clarence</li>
                    <li>• East Aurora</li>
                    <li>• Lancaster</li>
                    <li>• Orchard Park</li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="glass-card p-6 mb-8">
                  <h2 className="text-xl font-bold text-primary-900 mb-4">Questions?</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <a href="tel:+17165551234" className="text-gray-700 hover:text-primary-600">
                        (716) 555-1234
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <a href="mailto:info@glampingwny.com" className="text-gray-700 hover:text-primary-600">
                        info@glampingwny.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                <div className="glass-card p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "The perfect birthday experience! Everything was magical and the kids had an amazing time."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    - Sarah M., Buffalo NY
                  </p>
                </div>

                {/* How Booking Works */}
                <div className="glass-card p-6">
                  <h2 className="text-xl font-bold text-primary-900 mb-6">
                    How Booking Works
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Calendar,
                        title: "1. Pick Your Date",
                        description: "Choose from available dates in our calendar"
                      },
                      {
                        icon: Clock,
                        title: "2. Select Your Time",
                        description: "Morning or afternoon setup available"
                      },
                      {
                        icon: Users,
                        title: "3. Guest Details",
                        description: "Let us know how many kids are celebrating"
                      },
                      {
                        icon: Gift,
                        title: "4. Customize",
                        description: "Add special touches to make it perfect"
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-primary-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Booking Calendar */}
            <div>
              <div id="booking-widget" className="glass-card p-6 rounded-xl overflow-hidden">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/glampingwny/birthday-party"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;