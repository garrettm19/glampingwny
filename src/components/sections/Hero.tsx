import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, size: number, type: 'sparkle' | 'firefly'}>>([]);

  useEffect(() => {
    // Generate particles on mount
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 0.5 + 0.5,
      type: Math.random() > 0.6 ? 'firefly' : 'sparkle' as 'sparkle' | 'firefly'
    }));
    setParticles(newParticles);
  }, []);

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

      {/* Magical Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute ${particle.type === 'firefly' ? 'magical-firefly' : 'magical-sparkle'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              transform: `scale(${particle.size})`,
            }}
          >
            {particle.type === 'firefly' ? (
              <div className="firefly-glow">
                <div className="firefly-core"></div>
              </div>
            ) : (
              <div className="sparkle-star">✨</div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Light Orbs */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            animate={{
              y: [-20, -100],
              x: [0, Math.sin(i) * 50],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* Dreamy Mist Effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="dreamy-mist"></div>
        <div className="dreamy-mist dreamy-mist-2"></div>
      </div>
      
      <div className="container-custom relative z-20 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl text-contrast font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            It's Not Just Camping.
            <br />
            It's a Birthday Wonderland.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl"
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
                className="absolute inset-0 bg-white/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Link>
            
            <motion.button
              onClick={scrollToTour}
              className="btn btn-outline border-white text-white hover:bg-white/20"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20"
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