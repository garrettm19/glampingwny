import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
  Balloon,
  Camera,
  Music
} from 'lucide-react';

const services = [
  {
    title: "Indoor Glamping Experience",
    description: "Cozy teepee sleepovers perfect for any weather, featuring themed decorations and comfortable bedding.",
    price: "From $225",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Weather-proof indoor setup",
      "Themed decorations included",
      "Comfortable memory foam bedding",
      "Complete setup and cleanup",
      "Perfect for year-round celebrations",
      "Accommodates 2-8 guests"
    ],
    category: "Indoor Experience"
  },
  {
    title: "Outdoor Bell Tent Adventure",
    description: "Authentic glamping under the stars with luxury bell tents and outdoor amenities.",
    price: "From $500",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Authentic 16ft or 23ft bell tents",
      "Weather-resistant canvas",
      "Outdoor lighting and ambiance",
      "Stargazing experience",
      "Professional outdoor setup",
      "Accommodates 6-12 guests"
    ],
    popular: true,
    category: "Outdoor Adventure"
  },
  {
    title: "Luxury Spa Experience",
    description: "Relaxing spa parties with professional treatments and pampering activities for all ages.",
    price: "From $325",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Professional spa setup",
      "Age-appropriate treatments",
      "Relaxing ambiance",
      "Spa-themed decorations",
      "Pampering activities",
      "Perfect for special occasions"
    ],
    category: "Spa Experience"
  }
];

const kidsThemes = [
  {
    name: "Princess Party",
    icon: Crown,
    description: "Royal treatment with tiaras, tutus, and magical decorations",
    color: "from-pink-400 to-purple-400",
    popular: true
  },
  {
    name: "Unicorn Dreams",
    icon: Sparkles,
    description: "Magical unicorn theme with rainbows and sparkles",
    color: "from-purple-400 to-pink-400",
    popular: true
  },
  {
    name: "Superhero Adventure",
    icon: Star,
    description: "Action-packed theme for little heroes and heroines",
    color: "from-blue-400 to-red-400"
  },
  {
    name: "Spa Party",
    icon: Heart,
    description: "Relaxing spa treatments perfect for tweens and teens",
    color: "from-lavender-400 to-pink-400",
    popular: true
  },
  {
    name: "Video Game Night",
    icon: Music,
    description: "Gaming setup with favorite characters and themes",
    color: "from-green-400 to-blue-400"
  },
  {
    name: "Taylor Swift Swifties",
    icon: Music,
    description: "Perfect for young Swifties with music and friendship vibes",
    color: "from-purple-400 to-gold-400",
    popular: true
  }
];

const kidsFeatures = [
  {
    icon: Shield,
    title: "100% Kid-Safe",
    description: "All materials and setups designed with children's safety in mind",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: PartyPopper,
    title: "Age-Appropriate Fun",
    description: "Themes and activities perfectly suited for different age groups",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Camera,
    title: "Instagram-Worthy",
    description: "Picture-perfect setups that create amazing photo opportunities",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Clock,
    title: "Stress-Free for Parents",
    description: "We handle everything so parents can relax and enjoy the celebration",
    color: "bg-blue-100 text-blue-600"
  }
];

const addOns = [
  { name: "Movie Night Setup", price: "$35", description: "Projector and screen for outdoor movies" },
  { name: "S'mores Station", price: "$65", description: "Complete s'mores setup with treats" },
  { name: "Balloon Decorations", price: "$25", description: "Beautiful balloon arrangements" },
  { name: "Extra Bedding", price: "$25", description: "Additional comfortable sleeping space" },
  { name: "Spa Add-on", price: "$250", description: "Complete spa experience package" },
  { name: "Photography Package", price: "$150", description: "Professional event photography" }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Glamping Services | Indoor & Outdoor Experiences | Glamping WNY</title>
        <meta name="description" content="Discover our premium glamping services in Western New York. Indoor teepee sleepovers, outdoor bell tent adventures, and luxury spa experiences. Professional setup included." />
      </Helmet>

      {/* Hero Section - Beautiful Lilac Night Sky */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* SUPER SPARKLY NIGHT SKY BACKGROUND */}
        <div className="absolute inset-0 z-0">
          {/* Main night sky background with realistic lilac colors and TONS of stars */}
          <div className="w-full h-full bg-lilac-night-sky"></div>
          
          {/* MASSIVE SPARKLY STAR OVERLAY - 120+ animated twinkling stars! */}
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

          {/* Extra sparkly shooting stars */}
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

          {/* Magical sparkle dust effect */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={`dust-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: '1px',
                  height: '1px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  y: [0, -20, -40],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 6,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Subtle atmospheric glow */}
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
              Choose from our carefully crafted glamping experiences, 
              each designed to create unforgettable memories
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

      {/* KIDS SECTION - NEW! */}
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
              Perfect for Kids' Parties! 🎉
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We specialize in creating magical experiences that kids absolutely love! 
              From princess parties to superhero adventures, we make every child feel special.
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

          {/* Popular Kids Themes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                    <h4 className="font-bold text-sm mb-2">{theme.name}</h4>
                    <p className="text-xs opacity-90 leading-tight">{theme.description}</p>
                    
                    {/* Sparkle effect on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Kids Love Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Kids (and Parents!) Love Our Parties 💕
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We understand what makes kids' parties special and what makes parents' lives easier!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {kidsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Parent Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "My daughter's unicorn party was absolutely magical! The kids were mesmerized by the setup, 
                and I didn't have to worry about anything. Best birthday party ever!"
              </blockquote>
              <cite className="text-purple-600 font-semibold">- Casey S., Mom of Birthday Girl</cite>
            </motion.div>
          </motion.div>

          {/* CTA for Kids Parties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
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
                <Link
                  to="/gallery"
                  className="border-2 border-white text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  See Kids' Parties
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Signature Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each experience is carefully designed and professionally executed 
              to create magical memories that last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
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

          {/* Why Choose Us */}
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

      {/* Add-Ons Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Enhance Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add these special touches to make your glamping experience even more magical
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-large transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-lavender-600 font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="flex items-center text-lavender-600 font-medium">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Available as add-on</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Contact us today to check availability and start planning your magical glamping adventure.
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