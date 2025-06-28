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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 group-hover:scale-110"
              whileHover={{ rotate: 5 }}
            >
              <img 
                src="/src/assets/ChatGPT Image Jun 28, 2025, 12_31_53 PM.png" 
                alt="Glamping WNY Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
            <div>
              <span className={`text-lg sm:text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>Glamping WNY</span>
              <div className={`text-xs font-medium transition-colors hidden sm:block ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>LUXURY EXPERIENCES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors text-sm xl:text-base ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-white/80'
                } ${location.pathname === link.path ? 'text-blue-600' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <div className={`flex items-center text-xs lg:text-sm ${
              isScrolled ? 'text-gray-600' : 'text-white/90'
            }`}>
              <div className="hidden lg:flex items-center mr-3 xl:mr-4">
                <Star className={`h-3 w-3 lg:h-4 lg:w-4 ${isScrolled ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-300 fill-yellow-300'} mr-1`} />
                <span className="font-medium">200+ Families</span>
              </div>
              <a 
                href="tel:+17162007692" 
                className={`flex items-center hover:${isScrolled ? 'text-blue-600' : 'text-white'} transition-colors`}
              >
                <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                <span className="hidden lg:inline">(716) 200-7692</span>
                <span className="lg:hidden">Call</span>
              </a>
            </div>
            <Link
              to="/contact"
              className={`${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
              } px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base`}
            >
              <span className="hidden lg:inline">Book Now</span>
              <span className="lg:hidden">Book</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 sm:h-6 sm:w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-5 w-5 sm:h-6 sm:w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 mt-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg mx-2 sm:mx-0"
          >
            <div className="space-y-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 font-medium text-base ${
                    location.pathname === link.path 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span>200+ Happy Families</span>
                </div>
                <a href="tel:+17162007692" className="block py-2 text-gray-600 font-medium">
                  📞 (716) 200-7692
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg text-center font-semibold"
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