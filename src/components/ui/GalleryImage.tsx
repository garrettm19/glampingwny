import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="relative overflow-hidden rounded-lg cursor-pointer group"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <span className="inline-block px-2 py-1 bg-accent-500/80 text-white text-xs rounded mb-2">
              {category}
            </span>
            <h3 className="text-white font-medium">{alt}</h3>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImage;