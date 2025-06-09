import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CalendarBooking from '../components/booking/CalendarBooking';
import { Star, Calendar, Shield, MapPin, Info, Clock, Users, Sparkles } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book Your Glamping Experience | Real-Time Calendar Booking</title>
        <meta 
          name="description" 
          content="Book your magical glamping experience with real-time availability. Choose your date, select your theme, and secure your magical celebration instantly." 
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
              Real-time availability • Instant confirmation • Secure booking
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Calendar, label: 'Real-Time Availability', desc: 'See exactly what\'s available' },
                { icon: Sparkles, label: 'Instant Confirmation', desc: 'Book and confirm immediately' },
                { icon: Shield, label: 'Secure Payment', desc: 'Safe and encrypted checkout' }
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

      {/* Booking Calendar Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <CalendarBooking />
        </div>
      </section>

      {/* Information Cards */}
      <section className="section bg-primary-50">
        <div className="container-custom">
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

      {/* Pricing Summary */}
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
              Transparent Pricing
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              No hidden fees. What you see is what you pay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Indoor Base Package",
                price: "$225",
                features: ["1 Tent", "Basic Setup", "Theme Decorations", "Cleanup Included"]
              },
              {
                name: "Indoor Group Package", 
                price: "$375-$475",
                features: ["4-6 Tents", "Extended Setup", "Group Activities", "Enhanced Themes"],
                popular: true
              },
              {
                name: "Indoor Ultimate Package",
                price: "$525-$675", 
                features: ["7-10 Tents", "Premium Setup", "Special Activities", "Custom Themes"]
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-6 relative ${pkg.popular ? 'ring-2 ring-accent-400' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-primary-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary-700 mb-4">{pkg.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Star className="w-4 h-4 text-accent-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 glass-card p-6 text-center"
          >
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              What's Included in Every Package
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>✓ Professional Setup</div>
              <div>✓ Complete Cleanup</div>
              <div>✓ Themed Decorations</div>
              <div>✓ Safety Equipment</div>
              <div>✓ Fairy Lights</div>
              <div>✓ Comfortable Bedding</div>
              <div>✓ Custom Letter Board</div>
              <div>✓ Breakfast Tray</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;