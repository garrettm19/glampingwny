import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import VirtualTour from '../components/ui/VirtualTour';
import ChecklistDownload from '../components/ui/ChecklistDownload';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Glamping WNY | Family Glamping Experiences for Every Celebration</title>
        <meta name="description" content="Create unforgettable family memories with our safe, fun glamping experiences in Western New York. Perfect for birthdays, family celebrations, and special occasions." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glampingwny.com" />
        <meta property="og:title" content="Glamping WNY | Family Glamping Experiences for Every Celebration" />
        <meta property="og:description" content="Create unforgettable family memories with our safe, fun glamping experiences in Western New York. Perfect for birthdays, family celebrations, and special occasions." />
        <meta property="og:image" content="https://picsum.photos/1200/630?random=100" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://glampingwny.com" />
        <meta name="twitter:title" content="Glamping WNY | Family Glamping Experiences for Every Celebration" />
        <meta name="twitter:description" content="Create unforgettable family memories with our safe, fun glamping experiences in Western New York. Perfect for birthdays, family celebrations, and special occasions." />
        <meta name="twitter:image" content="https://picsum.photos/1200/630?random=100" />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "image": "https://picsum.photos/1200/630?random=100",
            "description": "Family-friendly glamping experiences and luxury tent rentals for special occasions in Western New York.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Buffalo",
              "addressRegion": "NY",
              "postalCode": "14221",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.8864,
              "longitude": -78.8784
            },
            "url": "https://glampingwny.com",
            "telephone": "+17165551234",
            "priceRange": "$$",
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
      <Features />
      
      {/* Virtual Tour Section */}
      <section id="virtual-tour" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Experience the Family Magic! 🎥
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Take a virtual tour of our family-friendly glamping setup and imagine your perfect family celebration.
              </p>
            </motion.div>
          </div>
          
          <VirtualTour />
        </div>
      </section>
      
      <Services />

      {/* Family Checklist Download Section */}
      <section className="section bg-orange-50">
        <div className="container-custom max-w-3xl">
          <ChecklistDownload />
        </div>
      </section>
      
      <Testimonials />
      
      {/* Family Booking Callout */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(234, 88, 12, 0.9), rgba(251, 146, 60, 0.8)), url('https://picsum.photos/1920/1080?random=101')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Warm Sparkle Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
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
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg inline-flex items-center group relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Let's Create Family Magic!</span>
                <Heart className="w-6 h-6 ml-2 relative z-10 group-hover:scale-110 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
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