import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, MapPin, Star, Users, Shield, Clock, Tent, TreePine, Sparkles, Award, CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Glamping WNY | Premium Glamping Experiences in Buffalo Metro Area</title>
        <meta name="description" content="Western New York's premier glamping rental service. Luxury outdoor accommodations and indoor experiences for unforgettable celebrations. Professional setup, premium amenities, and complete service throughout the Buffalo Metro Area." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glampingwny.com" />
        <meta property="og:title" content="Glamping WNY | Premium Glamping Experiences in Buffalo Metro Area" />
        <meta property="og:description" content="Western New York's premier glamping rental service. Luxury outdoor accommodations and indoor experiences for unforgettable celebrations." />
        <meta property="og:image" content="/glamping-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://glampingwny.com" />
        <meta name="twitter:title" content="Glamping WNY | Premium Glamping Experiences in Buffalo Metro Area" />
        <meta name="twitter:description" content="Western New York's premier glamping rental service. Luxury outdoor accommodations and indoor experiences for unforgettable celebrations." />
        <meta name="twitter:image" content="/glamping-logo.png" />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "image": "/glamping-logo.png",
            "logo": "/glamping-logo.png",
            "description": "Premium glamping experiences and luxury tent rentals for special occasions in the Buffalo Metro Area.",
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
      
      {/* Professional Service Area Banner */}
      <section className="py-6 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span className="font-bold text-neutral-900">
                Serving the Buffalo Metro Area
              </span>
            </div>
            <p className="text-neutral-700">
              <strong className="text-primary-700">FREE delivery within 20 miles of Hamburg, NY</strong> • 
              <span className="text-neutral-600"> Extended delivery available</span>
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Professional About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <Logo size="lg" className="justify-center" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-neutral-900">
              Professional Event Solutions
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-neutral-700 leading-relaxed space-y-6">
              <p className="text-xl font-medium">
                We provide comprehensive glamping rental services for celebrations of all sizes throughout Western New York.
              </p>
              <p>
                From intimate gatherings to large events, our professional team handles complete setup, premium amenities, and full-service coordination to ensure your celebration exceeds expectations.
              </p>
            </div>
          </motion.div>

          {/* Professional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-elevated p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Tent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Specialties</h3>
              <ul className="text-neutral-700 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  Indoor Glamping Experiences
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  Outdoor Bell Tent Rentals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  Complete Event Coordination
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-elevated p-8 text-center"
            >
              <div className="w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Event Types</h3>
              <ul className="text-neutral-700 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                  Birthday Celebrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                  Corporate Events
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                  Wedding Accommodations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                  Special Occasions
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-elevated p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Professional Service</h3>
              <ul className="text-neutral-700 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-700 flex-shrink-0" />
                  Complete Setup & Breakdown
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-700 flex-shrink-0" />
                  Premium Equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-700 flex-shrink-0" />
                  Flexible Scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-700 flex-shrink-0" />
                  Insured & Licensed
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Professional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-neutral-700 mb-8 max-w-4xl mx-auto">
              With over 200 successful events and a 5-star rating, we're Western New York's trusted choice for premium glamping experiences.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="btn btn-primary btn-lg inline-flex items-center gap-3 shadow-strong"
              >
                <span className="font-bold">Reserve Your Experience</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Professional Trust Indicators */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              Why Choose Glamping WNY
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Professional service, premium equipment, and proven results for your special events.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Star, title: "5.0 Rating", subtitle: "200+ Reviews", bgColor: "bg-yellow-500", textColor: "text-white" },
              { icon: Users, title: "All Events", subtitle: "Any Occasion", bgColor: "bg-primary-600", textColor: "text-white" },
              { icon: Shield, title: "Fully Insured", subtitle: "Professional Service", bgColor: "bg-success-600", textColor: "text-white" },
              { icon: Clock, title: "3+ Years", subtitle: "Proven Experience", bgColor: "bg-accent-700", textColor: "text-white" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 card-elevated"
              >
                <div className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon className={`w-8 h-8 ${item.textColor}`} />
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* Professional Services Preview */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-4 bg-primary-100 rounded-xl mb-8 shadow-crisp">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="section-title">
                Our Service Offerings
              </h2>
              <p className="section-subtitle">
                Professional glamping solutions for indoor and outdoor events.
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
              className="card-elevated p-8 shadow-strong"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TreePine className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Outdoor Glamping</h3>
                <p className="text-neutral-600">Premium bell tent experiences</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Weather-resistant bell tents</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Complete outdoor setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Available Spring/Summer</span>
                </div>
              </div>

              <Link
                to="/services#outdoor"
                className="btn btn-primary w-full"
              >
                View Details
              </Link>
            </motion.div>

            {/* Indoor Experiences */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-elevated p-8 shadow-strong"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-neutral-900" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Indoor Experiences</h3>
                <p className="text-neutral-600">Climate-controlled comfort</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Year-round availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Premium indoor setups</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Weather-independent</span>
                </div>
              </div>

              <Link
                to="/services#indoor"
                className="btn btn-secondary w-full"
              >
                View Details
              </Link>
            </motion.div>

            {/* Professional Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-elevated p-8 shadow-strong"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-accent-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Full Service</h3>
                <p className="text-neutral-600">Complete event coordination</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Professional setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Complete breakdown</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-700 rounded-full"></div>
                  <span className="text-neutral-700 font-medium">Event coordination</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn btn-outline w-full"
              >
                Contact Us
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
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              View All Services & Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Professional Contact CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Logo size="lg" className="justify-center" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              Contact our professional team to discuss your requirements and receive a custom quote.
            </p>
            
            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.a
                href="tel:+17165551234"
                className="flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-6 h-6 text-primary-400" />
                <div className="text-left">
                  <div className="font-bold">Call Us</div>
                  <div className="text-neutral-300">(716) 555-1234</div>
                </div>
              </motion.a>
              
              <motion.a
                href="mailto:info@glampingwny.com"
                className="flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6 text-primary-400" />
                <div className="text-left">
                  <div className="font-bold">Email Us</div>
                  <div className="text-neutral-300">info@glampingwny.com</div>
                </div>
              </motion.a>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/book-now" 
                className="btn btn-primary btn-lg inline-flex items-center gap-3 shadow-strong"
              >
                <span className="font-bold">Book Your Experience</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;