import React, { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Calendar, Star, ArrowRight, MapPin, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Auto-rotate background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const scrollToBooking = useCallback(() => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      trackBookNowClick();
    }
  }, []);

  const scrollToVirtualTour = useCallback(() => {
    const virtualTourSection = document.getElementById('virtual-tour');
    if (virtualTourSection) {
      virtualTourSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Dynamic Background with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Luxury glamping experience"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Professional overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        
        {/* Additional backdrop for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
              ],
              opacity: [0, 0.6, 0.3, 0.7, 0],
              scale: [1, 1.2, 0.8, 1.1, 1]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 15
            }}
          >
            <div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              style={{
                boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.5)',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 70%, transparent 100%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 h-full flex items-center justify-center">
        <div className="max-w-6xl text-center">
          {/* Location Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8 group hover:bg-white/25 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <MapPin className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-white text-sm font-medium tracking-wide">
              Serving Buffalo & Western New York
            </span>
          </motion.div>

          {/* Clean, Professional Main Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.9] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6), 0 1px 5px rgba(0,0,0,0.4)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
            }}
          >
            Glamping WNY
          </motion.h1>

          {/* Professional Subheadline */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-white font-medium mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)'
            }}
          >
            Premium Glamping Experiences for Every Celebration
          </motion.h2>
          
          {/* Value Proposition */}
          <motion.p 
            className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            Indoor & outdoor luxury tent rentals for birthdays, bachelorettes, anniversaries, and special occasions.
            <br className="hidden md:block" />
            Complete setup, themed decorations, and stress-free cleanup included.
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Experience
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-md text-white font-semibold text-lg rounded-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View the Experience
            </motion.button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <span className="font-medium">200+ Happy Customers</span>
            </motion.div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ All Ages Welcome</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Year-Round</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Setup Included</div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to view virtual tour"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            View Virtual Tour
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.button>

      {/* Image indicators */}
      <div className="absolute bottom-20 right-8 z-20 flex flex-col gap-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;