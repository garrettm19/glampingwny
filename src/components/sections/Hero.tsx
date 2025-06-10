import React, { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Calendar, Star } from 'lucide-react';
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
      {/* Magical Forest Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-900" />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }}
        />
        
        {/* Atmospheric Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Floating Fireflies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 15 : 25)].map((_, i) => (
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
              scale: [1, 1.2, 0.8, 1.1, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            style={{
              filter: 'blur(0.5px)'
            }}
          >
            <div 
              className={`w-${isMobile ? '1' : '1.5'} h-${isMobile ? '1' : '1.5'} bg-yellow-300 rounded-full`}
              style={{
                boxShadow: '0 0 8px 2px rgba(255, 255, 0, 0.6), 0 0 16px 4px rgba(255, 255, 0, 0.3)',
                background: 'radial-gradient(circle, rgba(255,255,100,1) 0%, rgba(255,255,0,0.8) 70%, transparent 100%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Magical Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white/90 text-sm font-medium">
              ✨ Where Magic Meets Luxury
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            Experience
            <br />
            <span className="relative">
              Glamping Magic
              {/* Sparkle accent */}
              <motion.div
                className="absolute -top-4 -right-4 text-yellow-300"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Luxury camping for birthdays, weddings, and unforgettable nights under the stars. 
            <span className="text-yellow-300 font-medium"> Where dreams come to life.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
                onClick={() => trackBookNowClick()}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Your Magic
                </span>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Sparkle burst on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: '50%',
                        top: '50%'
                      }}
                      animate={{
                        x: Math.cos(i * Math.PI / 3) * 30,
                        y: Math.sin(i * Math.PI / 3) * 30,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToFeatures}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Explore Themes
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center gap-6 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">200+ Happy Families</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-sm font-medium">✓ Fully Insured & Licensed</div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-sm font-medium">✓ Same-Day Setup Available</div>
          </motion.div>
        </div>

        {/* Luxury Tent Illustration */}
        <motion.div
          className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-80 h-80">
            {/* Tent Structure */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 320 320" className="w-full h-full">
                {/* Tent Body */}
                <path
                  d="M160 40 L280 240 L40 240 Z"
                  fill="url(#tentGradient)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                
                {/* Tent Door */}
                <path
                  d="M140 240 L140 180 Q140 170 150 170 L170 170 Q180 170 180 180 L180 240"
                  fill="rgba(0,0,0,0.3)"
                />
                
                {/* Tent Pole */}
                <line
                  x1="160"
                  y1="40"
                  x2="160"
                  y2="240"
                  stroke="rgba(139,69,19,0.6)"
                  strokeWidth="3"
                />
                
                <defs>
                  <linearGradient id="tentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="50%" stopColor="rgba(240,240,240,0.8)" />
                    <stop offset="100%" stopColor="rgba(220,220,220,0.7)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Fairy Lights */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  style={{
                    left: `${20 + (i * 20)}%`,
                    top: `${60 + Math.sin(i * 0.5) * 10}%`,
                    boxShadow: '0 0 8px rgba(255,255,0,0.8)'
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
            
            {/* Magical Aura */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)',
                filter: 'blur(20px)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToFeatures}
        aria-label="Scroll down to explore"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Discover the Magic
          </span>
          <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;