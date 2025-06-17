import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MapPin, Star, Users, Shield, Clock, Tent, TreePine, Sparkles, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Glamping WNY | Magical Family Glamping Experiences in Buffalo Metro Area</title>
        <meta name="description" content="Create unforgettable family memories with our magical glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY. Perfect for birthdays, family celebrations, and special occasions." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glampingwny.com" />
        <meta property="og:title" content="Glamping WNY | Magical Family Glamping Experiences in Buffalo Metro Area" />
        <meta property="og:description" content="Create unforgettable family memories with our magical glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY." />
        <meta property="og:image" content="/glamping-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://glampingwny.com" />
        <meta name="twitter:title" content="Glamping WNY | Magical Family Glamping Experiences in Buffalo Metro Area" />
        <meta name="twitter:description" content="Create unforgettable family memories with our magical glamping experiences in the Buffalo Metro Area. FREE delivery within 20 miles of Hamburg, NY." />
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
      
      {/* Service Area Banner - Beautiful gradient */}
      <section className="py-4 bg-gradient-to-r from-lavender-50 via-purple-50 to-pink-50 border-b border-lavender-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-lavender-600" />
              <span className="font-semibold text-lavender-900 text-sm">
                Proudly Servicing the Buffalo Metro Area
              </span>
            </div>
            <p className="text-lavender-700 text-sm">
              <strong className="text-lavender-800">FREE delivery within 20 miles of Hamburg, NY (14075)</strong> • 
              <span className="text-lavender-600"> Extended delivery available with fees</span>
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* About Section - Beautiful cards with gradients */}
      <section className="py-20 bg-gradient-to-br from-white via-lavender-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-lavender-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Logo size="lg" className="justify-center" />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-800">
              We're Here to Take the Stress Out of Party Planning
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                At Glamping WNY, we turn your special occasion into a celebration to remember! Whether it's a cozy indoor sleepover or an unforgettable outdoor glamping experience, we've got everything you need to make your event shine.
              </p>
              <p>
                From birthday bashes and bachelorette parties to romantic proposals and weddings, our services are perfect for all ages and can be customized to fit your style and vision.
              </p>
            </div>
          </motion.div>

          {/* Services We Specialize In - Beautiful gradient cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-lavender-50 to-lavender-100 border border-lavender-200 p-8 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-lavender-500 to-lavender-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Tent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">We Specialize In</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                  Indoor Sleepover Packages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                  Outdoor Bell Tent Glamping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                  Outdoor Movie Nights
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-8 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Perfect For</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Birthday Parties
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Bachelorette Parties
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Sweet Sixteens
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Romantic Proposals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Anniversaries
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 p-8 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">And More</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  Weddings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  Showers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  Graduations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  Family Celebrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  Custom Events
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Let us bring the fun and unique touch to your event, so you can relax and enjoy the moment. 
              With hundreds of happy clients, we can't wait to make your celebration one you'll cherish for years to come!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Trust Indicators - Beautiful gradient background */}
      <section className="py-16 bg-gradient-to-r from-lavender-100 via-purple-100 to-pink-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Trusted by Hundreds of Happy Families
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              We're committed to creating safe, memorable experiences that bring families together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Star, title: "5.0 Rating", subtitle: "200+ Reviews", bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-500", textColor: "text-white" },
              { icon: Users, title: "Family Safe", subtitle: "All Ages Welcome", bgColor: "bg-gradient-to-br from-lavender-500 to-lavender-600", textColor: "text-white" },
              { icon: Shield, title: "Fully Insured", subtitle: "Professional Service", bgColor: "bg-gradient-to-br from-green-500 to-green-600", textColor: "text-white" },
              { icon: Clock, title: "3+ Years", subtitle: "Creating Magic", bgColor: "bg-gradient-to-br from-purple-500 to-purple-600", textColor: "text-white" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon className={`w-8 h-8 ${item.textColor}`} />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* Services Preview - Beautiful gradient cards */}
      <section className="section bg-gradient-to-br from-white via-lavender-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-lavender-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-4 bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-xl mb-8 shadow-lg">
                <Sparkles className="w-8 h-8 text-lavender-600" />
              </div>
              <h2 className="section-title">
                Explore the Magic
              </h2>
              <p className="section-subtitle">
                Indoor or outdoor, we have the perfect package for your celebration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Outdoor Glamping */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TreePine className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Outdoor Glamping</h3>
                <p className="text-gray-600">Backyard adventures under the stars</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Bell tent experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Weather-resistant setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Spring/Summer 2025</span>
                </div>
              </div>

              <Link
                to="/services#outdoor"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Spa Party */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Spa Party</h3>
                <p className="text-gray-600">Relaxing spa experiences for all ages</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Professional spa setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Kid-safe treatments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Relaxing atmosphere</span>
                </div>
              </div>

              <Link
                to="/kids-spa-party"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Teepee Sleepovers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-lavender-50 to-blue-50 border border-lavender-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-lavender-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Tent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Teepee Sleepovers</h3>
                <p className="text-gray-600">Cozy indoor camping experiences</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lavender-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Indoor comfort</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lavender-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Weather-proof fun</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lavender-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Year-round availability</span>
                </div>
              </div>

              <Link
                to="/services#indoor"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-lavender-500 to-blue-600 hover:from-lavender-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
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
              className="inline-flex items-center gap-2 text-lavender-600 hover:text-lavender-700 font-semibold text-lg"
            >
              View All Packages & Add-ons
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Final CTA - Beautiful gradient */}
      <section className="section bg-gradient-to-br from-lavender-500 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Magical background effects */}
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
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Logo size="lg" className="justify-center" />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create Your Perfect Celebration?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Book your glamping experience today and make memories that you'll treasure forever.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/book-now" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-lavender-600 hover:bg-lavender-50 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Let's Create Your Experience!</span>
                <Heart className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;