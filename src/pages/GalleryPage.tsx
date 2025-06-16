import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Gallery from '../components/ui/Gallery';
import VirtualTour from '../components/ui/VirtualTour';
import { ArrowRight } from 'lucide-react';
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

      {/* Hero Section - Starry Night */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 25%, 
              #334155 50%, 
              #1e293b 75%, 
              #0f172a 100%)`
          }}
        >
          {/* Animated Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(70)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0.3, 1, 0],
                  scale: [0.5, 1, 0.8, 1.2, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
            
            {/* Shooting Stars */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                initial={{ 
                  x: -50,
                  y: Math.random() * 200,
                  opacity: 0 
                }}
                animate={{
                  x: typeof window !== 'undefined' ? window.innerWidth + 50 : 1200,
                  y: Math.random() * 200 + 100,
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 15 + Math.random() * 5,
                  ease: "easeOut"
                }}
                style={{
                  boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8), 0 0 12px 4px rgba(255, 255, 255, 0.4)'
                }}
              />
            ))}

            {/* Moon */}
            <motion.div
              className="absolute top-12 right-16"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-16 h-16 bg-yellow-100 rounded-full"
                style={{
                  boxShadow: '0 0 30px 8px rgba(254, 249, 195, 0.6), 0 0 60px 15px rgba(254, 249, 195, 0.3)'
                }}
              />
            </motion.div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-blue-100 mb-6">
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
      <section className="section bg-gradient-to-br from-lavender-600 via-teal-600 to-lavender-700 text-white relative overflow-hidden">
        <div className="container-custom">
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
            <button className="btn btn-secondary">
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