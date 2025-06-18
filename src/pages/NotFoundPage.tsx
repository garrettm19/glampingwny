import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Volume2, VolumeX, Tent } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Glamping WNY</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 via-white to-purple-50 relative overflow-hidden px-4">
        {/* Background sparkles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lavender-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-lg mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm border border-lavender-200 p-6 sm:p-8 rounded-2xl shadow-lg relative"
          >
            {/* Sound Toggle */}
            <motion.button
              className="absolute top-3 right-3 p-2 text-lavender-600 hover:text-lavender-700 transition-colors rounded-lg hover:bg-lavender-50"
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isSoundEnabled ? "Mute sound effects" : "Enable sound effects"}
            >
              {isSoundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </motion.button>

            {/* Logo/Icon */}
            <div className="mb-6">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-lavender-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg"
                animate={{
                  rotate: isHovering ? [-5, 5, -5] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Tent className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-lavender-400/20 rounded-full -z-10"
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

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Oops! This tent isn't set up yet.
            </h1>
            
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Looks like you've wandered off the trail! Let's get you back to camp.
            </p>

            <motion.div
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <Home className="w-5 h-5" />
                <span>Return to Camp</span>
                
                {/* Sparkle burst on hover */}
                <AnimatePresence>
                  {isHovering && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(6)].map((_, i) => (
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
                            x: Math.cos(i * Math.PI / 3) * 20,
                            y: Math.sin(i * Math.PI / 3) * 20
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

            {/* Quick Links */}
            <div className="mt-6 pt-4 border-t border-lavender-200">
              <p className="text-xs text-gray-500 mb-3">Or try these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link 
                  to="/services" 
                  className="text-xs text-lavender-600 hover:text-lavender-700 px-3 py-1 rounded-full hover:bg-lavender-50 transition-colors"
                >
                  Services
                </Link>
                <Link 
                  to="/gallery" 
                  className="text-xs text-lavender-600 hover:text-lavender-700 px-3 py-1 rounded-full hover:bg-lavender-50 transition-colors"
                >
                  Gallery
                </Link>
                <Link 
                  to="/contact" 
                  className="text-xs text-lavender-600 hover:text-lavender-700 px-3 py-1 rounded-full hover:bg-lavender-50 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;