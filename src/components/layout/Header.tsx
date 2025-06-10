import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
    <>
      {/* Top Contact Bar - Only visible on desktop when not scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-primary-900/95 backdrop-blur-sm text-white py-2 relative z-50"
          >
            <div className="container-custom">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-6">
                  <a 
                    href="tel:+17165551234"
                    className="flex items-center gap-2 hover:text-primary-300 transition-colors"
                    onClick={() => trackEvent('Contact', 'phone_click', 'top_bar')}
                  >
                    <Phone className="w-4 h-4" />
                    (716) 555-1234
                  </a>
                  <a 
                    href="mailto:info@glampingwny.com"
                    className="flex items-center gap-2 hover:text-primary-300 transition-colors"
                    onClick={() => trackEvent('Contact', 'email_click', 'top_bar')}
                  >
                    <Mail className="w-4 h-4" />
                    info@glampingwny.com
                  </a>
                  <div className="flex items-center gap-2 text-primary-300">
                    <MapPin className="w-4 h-4" />
                    Serving Buffalo & WNY
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-primary-300">Follow us:</span>
                  <a 
                    href="https://instagram.com/glampingwny" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com/glampingwny" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-4'
        }`}
        style={{ top: !isScrolled ? '40px' : '0' }}
        role="banner"
      >
        <div className="container-custom flex justify-between items-center">
          <Link 
            to="/" 
            className="z-10"
            aria-label="Glamping WNY Home"
            onClick={() => handleNavClick('logo')}
          >
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.name.toLowerCase())}
                className={`font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md px-3 py-2 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary-600 focus-visible:text-primary-600' 
                    : 'text-white hover:text-primary-300 focus-visible:text-primary-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/book-now" 
                className="btn btn-primary"
                onClick={() => handleNavClick('book_now')}
                aria-label="Book Now"
              >
                Book Your Experience
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-10 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 bg-white flex flex-col lg:hidden z-50"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile menu"
              >
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <Logo isScrolled={true} />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Contact Info */}
                <div className="p-6 bg-primary-50 border-b border-gray-100">
                  <div className="space-y-4">
                    <a 
                      href="tel:+17165551234"
                      className="flex items-center gap-3 text-primary-900 font-medium hover:text-primary-700 transition-colors"
                      onClick={() => trackEvent('Contact', 'phone_click', 'mobile_menu')}
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-sm text-gray-600">(716) 555-1234</div>
                      </div>
                    </a>
                    <a 
                      href="mailto:info@glampingwny.com"
                      className="flex items-center gap-3 text-primary-900 font-medium hover:text-primary-700 transition-colors"
                      onClick={() => trackEvent('Contact', 'email_click', 'mobile_menu')}
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm text-gray-600">info@glampingwny.com</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-primary-900">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Service Area</div>
                        <div className="text-sm text-gray-600">Buffalo & WNY</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 flex flex-col justify-center space-y-6 px-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="text-gray-800 text-2xl font-semibold hover:text-primary-600 focus-visible:text-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md px-2 py-1 block"
                        onClick={() => handleNavClick(link.name.toLowerCase())}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="pt-6"
                  >
                    <Link 
                      to="/book-now" 
                      className="btn btn-primary w-full justify-center text-lg py-4"
                      onClick={() => handleNavClick('book_now_mobile')}
                    >
                      Book Your Experience
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Social Links */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://instagram.com/glampingwny" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://facebook.com/glampingwny" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;