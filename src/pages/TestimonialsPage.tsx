import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/ui/TestimonialCard';

const testimonials = [
  {
    quote: "My daughter and her friends had the most magical birthday ever! The tents were beautifully decorated and the attention to detail was amazing. Worth every penny!",
    name: "Jessica Thompson",
    role: "Mom of birthday girl",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "We booked the Magical Celebration package and it exceeded our expectations. The staff was professional and made setup so easy. My son hasn't stopped talking about it!",
    name: "Michael Rodriguez",
    role: "Father of 8-year-old",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "This was our second time using Glamping WNY and they somehow made it even better than the first time. The customized theme matched my daughter's interests perfectly.",
    name: "Sarah Johnson",
    role: "Return customer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "The Ultimate Fantasy package was truly magical! Every detail was perfect, from the themed decorations to the outdoor movie setup. A birthday she'll never forget!",
    name: "Emily Davis",
    role: "Mother of two",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "Such a unique and wonderful way to celebrate! The kids were thrilled with their magical tent sleepover, and I loved how stress-free it was for me.",
    name: "Amanda Wilson",
    role: "Birthday party host",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "The attention to detail and level of service was outstanding. They made my daughter feel like a princess on her special day!",
    name: "Rachel Martinez",
    role: "Delighted parent",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

const TestimonialsPage: React.FC = () => {
  const aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 200,
    bestRating: 5,
    worstRating: 1
  };

  return (
    <>
      <Helmet>
        <title>Client Testimonials | Glamping WNY</title>
        <meta name="description" content="Read what parents say about their magical birthday experiences with Glamping WNY. Real stories from real families in Western New York." />
        
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
            <span 
              key={i}
              className="sparkle-dot"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Parents Say</h1>
            <p className="text-xl text-white/90 mb-6">
              Read about the magical experiences we've created for families across Western New York.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-gray-700 mb-8">
              Join our growing family of happy parents and delighted children. Book your magical glamping experience today!
            </p>
            <button className="btn btn-primary">
              Book Your Experience
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;