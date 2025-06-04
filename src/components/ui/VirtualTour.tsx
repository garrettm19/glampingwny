import React from 'react';
import { motion } from 'framer-motion';

interface VirtualTourProps {
  className?: string;
}

const VirtualTour: React.FC<VirtualTourProps> = ({ className = '' }) => {
  return (
    <div className="text-center">
      <motion.div 
        className={`rounded-xl overflow-hidden shadow-glow ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative pb-[56.25%] h-0">
          <iframe
            src="https://my.matterport.com/show/?m=jvHYPSjSHFd"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
            title="Virtual Tour of Glamping WNY"
            loading="lazy"
          />
        </div>
      </motion.div>
      <motion.p
        className="text-gray-700 mt-4 text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        See the magic before you arrive.
      </motion.p>
    </div>
  );
};

export default VirtualTour;