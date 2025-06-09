import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';

const Hero: React.FC = () => {
  const scrollToBooking = useCallback(() => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      trackBookNowClick();
    }
  }, []);

  const scrollToTour = useCallback(() => {
    const tourSection = document.getElementById('virtual-tour');
    if (tourSection) {
      tourSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Magical glamping tent setup"
          className="object-cover w-full h-full"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 to-primary-900/80" />
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span 
            key={i}
            className="firefly absolute"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: 'white',
              textShadow: `
                0 0 10px rgba(196, 181, 253, 0.8),
                0 0 20px rgba(196, 181, 253, 0.6),
                0 0 30px rgba(196, 181, 253, 0.4),
                0 0 40px rgba(196, 181, 253, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.3)
              `,
              filter: 'drop-shadow(0 0 15px rgba(196, 181, 253, 0.7))'
            }}
          >
            {/* Main heading text */}
            <span className="relative inline-block">
              It's Not Just Camping.
              <br />
              It's a Birthday Wonderland.
              
              {/* Shimmer effect overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 70%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mixBlendMode: 'overlay'
                }}
                animate={{
                  backgroundPosition: ['-200% 0%', '200% 0%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 10,
                  ease: "easeInOut"
                }}
              />
              
              {/* Additional glow pulse */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(196, 181, 253, 0.3) 0%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 10px rgba(196, 181, 253, 0.3)'
            }}
          >
            Glamorous tents. No stress. Just show up and celebrate.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/book-now"
              className="btn btn-primary group relative overflow-hidden"
              onClick={() => trackBookNowClick()}
              style={{
                boxShadow: '0 0 25px rgba(196, 181, 253, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)'
              }}
            >
              Let's Create Magic! 🎪
              <motion.span 
                className="absolute inset-0 rounded-full bg-white/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Link>
            
            <motion.button
              onClick={scrollToTour}
              className="btn btn-outline border-white text-white hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), 0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              Peek Inside Our Tents ✨
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToBooking}
        aria-label="Scroll down"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(196, 181, 253, 0.8))'
        }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;