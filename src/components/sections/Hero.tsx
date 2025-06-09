import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number, 
    x: number, 
    y: number, 
    delay: number, 
    size: number, 
    type: 'sparkle' | 'firefly' | 'star' | 'magic',
    duration: number,
    drift: number
  }>>([]);

  useEffect(() => {
    // Generate more diverse particles with better movement
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.random() * 0.8 + 0.4,
      type: ['sparkle', 'firefly', 'star', 'magic'][Math.floor(Math.random() * 4)] as 'sparkle' | 'firefly' | 'star' | 'magic',
      duration: 6 + Math.random() * 8, // 6-14 seconds
      drift: (Math.random() - 0.5) * 60 // -30 to +30 horizontal drift
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

      {/* Enhanced Magical Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y + 20}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: [`${particle.x}%`, `${particle.x + particle.drift}%`, `${particle.x + particle.drift * 1.5}%`],
              y: [`${particle.y + 20}%`, `${particle.y - 30}%`, `${particle.y - 120}%`],
              opacity: [0, 1, 1, 0.7, 0],
              scale: [0, particle.size, particle.size * 1.2, particle.size * 0.8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.1, 0.7, 0.9, 1]
            }}
          >
            {particle.type === 'firefly' && (
              <div className="relative">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg" 
                     style={{ 
                       boxShadow: '0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4), 0 0 24px rgba(255,255,255,0.2)' 
                     }} 
                />
              </div>
            )}
            {particle.type === 'sparkle' && (
              <div className="text-white text-lg animate-pulse" 
                   style={{ 
                     filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8)) drop-shadow(0 0 8px rgba(255,255,255,0.4))',
                     fontSize: `${0.8 + particle.size * 0.4}rem`
                   }}>
                ✨
              </div>
            )}
            {particle.type === 'star' && (
              <div className="text-yellow-200 animate-pulse" 
                   style={{ 
                     filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.6))',
                     fontSize: `${0.6 + particle.size * 0.3}rem`
                   }}>
                ⭐
              </div>
            )}
            {particle.type === 'magic' && (
              <div className="text-purple-200 animate-pulse" 
                   style={{ 
                     filter: 'drop-shadow(0 0 4px rgba(147,51,234,0.6))',
                     fontSize: `${0.7 + particle.size * 0.3}rem`
                   }}>
                💫
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Floating Light Orbs */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`,
              boxShadow: '0 0 10px rgba(255,255,255,0.6)',
              left: `${5 + i * 8}%`,
              top: '110%'
            }}
            animate={{
              y: [-20, -150 - Math.random() * 100],
              x: [0, Math.sin(i * 0.5) * 80 + (Math.random() - 0.5) * 40],
              opacity: [0, 0.8, 0.6, 0],
              scale: [0.5, 1.2, 1, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.8 + Math.random() * 2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>

      {/* Magical Dust Trails */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: '100%',
              width: '2px',
              height: '40px',
              background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.6), transparent)',
              borderRadius: '1px'
            }}
            animate={{
              y: [-20, -200],
              opacity: [0, 1, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Dreamy Mist Layers */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 75%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.02) 90%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: -10,
          }}
        />
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