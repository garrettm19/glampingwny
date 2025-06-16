import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Heart, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

// Real testimonials from customers
const testimonials = [
  {
    quote: "Holly was absolutely amazing and easy to work with! I told her I was throwing a Barbie themed bachelorette weekend and she knocked the theme out of the park with Barbie décor in our glamping tent! All the girls especially the bride to be were so impressed and we enjoyed our first glamping experience so much! I highly recommend Glamping WNY and will most definitely be using them again in the future!",
    name: "Rachel C.",
    image: "https://picsum.photos/100/100?random=50",
    rating: 5,
    tag: "Bachelorette Party",
    date: "2024-02-28",
    occasion: "Themed Party"
  },
  {
    quote: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple. She was easy to contact and communicate with. Also very flexible with drop off and pickup times. She was able to do two different themes for them since they are into different things. The beds were very comfortable and everything was clean and organized. The kids loved it. It was a great experience. Thank you for making their birthday extra special!",
    name: "Rebecca B.",
    image: "https://picsum.photos/100/100?random=51",
    rating: 5,
    tag: "Kids Birthday",
    date: "2024-02-25",
    occasion: "Birthday Party"
  },
  {
    quote: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking Holly and Joe for all your Glamping needs!",
    name: "Jamie D.",
    image: "https://picsum.photos/100/100?random=52",
    rating: 5,
    tag: "5-Star Experience",
    date: "2024-02-20",
    occasion: "Family Celebration"
  },
  {
    quote: "They were very responsive to any questions I asked, they gave their honest opinions, and I cannot begin to explain how awesome the set up was. It was even better in person than in the pictures! The kids not only slept in it, but played in it for the entire length of time we had them! Everything was clean, fresh, and right up any kids alley! Thank you for an awesome 'stay-cation' for our kiddos!",
    name: "Erin C.",
    image: "https://picsum.photos/100/100?random=53",
    rating: 5,
    tag: "Kids Staycation",
    date: "2024-02-18",
    occasion: "Family Fun"
  },
  {
    quote: "Working with Glamping WNY was so easy. I made sure to book in advance and while booking, was able to receive tips from Holly on theme and components I wanted for the setup. Their product is clean, unique and they take the time to make every display perfect. My daughter loved having the unicorn themed tents to celebrate her birthday and Holly even included a special unicorn gift just for her. Great product, great company and I can't wait to work with them again.",
    name: "Casey S.",
    image: "https://picsum.photos/100/100?random=54",
    rating: 5,
    tag: "Unicorn Birthday",
    date: "2024-02-15",
    occasion: "Birthday Party"
  },
  {
    quote: "Amazing from start to finish. I won this as a raffle and will 100% pay to have them do it again. Our guests loved the ambiance and details of the outdoor movie night. They were very communicative leading up as there was a chance of rain. The seating and decorations were SO cute! Holly and her husband got everything set-up quickly and then came after and got it all that night. I have raved about them to everyone and look forward to working with them again!",
    name: "Brett B.",
    image: "https://picsum.photos/100/100?random=55",
    rating: 5,
    tag: "Movie Night",
    date: "2024-02-12",
    occasion: "Outdoor Experience"
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
    <section className="section bg-gradient-to-br from-lavender-500 via-lavender-600 to-lavender-700 relative overflow-hidden">
      {/* Elegant decorative elements */}
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
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Families Are Saying! 👨‍👩‍👧‍👦
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Real reviews from real families who've experienced the magic of Glamping WNY with their loved ones.
            </p>
            
            {/* Trust Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-white fill-white" />
                  ))}
                </div>
                <span className="font-medium">5.0 Average Rating</span>
              </div>
              <div className="w-px h-4 bg-white/40" />
              <div className="font-medium">200+ Happy Families</div>
              <div className="w-px h-4 bg-white/40" />
              <div className="font-medium">100% Satisfaction</div>
            </div>
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
          <div className="relative h-[450px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-lavender-200 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center relative group">
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
                  <span className="absolute top-4 right-4 px-3 py-1 bg-lavender-500 text-white rounded-full text-sm font-medium">
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
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-lavender-200" />
                    <blockquote className="text-lg text-gray-800 max-w-2xl leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-lavender-200"
                    />
                    <div className="ml-4 text-left">
                      <div className="font-bold text-gray-800">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonials[currentIndex].occasion}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {new Date(testimonials[currentIndex].date).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric'
                        })}
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

        {/* CTA to View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            Read More Family Stories
            <Heart className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;