import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import VirtualTour from '../components/ui/VirtualTour';
import ChecklistDownload from '../components/ui/ChecklistDownload';
import ServiceAreaMap from '../components/ui/ServiceAreaMap';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, MapPin } from 'lucide-react';
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
      <section className="py-6 bg-slate-800/80 border-b border-slate-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span className="font-bold text-teal-300">Proudly Servicing the Buffalo Metro Area</span>
            </div>
            <p className="text-teal-200">
              <strong>FREE delivery within 20 miles of Hamburg, NY (14075)</strong> • 
              Extended delivery available with fees
            </p>
          </motion.div>
        </div>
      </section>
      
      <Features />
      
      {/* Virtual Tour Section - Starry Night Header */}
      <section id="virtual-tour" className="section dark-section">
        <div className="container-custom">
          {/* Starry Night Header */}
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <div 
              className="relative py-16 px-8"
              style={{
                background: `linear-gradient(135deg, 
                  #0f172a 0%, 
                  #1e293b 25%, 
                  #334155 50%, 
                  #1e293b 75%, 
                  #0f172a 100%)`
              }}
            >
              {/* Animated Stars */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0.3, 1, 0],
                      scale: [0.5, 1, 0.8, 1.2, 0.5]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
                
                {/* Shooting Stars */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`shooting-${i}`}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full"
                    initial={{ 
                      x: -50,
                      y: Math.random() * 200,
                      opacity: 0 
                    }}
                    animate={{
                      x: window.innerWidth + 50,
                      y: Math.random() * 200 + 100,
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 8 + Math.random() * 5,
                      ease: "easeOut"
                    }}
                    style={{
                      boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8), 0 0 12px 4px rgba(255, 255, 255, 0.4)'
                    }}
                  />
                ))}

                {/* Constellation Effect */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`constellation-${i}`}
                      className="absolute"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${20 + (i % 4) * 20}%`,
                        top: `${30 + Math.floor(i / 4) * 40}%`,
                      }}
                    >
                      <div 
                        className="w-2 h-2 bg-blue-200 rounded-full"
                        style={{
                          boxShadow: '0 0 8px 2px rgba(191, 219, 254, 0.6)'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Experience the Family Magic! 🎥
                  </h2>
                  <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                    Take a virtual tour of our family-friendly glamping setup and imagine your perfect family celebration.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          <VirtualTour />
        </div>
      </section>
      
      <Services />

      {/* Service Area Map Section - Starry Night Header */}
      <section className="section dark-section-alt">
        <div className="container-custom">
          {/* Starry Night Header */}
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <div 
              className="relative py-16 px-8"
              style={{
                background: `linear-gradient(135deg, 
                  #0f172a 0%, 
                  #1e293b 25%, 
                  #334155 50%, 
                  #1e293b 75%, 
                  #0f172a 100%)`
              }}
            >
              {/* Animated Stars */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0.3, 1, 0],
                      scale: [0.5, 1, 0.8, 1.2, 0.5]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    We Serve the Buffalo Metro Area! 🗺️
                  </h2>
                  <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                    See our complete service area and delivery options for your family celebration.
                  </p>
                </motion.div>
              </div>
            </div>
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

      {/* Family Checklist Download Section */}
      <section className="section dark-section">
        <div className="container-custom max-w-3xl">
          <ChecklistDownload />
        </div>
      </section>
      
      <Testimonials />
      
      {/* Family Booking Callout */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url('https://picsum.photos/1920/1080?random=101')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Enhanced magical sparkle animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
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
          
          {/* Magical orbs */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute magical-orb"
              style={{
                width: `${50 + Math.random() * 30}px`,
                height: `${50 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
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
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Perfect Family Celebration? 👨‍👩‍👧‍👦
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
                className="bg-gradient-to-r from-white to-white/95 hover:from-white/95 hover:to-white text-lavender-700 font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center group relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Let's Create Family Magic!</span>
                <Heart className="w-6 h-6 ml-2 relative z-10 group-hover:scale-110 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-lavender-100/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ borderRadius: '50%', originX: 0.5, originY: 0.5 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;