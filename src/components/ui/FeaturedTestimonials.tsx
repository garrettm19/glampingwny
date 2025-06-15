import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Featured testimonials for homepage and other sections
const featuredTestimonials = [
  {
    quote: "Holly was absolutely amazing and easy to work with! She knocked the theme out of the park with Barbie décor in our glamping tent! All the girls were so impressed and we enjoyed our first glamping experience so much!",
    name: "Rachel C.",
    image: "https://picsum.photos/100/100?random=50",
    rating: 5,
    tag: "Bachelorette Party",
    highlight: "Amazing Service"
  },
  {
    quote: "The booking process was so simple. Holly was easy to contact and flexible with times. The beds were comfortable, everything was clean and organized. The kids loved it! Thank you for making their birthday extra special!",
    name: "Rebecca B.",
    image: "https://picsum.photos/100/100?random=51",
    rating: 5,
    tag: "Kids Birthday",
    highlight: "Easy Process"
  },
  {
    quote: "Everything was clean, fresh, and right up any kids alley! The kids not only slept in it, but played in it for the entire time! Thank you for an awesome 'stay-cation' for our kiddos!",
    name: "Erin C.",
    image: "https://picsum.photos/100/100?random=53",
    rating: 5,
    tag: "Family Staycation",
    highlight: "Kids Loved It"
  }
];

interface FeaturedTestimonialsProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  className?: string;
}

const FeaturedTestimonials: React.FC<FeaturedTestimonialsProps> = ({
  title = "What Families Are Saying",
  subtitle = "Real reviews from real families",
  showCTA = true,
  className = ""
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-6">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-orange-200 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300"
            >
              {/* Highlight Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                {testimonial.highlight}
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-orange-200" />
                <blockquote className="text-gray-700 pl-4 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <div className="font-bold text-gray-800 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-orange-600">{testimonial.tag}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group"
            >
              Read All 200+ Family Reviews
              <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedTestimonials;