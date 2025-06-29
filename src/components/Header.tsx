import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experiences', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-soft py-3 lg:py-4' : 'bg-transparent py-4 lg:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 lg:space-x-4 group">
            <motion.div 
              className="w-16 h-16 lg:w-20 lg:h-20 transition-all duration-300 group-hover:scale-105"
              whileHover={{ rotate: 3 }}
            >
              <img 
                src="/src/assets/ChatGPT Image Jun 28, 2025, 12_31_53 PM.png" 
                alt="Glamping WNY Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className={`text-xl lg:text-2xl font-serif font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>Glamping WNY</span>
              <div className={`text-xs lg:text-sm font-medium transition-colors ${
                isScrolled ? 'text-lavender-600' : 'text-white/80'
              }`}>LUXURY EXPERIENCES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors text-base xl:text-lg ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-lavender-600' 
                    : 'text-white hover:text-lavender-300'
                } ${location.pathname === link.path ? 'text-lavender-600' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <div className={`flex items-center text-sm lg:text-base ${
              isScrolled ? 'text-gray-600' : 'text-white/90'
            }`}>
              <div className="hidden lg:flex items-center mr-4">
                <Star className={`h-4 w-4 ${isScrolled ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-300 fill-yellow-300'} mr-1`} />
                <span className="font-medium">200+ Families</span>
              </div>
              <a 
                href="tel:+17162007692" 
                className={`flex items-center hover:${isScrolled ? 'text-lavender-600' : 'text-white'} transition-colors font-medium`}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden lg:inline">(716) 200-7692</span>
                <span className="lg:hidden">Call</span>
              </a>
            </div>
            <Link
              to="/contact"
              className={`${
                isScrolled
                  ? 'bg-gradient-to-r from-lavender-500 to-blush-400 text-white hover:from-lavender-600 hover:to-blush-500'
                  : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25'
              } px-6 lg:px-8 py-3 rounded-full transition-all duration-300 font-semibold text-sm lg:text-base shadow-soft hover:shadow-warm`}
            >
              <span className="hidden lg:inline">Book Experience</span>
              <span className="lg:hidden">Book</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 mt-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-2xl mx-2 shadow-soft"
          >
            <div className="space-y-2 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 font-medium text-lg ${
                    location.pathname === link.path 
                      ? 'text-lavender-600' 
                      : 'text-gray-700 hover:text-lavender-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-2" />
                  <span>200+ Happy Families</span>
                </div>
                <a href="tel:+17162007692" className="block py-2 text-gray-600 font-medium">
                  📞 (716) 200-7692
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-lavender-500 to-blush-400 text-white px-6 py-4 rounded-full text-center font-semibold shadow-soft"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Your Experience
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;