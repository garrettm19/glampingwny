import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Calendar, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Magical Night Sky Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>
        
        {/* Starry Night Pattern */}
        <div className="absolute inset-0 bg-starry-night opacity-60"></div>
        
        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
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

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ x: -100, y: Math.random() * 300, opacity: 0 }}
            animate={{
              x: window.innerWidth + 100,
              y: Math.random() * 300 + 200,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 8 + Math.random() * 5,
              ease: "easeOut"
            }}
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
            }}
          />
        ))}

        {/* Magical Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-indigo-900/20"></div>
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
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
            Magical Glamping
            <span className="block bg-gradient-to-r from-lavender-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Under the Stars
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Create unforgettable memories with luxury outdoor adventures 
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
                  <item.icon className="w-6 h-6 text-lavender-300" />
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