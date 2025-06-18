import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Calendar, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Earthy Night Sky Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient - earthy night sky */}
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-700 to-sage-800"></div>
        
        {/* Organic overlay pattern */}
        <div className="absolute inset-0 bg-organic-pattern opacity-40"></div>
        
        {/* Starry Night Pattern */}
        <div className="absolute inset-0 bg-starry-night opacity-50"></div>
        
        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cream-200 rounded-full"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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

        {/* Floating Organic Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`organic-${i}`}
              className="absolute w-3 h-3 bg-sage-300/20 rounded-full blur-sm"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
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

        {/* Shooting Stars - more subtle */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-cream-100 rounded-full"
            initial={{ x: -100, y: Math.random() * 300, opacity: 0 }}
            animate={{
              x: window.innerWidth + 100,
              y: Math.random() * 300 + 200,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 12 + Math.random() * 8,
              ease: "easeOut"
            }}
            style={{
              boxShadow: '0 0 8px rgba(254, 252, 243, 0.6), 0 0 16px rgba(254, 252, 243, 0.3)',
            }}
          />
        ))}

        {/* Earthy Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 via-transparent to-slate-800/20"></div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center text-white">
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
                <Star key={i} className="w-4 h-4 text-cream-300 fill-cream-300" />
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 200+ Families</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight text-shadow-lg"
          >
            Glamping Under
            <span className="block bg-gradient-to-r from-lavender-300 via-sage-300 to-cream-300 bg-clip-text text-transparent">
              Starlit Skies
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-cream-100/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience the magic of nature with luxury outdoor adventures 
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
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
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
                  <item.icon className="w-6 h-6 text-sage-300" />
                </div>
                <div className="text-sm font-semibold">{item.text}</div>
                <div className="text-xs text-white/70">{item.subtext}</div>
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
          <span className="text-sm mb-2">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;