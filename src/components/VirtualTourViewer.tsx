import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Maximize, Minimize, Camera, Compass } from 'lucide-react';

interface VirtualTourViewerProps {
  title?: string;
  description?: string;
  className?: string;
}

const VirtualTourViewer: React.FC<VirtualTourViewerProps> = ({
  title = 'Virtual Tour Experience',
  description = 'Explore our glamping setups in immersive 360°',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentView, setCurrentView] = useState(0);

  const tourViews = [
    {
      name: 'Indoor Glamping Setup',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      description: 'Cozy indoor teepee setup with fairy lights and comfortable bedding'
    },
    {
      name: 'Bell Tent Exterior',
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1200&h=800&fit=crop',
      description: 'Spacious 16ft bell tent under the stars'
    },
    {
      name: 'Bell Tent Interior',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      description: 'Luxurious interior with memory foam beds and ambient lighting'
    },
    {
      name: 'Spa Party Setup',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop',
      description: 'Complete spa party with all essentials for relaxation'
    }
  ];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % tourViews.length);
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + tourViews.length) % tourViews.length);
  };

  return (
    <>
      {/* Tour Trigger */}
      <div 
        className={`relative overflow-hidden rounded-xl cursor-pointer group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={tourViews[0].image}
          alt="Virtual Tour Preview"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4"
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/90 max-w-xs text-center px-4">{description}</p>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 left-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              {isFullscreen ? (
                <Minimize className="w-6 h-6" />
              ) : (
                <Maximize className="w-6 h-6" />
              )}
            </button>

            {/* Main Content */}
            <div className="w-full h-full relative">
              {/* Current View */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentView}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <img
                    src={tourViews[currentView].image}
                    alt={tourViews[currentView].name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Interactive Elements */}
                  <div className="absolute inset-0">
                    {/* Hotspots would go here in a real 360 tour */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <Camera className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <button
                  onClick={prevView}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">
                      {tourViews[currentView].name}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={nextView}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* View Description */}
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3 max-w-md">
                <p className="text-white/90 text-center text-sm">
                  {tourViews[currentView].description}
                </p>
              </div>

              {/* View Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {tourViews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentView(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentView === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualTourViewer;