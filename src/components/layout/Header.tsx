import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Tent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group"
          aria-label="Glamping WNY Home"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'bg-emerald-600 text-white' 
              : 'bg-white/20 text-white backdrop-blur-sm'
          } group-hover:scale-110`}>
            <Tent className="w-6 h-6" />
          </div>
          <div>
            <div className={`font-serif text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Glamping WNY
            </div>
            <div className={`text-xs font-medium transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white/80'
            }`}>
              LUXURY EXPERIENCES
            </div>
          </div>
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
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emerald-600' 
                  : 'text-white hover:text-emerald-300'
              } ${location.pathname === link.path ? 'text-emerald-600' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className={`flex items-center space-x-4 text-sm ${
            isScrolled ? 'text-gray-600' : 'text-white/80'
          }`}>
            <a 
              href="tel:+17165551234"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(716) 555-1234</span>
            </a>
          </div>
          
          <Link 
            to="/book-now" 
            className="btn btn-primary"
          >
            Book Experience
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
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
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

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
              >
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Tent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-bold text-gray-900">Glamping WNY</div>
                      <div className="text-xs text-gray-600">LUXURY EXPERIENCES</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Contact Info */}
                <div className="p-6 bg-emerald-50 border-b border-gray-100">
                  <div className="space-y-4">
                    <a 
                      href="tel:+17165551234"
                      className="flex items-center gap-3 text-gray-800 font-medium hover:text-emerald-600 transition-colors"
                    >
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-sm text-gray-600">(716) 555-1234</div>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:info@glampingwny.com"
                      className="flex items-center gap-3 text-gray-800 font-medium hover:text-emerald-600 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm text-gray-600">info@glampingwny.com</div>
                      </div>
                    </a>
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
                          className="block px-4 py-3 text-gray-800 text-lg font-semibold hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200"
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
                      className="block w-full text-center bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Your Experience
                    </Link>
                  </motion.div>
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