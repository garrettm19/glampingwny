import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import ServiceAreaMap from '../components/ui/ServiceAreaMap';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Glamping WNY Family Experiences</title>
        <meta 
          name="description" 
          content="Get in touch with Glamping WNY for luxury family glamping experiences. Questions about our services? Ready to book? We serve the Buffalo Metro Area with free delivery within 20 miles of Hamburg, NY." 
        />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Glamping WNY",
            "description": "Contact us for luxury family glamping experiences in Western New York",
            "url": "https://glampingwny.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+17165551234",
              "contactType": "customer service",
              "areaServed": "Western New York",
              "availableLanguage": "English"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-lavender-600 via-teal-600 to-lavender-700 text-white relative overflow-hidden">
        {/* Sparkle effects */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch 💬</h1>
            <p className="text-xl text-white/90 mb-6">
              Questions about our family experiences? We'd love to hear from you!
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" />
                <span className="font-medium">Serving the Buffalo Metro Area</span>
              </div>
            </div>
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
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Let's Create Family Magic Together! ✨
                </h2>
                <p className="text-gray-700 mb-8">
                  Ready to start planning an unforgettable family celebration? Have questions about our services? We're here to help make your special day truly magical.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-lavender-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <a 
                      href="tel:+17165551234"
                      className="text-gray-700 hover:text-lavender-600 transition-colors"
                    >
                      (716) 555-1234
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Call or text us anytime!</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-lavender-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a 
                      href="mailto:info@glampingwny.com"
                      className="text-gray-700 hover:text-lavender-600 transition-colors"
                    >
                      info@glampingwny.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-lavender-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Service Area</h3>
                    <address className="not-italic text-gray-700">
                      Buffalo Metro Area<br />
                      Based in Hamburg, NY 14075
                    </address>
                    <p className="text-sm text-gray-600 mt-1">FREE delivery within 20 miles</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-lavender-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Response Time</h3>
                    <p className="text-gray-700">
                      We typically respond within 24 hours
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Usually much faster!</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-6 bg-lavender-50 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-lavender-900">
                    Trusted by 200+ Local Families
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  Join our growing family of happy customers. We're committed to creating magical memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Service Area
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We proudly serve families throughout the Buffalo Metro Area with free delivery within 20 miles of Hamburg, NY.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ServiceAreaMap />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;