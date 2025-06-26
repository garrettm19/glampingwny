import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Users, Shield, Clock, ChevronDown, Play, Award, MapPin, Heart, Quote, Check, Tent, Home as HomeIcon, Sparkles, Calendar, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ParallaxSection from '../components/ParallaxSection';
import RevealAnimation from '../components/RevealAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import FloatingElements from '../components/FloatingElements';

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
    { icon: Users, title: '200+ Happy Families', description: 'Trusted by families across Western NY since 2021', count: 200 },
    { icon: Shield, title: 'Safe & Clean', description: 'Hypoallergenic cleaning & safety-checked equipment', count: 100 },
    { icon: Clock, title: 'Full Service', description: 'Complete setup by 4 PM, pickup after 10 AM', count: 24 },
    { icon: Star, title: '25+ Themes', description: 'From Princess parties to Buffalo Bills themes', count: 25 }
  ];

  const testimonials = [
    {
      quote: "Absolutely amazing... nailed the Barbie theme!",
      author: "Rachel C.",
      rating: 5,
      event: "Bachelorette Party"
    },
    {
      quote: "Two different themes for my nephews – very clean, kids loved it!",
      author: "Rebecca B.",
      rating: 5,
      event: "Birthday Sleepover"
    },
    {
      quote: "Everything was perfect and detailed!",
      author: "Jamie D.",
      rating: 5,
      event: "Family Celebration"
    }
  ];

  const popularThemes = [
    'Barbie\'s World', 'Taylor\'s Swifties', 'Buffalo Bills', 'Mermaid Magic', 
    'Unicorn Dream', 'Princess Party', 'Pokémon', 'Harry Potter'
  ];

  return (
    <div>
      {/* Enhanced Hero Section with Fixed Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed Background with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
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

        <FloatingElements count={30} />
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Trust Badge with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">Trusted by 200+ Families Since 2021</span>
          </motion.div>

          {/* Main Headline with Staggered Animation */}
          <div className="mb-6">
            {['Luxury Sleepovers &', 'Bell Tent Glamping', 'Straight to Your Doorstep'].map((line, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`${index === 0 ? 'text-5xl md:text-7xl lg:text-8xl font-bold' : 
                           index === 1 ? 'text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' :
                           'text-3xl md:text-4xl lg:text-5xl font-light mt-4'} block leading-tight`}
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
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Creating unforgettable glamping experiences for birthdays, celebrations, and magical family moments 
            throughout Western New York
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Link to="/services" className="flex items-center">
                Choose Your Package
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            
            <MagneticButton
              className="group border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center"
            >
              <a href="tel:+17162007692" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (716) 200-7692
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust Indicators with Staggered Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: MapPin, text: "Western NY", subtext: "Free Delivery 20mi" },
              { icon: Award, text: "200+ Families", subtext: "Since 2021" },
              { icon: Shield, text: "Ages 5+", subtext: "Safe & Clean" },
              { icon: Clock, text: "24hr Response", subtext: "Quick Booking" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold">{item.text}</div>
                <div className="text-xs opacity-80">{item.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Package Selection Section with Reveal Animations */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Perfect Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Three amazing packages to choose from - each designed to create magical memories for your celebration
              </p>
              
              <motion.div 
                className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 text-blue-800 font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Check className="w-5 h-5 mr-2" />
                All packages include setup, cleanup & themed decorations
              </motion.div>
            </div>
          </RevealAnimation>

          {/* Symmetrical 3-Column Grid with Staggered Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <RevealAnimation key={index} delay={index * 0.2} direction="up">
                <motion.div 
                  className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col ${
                    pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {pkg.popular && (
                    <motion.div 
                      className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    >
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </motion.div>
                  )}

                  <div className="relative overflow-hidden">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-2">
                        <pkg.icon className="w-6 h-6 mr-2" />
                        <span className="text-lg font-bold">{pkg.title}</span>
                      </div>
                      <p className="text-sm opacity-90">{pkg.subtitle}</p>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white text-right">
                      <div className="text-2xl font-bold">{pkg.price}</div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <p className="text-gray-600 mb-3">{pkg.description}</p>
                      <div className="text-sm text-blue-600 font-medium">Best for: {pkg.bestFor}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-6 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center text-sm text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                        >
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3 mt-auto">
                      <MagneticButton className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center group">
                        <Link to="/services" className="flex items-center">
                          View Details & Pricing
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </MagneticButton>
                      <MagneticButton className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                        <Link to="/contact">Book This Package</Link>
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>

          {/* Popular Themes Preview */}
          <RevealAnimation delay={0.6}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Themes Available</h3>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {popularThemes.map((theme, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {theme}
                  </motion.div>
                ))}
              </div>
              <MagneticButton className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                <Link to="/services" className="flex items-center">
                  View All 25+ Themes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Features Section with Animated Counters */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop"
        speed={0.3}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Families Choose Glamping WNY
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Founded by Holly in 2021, we're committed to creating magical experiences 
                that exceed your expectations
              </p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <RevealAnimation key={index} delay={index * 0.2} direction="up">
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <AnimatedCounter end={feature.count} suffix={feature.count === 200 ? '+' : feature.count === 100 ? '%' : feature.count === 24 ? 'hr' : '+'} />
                    {' '}{feature.title.replace(/\d+\+?/, '').replace(/\d+%/, '').replace(/\d+hr/, '')}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section with Enhanced Animations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Families Say
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from real families who've experienced the magic
              </p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation key={index} delay={index * 0.2} direction="up">
                <motion.div 
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic text-lg flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-auto">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-blue-600">{testimonial.event}</div>
                  </div>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.8}>
            <div className="text-center mt-12">
              <MagneticButton className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <Link to="/gallery" className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  See More Happy Families
                </Link>
              </MagneticButton>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Final CTA Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop"
        speed={0.4}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <RevealAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Magical Memories?
            </h2>
            <p className="text-xl mb-10 leading-relaxed">
              Join the 200+ families who have created unforgettable experiences with Holly and Joe. 
              Your perfect glamping adventure awaits in Western New York.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                <Link to="/services" className="flex items-center">
                  Choose Your Package
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
              <MagneticButton className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center">
                <a href="tel:+17162007692">Call (716) 200-7692</a>
              </MagneticButton>
            </div>
          </RevealAnimation>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;