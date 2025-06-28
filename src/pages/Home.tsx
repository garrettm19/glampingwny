import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Users, Shield, Clock, ChevronDown, Award, MapPin, Heart, Quote, Check, Tent, Home as HomeIcon, Sparkles, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const packages = [
    {
      title: 'Indoor Glamping',
      subtitle: 'Teepee Sleepovers',
      description: 'Weather-proof teepee tents set up in your home',
      price: 'From $225',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      icon: HomeIcon,
      features: ['Perfect for any weather', 'Memory foam beds', 'Themed decorations', 'Ages 5+ welcome'],
      popular: true,
      bestFor: 'Birthday parties, sleepovers'
    },
    {
      title: 'Outdoor Bell Tents',
      subtitle: 'Authentic Glamping',
      description: 'Spacious weatherproof bell tents under the stars',
      price: 'From $500',
      image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop',
      icon: Tent,
      features: ['16ft & 23ft options', 'In-tent movie theater', 'Stargazing experience', 'Memory foam beds'],
      bestFor: 'Special occasions, romantic getaways'
    },
    {
      title: 'Spa Parties',
      subtitle: 'Relaxation & Pampering',
      description: 'Complete spa experience with all essentials',
      price: 'From $325',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      icon: Sparkles,
      features: ['Kid-safe treatments', 'All spa essentials', 'Relaxing ambiance', 'Save $75 as add-on'],
      bestFor: 'Birthday parties, girls nights'
    }
  ];

  const features = [
    { icon: Users, title: '200+ Happy Families', description: 'Trusted by families across Western NY since 2021' },
    { icon: Shield, title: 'Safe & Clean', description: 'Hypoallergenic cleaning & safety-checked equipment' },
    { icon: Clock, title: 'Full Service', description: 'Complete setup by 4 PM, pickup after 10 AM' },
    { icon: Star, title: '25+ Themes', description: 'From Princess parties to Buffalo Bills themes' }
  ];

  const testimonials = [
    {
      quote: "Absolutely amazing... nailed the Barbie theme!",
      author: "Rachel C.",
      event: "Bachelorette Party"
    },
    {
      quote: "Two different themes for my nephews – very clean, kids loved it!",
      author: "Rebecca B.",
      event: "Birthday Sleepover"
    },
    {
      quote: "Everything was perfect and detailed!",
      author: "Jamie D.",
      event: "Family Celebration"
    }
  ];

  const popularThemes = [
    'Barbie\'s World', 'Taylor\'s Swifties', 'Buffalo Bills', 'Mermaid Magic', 
    'Unicorn Dream', 'Princess Party', 'Pokémon', 'Harry Potter'
  ];

  return (
    <div>
      {/* Hero Section - Fixed overlap and professional design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        {/* Background with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1920&h=1080&fit=crop)',
              }}
            />
            {/* Professional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          {/* Premium Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-8 py-3 sm:py-4 mb-8 sm:mb-12 border border-white/30 shadow-lg"
          >
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-bold">200+ Happy Families</div>
              <div className="text-xs sm:text-sm opacity-90">Trusted Since 2021</div>
            </div>
          </motion.div>

          {/* Main Headline - Professional Typography */}
          <div className="mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-2 sm:space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="block">Luxury</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Glamping
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mt-2 sm:mt-4 opacity-90">
                  Delivered to Your Doorstep
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Professional Subheadline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-10 sm:mb-16"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 max-w-5xl mx-auto leading-relaxed font-light">
              Creating unforgettable experiences for birthdays, celebrations, and magical family moments throughout Western New York
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base opacity-90">
              <div className="flex items-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Ages 5+ Welcome</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Full Service Setup</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Western NY</span>
              </div>
            </div>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-24"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center text-base sm:text-lg border border-white/20"
              >
                Choose Your Package
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="tel:+17162007692"
                className="group bg-white/15 backdrop-blur-md text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:bg-white/25 transition-all duration-300 border-2 border-white/30 hover:border-white/50 inline-flex items-center justify-center text-base sm:text-lg shadow-xl"
              >
                <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Call (716) 200-7692
              </a>
            </motion.div>
          </motion.div>

          {/* Professional Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Award, number: "200+", text: "Happy Families", subtext: "Since 2021" },
              { icon: Star, number: "25+", text: "Themes Available", subtext: "Custom Options" },
              { icon: Shield, number: "100%", text: "Safe & Clean", subtext: "Guaranteed" },
              { icon: MapPin, number: "FREE", text: "Delivery", subtext: "Within 20 Miles" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-lg">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{item.number}</div>
                <div className="text-sm sm:text-base font-semibold mb-1">{item.text}</div>
                <div className="text-xs sm:text-sm opacity-80">{item.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Professional Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm sm:text-base mb-3 opacity-80 group-hover:opacity-100 transition-opacity">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Package Selection Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
                Choose Your Perfect Experience
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10">
                Three amazing packages to choose from - each designed to create magical memories for your celebration
              </p>
              
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-blue-800 font-semibold text-sm sm:text-base border border-blue-200">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                All packages include setup, cleanup & themed decorations
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 sm:mb-20">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 relative h-full flex flex-col ${
                  pkg.popular ? 'ring-4 ring-blue-500 lg:scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-6 right-6 z-10 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center mb-3">
                      <pkg.icon className="w-7 h-7 mr-3" />
                      <span className="text-xl font-bold">{pkg.title}</span>
                    </div>
                    <p className="text-sm opacity-90">{pkg.subtitle}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 text-white text-right">
                    <div className="text-3xl font-bold">{pkg.price}</div>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">{pkg.description}</p>
                    <div className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block">
                      Best for: {pkg.bestFor}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-4 mt-auto">
                    <Link
                      to="/services"
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center group text-base shadow-lg hover:shadow-xl"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center text-base"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Popular Themes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Popular Themes Available</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
              {popularThemes.map((theme, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-50 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  {theme}
                </motion.div>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-lg group"
            >
              View All 25+ Themes
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why Families Choose Glamping WNY
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Founded by Holly in 2021, we're committed to creating magical experiences 
              that exceed your expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              What Families Say
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              Real reviews from real families who've experienced the magic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 relative h-full flex flex-col"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />
                
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-auto border-t pt-6">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-blue-600 font-semibold">{testimonial.event}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center bg-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:bg-blue-700 transition-colors text-base sm:text-lg shadow-xl hover:shadow-2xl"
            >
              <Heart className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              See More Happy Families
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Ready to Create Magical Memories?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 leading-relaxed opacity-90">
              Join the 200+ families who have created unforgettable experiences with Holly and Joe. 
              Your perfect glamping adventure awaits in Western New York.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center text-base sm:text-lg"
                >
                  Choose Your Package
                  <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+17162007692"
                  className="border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center text-base sm:text-lg"
                >
                  Call (716) 200-7692
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;