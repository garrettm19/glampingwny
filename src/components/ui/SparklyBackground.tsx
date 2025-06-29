import React from 'react';
import { motion } from 'framer-motion';

interface SparklyBackgroundProps {
  density?: 'light' | 'medium' | 'heavy';
  className?: string;
  showShootingStars?: boolean;
  showSparkles?: boolean;
}

const SparklyBackground: React.FC<SparklyBackgroundProps> = ({ 
  density = 'medium', 
  className = '',
  showShootingStars = true,
  showSparkles = true
}) => {
  const starCount = {
    light: 40,
    medium: 80,
    heavy: 120
  }[density];

  const shootingStarCount = showShootingStars ? Math.floor(starCount / 8) : 0;
  const sparkleCount = showSparkles ? Math.floor(starCount / 4) : 0;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Twinkling Stars */}
      <div className="absolute inset-0 opacity-90">
        {[...Array(starCount)].map((_, i) => {
          const size = Math.random() > 0.8 ? '3px' : Math.random() > 0.6 ? '2px' : '1px';
          const animationType = Math.random() > 0.7 ? 'animate-twinkle-fast' : 
                               Math.random() > 0.4 ? 'animate-twinkle' : 'animate-twinkle-slow';
          
          return (
            <motion.div
              key={i}
              className={`absolute bg-white rounded-full ${animationType}`}
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Shooting Stars */}
      {showShootingStars && (
        <div className="absolute inset-0 opacity-60">
          {[...Array(shootingStarCount)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: '4px',
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                filter: 'blur(1px)',
                background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              }}
              animate={{
                x: [0, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Sparkle Dust */}
      {showSparkles && (
        <div className="absolute inset-0 opacity-40">
          {[...Array(sparkleCount)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: '1px',
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(0.5px)',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Subtle atmospheric glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
    </div>
  );
};

export default SparklyBackground;