import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const testimonials = [
  {
    quote: "Holly was absolutely amazing and easy to work with! I told her I was throwing a Barbie themed bachelorette weekend and she knocked the theme out of the park with Barbie décor in our glamping tent! All the girls especially the bride to be were so impressed and we enjoyed our first glamping experience so much! I highly recommend Glamping WNY and will most definitely be using them again in the future!",
    name: "Rachel C.",
    image: "https://picsum.photos/100/100?random=50",
    rating: 5,
    tag: "Family Celebration",
    date: "2024-02-28"
  },
  {
    quote: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple. She was easy to contact and communicate with. Also very flexible with drop off and pickup times. She was able to do two different themes for them since they are into different things. The beds were very comfortable and everything was clean and organized. The kids loved it. It was a great experience. Thank you for making their birthday extra special!",
    name: "Rebecca B.",
    image: "https://picsum.photos/100/100?random=51",
    rating: 5,
    tag: "Kids Birthday Party",
    date: "2024-02-25"
  },
  {
    quote: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking Holly and Joe for all your family Glamping needs!",
    name: "Jamie D.",
    image: "https://picsum.photos/100/100?random=52",
    rating: 5,
    tag: "Perfect Family Setup",
    date: "2024-02-20"
  },
  {
    quote: "The kids had the most amazing time! Everything was set up perfectly and the cleanup was seamless. Holly made the whole process so easy for us parents. Our family will definitely be booking again!",
    name: "Maria S.",
    image: "https://picsum.photos/100/100?random=53",
    rating: 5,
    tag: "Easy Family Process",
    date: "2024-02-15"
  },
  {
    quote: "Worth every penny! The attention to detail was incredible and my daughter felt like a princess. We'll definitely be booking again next year for our family celebration.",
    name: "David K.",
    image: "https://picsum.photos/100/100?random=54",
    rating: 5,
    tag: "Amazing Family Value",
    date: "2024-02-10"
  },
  {
    quote: "Professional, reliable, and magical! Holly exceeded all our family's expectations. The themed decorations were absolutely perfect for our kids.",
    name: "Lisa M.",
    image: "https://picsum.photos/100/100?random=55",
    rating: 5,
    tag: "Professional Family Service",
    date: "2024-02-05"
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
    <section className="section bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 relative overflow-hidden">
      {/* Warm decorative elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
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
              What Families Are Saying! 👨‍👩‍👧‍👦
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Real reviews from real families who've experienced the magic of Glamping WNY with their loved ones.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
              aria-label="Previous family testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
              aria-label="Next family testimonial"
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
                <div className="bg-white/95 backdrop-blur-sm border border-orange-200 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center relative group">
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
                  <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                    {testimonials[currentIndex].tag}
                  </span>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl text-gray-800 mb-8 max-w-2xl">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                    />
                    <div className="ml-4 text-left">
                      <div className="font-bold text-gray-800">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].date}
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
                aria-label={`Go to family testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;