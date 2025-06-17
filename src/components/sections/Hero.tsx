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
      {/* Stunning Glamping Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Beautiful glamping tent setup"
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />
        
        {/* Perfect gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        
        {/* Subtle light effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Minimal magical elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
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
              y: [0, -40, 0],
              opacity: [0, 0.15, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          >
            <Sparkles size={16} className="text-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Main Content - Apple-level typography */}
      <div className="container-custom relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          {/* Perfect-sized, Beautiful Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] text-white tracking-tight"
            style={{
              textShadow: '0 8px 40px rgba(0,0,0,0.6)',
              fontWeight: 900,
              letterSpacing: '-0.04em'
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Glamping
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              WNY
            </motion.span>
          </motion.h1>

          {/* Beautiful, Readable Subtitle */}
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl text-white font-medium mb-10 leading-relaxed max-w-5xl mx-auto"
            style={{
              textShadow: '0 4px 25px rgba(0,0,0,0.5)',
              fontWeight: 500,
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Creating Unforgettable
            <span className="text-yellow-200 font-semibold"> Magical Experiences </span>
            for Every Celebration
          </motion.h2>
          
          {/* Clean Description */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-14 max-w-5xl mx-auto leading-relaxed font-light"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We take the stress out of party planning and turn your special occasion into a celebration to remember! 
            From cozy indoor sleepovers to outdoor glamping adventures - we handle everything so you can relax and enjoy the moment.
          </motion.p>
          
          {/* Apple-Style CTA Buttons - FIXED SHIMMER */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-gray-900 hover:bg-gray-50 font-semibold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
                onClick={() => trackBookNowClick()}
                style={{ 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <span className="flex items-center gap-3 relative z-10">
                  Book Your Experience
                  <Heart className="w-6 h-6 text-pink-500" />
                </span>
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="group inline-flex items-center justify-center px-12 py-6 bg-white/5 backdrop-blur-xl text-white font-medium text-xl rounded-2xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              <span>Explore Our Services</span>
            </motion.button>
          </motion.div>

          {/* Clean Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + i * 0.1, type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 drop-shadow-lg" />
                  </motion.div>
                ))}
              </div>
              <span className="font-medium">200+ Happy Families</span>
            </motion.div>
            <div className="w-px h-6 bg-white/30" />
            <div className="font-medium">All Ages Welcome</div>
            <div className="w-px h-6 bg-white/30" />
            <div className="font-medium">Professional Service</div>
            <div className="w-px h-6 bg-white/30" />
            <div className="font-medium">Stress-Free Planning</div>
          </motion.div>
        </div>
      </div>
      
      {/* Apple-Style Scroll Indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer z-20 group"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Discover Our Services
          </span>
          <motion.div 
            className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors relative overflow-hidden"
            whileHover={{ boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
          >
            <motion.div
              className="w-1.5 h-4 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;