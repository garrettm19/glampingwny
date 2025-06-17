import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = (linkName: string) => {
    trackEvent('Navigation', 'nav_click', linkName);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Kids Spa Party', path: '/kids-spa-party' },
        { name: 'Indoor Glamping', path: '/services#indoor' },
        { name: 'Outdoor Glamping', path: '/services#outdoor' }
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-lavender-100 py-2' 
          : 'bg-white/90 backdrop-blur-md shadow-md py-3'
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
            <Logo isScrolled={true} />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center space-x-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              {link.hasDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className="relative px-3 py-2 font-medium transition-all duration-300 rounded-lg group flex items-center gap-1 text-neutral-700 hover:text-lavender-600"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-lavender-50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-lavender-100 py-2 z-50"
                      >
                        {link.dropdownItems?.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            onClick={() => handleNavClick(item.name.toLowerCase())}
                            className="block px-4 py-2 text-neutral-700 hover:bg-lavender-50 hover:text-lavender-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.name.toLowerCase())}
                  className="relative px-3 py-2 font-medium transition-all duration-300 rounded-lg group text-neutral-700 hover:text-lavender-600"
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-lavender-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-lavender-500 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                </Link>
              )}
            </motion.div>
          ))}
          
          {/* Contact Info in Header */}
          <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-neutral-200">
            <motion.a 
              href="tel:+17165551234"
              className="flex items-center gap-2 transition-all duration-300 group text-neutral-700 hover:text-lavender-600"
              onClick={() => trackEvent('Contact', 'phone_click', 'header')}
              whileHover={{ scale: 1.02 }}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">(716) 555-1234</span>
            </motion.a>
            
            <div className="flex space-x-2">
              <motion.a 
                href="https://instagram.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-neutral-100 text-neutral-600 hover:bg-pink-100 hover:text-pink-600"
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
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-neutral-100 text-neutral-600 hover:bg-blue-100 hover:text-blue-600"
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
            className="ml-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/book-now" 
              className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              onClick={() => handleNavClick('book_now')}
              aria-label="Book Now"
            >
              <span className="relative z-10">Book Now</span>
              
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
          className="lg:hidden z-10 p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 text-neutral-700"
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
                <div className="flex justify-between items-center p-6 border-b border-neutral-100">
                  <Logo isScrolled={true} />
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-neutral-800 hover:bg-neutral-100 rounded-xl transition-colors"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Mobile Contact Info */}
                <div className="p-6 bg-gradient-to-br from-lavender-50 to-lavender-100 border-b border-neutral-100">
                  <div className="space-y-4">
                    <motion.a 
                      href="tel:+17165551234"
                      className="flex items-center gap-3 text-neutral-800 font-medium hover:text-lavender-600 transition-colors group"
                      onClick={() => trackEvent('Contact', 'phone_click', 'mobile_menu')}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center group-hover:bg-lavender-200 transition-colors">
                        <Phone className="w-5 h-5 text-lavender-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-sm text-neutral-600">(716) 555-1234</div>
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      href="mailto:info@glampingwny.com"
                      className="flex items-center gap-3 text-neutral-800 font-medium hover:text-lavender-600 transition-colors group"
                      onClick={() => trackEvent('Contact', 'email_click', 'mobile_menu')}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                        <Mail className="w-5 h-5 text-neutral-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm text-neutral-600">info@glampingwny.com</div>
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
                        {link.hasDropdown ? (
                          <div>
                            <Link
                              to={link.path}
                              className="block px-4 py-3 text-neutral-800 text-lg font-semibold hover:bg-lavender-50 hover:text-lavender-600 rounded-xl transition-all duration-200"
                              onClick={() => handleNavClick(link.name.toLowerCase())}
                            >
                              {link.name}
                            </Link>
                            <div className="ml-4 mt-2 space-y-1">
                              {link.dropdownItems?.map((item, i) => (
                                <Link
                                  key={i}
                                  to={item.path}
                                  className="block px-4 py-2 text-neutral-600 hover:bg-lavender-50 hover:text-lavender-600 rounded-lg transition-all duration-200"
                                  onClick={() => handleNavClick(item.name.toLowerCase())}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={link.path}
                            className="block px-4 py-3 text-neutral-800 text-lg font-semibold hover:bg-lavender-50 hover:text-lavender-600 rounded-xl transition-all duration-200"
                            onClick={() => handleNavClick(link.name.toLowerCase())}
                          >
                            {link.name}
                          </Link>
                        )}
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
                      className="block w-full text-center bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => handleNavClick('book_now_mobile')}
                    >
                      Book Your Experience
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Social Links */}
                <div className="p-6 border-t border-neutral-100">
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