import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';

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

      {/* Hero Section - Clean Professional */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-lavender-500 to-lavender-600 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white text-center mx-auto"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-white/90">
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