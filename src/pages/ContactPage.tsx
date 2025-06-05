import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Glamping WNY</title>
        <meta 
          name="description" 
          content="Get in touch with Glamping WNY for magical birthday experiences. Questions about our services? Ready to book? We're here to help create unforgettable memories." 
        />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Glamping WNY",
            "description": "Contact us for magical birthday experiences in Western New York",
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
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        {/* Sparkle effects */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90">
              Questions about our magical experiences? We'd love to hear from you!
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
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Let's Create Magic Together! ✨
                </h2>
                <p className="text-gray-700 mb-8">
                  Ready to start planning an unforgettable celebration? Have questions about our services? We're here to help make your child's special day truly magical.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <a 
                      href="tel:+17165551234"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      (716) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a 
                      href="mailto:info@glampingwny.com"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      info@glampingwny.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Service Area</h3>
                    <address className="not-italic text-gray-700">
                      Western New York<br />
                      Buffalo, NY 14221
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Response Time</h3>
                    <p className="text-gray-700">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-6 bg-primary-50 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-primary-900">
                    Trusted by 200+ Local Families
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  Join our growing family of happy parents and delighted children. We're committed to creating magical memories that last a lifetime.
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

      {/* Map Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Service Area
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We proudly serve the entire Western New York region, including Buffalo and surrounding areas.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="aspect-video bg-white rounded-lg shadow-md p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187179.45006577424!2d-78.87433459754272!3d42.88644610607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3126152dfe5a1%3A0x982304a5181f8171!2sBuffalo%2C%20NY!5e0!3m2!1sen!2sus!4v1709347721813!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glamping WNY Service Area"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;