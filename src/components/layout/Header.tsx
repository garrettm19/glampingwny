import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-glass backdrop-blur-sm shadow-glow py-2' 
          : 'bg-transparent py-4'
      }`}
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
              className={`font-medium ${
                isScrolled 
                  ? 'text-secondary-800 hover:text-primary-600 focus-visible:text-primary-600' 
                  : 'text-cream-50 hover:text-primary-300 focus-visible:text-primary-300'
              } transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md px-2 py-1`}
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
              Let's Create Magic! ✨
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
            <X className={`h-6 w-6 ${isScrolled ? 'text-secondary-800' : 'text-cream-50'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-secondary-800' : 'text-cream-50'}`} />
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
              className="fixed inset-0 bg-glass backdrop-blur-md flex flex-col items-center justify-center space-y-8 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className="text-secondary-800 text-2xl font-medium hover:text-primary-600 focus-visible:text-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md px-2 py-1"
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
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/book-now" 
                  className="btn btn-primary mt-4"
                  onClick={() => handleNavClick('book_now_mobile')}
                >
                  Let's Create Magic! ✨
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;