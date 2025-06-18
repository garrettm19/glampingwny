import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import SparklyBackground from '../components/ui/SparklyBackground';
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
          
          {/* Sparkly Background Component */}
          <SparklyBackground 
            density="heavy" 
            showShootingStars={true} 
            showSparkles={true}
          />
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
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto body-text">
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
                <p className="text-gray-600 mb-8 text-lg leading-relaxed body-text">
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
                      className="text-gray-700 hover:text-lavender-600 transition-colors text-lg body-text"
                    >
                      (716) 555-1234
                    </a>
                    <p className="text-sm text-gray-600 mt-1 body-text">Call or text us anytime!</p>
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
                      className="text-gray-700 hover:text-lavender-600 transition-colors text-lg body-text"
                    >
                      info@glampingwny.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1 body-text">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Service Area</h3>
                    <address className="not-italic text-gray-700 text-lg body-text">
                      Buffalo Metro Area<br />
                      Based in Hamburg, NY 14075
                    </address>
                    <p className="text-sm text-lavender-600 font-medium mt-1 body-text">FREE delivery within 20 miles</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-lavender-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Response Time</h3>
                    <p className="text-gray-700 text-lg body-text">
                      We typically respond within 24 hours
                    </p>
                    <p className="text-sm text-gray-600 mt-1 body-text">Usually much faster!</p>
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
                <p className="text-gray-700 body-text">
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
      <section className="section bg-gray-50 relative overflow-hidden">
        {/* Subtle sparkly background */}
        <SparklyBackground density="light" showShootingStars={false} showSparkles={true} className="opacity-10" />
        
        <div className="container-custom relative z-10">
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
            <p className="text-gray-600 max-w-2xl mx-auto body-text">
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
                <p className="text-gray-600 body-text">Interactive map coming soon</p>
                <p className="text-sm text-gray-500 body-text">Buffalo Metro Area Coverage</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-lavender-50 rounded-lg">
                <div className="text-2xl font-bold text-lavender-600 mb-2">FREE</div>
                <div className="text-sm text-gray-700 body-text">Within 20 miles</div>
              </div>
              <div className="text-center p-4 bg-sage-50 rounded-lg">
                <div className="text-2xl font-bold text-sage-600 mb-2">$50</div>
                <div className="text-sm text-gray-700 body-text">21-31 miles</div>
              </div>
              <div className="text-center p-4 bg-cream-50 rounded-lg">
                <div className="text-2xl font-bold text-cream-600 mb-2">$100</div>
                <div className="text-sm text-gray-700 body-text">32-42 miles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;