import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Gallery from '../components/ui/Gallery';
import VirtualTour from '../components/ui/VirtualTour';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowBanner(scrollPercentage >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    {
      url: "https://picsum.photos/800/600?random=20",
      name: "Glamping tent for birthday party with fairy lights",
      contentUrl: "https://picsum.photos/800/600?random=20",
      description: "Magical glamping tent setup with twinkling fairy lights perfect for children's birthday parties",
      width: 800,
      height: 600
    },
    {
      url: "https://picsum.photos/600/800?random=21",
      name: "Cozy interior of glamping tent with decorative pillows",
      contentUrl: "https://picsum.photos/600/800?random=21",
      description: "Interior view of our luxury glamping tent featuring comfortable bedding and decorative elements",
      width: 600,
      height: 800
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | Luxury Glamping Photos | Glamping WNY</title>
        <meta name="description" content="Browse our gallery of luxury glamping experiences. See our premium tents, decorations, and happy celebrations from real events in Western New York." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Glamping WNY Luxury Experience Gallery",
            "description": "Photo gallery of luxury glamping experiences in Western New York",
            "image": images.map(img => ({
              "@type": "ImageObject",
              "contentUrl": img.contentUrl,
              "name": img.name,
              "description": img.description,
              "width": img.width,
              "height": img.height
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section - Beautiful Lilac Night Sky */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* SUPER SPARKLY NIGHT SKY BACKGROUND */}
        <div className="absolute inset-0 z-0">
          {/* Main night sky background with realistic lilac colors and TONS of stars */}
          <div className="w-full h-full bg-lilac-night-sky"></div>
          
          {/* MASSIVE SPARKLY STAR OVERLAY - 100+ animated twinkling stars! */}
          <div className="absolute inset-0 opacity-90">
            {[...Array(100)].map((_, i) => {
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

          {/* Extra sparkly shooting stars */}
          <div className="absolute inset-0 opacity-60">
            {[...Array(12)].map((_, i) => (
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

          {/* Magical sparkle dust effect */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(50)].map((_, i) => (
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

          {/* Subtle atmospheric glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-white/90 mb-6">
              Browse through our luxury glamping experiences and get inspired for your celebration.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <Gallery />
        </div>
      </section>
      
      {/* Virtual Tour */}
      <section className="section bg-lavender-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-lavender-900 mb-4">
                Take a Virtual Tour
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Experience our luxury glamping setup in immersive 3D.
              </p>
            </motion.div>
          </div>
          
          <VirtualTour />
        </div>
      </section>
      
      {/* CTA */}
      <section className="section lilac-night-gradient text-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your Own Magical Moments?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your luxury glamping experience today.
            </p>
            <button className="btn btn-secondary bg-white text-lavender-600 hover:bg-lavender-50">
              Book Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-glass backdrop-blur-md rounded-full px-6 py-3 shadow-glow flex items-center gap-4">
              <p className="text-lavender-900 font-medium">
                Want this for your next celebration?
              </p>
              <Link 
                to="/book-now"
                className="btn btn-primary py-2 px-4 text-sm whitespace-nowrap group"
              >
                Book Your Experience
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;