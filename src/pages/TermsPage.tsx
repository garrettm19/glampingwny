import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ScrollText, Calendar, CreditCard, Umbrella, AlertCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Glamping WNY</title>
        <meta name="description" content="Read our terms of service to understand the agreement between Glamping WNY and our customers." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Everything you need to know about booking with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <ScrollText className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-900">
                  Terms and Conditions
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Last updated: March 1, 2024
                </p>
                <p>
                  By booking with Glamping WNY, you agree to these terms and conditions. Please read them carefully before making a reservation.
                </p>
              </div>
            </div>

            {/* Booking Terms */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-900">
                  Booking Terms
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Reservation Process</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Bookings are confirmed upon receipt of deposit</li>
                  <li>Minimum 4-week advance booking recommended</li>
                  <li>Maximum group size varies by package</li>
                  <li>Adult supervision required at all times</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-900 mb-4">Site Requirements</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flat area of 15×15 feet per tent required</li>
                  <li>Easy access for equipment</li>
                  <li>Property owner permission required</li>
                  <li>Adequate lighting for safety</li>
                </ul>
              </div>
            </div>

            {/* Payment & Cancellation */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-900">
                  Payment & Cancellation
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Payment Schedule</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>50% deposit required to secure booking</li>
                  <li>Remaining balance due 7 days before event</li>
                  <li>All payments processed securely</li>
                  <li>Additional services can be added up to 48 hours before</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-900 mb-4">Cancellation Policy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>14+ days notice:</strong> Full refund</li>
                  <li><strong>7-13 days notice:</strong> 50% refund or reschedule</li>
                  <li><strong>Less than 7 days:</strong> No refund, reschedule only</li>
                  <li><strong>Weather-related:</strong> Flexible rescheduling available</li>
                </ul>
              </div>
            </div>

            {/* Weather & Safety */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <Umbrella className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-900">
                  Weather & Safety
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Weather Policy</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Events proceed in light rain</li>
                  <li>Severe weather triggers safety protocol</li>
                  <li>Indoor backup options available</li>
                  <li>48-hour weather monitoring</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-900 mb-4">Safety Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All equipment safety certified</li>
                  <li>Regular sanitization</li>
                  <li>Emergency contacts required</li>
                  <li>First aid kit provided</li>
                </ul>
              </div>
            </div>

            {/* Liability */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-900">
                  Liability & Insurance
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  While we maintain comprehensive insurance and take all reasonable precautions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Clients responsible for supervising children</li>
                  <li>Property damage coverage details</li>
                  <li>Personal item liability limits</li>
                  <li>Required waivers and forms</li>
                </ul>
                <p>
                  Full insurance documentation available upon request.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-700 mb-4">
                Contact our team for clarification on any of our terms:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Email: legal@glampingwny.com</li>
                <li>Phone: (716) 555-1234</li>
                <li>Address: 123 Main Street, Buffalo, NY 14221</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;