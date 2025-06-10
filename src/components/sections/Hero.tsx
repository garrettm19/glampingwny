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
      {/* Glamping Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Luxury glamping tents at sunset"
          className="w-full h-full object-cover"
        />
        
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-900/70 to-amber-900/80" />
        
        {/* Additional text backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Refined floating particles */}
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
              scale: [1, 1.1, 0.9, 1.05, 1]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8
            }}
          >
            <div 
              className="w-1 h-1 bg-amber-300 rounded-full"
              style={{
                boxShadow: '0 0 6px 1px rgba(251, 191, 36, 0.6)',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.9) 0%, rgba(251, 191, 36, 0.4) 70%, transparent 100%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 h-full flex items-center justify-center">
        <div className="max-w-6xl text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-8"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span className="text-white/95 text-sm font-medium tracking-wide">
              Serving Buffalo & Western New York
            </span>
          </motion.div>

          {/* Enhanced Main Headline - SEO Optimized */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span 
              className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent"
              style={{
                textShadow: '0 8px 32px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.7)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              Glamping WNY
            </span>
          </motion.h1>

          {/* SEO-Optimized Subheadline */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              textShadow: '0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
            }}
          >
            Premium Birthday Party Glamping Experiences
          </motion.h2>
          
          {/* Value Proposition */}
          <motion.p 
            className="text-xl md:text-2xl text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            Indoor & outdoor luxury tent rentals for unforgettable celebrations.
            <br className="hidden md:block" />
            <span className="text-white font-normal">Complete setup, themed decorations, and stress-free cleanup included.</span>
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
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
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book Your Experience
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Enhanced shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToFeatures}
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/15 backdrop-blur-md text-white font-semibold text-lg rounded-full border-2 border-white/40 hover:bg-white/25 hover:border-white/60 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              View Packages
            </motion.button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-white/95"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold">200+ Happy Families</span>
            </div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold">✓ Ages 5-12 Welcome</div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold">✓ Year-Round Availability</div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold">✓ Complete Setup Included</div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/90 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToFeatures}
        aria-label="Scroll down to explore packages"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-semibold opacity-90 group-hover:opacity-100 transition-opacity tracking-wide">
            Explore Packages
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;