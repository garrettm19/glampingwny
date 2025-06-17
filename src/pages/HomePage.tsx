import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MapPin, Star, Users, Shield, Clock, Tent, TreePine, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

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
        <meta property="og:image" content="/glamping-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://glampingwny.com" />
        <meta name="twitter:title" content="Glamping WNY | Family Glamping Experiences in Buffalo Metro Area" />
        <meta name="twitter:description" content="Create unforgettable family memories with our safe, fun glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY." />
        <meta name="twitter:image" content="/glamping-logo.png" />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "image": "/glamping-logo.png",
            "logo": "/glamping-logo.png",
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
      
      {/* Service Area Banner - Enhanced */}
      <section className="py-6 bg-gradient-to-r from-primary-50 via-accent-50 to-pink-50 border-b border-primary-100 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-pattern-sparkle opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <MapPin className="w-5 h-5 text-primary-600" />
              </motion.div>
              <span className="font-semibold text-primary-800 text-sm gradient-text">
                Proudly Servicing the Buffalo Metro Area
              </span>
            </div>
            <p className="text-primary-700 text-sm">
              <strong className="text-secondary-600">FREE delivery within 20 miles of Hamburg, NY (14075)</strong> • 
              <span className="text-accent-600"> Extended delivery available with fees</span>
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* About Section - Enhanced with Vibrant Colors */}
      <section className="py-16 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-xl opacity-60 floating-element"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-secondary-200 to-pink-200 rounded-full blur-lg opacity-50 floating-element"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-2xl opacity-40 floating-element"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-gradient-to-br from-pink-200 to-secondary-200 rounded-full blur-md opacity-60 floating-element"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Logo size="md" />
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight gradient-text-vibrant">
              We're Here to Take the Stress Out of Party Planning
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-neutral-700 leading-relaxed space-y-4">
              <p className="text-shadow-soft">
                At Glamping WNY, we turn your special occasion into a celebration to remember! Whether it's a cozy indoor sleepover or an unforgettable outdoor glamping experience, we've got everything you need to make your event shine.
              </p>
              <p className="text-shadow-soft">
                From birthday bashes and bachelorette parties to romantic proposals and weddings, our services are perfect for all ages and can be customized to fit your style and vision.
              </p>
            </div>
          </motion.div>

          {/* Services We Specialize In - Enhanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 text-center card-hover-lift border-gradient"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Tent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 gradient-text">We Specialize In</h3>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li className="hover:text-primary-600 transition-colors">Indoor Sleepover Packages</li>
                <li className="hover:text-primary-600 transition-colors">Outdoor Bell Tent Glamping</li>
                <li className="hover:text-primary-600 transition-colors">Outdoor Movie Nights</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 text-center card-hover-lift border-gradient"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 gradient-text">Perfect For</h3>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li className="hover:text-accent-600 transition-colors">Birthday Parties</li>
                <li className="hover:text-accent-600 transition-colors">Bachelorette Parties</li>
                <li className="hover:text-accent-600 transition-colors">Sweet Sixteens</li>
                <li className="hover:text-accent-600 transition-colors">Romantic Proposals</li>
                <li className="hover:text-accent-600 transition-colors">Anniversaries</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 text-center card-hover-lift border-gradient"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 gradient-text">And More</h3>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li className="hover:text-secondary-600 transition-colors">Weddings</li>
                <li className="hover:text-secondary-600 transition-colors">Showers</li>
                <li className="hover:text-secondary-600 transition-colors">Graduations</li>
                <li className="hover:text-secondary-600 transition-colors">Family Celebrations</li>
                <li className="hover:text-secondary-600 transition-colors">Custom Events</li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto text-shadow-soft">
              Let us bring the fun and unique touch to your event, so you can relax and enjoy the moment. 
              With hundreds of happy clients, we can't wait to make your celebration one you'll cherish for years to come!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 hover:from-primary-600 hover:via-accent-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-vibrant hover:shadow-glow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Trust Indicators - Enhanced */}
      <section className="py-12 bg-gradient-to-r from-neutral-50 via-primary-50/50 to-accent-50/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text-vibrant">
              Trusted by Hundreds of Happy Clients
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              We're committed to creating safe, memorable experiences that bring families together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Star, title: "5.0 Rating", subtitle: "200+ Reviews", color: "from-yellow-400 to-yellow-500", bgColor: "bg-yellow-50" },
              { icon: Users, title: "Family Safe", subtitle: "All Ages Welcome", color: "from-primary-400 to-primary-500", bgColor: "bg-primary-50" },
              { icon: Shield, title: "Fully Insured", subtitle: "Professional Service", color: "from-emerald-400 to-emerald-500", bgColor: "bg-emerald-50" },
              { icon: Clock, title: "3+ Years", subtitle: "Creating Experiences", color: "from-accent-400 to-accent-500", bgColor: "bg-accent-50" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-xl ${item.bgColor} card-hover-lift border border-white/50`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-soft`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-neutral-600">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* Simple Services Preview - Enhanced */}
      <section className="section bg-gradient-to-br from-primary-50 via-accent-50/50 to-pink-50/50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-2xl floating-element"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-secondary-200/30 to-pink-200/30 rounded-full blur-3xl floating-element"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent-100/20 to-primary-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-6 shadow-soft">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="section-title">
                Explore the Details
              </h2>
              <p className="section-subtitle">
                Indoor or outdoor, we have the perfect package for your celebration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Outdoor Glamping - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 shadow-colorful hover:shadow-vibrant transition-all duration-300 border-gradient card-hover-lift"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 gradient-text">Outdoor Glamping</h3>
                <p className="text-neutral-600">Backyard adventures under the stars</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Bell tent experiences</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Weather-resistant setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Spring/Summer 2025</span>
                </div>
              </div>

              <Link
                to="/services#outdoor"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl transition-all duration-300 group shadow-soft hover:shadow-glow"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Spa Party - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 shadow-colorful hover:shadow-vibrant transition-all duration-300 border-gradient card-hover-lift"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 gradient-text">Spa Party</h3>
                <p className="text-neutral-600">Relaxing spa experiences for all ages</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Professional spa setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Kid-safe treatments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Relaxing atmosphere</span>
                </div>
              </div>

              <Link
                to="/kids-spa-party"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 group shadow-soft hover:shadow-glow"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Teepee Sleepovers - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card-vibrant p-8 shadow-colorful hover:shadow-vibrant transition-all duration-300 border-gradient card-hover-lift"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Tent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 gradient-text">Teepee Sleepovers</h3>
                <p className="text-neutral-600">Cozy indoor camping experiences</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Indoor comfort</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Weather-proof fun</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full"></div>
                  <span className="text-neutral-700 text-sm">Year-round availability</span>
                </div>
              </div>

              <Link
                to="/services#indoor"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 group shadow-soft hover:shadow-glow"
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
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group gradient-text"
            >
              View All Packages & Add-ons
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Final CTA - Enhanced */}
      <section className="section bg-white relative overflow-hidden">
        {/* Vibrant background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-primary-200/40 to-accent-200/40 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary-200/40 to-pink-200/40 rounded-full blur-2xl floating-element"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-xl floating-element"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/95 via-primary-50/80 to-accent-50/80 rounded-3xl p-12 border-gradient-vibrant shadow-vibrant backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Logo size="md" className="justify-center" />
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-vibrant">
              Ready to Create Your Perfect Celebration?
            </h2>
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed text-shadow-soft">
              Book your glamping experience today and make memories that you'll treasure forever.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/book-now" 
                className="bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 hover:from-primary-600 hover:via-accent-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl text-lg inline-flex items-center group relative overflow-hidden transition-all duration-300 shadow-vibrant hover:shadow-glow-lg"
              >
                <span className="relative z-10">Let's Create Your Experience!</span>
                <Heart className="w-5 h-5 ml-2 relative z-10 group-hover:scale-110 transition-transform" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
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