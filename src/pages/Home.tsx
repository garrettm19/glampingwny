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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </motion.div>
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-3 sm:px-4 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20"
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-xs sm:text-sm font-medium">Trusted by 200+ Families Since 2021</span>
          </motion.div>

          {/* Main Headline */}
          <div className="mb-4 sm:mb-6">
            {['Luxury Sleepovers &', 'Bell Tent Glamping', 'Straight to Your Doorstep'].map((line, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`${index === 0 ? 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold' : 
                           index === 1 ? 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' :
                           'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-2 sm:mt-4'} block leading-tight`}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-2"
          >
            Creating unforgettable glamping experiences for birthdays, celebrations, and magical family moments 
            throughout Western New York
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
          >
            <Link
              to="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-sm sm:text-base"
            >
              Choose Your Package
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:+17162007692"
              className="group border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center text-sm sm:text-base"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Call (716) 200-7692
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto px-2"
          >
            {[
              { icon: MapPin, text: "Western NY", subtext: "Free Delivery 20mi" },
              { icon: Award, text: "200+ Families", subtext: "Since 2021" },
              { icon: Shield, text: "Ages 5+", subtext: "Safe & Clean" },
              { icon: Clock, text: "24hr Response", subtext: "Quick Booking" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/20">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xs sm:text-sm font-semibold">{item.text}</div>
                <div className="text-xs opacity-80">{item.subtext}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs sm:text-sm mb-2">Discover More</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Package Selection Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Choose Your Perfect Experience
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Three amazing packages to choose from - each designed to create magical memories for your celebration
            </p>
            
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-blue-800 font-medium text-sm sm:text-base mx-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              All packages include setup, cleanup & themed decorations
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col mx-2 sm:mx-0 ${
                  pkg.popular ? 'ring-2 ring-blue-500 lg:scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-yellow-400 text-yellow-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <div className="flex items-center mb-1 sm:mb-2">
                      <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                      <span className="text-base sm:text-lg font-bold">{pkg.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm opacity-90">{pkg.subtitle}</p>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white text-right">
                    <div className="text-xl sm:text-2xl font-bold">{pkg.price}</div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <p className="text-gray-600 mb-3 text-sm sm:text-base">{pkg.description}</p>
                    <div className="text-xs sm:text-sm text-blue-600 font-medium">Best for: {pkg.bestFor}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs sm:text-sm text-gray-700">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 mt-auto">
                    <Link
                      to="/services"
                      className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center group text-sm sm:text-base"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border-2 border-blue-600 text-blue-600 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Themes */}
          <div className="text-center px-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Popular Themes Available</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {popularThemes.map((theme, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  {theme}
                </div>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
            >
              View All 25+ Themes
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Why Families Choose Glamping WNY
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Founded by Holly in 2021, we're committed to creating magical experiences 
              that exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center px-2">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              What Families Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Real reviews from real families who've experienced the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col mx-2 sm:mx-0"
              >
                <Quote className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 sm:mb-6 italic text-base sm:text-lg flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-blue-600">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              See More Happy Families
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Ready to Create Magical Memories?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed px-4">
            Join the 200+ families who have created unforgettable experiences with Holly and Joe. 
            Your perfect glamping adventure awaits in Western New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              to="/services"
              className="bg-white text-blue-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-sm sm:text-base"
            >
              Choose Your Package
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <a
              href="tel:+17162007692"
              className="border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
            >
              Call (716) 200-7692
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;