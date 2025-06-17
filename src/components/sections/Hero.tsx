import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Heart, Tent, TreePine, Sparkles, Zap, Crown, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';
import Logo from '../ui/Logo';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToVirtualTour = useCallback(() => {
    const virtualTourSection = document.getElementById('virtual-tour');
    if (virtualTourSection) {
      virtualTourSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Beautiful Glamping Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Beautiful glamping tent setup"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        
        {/* Clean gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
        
        {/* Subtle geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Minimal floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(8)].map((_, i) => {
          const icons = [Sparkles, Heart, Star];
          const Icon = icons[i % icons.length];
          
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.2, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 360]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            >
              <Icon 
                size={20} 
                className="text-white/30" 
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          {/* Clean, Readable Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-8 leading-none text-white"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              fontWeight: 900,
              letterSpacing: '-0.03em'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Glamping
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              WNY
            </motion.span>
          </motion.h1>

          {/* Clean, Readable Subheadline */}
          <motion.h2 
            className="text-2xl md:text-4xl text-white font-semibold mb-8 leading-relaxed max-w-4xl mx-auto"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              fontWeight: 600
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Creating Unforgettable
            <span className="text-yellow-300 font-bold"> Magical Experiences </span>
            for Every Celebration
          </motion.h2>
          
          {/* Clean Value Proposition */}
          <motion.p 
            className="text-xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 15px rgba(0,0,0,0.5)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            We take the stress out of party planning and turn your special occasion into a celebration to remember! 
            From cozy indoor sleepovers to outdoor glamping adventures - we handle everything so you can relax and enjoy the moment.
          </motion.p>
          
          {/* Clean CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 hover:bg-gray-50 font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
                onClick={() => trackBookNowClick()}
              >
                <span className="flex items-center gap-3">
                  Book Your Experience
                  <Heart className="w-6 h-6" />
                </span>
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-xl text-white font-semibold text-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-6 h-6 mr-3" />
              <span>Explore Our Services</span>
            </motion.button>
          </motion.div>

          {/* Clean Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-white/95 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <span className="font-semibold">200+ Happy Families</span>
            </div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold">All Ages Welcome</div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold">Professional Service</div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold">Stress-Free Planning</div>
          </motion.div>
        </div>
      </div>
      
      {/* Clean Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Discover Our Services
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;