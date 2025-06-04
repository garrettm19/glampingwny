import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const messages = [
  "🎉 Only 2 tents left this weekend!",
  "🌤 Sunny skies expected for Sunday",
  "💫 3 birthdays booked this week!"
];

const UrgencyNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Rotate messages every 10 seconds
    const interval = setInterval(() => {
      if (isVisible) {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          className="bg-glass backdrop-blur-sm rounded-full px-6 py-3 shadow-glow flex items-center gap-4 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          {/* Background sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-400 rounded-full"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.2, 1],
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${20 + i * 20}%`,
                  top: '50%',
                }}
              />
            ))}
          </div>

          {/* Message */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-primary-900 font-medium"
            >
              {messages[currentIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Close button (mobile only) */}
          {isMobile && (
            <button
              onClick={() => setIsVisible(false)}
              className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 text-primary-900" />
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UrgencyNotification;