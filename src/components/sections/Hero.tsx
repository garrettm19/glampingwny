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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="https://glampingwny.com/wp-content/uploads/2024/03/hero-tent.jpg"
        >
          <source src="https://glampingwny.com/wp-content/uploads/2024/03/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Magical gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/60 to-secondary-900/80" />
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
            className="text-4xl md:text-5xl lg:text-6xl text-contrast font-bold mb-6 text-cream-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            It's Not Just Camping.
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
              It's a Birthday Wonderland.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-cream-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            >
              <span className="relative z-10">Let's Create Magic! 🎪</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-300 to-accent-300 opacity-0 group-hover:opacity-20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <motion.button
              onClick={scrollToTour}
              className="btn btn-outline border-cream-100 text-cream-100 hover:bg-cream-100/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Peek Inside Our Tents ✨
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream-100 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToBooking}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;