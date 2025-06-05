import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

const testimonials = [
  {
    quote: "Holly was absolutely amazing and easy to work with! I told her I was throwing a Barbie themed bachelorette weekend and she knocked the theme out of the park with Barbie décor in our glamping tent! All the girls especially the bride to be were so impressed and we enjoyed our first glamping experience so much! I highly recommend Glamping WNY and will most definitely be using them again in the future!",
    name: "Rachel C.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    tag: "Themed Party",
    date: "2024-02-28"
  },
  {
    quote: "I booked Glamping WNY for a surprise sleepover for my nephews. Holly was great! The booking process was so simple. She was easy to contact and communicate with. Also very flexible with drop off and pickup times. She was able to do two different themes for them since they are into different things. The beds were very comfortable and everything was clean and organized. The kids loved it. It was a great experience. Thank you for making their birthday extra special!",
    name: "Rebecca B.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    tag: "Kids Party",
    date: "2024-02-25"
  },
  {
    quote: "Clean, bright, unique, well thought out. Our experience was 5 stars, Holly covered all the details. Highly recommend booking Holly and Joe for all your Glamping needs!",
    name: "Jamie D.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    rating: 5,
    tag: "Perfect Setup",
    date: "2024-02-20"
  },
  // ... more testimonials
];

const TestimonialsPage: React.FC = () => {
  const aggregateRating = {
    ratingValue: 5.0,
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1
  };

  return (
    <>
      <Helmet>
        <title>Client Reviews & Testimonials | Glamping WNY</title>
        <meta name="description" content="Read what families say about their magical glamping experiences with Glamping WNY. Real reviews from real customers in Western New York." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": aggregateRating.ratingValue,
              "reviewCount": aggregateRating.reviewCount,
              "bestRating": aggregateRating.bestRating,
              "worstRating": aggregateRating.worstRating
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewBody": testimonial.quote
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        {/* Sparkle effects */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-particle"
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
            >
              <Star className="w-1 h-1 text-white" />
            </motion.div>
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-white/90">
              Real reviews from real families who've experienced the magic of Glamping WNY.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 relative"
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
                  {testimonial.tag}
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                  <blockquote className="text-gray-700 pl-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-primary-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Share Your Experience
            </h2>
            <p className="text-gray-700 mb-8">
              Had a magical time with us? We'd love to hear about it! Leave us a review on your favorite platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://google.com/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Review on Google
              </a>
              <a 
                href="https://facebook.com/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Review on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;