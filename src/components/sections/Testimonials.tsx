import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    event: "Birthday Party",
    rating: 5,
    text: "Absolutely magical! Holly and her team created the most beautiful setup for my daughter's 10th birthday. The Harry Potter theme was perfect and the kids had the best time. Professional service from start to finish!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=100&q=80"
  },
  {
    name: "Mike & Jessica",
    event: "Anniversary Celebration",
    rating: 5,
    text: "Our 5th anniversary glamping experience was incredible. The romantic setup under the stars was exactly what we dreamed of. Thank you for making it so special!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&q=80"
  },
  {
    name: "Amanda Rodriguez",
    event: "Bachelorette Party",
    rating: 5,
    text: "Best bachelorette party ever! The spa party setup was luxurious and all the girls loved it. Glamping WNY took care of everything - stress-free planning at its finest!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80"
  },
  {
    name: "Rebecca B.",
    event: "Kids Birthday Sleepover",
    rating: 5,
    text: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple and the kids loved it. Thank you for making their birthday extra special!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&q=80"
  },
  {
    name: "Casey S.",
    event: "Unicorn Birthday Party",
    rating: 5,
    text: "Working with Glamping WNY was so easy. My daughter loved having the unicorn themed tents and Holly even included a special unicorn gift just for her. Great company!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&w=100&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

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
    <section className="section bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-nature-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Families Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real families who've experienced the magic of Glamping WNY
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lavender-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lavender-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonials Slider */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass-card p-8 h-full flex flex-col justify-center text-center relative">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 left-6 w-8 h-8 text-lavender-200" />
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-lavender-200 mr-4"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-lavender-600 font-medium">
                        {testimonials[currentIndex].event}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-lavender-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { number: "200+", label: "Happy Families" },
            { number: "25+", label: "Theme Options" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "5★", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-lavender-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;