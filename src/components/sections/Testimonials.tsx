import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Just show up and glamp! Everything was perfect - from the cozy tents to the magical decorations. My daughter felt like a princess!",
    name: "Jessica Thompson",
    role: "Mom of birthday girl",
    image: "https://glampingwny.com/wp-content/uploads/2024/03/parent-1.jpg",
    tag: "So Easy!",
    rating: 5
  },
  {
    quote: "We do the setup. You make the memories. And what memories they were! The kids haven't stopped talking about their magical night.",
    name: "Michael Rodriguez",
    role: "Father of 8-year-old",
    image: "https://glampingwny.com/wp-content/uploads/2024/03/parent-2.jpg",
    tag: "No Stress",
    rating: 5
  },
  {
    quote: "The attention to detail was amazing! From the fairy lights to the themed decorations - everything was perfect. Worth every penny!",
    name: "Sarah Johnson",
    role: "Return customer",
    image: "https://glampingwny.com/wp-content/uploads/2024/03/parent-3.jpg",
    tag: "Kids Loved It!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section bg-primary-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Parents Say
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what other parents have to say about their Glamping WNY experience.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonials Slider */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass-card rounded-xl p-8 h-full flex flex-col items-center justify-center text-center relative group">
                  {/* Floating hearts on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                          y: [-20, -40],
                          x: Math.random() * 40 - 20,
                          opacity: [0, 1, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: '50%',
                        }}
                      >
                        ❤️
                      </motion.div>
                    ))}
                  </div>

                  {/* Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white rounded-full text-sm font-medium">
                    {testimonials[currentIndex].tag}
                  </span>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-accent-400 fill-accent-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl text-white mb-8 max-w-2xl">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                    />
                    <div className="ml-4 text-left">
                      <div className="font-bold text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-white/80">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;