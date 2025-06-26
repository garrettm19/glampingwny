import React, { useState } from 'react';
import { Camera, Star, Heart, Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'indoor', name: 'Indoor Glamping' },
    { id: 'outdoor', name: 'Bell Tents' },
    { id: 'spa', name: 'Spa Parties' },
    { id: 'themes', name: 'Themed Setups' }
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop',
      alt: 'Outdoor bell tent glamping setup with fairy lights',
      category: 'outdoor',
      title: 'Bell Tent Magic'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      alt: 'Indoor teepee sleepover with cozy bedding',
      category: 'indoor',
      title: 'Cozy Indoor Teepees'
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      alt: 'Spa party setup with relaxing ambiance',
      category: 'spa',
      title: 'Relaxing Spa Experience'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      alt: 'Princess themed glamping setup',
      category: 'themes',
      title: 'Princess Party Theme'
    },
    {
      src: 'https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?w=400&h=300&fit=crop',
      alt: 'Romantic anniversary glamping setup',
      category: 'outdoor',
      title: 'Romantic Anniversary'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Boho themed indoor glamping',
      category: 'themes',
      title: 'Boho Blush Theme'
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      alt: 'Birthday party glamping setup',
      category: 'indoor',
      title: 'Birthday Celebration'
    },
    {
      src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      alt: 'Outdoor movie night setup',
      category: 'outdoor',
      title: 'Movie Under the Stars'
    },
    {
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
      alt: 'Taylor Swift themed party setup',
      category: 'themes',
      title: 'Swifties Theme'
    }
  ];

  const testimonials = [
    {
      quote: "Absolutely amazing... nailed the Barbie theme!",
      author: "Rachel C.",
      rating: 5
    },
    {
      quote: "Two different themes for my nephews – very clean, kids loved it!",
      author: "Rebecca B.",
      rating: 5
    },
    {
      quote: "Everything was perfect and detailed!",
      author: "Jamie D.",
      rating: 5
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Camera className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our beautiful glamping setups and the magical moments we've created 
            for over 200 happy families across Western New York.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">Click to view larger</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Families Are Saying</h2>
            <p className="text-gray-600">Real reviews from real families who've experienced the magic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Tour Placeholder */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Tour Coming Soon!</h3>
            <p className="text-gray-700 mb-6">
              Get an immersive 360° view of our glamping setups. See every detail before your special day!
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Notify Me When Available
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to Create Your Own Memories?</h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the 200+ families who have experienced the magic of Glamping WNY. 
              Contact Holly and Joe today to start planning your perfect celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Your Experience
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;