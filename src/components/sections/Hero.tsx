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
      {/* Clean Modern Background */}
      <div className="absolute inset-0 z-0">
        {/* Beautiful gradient background instead of image */}
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-400 via-purple-500 to-pink-500" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-hero-pattern" />
        </div>
        
        {/* Clean geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Minimal floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(6)].map((_, i) => {
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
                opacity: [0, 0.3, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            >
              <Icon 
                size={24} 
                className="text-white/20" 
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          {/* Clean Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border border-white/30 mb-8 shadow-xl"
          >
            <Logo size="sm" />
            <span className="text-neutral-800 text-sm font-semibold">
              Buffalo Metro's Premier Glamping Experience
            </span>
          </motion.div>

          {/* Clean, Readable Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Glamping
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              WNY
            </motion.span>
          </motion.h1>

          {/* Clean, Readable Subheadline */}
          <motion.h2 
            className="text-xl md:text-2xl text-white/95 font-medium mb-6 leading-relaxed max-w-3xl mx-auto"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              fontWeight: 500
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Creating Unforgettable
            <span className="text-yellow-300 font-semibold"> Magical Experiences </span>
            for Every Celebration
          </motion.h2>
          
          {/* Clean Value Proposition */}
          <motion.p 
            className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            We take the stress out of party planning and turn your special occasion into a celebration to remember! 
            From cozy indoor sleepovers to outdoor glamping adventures - we handle everything so you can relax and enjoy the moment.
          </motion.p>
          
          {/* Clean CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-lavender-600 hover:bg-lavender-50 font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
                onClick={() => trackBookNowClick()}
              >
                <span className="flex items-center gap-2">
                  Book Your Experience
                  <Heart className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              <span>Explore Our Services</span>
            </motion.button>
          </motion.div>

          {/* Clean Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <span className="font-semibold">200+ Happy Families</span>
            </div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-semibold">All Ages Welcome</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-semibold">Professional Service</div>
            <div className="w-px h-4 bg-white/40" />
            <div className="font-semibold">Stress-Free Planning</div>
          </motion.div>
        </div>
      </div>
      
      {/* Clean Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Discover Our Services
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
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