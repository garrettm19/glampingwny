import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  flickerDelay: number;
  direction: number;
  opacity: number;
}

const Hero: React.FC = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [firefliesEnabled, setFirefliesEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setFirefliesEnabled(!mobile); // Disable on mobile for performance
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Generate fireflies
    if (!isMobile) {
      const newFireflies: Firefly[] = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 3 + Math.random() * 2, // 3-5px
        speed: 0.5 + Math.random() * 1, // Gentle movement
        delay: Math.random() * 10,
        flickerDelay: 2 + Math.random() * 4, // Flicker every 2-6 seconds
        direction: Math.random() * Math.PI * 2,
        opacity: 0.6 + Math.random() * 0.4
      }));
      setFireflies(newFireflies);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

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

      {/* Firefly Container */}
      {firefliesEnabled && !isMobile && (
        <div 
          id="firefly-container" 
          className="absolute inset-0 pointer-events-none z-10"
          style={{ overflow: 'hidden' }}
        >
          {fireflies.map((firefly) => (
            <div
              key={firefly.id}
              className="firefly-dot"
              style={{
                position: 'absolute',
                left: `${firefly.x}%`,
                top: `${firefly.y}%`,
                width: `${firefly.size}px`,
                height: `${firefly.size}px`,
                backgroundColor: '#fff8dc', // Soft warm white
                borderRadius: '50%',
                opacity: firefly.opacity,
                boxShadow: `
                  0 0 ${firefly.size * 2}px rgba(255, 248, 220, 0.8),
                  0 0 ${firefly.size * 4}px rgba(255, 248, 220, 0.4),
                  0 0 ${firefly.size * 6}px rgba(255, 248, 220, 0.2)
                `,
                filter: 'blur(0.5px)',
                animation: `
                  fireflyFloat${firefly.id} ${15 + firefly.speed * 10}s linear infinite ${firefly.delay}s,
                  fireflyFlicker ${firefly.flickerDelay}s ease-in-out infinite ${firefly.delay + 2}s
                `
              }}
            />
          ))}
        </div>
      )}

      {/* Magic Toggle Button (Desktop only) */}
      {!isMobile && (
        <motion.button
          onClick={() => setFirefliesEnabled(!firefliesEnabled)}
          className="fixed top-24 right-8 z-50 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {firefliesEnabled ? 'Hide' : 'Show'} Magic
        </motion.button>
      )}
      
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

      {/* Dynamic CSS for firefly animations */}
      <style jsx>{`
        ${fireflies.map(firefly => `
          @keyframes fireflyFloat${firefly.id} {
            0% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(${Math.cos(firefly.direction) * 50}px, ${Math.sin(firefly.direction) * 30}px);
            }
            50% {
              transform: translate(${Math.cos(firefly.direction + Math.PI/2) * 40}px, ${Math.sin(firefly.direction + Math.PI/2) * 50}px);
            }
            75% {
              transform: translate(${Math.cos(firefly.direction + Math.PI) * 30}px, ${Math.sin(firefly.direction + Math.PI) * 40}px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `).join('')}
        
        @keyframes fireflyFlicker {
          0%, 90% {
            opacity: var(--firefly-opacity);
          }
          95% {
            opacity: 0.2;
          }
          100% {
            opacity: var(--firefly-opacity);
          }
        }
        
        .firefly-dot {
          --firefly-opacity: ${fireflies[0]?.opacity || 0.8};
        }
      `}</style>
    </section>
  );
};

export default Hero;