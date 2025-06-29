import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialWidgetProps {
  quote: string;
  name: string;
  image: string;
  rating: number;
  tag: string;
  className?: string;
}

const TestimonialWidget: React.FC<TestimonialWidgetProps> = ({
  quote,
  name,
  image,
  rating,
  tag,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white border border-lavender-200 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Tag */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-lavender-500 text-white text-xs font-medium rounded-full">
        {tag}
      </div>

      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 w-6 h-6 text-lavender-200" />
        <blockquote className="text-gray-700 pl-4 leading-relaxed">
          "{quote}"
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border-2 border-lavender-200"
        />
        <div>
          <div className="font-bold text-gray-800">{name}</div>
          <div className="text-xs text-lavender-600">Verified Customer</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialWidget;