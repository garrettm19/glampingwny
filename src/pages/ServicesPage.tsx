import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ui/ServiceCard';
import { 
  Tent, 
  TreePine, 
  Sparkles, 
  MapPin, 
  Check, 
  ArrowRight, 
  Star,
  Users,
  Clock,
  Shield,
  Heart,
  PartyPopper,
  Crown,
  Cake,
  Gift,
  Moon as Balloon,
  Camera,
  Music,
  Wine,
  Coffee,
  Calendar,
  Upload,
  Image as ImageIcon,
  Palette
} from 'lucide-react';

const adultServices = [
  {
    title: "Romantic Date Night",
    description: "Intimate glamping experience perfect for couples looking to reconnect under the stars.",
    price: "From $450",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Private romantic setup",
      "Candlelit ambiance",
      "Wine and cheese pairings available",
      "Stargazing experience",
      "Complete privacy",
      "Professional setup & cleanup"
    ],
    category: "Romantic Experience",
    popular: true
  },
  {
    title: "Anniversary Celebration",
    description: "Celebrate your special milestone with an unforgettable glamping experience designed for couples.",
    price: "From $425",
    image: "https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Elegant anniversary setup",
      "Personalized decorations",
      "Memory lane photo displays",
      "Champagne service available",
      "Romantic lighting",
      "Custom anniversary themes"
    ],
    category: "Celebration Experience",
    popular: true
  },
  {
    title: "Adult Spa Retreat",
    description: "Luxury spa experience designed for adults seeking relaxation and rejuvenation.",
    price: "From $375",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Professional spa treatments",
      "Adult-focused relaxation",
      "Wine and refreshments",
      "Peaceful ambiance",
      "Couples or group options",
      "Luxury amenities included"
    ],
    category: "Wellness Experience"
  },
  {
    title: "Corporate Retreat",
    description: "Unique team-building experience that combines outdoor adventure with professional networking.",
    price: "From $650",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Team building activities",
      "Professional presentation setup",
      "Catering options available",
      "WiFi and power access",
      "Accommodates 8-20 people",
      "Customizable themes"
    ],
    category: "Corporate Experience"
  }
];

const kidsServices = [
  {
    title: "Princess Party Glamping",
    description: "Royal treatment with magical princess themes, tiaras, and fairy tale decorations.",
    price: "From $275",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Princess themed decorations",
      "Tiaras and dress-up accessories",
      "Fairy tale ambiance",
      "Photo booth props",
      "Age-appropriate activities",
      "Safe, kid-friendly setup"
    ],
    category: "Princess Experience",
    popular: true
  },
  {
    title: "Superhero Adventure Camp",
    description: "Action-packed glamping experience for little heroes and heroines.",
    price: "From $295",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Superhero themed setup",
      "Cape and mask accessories",
      "Adventure activities",
      "Hero training course",
      "Comic book decorations",
      "Action-packed fun"
    ],
    category: "Adventure Experience"
  },
  {
    title: "Kids Spa Party",
    description: "Relaxing spa experience designed specifically for children and tweens.",
    price: "From $325",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Kid-safe spa treatments",
      "Nail art and face masks",
      "Relaxation activities",
      "Healthy snacks included",
      "Age-appropriate pampering",
      "Fun spa accessories"
    ],
    category: "Spa Experience",
    popular: true
  },
  {
    title: "Gaming Night Setup",
    description: "Ultimate gaming experience with multiple consoles and comfortable gaming stations.",
    price: "From $350",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Multiple gaming consoles",
      "Comfortable gaming chairs",
      "Large screen displays",
      "Gaming snacks included",
      "Tournament setup available",
      "All ages gaming options"
    ],
    category: "Gaming Experience"
  }
];

const kidsThemes = [
  { name: "Princess Party", icon: Crown, color: "from-pink-400 to-purple-400", popular: true },
  { name: "Unicorn Dreams", icon: Sparkles, color: "from-purple-400 to-pink-400", popular: true },
  { name: "Superhero Adventure", icon: Star, color: "from-blue-400 to-red-400" },
  { name: "Spa Party", icon: Heart, color: "from-lavender-400 to-pink-400", popular: true },
  { name: "Video Game Night", icon: Music, color: "from-green-400 to-blue-400" },
  { name: "Taylor Swift Swifties", icon: Music, color: "from-purple-400 to-gold-400", popular: true }
];

const adultThemes = [
  { name: "Romantic Evening", icon: Heart, color: "from-red-400 to-pink-400", popular: true },
  { name: "Wine & Dine", icon: Wine, color: "from-purple-400 to-red-400", popular: true },
  { name: "Wellness Retreat", icon: Sparkles, color: "from-green-400 to-blue-400" },
  { name: "Corporate Event", icon: Coffee, color: "from-blue-400 to-gray-400" },
  { name: "Anniversary", icon: Calendar, color: "from-gold-400 to-red-400", popular: true },
  { name: "Girls Night Out", icon: Star, color: "from-pink-400 to-purple-400" }
];

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'adults' | 'kids'>('adults');

  return (
    <>
      <Helmet>
        <title>Luxury Glamping Services | Adult & Kids Experiences | Glamping WNY</title>
        <meta name="description" content="Discover our premium glamping services in Western New York. Separate experiences for adults and kids - romantic dates, corporate retreats, princess parties, and more!" />
      </Helmet>

      {/* Hero Section - Beautiful Lilac Night Sky */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* SUPER SPARKLY NIGHT SKY BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-lilac-night-sky"></div>
          
          <div className="absolute inset-0 opacity-90">
            {[...Array(120)].map((_, i) => {
              const size = Math.random() > 0.8 ? '3px' : Math.random() > 0.6 ? '2px' : '1px';
              const animationType = Math.random() > 0.7 ? 'animate-twinkle-fast' : 
                                   Math.random() > 0.4 ? 'animate-twinkle' : 'animate-twinkle-slow';
              
              return (
                <motion.div
                  key={i}
                  className={`absolute bg-white rounded-full ${animationType}`}
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>

          <div className="absolute inset-0 opacity-60">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: '4px',
                  height: '1px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  filter: 'blur(1px)',
                  background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                }}
                animate={{
                  x: [0, 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Our Luxury
              <span className="block bg-gradient-to-r from-lavender-300 via-lavender-200 to-white bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Tailored experiences for every age and occasion - from romantic getaways to magical kids' parties
            </p>
            
            {/* Service Area Highlight */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Serving Buffalo Metro • FREE delivery within 20 miles</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="py-6 bg-lavender-50 border-b border-lavender-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-lavender-600" />
              <span className="font-semibold text-lavender-900">Proudly Serving the Buffalo Metro Area</span>
            </div>
            <p className="text-lavender-700">
              <strong>FREE delivery within 20 miles of Hamburg, NY</strong> • 
              Extended delivery: 21-31 miles ($50) • 32-42 miles ($100)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-full p-2 flex">
              <button
                onClick={() => setActiveTab('adults')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'adults'
                    ? 'bg-lavender-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Wine className="w-5 h-5" />
                Adult Experiences
              </button>
              <button
                onClick={() => setActiveTab('kids')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'kids'
                    ? 'bg-lavender-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Cake className="w-5 h-5" />
                Kids Experiences
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'adults' && (
          <motion.div
            key="adults"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Adult Services Section */}
            <section className="section bg-white">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-block p-4 bg-gradient-to-r from-red-100 to-purple-100 rounded-full mb-6">
                    <Wine className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    Adult Experiences 🍷
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                    Sophisticated glamping experiences designed for adults seeking romance, relaxation, and memorable celebrations.
                  </p>
                </motion.div>

                {/* Image Upload Placeholders for Adult Services */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    📸 Add Your Adult Experience Photos
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Romantic Setups', 'Spa Experiences', 'Corporate Events', 'Anniversary Celebrations'].map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-lavender-400 hover:bg-lavender-50 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lavender-200 transition-colors">
                          <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-lavender-600" />
                        </div>
                        <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
                        <p className="text-sm text-gray-500 mb-3">Upload photos of your {category.toLowerCase()}</p>
                        <div className="flex items-center justify-center gap-2 text-lavender-600 font-medium">
                          <Upload className="w-4 h-4" />
                          <span className="text-sm">Add Photos</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Adult Services Grid - Now shows all 4 services including Anniversary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {adultServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard {...service} />
                    </motion.div>
                  ))}
                </div>

                {/* Adult Themes */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Popular Adult Themes 🌹
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {adultThemes.map((theme, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`bg-gradient-to-br ${theme.color} p-6 rounded-2xl text-white text-center relative overflow-hidden`}>
                          {theme.popular && (
                            <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          )}
                          
                          <theme.icon className="w-8 h-8 mx-auto mb-3" />
                          <h4 className="font-bold text-sm">{theme.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Adult CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-red-500 via-purple-500 to-lavender-500 rounded-3xl p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">
                      Ready for Your Adult Getaway? 🍷
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                      Create sophisticated memories with our luxury adult experiences!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/book-now"
                        className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Wine className="w-5 h-5" />
                          Book Adult Experience
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'kids' && (
          <motion.div
            key="kids"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Kids Services Section */}
            <section className="section bg-gradient-to-br from-pink-50 via-purple-50 to-lavender-50 relative overflow-hidden">
              {/* Fun background pattern */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  >
                    <div className={`w-4 h-4 ${
                      i % 4 === 0 ? 'text-pink-300' :
                      i % 4 === 1 ? 'text-purple-300' :
                      i % 4 === 2 ? 'text-lavender-300' : 'text-yellow-300'
                    }`}>
                      {i % 4 === 0 ? '⭐' : i % 4 === 1 ? '🎈' : i % 4 === 2 ? '🎉' : '✨'}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="container-custom relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-block p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                    <Cake className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    Kids Experiences 🎉
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                    Magical glamping experiences designed specifically for children - safe, fun, and absolutely unforgettable!
                  </p>
                  
                  {/* Kids Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">150+</div>
                      <div className="text-sm text-gray-600">Kids' Parties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600">25+</div>
                      <div className="text-sm text-gray-600">Kid Themes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-lavender-600">Ages 5+</div>
                      <div className="text-sm text-gray-600">Perfect Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">100%</div>
                      <div className="text-sm text-gray-600">Kid-Safe</div>
                    </div>
                  </div>
                </motion.div>

                {/* Image Upload Placeholders for Kids Services */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    📸 Add Your Kids' Party Photos
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Princess Parties', 'Superhero Adventures', 'Spa Parties', 'Gaming Setups'].map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-dashed border-pink-300 rounded-xl p-6 text-center hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                          <ImageIcon className="w-8 h-8 text-pink-400 group-hover:text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
                        <p className="text-sm text-gray-500 mb-3">Upload photos of your {category.toLowerCase()}</p>
                        <div className="flex items-center justify-center gap-2 text-purple-600 font-medium">
                          <Upload className="w-4 h-4" />
                          <span className="text-sm">Add Photos</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Kids Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {kidsServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <ServiceCard {...service} />
                    </motion.div>
                  ))}
                </div>

                {/* Kids Themes */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Most Popular Kids' Themes 👑
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {kidsThemes.map((theme, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`bg-gradient-to-br ${theme.color} p-6 rounded-2xl text-white text-center relative overflow-hidden`}>
                          {theme.popular && (
                            <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          )}
                          
                          <theme.icon className="w-8 h-8 mx-auto mb-3" />
                          <h4 className="font-bold text-sm">{theme.name}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Kids CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-lavender-500 rounded-3xl p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">
                      Ready to Plan the Ultimate Kids' Party? 🎈
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                      Let us create a magical experience your child will never forget!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/book-now"
                        className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Gift className="w-5 h-5" />
                          Book Kids' Party
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-lavender-50 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Why Families Choose Glamping WNY
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're not just about tents - we're about creating complete experiences 
                that bring families together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "All Ages Welcome", description: "Perfect for kids, teens, and adults" },
                { icon: Clock, title: "Full Service", description: "Complete setup and cleanup included" },
                { icon: Shield, title: "Safe & Clean", description: "Professionally sanitized equipment" },
                { icon: Star, title: "5-Star Rated", description: "200+ happy families served" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-lavender-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-lavender-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section lilac-night-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-night-sky opacity-70"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Create Your Perfect Experience?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Whether it's a romantic getaway or a magical kids' party, we'll make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-now"
                className="btn btn-secondary text-lg px-8 py-4 group"
              >
                <span>Book Your Experience</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-ghost text-lg px-8 py-4"
              >
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;