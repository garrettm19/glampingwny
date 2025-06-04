import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

interface RatingBadgeProps {
  rating: number;
  reviews: number;
  onClick?: () => void;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ rating, reviews, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-24 right-8 z-40 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative bg-glass backdrop-blur-sm rounded-full px-6 py-3 shadow-glow flex items-center gap-3">
        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{ width: '200%' }}
          />
        </div>

        {/* Content */}
        <div className="relative flex items-center gap-3">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-semibold text-primary-900">{rating}</span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-accent-500" />
            <span className="text-primary-900">
              {reviews}+ Local Families
            </span>
          </div>
        </div>

        {/* Sparkle effects */}
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
      </div>
    </motion.button>
  );
};

export default RatingBadge;