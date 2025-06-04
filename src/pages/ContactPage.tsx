import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Glamping WNY</title>
        <meta name="description" content="Have questions about our magical glamping experiences? Get in touch with our team. We're here to help create the perfect celebration for your child." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 mb-6">
              Questions about our magical experiences? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info + Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions or need more information? We'd love to hear from you! For bookings, please use our easy online booking system.
              </p>
              
              <div className="glass-card p-6 rounded-lg bg-primary-50 mb-8">
                <Link 
                  to="/book-now"
                  className="btn btn-primary bg-primary-600 hover:bg-primary-700 text-white w-full mb-4"
                >
                  Book Your Experience
                </Link>
                <p className="text-sm text-gray-600 text-center">
                  Ready to create magic? Use our online calendar to book instantly!
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
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
                  <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
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
                  <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-700">
                      Western New York<br />
                      Buffalo, NY 14221
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg bg-primary-50">
                <h3 className="font-bold text-primary-900 mb-3">Hours of Operation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="text-gray-700">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="text-gray-700">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-gray-700">9:00 AM - 5:00 PM</span>
                  </div>
                </div>
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
      <section className="section bg-gray-50">
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