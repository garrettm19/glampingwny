import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield, Clock, ChevronDown, Play, Award, MapPin, Heart, Quote, Check, Tent, Home as HomeIcon, Sparkles, Calendar, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          
          {/* Animated particles/stars */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Trust Badge */}
          <div 
            className={`inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">Trusted by 200+ Families Since 2021</span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block">Luxury Sleepovers &</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bell Tent Glamping
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-4">
              Straight to Your Doorstep
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Creating unforgettable glamping experiences for birthdays, celebrations, and magical family moments 
            throughout Western New York
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Choose Your Package
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+17162007692"
              className="group border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (716) 200-7692
            </a>
          </div>

          {/* Trust Indicators - Symmetrical Grid */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { icon: MapPin, text: "Western NY", subtext: "Free Delivery 20mi" },
              { icon: Award, text: "200+ Families", subtext: "Since 2021" },
              { icon: Shield, text: "Ages 5+", subtext: "Safe & Clean" },
              { icon: Clock, text: "24hr Response", subtext: "Quick Booking" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold">{item.text}</div>
                <div className="text-xs opacity-80">{item.subtext}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Package Selection Section - Symmetrical Layout */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Three amazing packages to choose from - each designed to create magical memories for your celebration
            </p>
            
            {/* Quick Comparison */}
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 text-blue-800 font-medium">
              <Check className="w-5 h-5 mr-2" />
              All packages include setup, cleanup & themed decorations
            </div>
          </div>

          {/* Symmetrical 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative h-full flex flex-col ${
                  pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 mt-auto">
                    <Link
                      to="/services"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center group"
                    >
                      View Details & Pricing
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Themes Preview */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Themes Available</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {popularThemes.map((theme, index) => (
                <div key={index} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {theme}
                </div>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All 25+ Themes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Symmetrical 4-Column Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Families Choose Glamping WNY
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founded by Holly in 2021, we're committed to creating magical experiences 
              that exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Symmetrical 3-Column Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Families Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real families who've experienced the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic text-lg flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-blue-600">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Heart className="mr-2 h-5 w-5" />
              See More Happy Families
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Magical Memories?
          </h2>
          <p className="text-xl mb-10 leading-relaxed">
            Join the 200+ families who have created unforgettable experiences with Holly and Joe. 
            Your perfect glamping adventure awaits in Western New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Choose Your Package
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+17162007692"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
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