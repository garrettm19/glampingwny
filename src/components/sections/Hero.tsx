import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Heart, Tent, TreePine, Sparkles } from 'lucide-react';
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
      {/* Clean Background - No Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Family glamping experience"
          className="w-full h-full object-cover"
        />
        
        {/* Minimal overlay for text readability only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => {
          const icons = [Tent, TreePine, Heart, Sparkles];
          const Icon = icons[i % icons.length];
          const size = 16 + Math.random() * 8;
          const duration = 20 + Math.random() * 10;
          const delay = Math.random() * 10;
          
          return (
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
                ],
                y: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                ],
                opacity: [0, 0.15, 0.25, 0.15, 0],
                scale: [0.8, 1, 1.1, 0.9, 0.8],
                rotate: [0, 360]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
              }}
            >
              <Icon 
                size={size} 
                className="text-white/10" 
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl text-center">
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border border-white/50 mb-6 group hover:bg-white transition-all duration-300 shadow-soft"
          >
            <Logo size="sm" />
            <span className="text-neutral-700 text-sm font-medium tracking-wide">
              Your Go-to Glamping Experts in Western New York
            </span>
          </motion.div>

          {/* Main Headline - Professional Sizing */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white tracking-tight"
            style={{
              textShadow: '0 4px 16px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
              fontFeatureSettings: '"kern" 1, "liga" 1',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Glamping</span>
            <span className="block bg-gradient-to-r from-primary-300 via-primary-200 to-accent-300 bg-clip-text text-transparent">
              WNY
            </span>
          </motion.h1>

          {/* Subheadline - Professional Sizing */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-white font-display font-medium mb-6 leading-relaxed tracking-tight max-w-4xl mx-auto"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              fontFeatureSettings: '"kern" 1',
              letterSpacing: '-0.01em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating Unforgettable
            <span className="text-primary-200 font-semibold"> Family Experiences </span>
            Together
          </motion.h2>
          
          {/* Value Proposition - Professional Sizing */}
          <motion.p 
            className="text-lg md:text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-sans"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
              lineHeight: '1.7'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We take the stress out of party planning and turn your special occasion into a celebration to remember! 
            <br className="hidden md:block" />
            <span className="text-primary-200 font-medium">From cozy indoor sleepovers to outdoor glamping adventures</span> - we handle everything so you can relax and enjoy the moment.
          </motion.p>
          
          {/* CTA Buttons - Professional Sizing */}
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
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-elegant hover:shadow-glow border border-primary-400/30"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-2 font-display">
                  Book Your Experience
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
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-md text-white font-semibold text-lg rounded-xl border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 shadow-soft hover:shadow-elegant"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-display">Explore the Details</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators - Professional Sizing */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
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
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  </motion.div>
                ))}
              </div>
              <span className="font-medium font-display">Hundreds of Happy Clients</span>
            </motion.div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium font-display">All Ages Welcome</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium font-display">Professional Service</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-medium font-display">Stress-Free Planning</div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - Professional Sizing */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity font-display">
            Explore Our Services
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
    </section>
  );
};

export default Hero;