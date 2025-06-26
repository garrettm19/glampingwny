import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useScrollEffects';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  count = 20, 
  className = '' 
}) => {
  const mousePosition = useMousePosition();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const parallaxStrength = (i % 3 + 1) * 0.01;

        return (
          <motion.div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: mousePosition.x * parallaxStrength,
              y: mousePosition.y * parallaxStrength,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 30 },
              y: { type: "spring", stiffness: 50, damping: 30 },
              scale: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: {
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;