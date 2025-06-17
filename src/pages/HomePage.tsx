import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MapPin, Star, Users, Shield, Clock, Tent, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Glamping WNY | Family Glamping Experiences in Buffalo Metro Area</title>
        <meta name="description" content="Create unforgettable family memories with our safe, fun glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY. Perfect for birthdays, family celebrations, and special occasions." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glampingwny.com" />
        <meta property="og:title" content="Glamping WNY | Family Glamping Experiences in Buffalo Metro Area" />
        <meta property="og:description" content="Create unforgettable family memories with our safe, fun glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY." />
        <meta property="og:image" content="https://picsum.photos/1200/630?random=100" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://glampingwny.com" />
        <meta name="twitter:title" content="Glamping WNY | Family Glamping Experiences in Buffalo Metro Area" />
        <meta name="twitter:description" content="Create unforgettable family memories with our safe, fun glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY." />
        <meta name="twitter:image" content="https://picsum.photos/1200/630?random=100" />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "image": "https://picsum.photos/1200/630?random=100",
            "description": "Family-friendly glamping experiences and luxury tent rentals for special occasions in the Buffalo Metro Area.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hamburg",
              "addressLocality": "Hamburg",
              "addressRegion": "NY",
              "postalCode": "14075",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.7161,
              "longitude": -78.8297
            },
            "url": "https://glampingwny.com",
            "telephone": "+17165551234",
            "priceRange": "$$",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 42.7161,
                "longitude": -78.8297
              },
              "geoRadius": "42 miles"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          })}
        </script>
      </Helmet>

      <Hero />
      
      {/* Service Area Banner */}
      <section className="py-6 bg-lavender-50 border-b border-lavender-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-lavender-600" />
              <span className="font-bold text-lavender-800">Proudly Servicing the Buffalo Metro Area</span>
            </div>
            <p className="text-lavender-700">
              <strong>FREE delivery within 20 miles of Hamburg, NY (14075)</strong> • 
              Extended delivery available with fees
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted by 200+ Happy Families
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to creating safe, magical experiences that bring families together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Star, title: "5.0 Rating", subtitle: "200+ Reviews", color: "text-yellow-500" },
              { icon: Users, title: "Family Safe", subtitle: "All Ages Welcome", color: "text-lavender-500" },
              { icon: Shield, title: "Fully Insured", subtitle: "Professional Service", color: "text-green-500" },
              { icon: Clock, title: "3+ Years", subtitle: "Creating Magic", color: "text-blue-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <div className={`w-16 h-16 ${item.color.replace('text-', 'bg-').replace('500', '100')} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* Simple Services Preview */}
      <section className="section bg-lavender-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                Indoor or outdoor, we have the perfect package for your family celebration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Indoor Option */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-lavender-200"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tent className="w-10 h-10 text-lavender-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Indoor Glamping</h3>
                <p className="text-gray-600">Perfect for year-round celebrations</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                  <span className="text-gray-700">Starting at $225</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                  <span className="text-gray-700">Weather-proof fun</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                  <span className="text-gray-700">Available year-round</span>
                </div>
              </div>

              <Link
                to="/services#indoor"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-semibold rounded-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Outdoor Option */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-lavender-200"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-10 h-10 text-lavender-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Outdoor Glamping</h3>
                <p className="text-gray-600">Backyard adventures under the stars</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                  <span className="text-gray-700">Starting at $500</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                  <span className="text-gray-700">Premium bell tents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                  <span className="text-gray-700">Spring/Summer 2025</span>
                </div>
              </div>

              <Link
                to="/services#outdoor"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-semibold rounded-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* View All Services */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-lavender-600 hover:text-lavender-700 font-semibold group"
            >
              View All Packages & Add-ons
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-lavender-500 to-lavender-600 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Create Your Perfect Family Celebration?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your family glamping experience today and make memories that your family will treasure forever.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/book-now" 
                className="bg-white text-lavender-700 hover:bg-lavender-50 font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center group relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Let's Create Family Magic!</span>
                <Heart className="w-6 h-6 ml-2 relative z-10 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;