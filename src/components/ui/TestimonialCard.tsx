import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  image,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full flex flex-col relative overflow-hidden">
      {/* Top sparkle decoration */}
      <div className="absolute -top-1 -right-1 w-16 h-16 opacity-10">
        <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-primary-500 rounded-full animate-sparkle" />
        <div className="absolute top-10 right-10 w-1 h-1 bg-accent-500 rounded-full animate-sparkle animation-delay-700" />
      </div>
      
      {/* Rating stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-accent-500 fill-accent-500' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-6 flex-grow">
        <p className="italic text-gray-700">{quote}</p>
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center mt-auto">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;