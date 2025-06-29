import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Sparkles } from 'lucide-react';

interface VirtualTourProps {
  className?: string;
}

const VirtualTour: React.FC<VirtualTourProps> = ({ className = '' }) => {
  return (
    <div className="text-center">
      <motion.div 
        className={`rounded-xl overflow-hidden shadow-lg ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative bg-gradient-to-br from-lavender-100 to-teal-100 aspect-video flex items-center justify-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-lavender-400 rounded-full" />
            <div className="absolute top-8 right-8 w-6 h-6 border-2 border-teal-400 rounded-full" />
            <div className="absolute bottom-8 left-8 w-4 h-4 bg-lavender-400 rounded-full" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-teal-400 rounded-full" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-lavender-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            <motion.div
              className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-lavender-600 ml-1" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Virtual Tour Coming Soon! 🎥
            </h3>
            <p className="text-gray-700 max-w-md mx-auto mb-6">
              Get an immersive 360° view of our magical glamping setups. See every detail before your special day!
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>360° Views</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Experience</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.p
        className="text-gray-700 mt-4 text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Experience the magic before it arrives at your door.
      </motion.p>
    </div>
  );
};

export default VirtualTour;