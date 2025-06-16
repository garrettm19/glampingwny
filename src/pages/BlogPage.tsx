import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "10 Magical Themes for Your Child's Glamping Party",
    excerpt: "Discover creative and enchanting themes that will make your child's glamping party unforgettable...",
    date: "March 1, 2024",
    author: "Sarah Johnson",
    image: "https://picsum.photos/400/300?random=40"
  },
  {
    title: "How to Plan the Perfect Outdoor Birthday Celebration",
    excerpt: "Tips and tricks for organizing an amazing outdoor birthday party that your kids will love...",
    date: "February 25, 2024",
    author: "Michael Rodriguez",
    image: "https://picsum.photos/400/300?random=41"
  },
  {
    title: "Creating Lasting Memories: The Magic of Glamping Parties",
    excerpt: "Learn why glamping parties are becoming the hottest trend in children's birthday celebrations...",
    date: "February 20, 2024",
    author: "Jessica Thompson",
    image: "https://picsum.photos/400/300?random=42"
  }
];

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Glamping WNY</title>
        <meta name="description" content="Read our latest blog posts about glamping parties, outdoor celebrations, and creating magical memories for children." />
      </Helmet>

      {/* Hero Section - Starry Night */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 25%, 
              #334155 50%, 
              #1e293b 75%, 
              #0f172a 100%)`
          }}
        >
          {/* Animated Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(70)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0.3, 1, 0],
                  scale: [0.5, 1, 0.8, 1.2, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
            
            {/* Shooting Stars */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                initial={{ 
                  x: -50,
                  y: Math.random() * 200,
                  opacity: 0 
                }}
                animate={{
                  x: typeof window !== 'undefined' ? window.innerWidth + 50 : 1200,
                  y: Math.random() * 200 + 100,
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 15 + Math.random() * 5,
                  ease: "easeOut"
                }}
                style={{
                  boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8), 0 0 12px 4px rgba(255, 255, 255, 0.4)'
                }}
              />
            ))}

            {/* Moon */}
            <motion.div
              className="absolute top-12 right-16"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-16 h-16 bg-yellow-100 rounded-full"
                style={{
                  boxShadow: '0 0 30px 8px rgba(254, 249, 195, 0.6), 0 0 60px 15px rgba(254, 249, 195, 0.3)'
                }}
              />
            </motion.div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100">
              Tips, ideas, and inspiration for magical outdoor celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-lavender-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-lavender-600 font-medium hover:text-lavender-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-lavender-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-700 mb-6">
                Get the latest party ideas and inspiration delivered to your inbox.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lavender-500"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;