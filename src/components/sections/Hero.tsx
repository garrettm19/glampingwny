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
      {/* Beautiful Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Beautiful glamping experience"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        
        {/* Magical gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-lavender-800/60 to-pink-600/70"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-white/20 to-transparent"
              style={{
                height: '200%',
                left: `${20 + i * 30}%`,
                top: '-50%',
                transform: 'rotate(15deg)',
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleY: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Magical floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => {
          const icons = [Tent, TreePine, Heart, Sparkles, Crown, Award, Zap];
          const Icon = icons[i % icons.length];
          const size = 20 + Math.random() * 8;
          const duration = 20 + Math.random() * 15;
          const delay = Math.random() * 8;
          
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
                x: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                ],
                y: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                ],
                opacity: [0, 0.15, 0.25, 0.15, 0],
                scale: [0.5, 1, 1.2, 1, 0.5],
                rotate: [0, 180, 360]
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
                className="text-white/10 filter drop-shadow-lg" 
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          {/* Beautiful Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border border-white/50 mb-8 group hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            <Logo size="sm" />
            <span className="text-neutral-800 text-sm font-semibold tracking-wide">
              Buffalo Metro's Magical Glamping Experts
            </span>
            <motion.div
              className="w-2 h-2 bg-lavender-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Spectacular Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight text-white tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)',
              fontFeatureSettings: '"kern" 1, "liga" 1',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Glamping
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-lavender-300 via-pink-200 to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              WNY
            </motion.span>
          </motion.h1>

          {/* Dynamic Subheadline */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-white font-display font-semibold mb-6 leading-relaxed tracking-tight max-w-4xl mx-auto"
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.8)',
              fontFeatureSettings: '"kern" 1',
              letterSpacing: '-0.01em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Creating Unforgettable
            <motion.span 
              className="text-lavender-200 font-bold"
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(147, 51, 234, 0.5)',
                  '0 0 20px rgba(147, 51, 234, 0.8)',
                  '0 0 10px rgba(147, 51, 234, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            > Magical Experiences </motion.span>
            for Every Celebration
          </motion.h2>
          
          {/* Enhanced Value Proposition */}
          <motion.p 
            className="text-lg md:text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-sans"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We take the stress out of party planning and turn your special occasion into a celebration to remember! 
            <br className="hidden md:block" />
            <motion.span 
              className="text-lavender-200 font-semibold"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              From cozy indoor sleepovers to outdoor glamping adventures
            </motion.span> - we handle everything so you can relax and enjoy the moment.
          </motion.p>
          
          {/* Beautiful CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-lavender-600 via-lavender-500 to-lavender-600 hover:from-lavender-700 hover:via-lavender-600 hover:to-lavender-700 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-glow-lg border border-lavender-400"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-2 font-display">
                  Book Your Experience
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.div>
                </span>
                
                {/* Enhanced shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lavender-400/50 to-lavender-600/50 rounded-xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-md text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-500 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
              </motion.div>
              <span className="font-display">Explore the Magic</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
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
                    transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                  >
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 drop-shadow-lg" />
                  </motion.div>
                ))}
              </div>
              <span className="font-semibold font-display">200+ Happy Families</span>
            </motion.div>
            <div className="w-px h-4 bg-white/40" />
            <motion.div 
              className="font-semibold font-display"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              All Ages Welcome
            </motion.div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-semibold font-display">Professional Service</div>
            <div className="w-px h-4 bg-white/40" />
            <motion.div 
              className="font-semibold font-display"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              Stress-Free Planning
            </motion.div>
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
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity font-display">
            Discover Our Services
          </span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors relative overflow-hidden"
            whileHover={{ boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;