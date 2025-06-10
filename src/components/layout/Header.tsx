import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Logo from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = (linkName: string) => {
    trackEvent('Navigation', 'nav_click', linkName);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-white/20 py-3' 
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            to="/" 
            className="z-10 block"
            aria-label="Glamping WNY Home"
            onClick={() => handleNavClick('logo')}
          >
            <Logo isScrolled={isScrolled} />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center space-x-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                onClick={() => handleNavClick(link.name.toLowerCase())}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-300'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Hover background effect */}
                <motion.div
                  className={`absolute inset-0 rounded-lg ${
                    isScrolled 
                      ? 'bg-primary-50' 
                      : 'bg-white/10'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary-500 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ x: '-50%' }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          {/* Contact Info in Header */}
          <div className="flex items-center space-x-6 ml-8 pl-8 border-l border-white/20">
            <motion.a 
              href="tel:+17165551234"
              className={`flex items-center gap-2 transition-all duration-300 group ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white hover:text-primary-300'
              }`}
              onClick={() => trackEvent('Contact', 'phone_click', 'header')}
              whileHover={{ scale: 1.02 }}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(716) 555-1234</span>
            </motion.a>
            
            <div className="flex space-x-3">
              <motion.a 
                href="https://instagram.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600' 
                    : 'bg-white/10 text-white hover:bg-pink-500/20 hover:text-pink-300'
                }`}
                aria-label="Follow us on Instagram"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="https://facebook.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600' 
                    : 'bg-white/10 text-white hover:bg-blue-500/20 hover:text-blue-300'
                }`}
                aria-label="Follow us on Facebook"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.div
            className="ml-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/book-now" 
              className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onClick={() => handleNavClick('book_now')}
              aria-label="Book Now"
            >
              <span className="relative z-10">Book Your Experience</span>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden z-10 p-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile menu"
              >
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <Logo isScrolled={true} />
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Mobile Contact Info */}
                <div className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 border-b border-gray-100">
                  <div className="space-y-4">
                    <motion.a 
                      href="tel:+17165551234"
                      className="flex items-center gap-3 text-gray-800 font-medium hover:text-primary-600 transition-colors group"
                      onClick={() => trackEvent('Contact', 'phone_click', 'mobile_menu')}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <Phone className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-sm text-gray-600">(716) 555-1234</div>
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      href="mailto:info@glampingwny.com"
                      className="flex items-center gap-3 text-gray-800 font-medium hover:text-primary-600 transition-colors group"
                      onClick={() => trackEvent('Contact', 'email_click', 'mobile_menu')}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm text-gray-600">info@glampingwny.com</div>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 p-6">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className="block px-4 py-3 text-gray-800 text-lg font-semibold hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-200"
                          onClick={() => handleNavClick(link.name.toLowerCase())}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mt-8"
                  >
                    <Link 
                      to="/book-now" 
                      className="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleNavClick('book_now_mobile')}
                    >
                      Book Your Experience
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Social Links */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      href="https://instagram.com/glampingwny" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
                      aria-label="Follow us on Instagram"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-6 h-6" />
                    </motion.a>
                    <motion.a 
                      href="https://facebook.com/glampingwny" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                      aria-label="Follow us on Facebook"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Facebook className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;