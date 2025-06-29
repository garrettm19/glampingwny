import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const images: GalleryImage[] = [
  {
    src: "https://picsum.photos/800/600?random=20",
    alt: "Glamping tent for birthday party with fairy lights",
    width: 800,
    height: 600
  },
  {
    src: "https://picsum.photos/600/800?random=21",
    alt: "Cozy interior of glamping tent with decorative pillows",
    width: 600,
    height: 800
  },
  {
    src: "https://picsum.photos/800/600?random=22",
    alt: "Birthday party setup with themed decorations",
    width: 800,
    height: 600
  },
  {
    src: "https://picsum.photos/800/600?random=23",
    alt: "Magical nighttime view of illuminated glamping tent",
    width: 800,
    height: 600
  },
  {
    src: "https://picsum.photos/600/800?random=24",
    alt: "Kids activity area with crafting supplies",
    width: 600,
    height: 800
  },
  {
    src: "https://picsum.photos/800/600?random=25",
    alt: "Morning breakfast setup in glamping tent",
    width: 800,
    height: 600
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative break-inside-avoid cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: 'center',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </motion.button>
            <motion.div
              className="relative max-w-5xl max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <motion.p
                className="absolute bottom-0 left-0 right-0 text-center text-white bg-black/50 p-4 rounded-b-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {selectedImage.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;