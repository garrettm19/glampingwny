import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cookie, Lock, Mail } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy & Cookie Policy | Glamping WNY</title>
        <meta name="description" content="Learn about how we collect, use, and protect your personal information at Glamping WNY." />
      </Helmet>

      {/* Hero Section - Clean Professional */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-lavender-500 to-lavender-600 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
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
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy & Cookie Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy matters to us. Learn how we protect your data.
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
                <Shield className="w-8 h-8 text-lavender-600" />
                <h2 className="text-2xl font-bold text-lavender-900">
                  Your Privacy Matters
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Last updated: March 1, 2024
                </p>
                <p>
                  At Glamping WNY, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our services.
                </p>
              </div>
            </div>

            {/* Cookie Policy */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <Cookie className="w-8 h-8 text-lavender-600" />
                <h2 className="text-2xl font-bold text-lavender-900">
                  Cookie Policy
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-lavender-900 mb-4">What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Remembering your preferences</li>
                  <li>Understanding how you use our site</li>
                  <li>Keeping you signed in</li>
                  <li>Protecting your data</li>
                </ul>

                <h3 className="text-xl font-bold text-lavender-900 mb-4">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us improve our services</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings</li>
                  <li><strong>Marketing Cookies:</strong> Help us show relevant advertisements</li>
                </ul>
              </div>
            </div>

            {/* Data Collection */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-8 h-8 text-lavender-600" />
                <h2 className="text-2xl font-bold text-lavender-900">
                  Data Collection & Usage
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-xl font-bold text-lavender-900 mb-4">Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Name and contact information</li>
                  <li>Billing and payment details</li>
                  <li>Event preferences and requirements</li>
                  <li>Communications with our team</li>
                  <li>Photos and videos from events (with consent)</li>
                </ul>

                <h3 className="text-xl font-bold text-lavender-900 mb-4">How We Use Your Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process bookings and payments</li>
                  <li>Communicate about your event</li>
                  <li>Improve our services</li>
                  <li>Send promotional materials (with consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Marketing Communications */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-8 h-8 text-lavender-600" />
                <h2 className="text-2xl font-bold text-lavender-900">
                  Marketing Communications
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  When you sign up for our newsletter or download our party planning guide, you agree to receive:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Party planning tips and inspiration</li>
                  <li>Special offers and promotions</li>
                  <li>Seasonal updates and availability</li>
                  <li>New theme announcements</li>
                </ul>
                <p>
                  You can unsubscribe at any time by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clicking the unsubscribe link in our emails</li>
                  <li>Emailing us at privacy@glampingwny.com</li>
                  <li>Updating your preferences in your account</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-lavender-900 mb-6">
                Questions or Concerns?
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our privacy policy or how we handle your data, please contact us:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Email: privacy@glampingwny.com</li>
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

export default PrivacyPolicyPage;