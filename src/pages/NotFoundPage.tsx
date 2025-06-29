import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Volume2, VolumeX, Tent, Compass, MapPin } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Glamping WNY</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 relative overflow-hidden px-4">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <div className={`w-${4 + i % 3} h-${4 + i % 3} ${
                i % 3 === 0 ? 'bg-teal-200' : 
                i % 3 === 1 ? 'bg-cyan-200' : 'bg-emerald-200'
              } rounded-full`} />
            </motion.div>
          ))}
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(20 184 166) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md border border-teal-200/50 p-8 rounded-3xl shadow-xl relative overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-teal-100 to-transparent rounded-br-full opacity-50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-100 to-transparent rounded-tl-full opacity-50" />

            {/* Sound Toggle */}
            <motion.button
              className="absolute top-4 right-4 p-2 text-teal-600 hover:text-teal-700 transition-colors rounded-xl hover:bg-teal-50"
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isSoundEnabled ? "Mute sound effects" : "Enable sound effects"}
            >
              {isSoundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </motion.button>

            {/* Main Icon */}
            <div className="mb-8 relative">
              <motion.div
                className="relative mx-auto"
                animate={{
                  y: isHovering ? [-2, 2, -2] : [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-lg opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {/* Main icon container */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg transform rotate-3">
                  <Compass className="w-10 h-10 text-white" />
                </div>
                
                {/* Small floating tent */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-md"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <Tent className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent mb-4">
              Lost in the Wilderness?
            </h1>
            
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Don't worry, even the best explorers sometimes take a wrong turn. 
              Let's get you back to base camp!
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.div
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Link
                  to="/"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <Home className="w-5 h-5" />
                  <span>Return to Base Camp</span>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>

              {/* Secondary button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 font-medium rounded-xl transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Explore Our Services</span>
                </Link>
              </motion.div>
            </div>

            {/* Quick Navigation */}
            <div className="mt-8 pt-6 border-t border-teal-100">
              <p className="text-xs text-gray-500 mb-4">Popular destinations:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { to: "/gallery", label: "Gallery" },
                  { to: "/testimonials", label: "Reviews" },
                  { to: "/contact", label: "Contact" },
                  { to: "/faq", label: "FAQ" }
                ].map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link 
                      to={link.to} 
                      className="text-xs text-teal-600 hover:text-teal-700 px-4 py-2 rounded-full hover:bg-teal-50 transition-all duration-200 border border-teal-200 hover:border-teal-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100"
            >
              <p className="text-xs text-teal-700">
                <span className="font-semibold">Fun fact:</span> Even experienced campers get lost sometimes! 
                That's why we always bring a compass. 🧭
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;