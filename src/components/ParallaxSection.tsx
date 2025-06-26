import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  backgroundImage,
  overlay = true
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 50}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: 'fixed'
            }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          )}
        </motion.div>
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;