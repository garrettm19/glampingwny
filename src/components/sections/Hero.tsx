import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Heart, Tent, TreePine, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';
import Logo from '../components/ui/Logo';

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
        <div className="max-w-7xl text-center">
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-white/95 backdrop-blur-md rounded-full border border-white/50 mb-8 group hover:bg-white transition-all duration-300 shadow-soft"
          >
            <Logo size="sm" />
            <span className="text-neutral-700 text-sm font-medium tracking-wide">
              Creating Family Memories in Buffalo & WNY
            </span>
          </motion.div>

          {/* Main Headline - Enhanced Typography */}
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-display font-black mb-8 leading-[0.85] text-white tracking-tight"
            style={{
              textShadow: '0 8px 32px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
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

          {/* Subheadline - Enhanced */}
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl text-white font-display font-semibold mb-8 leading-tight tracking-tight"
            style={{
              textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)',
              fontFeatureSettings: '"kern" 1',
              letterSpacing: '-0.015em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Families Create
            <br />
            <span className="text-primary-200">Magical Memories</span> Together
          </motion.h2>
          
          {/* Value Proposition - Enhanced */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-5xl mx-auto leading-relaxed font-sans font-medium"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Safe, fun, and stress-free glamping experiences for birthdays, family celebrations, and special moments.
            <br className="hidden lg:block" />
            <span className="text-primary-200 font-semibold">We handle everything</span> so you can focus on making memories with your loved ones!
          </motion.p>
          
          {/* CTA Buttons - Enhanced */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-300 shadow-elegant hover:shadow-glow-lg border border-primary-400/30"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-3 font-display tracking-tight">
                  Start Planning Our Adventure!
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
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/20 backdrop-blur-md text-white font-semibold text-xl rounded-2xl border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 shadow-soft hover:shadow-elegant"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-display tracking-tight">See the Magic</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators - Enhanced */}
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
                    <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  </motion.div>
                ))}
              </div>
              <span className="font-semibold font-display">200+ Happy Families</span>
            </motion.div>
            <div className="w-px h-8 bg-white/40" />
            <div className="font-semibold font-display">Family-Safe & Fun</div>
            <div className="w-px h-8 bg-white/40" />
            <div className="font-semibold font-display">All Ages Welcome</div>
            <div className="w-px h-8 bg-white/40" />
            <div className="font-semibold font-display">Stress-Free Setup</div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - Enhanced */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity font-display">
            See Our Magic
          </span>
          <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors relative overflow-hidden">
            <motion.div
              className="w-1.5 h-4 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;