import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpDown } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  rating: number;
  tag: string;
  category: 'toddlers' | 'ages-4-7' | 'ages-8-10' | 'parents';
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "The perfect birthday for my toddler! Everything was magical and safe.",
    rating: 5,
    tag: "Magical Experience!",
    category: "toddlers",
    date: "2024-03-01"
  },
  {
    id: 2,
    name: "Michael R.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "My 6-year-old and her friends had the time of their lives. Worth every penny!",
    rating: 5,
    tag: "So Worth It!",
    category: "ages-4-7",
    date: "2024-02-28"
  },
  {
    id: 3,
    name: "Emily D.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    quote: "Perfect for my 9-year-old's sleepover party. The setup was incredible!",
    rating: 5,
    tag: "Amazing Setup!",
    category: "ages-8-10",
    date: "2024-02-25"
  },
  {
    id: 4,
    name: "Jessica T.",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    quote: "As a mom, I appreciated how stress-free the whole experience was.",
    rating: 5,
    tag: "Stress-Free!",
    category: "parents",
    date: "2024-02-20"
  },
  {
    id: 5,
    name: "David K.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote: "My toddler twins were absolutely delighted. The staff was amazing with them.",
    rating: 5,
    tag: "Perfect for Twins!",
    category: "toddlers",
    date: "2024-02-15"
  },
  {
    id: 6,
    name: "Rachel M.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    quote: "The themed decorations for my 7-year-old's party were spectacular!",
    rating: 5,
    tag: "Beautiful Setup!",
    category: "ages-4-7",
    date: "2024-02-10"
  }
];

const ReviewGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'top-rated'>('newest');
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  useEffect(() => {
    let filtered = [...reviews];
    
    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(review => review.category === activeFilter);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return b.rating - a.rating;
      }
    });
    
    setFilteredReviews(filtered);
  }, [activeFilter, sortBy]);

  return (
    <div>
      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'toddlers', label: 'Toddlers' },
            { id: 'ages-4-7', label: 'Ages 4–7' },
            { id: 'ages-8-10', label: 'Ages 8–10' },
            { id: 'parents', label: 'Parents' }
          ].map(filter => (
            <motion.button
              key={filter.id}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-50 text-primary-900 hover:bg-primary-100'
              }`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Sort Toggle */}
        <motion.button
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
          onClick={() => setSortBy(sortBy === 'newest' ? 'top-rated' : 'newest')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpDown className="w-4 h-4" />
          <span>{sortBy === 'newest' ? 'Newest First' : 'Top Rated'}</span>
        </motion.button>
      </div>

      {/* Reviews Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredReviews.map(review => (
            <motion.div
              key={review.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 relative overflow-hidden"
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
                {review.tag}
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6">
                "{review.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-primary-900">{review.name}</div>
                  <div className="text-sm text-gray-600">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              {/* Sparkle effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-400 rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [1, 1.2, 1],
                      x: Math.random() * 40 - 20,
                      y: Math.random() * 40 - 20,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${20 + i * 20}%`,
                      top: '50%',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 text-lg">
            No reviews found for this category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ReviewGrid;