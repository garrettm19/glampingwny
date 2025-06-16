import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, MapPin, Star, Users, Shield, Clock, Camera, Tent, PartyPopper } from 'lucide-react';
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
      
      {/* Why Choose Us - Simplified */}
      <section className="section dark-section relative overflow-hidden">
        {/* Enhanced magical background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating magical orbs */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute magical-orb"
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
          
          {/* Sparkle particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lavender-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4,
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
          {/* Starry Night Header */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
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
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Families Love Glamping WNY! 🏕️
                  </h2>
                  <p className="text-blue-100 max-w-3xl mx-auto mb-8">
                    We're here to make your family celebrations extra special! From cozy indoor sleepovers to magical outdoor adventures, we create safe, fun experiences that bring families together.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Key Benefits - Simplified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "100% Safe & Clean",
                description: "Kid-safe equipment, thoroughly sanitized",
                color: "bg-lavender-500/20 text-lavender-300"
              },
              {
                icon: Clock,
                title: "Zero Stress Setup",
                description: "We handle everything - setup to cleanup",
                color: "bg-teal-500/20 text-teal-300"
              },
              {
                icon: Users,
                title: "200+ Happy Families",
                description: "Trusted by families across WNY",
                color: "bg-lavender-500/20 text-lavender-300"
              },
              {
                icon: MapPin,
                title: "FREE Local Delivery",
                description: "Within 20 miles of Hamburg, NY",
                color: "bg-teal-500/20 text-teal-300"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-premium text-center p-6 hover-lift"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Indoor Glamping */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lavender-500/20 rounded-full flex items-center justify-center">
                  <Tent className="w-8 h-8 text-lavender-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Indoor Glamping</h3>
                  <p className="text-lavender-300">Year-round family fun</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Transform your home into a magical wonderland! Perfect for birthdays, sleepovers, and family celebrations. Available 365 days a year.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-lavender-400">Starting at $225</span>
                <span className="text-sm text-gray-400">1-10 tents available</span>
              </div>
              <Link
                to="/services#indoor"
                className="btn btn-primary w-full group"
              >
                <span>Explore Indoor Options</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Outdoor Glamping */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <PartyPopper className="w-8 h-8 text-teal-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Outdoor Glamping</h3>
                  <p className="text-teal-300">Backyard adventures</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Experience the magic of outdoor camping in your own backyard! Bell tents and day experiences available Spring/Summer 2025.
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-teal-400">Starting at $500</span>
                <span className="text-sm text-gray-400">Coming Spring 2025</span>
              </div>
              <Link
                to="/services#outdoor"
                className="btn btn-secondary w-full group"
              >
                <span>Explore Outdoor Options</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Testimonial */}
      <section className="section relative overflow-hidden" style={{
        background: `linear-gradient(135deg, 
          #0f172a 0%, 
          #1e293b 25%, 
          #334155 50%, 
          #1e293b 75%, 
          #0f172a 100%)`
      }}>
        {/* Enhanced magical background */}
        <div className="absolute inset-0">
          {/* Floating stars */}
          {[...Array(30)].map((_, i) => (
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

          {/* Magical orbs */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute magical-orb"
              style={{
                width: `${40 + Math.random() * 30}px`,
                height: `${40 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card-premium p-8 md:p-12">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                "Holly was absolutely amazing and easy to work with! She knocked the theme out of the park with Barbie décor in our glamping tent! All the girls were so impressed and we enjoyed our first glamping experience so much!"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <img
                  src="https://picsum.photos/100/100?random=50"
                  alt="Rachel C."
                  className="w-16 h-16 rounded-full object-cover border-4 border-lavender-300/50"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-200">Rachel C.</div>
                  <div className="text-lavender-300 text-sm">Bachelorette Party</div>
                </div>
              </div>

              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-lavender-400 hover:text-lavender-300 font-semibold group"
              >
                Read All 200+ Family Reviews
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/gallery" 
                  className="border-2 border-white text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center group transition-all duration-300"
                >
                  <Camera className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                  See the Magic
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">5.0★</div>
                <div className="text-sm text-white/80">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/80">Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm text-white/80">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm text-white/80">Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;