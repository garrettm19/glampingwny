import React, { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Calendar, Star, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToBooking = useCallback(() => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      trackBookNowClick();
    }
  }, []);

  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Professional Glamping Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Luxury glamping tents at sunset"
          className="w-full h-full object-cover"
        />
        
        {/* Professional overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85" />
        
        {/* Additional backdrop for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
      </div>

      {/* Subtle floating particles */}
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
              opacity: [0, 0.4, 0.2, 0.5, 0],
              scale: [1, 1.1, 0.9, 1.05, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          >
            <div 
              className="w-1 h-1 bg-white rounded-full"
              style={{
                boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.4)',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 h-full flex items-center justify-center">
        <div className="max-w-5xl text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8"
          >
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium tracking-wide">
              Serving Buffalo & Western New York
            </span>
          </motion.div>

          {/* Professional Main Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span 
              className="block text-white"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6), 0 1px 5px rgba(0,0,0,0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
              }}
            >
              Glamping WNY
            </span>
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
            Premium Birthday Party Glamping Experiences
          </motion.h2>
          
          {/* Value Proposition */}
          <motion.p 
            className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            Indoor & outdoor luxury tent rentals for unforgettable celebrations.
            <br className="hidden md:block" />
            Complete setup, themed decorations, and stress-free cleanup included.
          </motion.p>
          
          {/* Professional CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Experience
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToFeatures}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-md text-white font-semibold text-lg rounded-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Packages
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-medium">200+ Happy Families</span>
            </div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Ages 5-12</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Year-Round</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium">✓ Setup Included</div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToFeatures}
        aria-label="Scroll down to explore packages"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Explore Packages
          </span>
          <div className="w-5 h-8 border border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors">
            <motion.div
              className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;