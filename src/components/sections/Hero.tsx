import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Calendar, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simple gradient background with subtle stars */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full lilac-night-gradient"></div>
        
        {/* Simple star field without parallax */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-white rounded-full animate-twinkle ${
                Math.random() > 0.7 ? 'w-1 h-1' : 'w-0.5 h-0.5'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center text-white page-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <span className="text-sm font-medium body-text">Trusted by 200+ Families</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-shadow-lg"
          >
            Luxury Glamping
            <span className="block bg-gradient-to-r from-lavender-300 via-lavender-200 to-white bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light body-text"
          >
            Create unforgettable memories with premium outdoor adventures 
            delivered to your backyard in Western New York
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              to="/book-now"
              className="btn btn-primary text-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Book Your Experience</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            <Link
              to="/gallery"
              className="btn btn-ghost text-lg px-8 py-4"
            >
              View Gallery
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: MapPin, text: "Buffalo Metro Area", subtext: "Free Delivery" },
              { icon: Calendar, text: "Year-Round", subtext: "Indoor & Outdoor" },
              { icon: Shield, text: "Fully Insured", subtext: "Professional Service" },
              { icon: Award, text: "5-Star Rated", subtext: "200+ Reviews" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                  <item.icon className="w-6 h-6 text-lavender-300" />
                </div>
                <div className="text-sm font-semibold body-text">{item.text}</div>
                <div className="text-xs text-white/70 body-text">{item.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center animate-bounce-gentle">
          <span className="text-sm mb-2 body-text">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;