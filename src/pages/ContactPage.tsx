import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock, Star, Heart } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Glamping WNY</title>
        <meta name="description" content="Contact Glamping WNY for luxury glamping experiences in Western New York. Call (716) 555-1234 or email us. Free delivery within 20 miles of Hamburg, NY." />
      </Helmet>

      {/* Hero Section - Beautiful Lilac Night Sky */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* SUPER SPARKLY NIGHT SKY BACKGROUND */}
        <div className="absolute inset-0 z-0">
          {/* Main night sky background with realistic lilac colors and TONS of stars */}
          <div className="w-full h-full bg-lilac-night-sky"></div>
          
          {/* MASSIVE SPARKLY STAR OVERLAY - 100+ animated twinkling stars! */}
          <div className="absolute inset-0 opacity-90">
            {[...Array(100)].map((_, i) => {
              const size = Math.random() > 0.8 ? '3px' : Math.random() > 0.6 ? '2px' : '1px';
              const animationType = Math.random() > 0.7 ? 'animate-twinkle-fast' : 
                                   Math.random() > 0.4 ? 'animate-twinkle' : 'animate-twinkle-slow';
              
              return (
                <motion.div
                  key={i}
                  className={`absolute bg-white rounded-full ${animationType}`}
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>

          {/* Extra sparkly shooting stars */}
          <div className="absolute inset-0 opacity-60">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: '4px',
                  height: '1px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  filter: 'blur(1px)',
                  background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                }}
                animate={{
                  x: [0, 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Magical sparkle dust effect */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={`dust-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: '1px',
                  height: '1px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  y: [0, -20, -40],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 6,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Subtle atmospheric glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Let's Create Magic
              <span className="block bg-gradient-to-r from-lavender-300 via-lavender-200 to-white bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Ready to plan your perfect glamping experience? 
              We'd love to hear from you and help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Whether you're planning a birthday party, anniversary celebration, 
                  or just want to create a magical experience for your family, 
                  we're here to help make it perfect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                    <a 
                      href="tel:+17165551234"
                      className="text-gray-700 hover:text-lavender-600 transition-colors text-lg"
                    >
                      (716) 555-1234
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call or text us anytime!</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                    <a 
                      href="mailto:info@glampingwny.com"
                      className="text-gray-700 hover:text-lavender-600 transition-colors text-lg"
                    >
                      info@glampingwny.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Service Area</h3>
                    <address className="not-italic text-gray-700 text-lg">
                      Buffalo Metro Area<br />
                      Based in Hamburg, NY 14075
                    </address>
                    <p className="text-sm text-lavender-600 font-medium mt-1">FREE delivery within 20 miles</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Response Time</h3>
                    <p className="text-gray-700 text-lg">
                      We typically respond within 24 hours
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Usually much faster!</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-lavender-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-lavender-900">
                    Trusted by 200+ Local Families
                  </span>
                </div>
                <p className="text-gray-700">
                  Join our growing family of happy customers. We're committed to creating 
                  magical memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve families throughout the Buffalo Metro Area with 
              free delivery within 20 miles of Hamburg, NY.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map coming soon</p>
                <p className="text-sm text-gray-500">Buffalo Metro Area Coverage</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-lavender-50 rounded-lg">
                <div className="text-2xl font-bold text-lavender-600 mb-2">FREE</div>
                <div className="text-sm text-gray-700">Within 20 miles</div>
              </div>
              <div className="text-center p-4 bg-sage-50 rounded-lg">
                <div className="text-2xl font-bold text-sage-600 mb-2">$50</div>
                <div className="text-sm text-gray-700">21-31 miles</div>
              </div>
              <div className="text-center p-4 bg-cream-50 rounded-lg">
                <div className="text-2xl font-bold text-cream-600 mb-2">$100</div>
                <div className="text-sm text-gray-700">32-42 miles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;