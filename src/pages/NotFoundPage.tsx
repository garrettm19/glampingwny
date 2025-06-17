import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Volume2, VolumeX } from 'lucide-react';
import Logo from '../components/ui/Logo';

const NotFoundPage: React.FC = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Glamping WNY</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-primary-50 relative overflow-hidden">
        {/* Background sparkles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-custom px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
          >
            {/* Sound Toggle */}
            <motion.button
              className="absolute top-4 right-4 p-2 text-primary-600 hover:text-primary-700 transition-colors"
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isSoundEnabled ? "Mute sound effects" : "Enable sound effects"}
            >
              {isSoundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </motion.button>

            {/* Logo */}
            <div className="mb-8">
              <Logo size="lg" className="justify-center" />
            </div>

            {/* Tent Illustration */}
            <div className="mb-8 relative">
              <motion.img
                src="/glamping-logo.png"
                alt="Glamping WNY Logo - Tent not found"
                className="w-48 h-48 mx-auto object-contain"
                animate={{
                  rotate: isHovering ? [-5, 5, -5] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-accent-400/20 rounded-full -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Oops! This tent isn't set up yet.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Looks like you've wandered off the trail! Let's get you back to camp.
            </p>

            <motion.div
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="btn btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
              >
                <Home className="w-5 h-5" />
                Return to Camp
                
                {/* Sparkle burst on hover */}
                <AnimatePresence>
                  {isHovering && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ 
                            opacity: 0,
                            scale: 0,
                            x: 0,
                            y: 0
                          }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.cos(i * Math.PI / 4) * 30,
                            y: Math.sin(i * Math.PI / 4) * 30
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                          }}
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;