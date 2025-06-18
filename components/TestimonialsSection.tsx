'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Birthday Party",
      rating: 5,
      text: "GlampingWNY made my daughter's 10th birthday absolutely magical! The Harry Potter theme was perfect and the kids had the best time. Professional service from start to finish!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike & Jessica",
      event: "Anniversary Celebration",
      rating: 5,
      text: "Our 5th anniversary glamping experience was incredible. The romantic setup under the stars was exactly what we dreamed of. Thank you for making it so special!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amanda Rodriguez",
      event: "Bachelorette Party",
      rating: 5,
      text: "Best bachelorette party ever! The spa party setup was luxurious and all the girls loved it. GlampingWNY took care of everything - stress-free planning at its finest!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rebecca B.",
      event: "Kids Birthday Sleepover",
      rating: 5,
      text: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple and the kids loved it. Thank you for making their birthday extra special!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Casey S.",
      event: "Unicorn Birthday Party",
      rating: 5,
      text: "Working with Glamping WNY was so easy. My daughter loved having the unicorn themed tents and Holly even included a special unicorn gift just for her. Great company!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jamie D.",
      event: "Family Celebration",
      rating: 5,
      text: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking for all your Glamping needs!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Families Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 200+ happy families who have created unforgettable memories with GlampingWNY
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-200" />
              
              {/* Rating */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-primary-600 text-sm font-medium">{testimonial.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
            <div className="text-gray-600">Theme Options</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-primary-600 mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;