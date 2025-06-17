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
      {/* Professional Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Family glamping experience"
          className="w-full h-full object-cover"
        />
        
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => {
          const icons = [Tent, TreePine, Heart, Sparkles];
          const Icon = icons[i % icons.length];
          const size = 20 + Math.random() * 8;
          const duration = 25 + Math.random() * 10;
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
                opacity: [0, 0.1, 0.15, 0.1, 0],
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
                className="text-white/5" 
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-md rounded-full border border-white/50 mb-8 group hover:bg-white transition-all duration-300 shadow-lg"
          >
            <Logo size="sm" />
            <span className="text-neutral-800 text-sm font-semibold tracking-wide">
              Your Go-to Glamping Experts in Western New York
            </span>
          </motion.div>

          {/* Main Headline - Professional */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-tight text-white tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)',
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
            <span className="block bg-gradient-to-r from-primary-300 via-primary-200 to-secondary-300 bg-clip-text text-transparent">
              WNY
            </span>
          </motion.h1>

          {/* Subheadline - Professional */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-white font-display font-semibold mb-8 leading-relaxed tracking-tight max-w-5xl mx-auto"
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.8)',
              fontFeatureSettings: '"kern" 1',
              letterSpacing: '-0.01em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating Unforgettable
            <span className="text-primary-200 font-bold"> Experiences </span>
            for Every Celebration
          </motion.h2>
          
          {/* Value Proposition - Professional */}
          <motion.p 
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-5xl mx-auto leading-relaxed font-sans"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We take the stress out of party planning and turn your special occasion into a celebration to remember! 
            <br className="hidden md:block" />
            <span className="text-primary-200 font-semibold">From cozy indoor sleepovers to outdoor glamping adventures</span> - we handle everything so you can relax and enjoy the moment.
          </motion.p>
          
          {/* CTA Buttons - Professional */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
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
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xl rounded-xl overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-glow border border-primary-500"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-3 font-display">
                  Book Your Experience
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/15 backdrop-blur-md text-white font-bold text-xl rounded-xl border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-display">Explore the Details</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators - Professional */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="flex items-center gap-3"
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
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  </motion.div>
                ))}
              </div>
              <span className="font-semibold font-display">Hundreds of Happy Clients</span>
            </motion.div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold font-display">All Ages Welcome</div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold font-display">Professional Service</div>
            <div className="w-px h-6 bg-white/40" />
            <div className="font-semibold font-display">Stress-Free Planning</div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - Professional */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity font-display">
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