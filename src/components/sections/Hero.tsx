import React, { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Calendar, Star, ArrowRight, MapPin, Play, Heart } from 'lucide-react';
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
            alt="Family glamping experience"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Lavender-Teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-900/70 via-teal-800/60 to-lavender-900/70" />
        
        {/* Additional backdrop for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Animated floating elements - more playful */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
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
              opacity: [0, 0.8, 0.4, 0.9, 0],
              scale: [1, 1.3, 0.7, 1.2, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          >
            <div 
              className="w-2 h-2 bg-lavender-300 rounded-full"
              style={{
                boxShadow: '0 0 8px 3px rgba(183, 148, 244, 0.6)',
                background: 'radial-gradient(circle, rgba(183, 148, 244, 0.9) 0%, rgba(45, 212, 191, 0.5) 70%, transparent 100%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 h-full flex items-center justify-center">
        <div className="max-w-6xl text-center">
          {/* Location Badge with family-friendly styling */}
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
              <Heart className="w-4 h-4 text-lavender-300" />
            </motion.div>
            <span className="text-white text-sm font-medium tracking-wide">
              Creating Family Memories in Buffalo & WNY
            </span>
          </motion.div>

          {/* Warm, Family-Friendly Main Headline */}
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

          {/* Family-Focused Subheadline */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-white font-medium mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)'
            }}
          >
            Where Families Create Magical Memories Together
          </motion.h2>
          
          {/* Family-Friendly Value Proposition */}
          <motion.p 
            className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            Safe, fun, and stress-free glamping experiences for birthdays, family celebrations, and special moments.
            <br className="hidden md:block" />
            We handle everything so you can focus on making memories with your loved ones! 🏕️✨
          </motion.p>
          
          {/* Warm, Inviting CTA Buttons */}
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
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Planning Our Adventure!
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-md text-white font-semibold text-lg rounded-xl border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              See the Magic
            </motion.button>
          </motion.div>

          {/* Family-Focused Trust Indicators */}
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
                    <Star className="w-4 h-4 text-lavender-300 fill-lavender-300" />
                  </motion.div>
                ))}
              </div>
              <span className="font-medium">200+ Happy Families</span>
            </motion.div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Kid-Safe & Fun</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ All Ages Welcome</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Stress-Free Setup</div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            See Our Magic
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