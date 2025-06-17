import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Send, Award } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 relative overflow-hidden" role="contentinfo">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-lavender-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-lavender-300 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creating unforgettable family glamping experiences throughout the Buffalo Metro Area.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-lavender-100 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-lavender-100 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@glampingwny.com" 
                className="bg-gray-100 p-3 rounded-full hover:bg-lavender-100 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <Award className="h-5 w-5 mr-2 text-lavender-500" />
              <span className="text-sm font-medium">Family-Owned • Buffalo Metro</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">About Us</Link></li>
                <li><Link to="/services" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Our Services</Link></li>
                <li><Link to="/gallery" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Gallery</Link></li>
                <li><Link to="/testimonials" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Testimonials</Link></li>
              </ul>
            </nav>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Support</h3>
            <nav aria-label="Support navigation">
              <ul className="space-y-3">
                <li><Link to="/faq" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Contact Us</Link></li>
                <li><Link to="/book-now" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Book Now</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Blog</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact & Service Area */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contact & Service Area</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-lavender-500 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+17165551234"
                  className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  (716) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-lavender-500 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@glampingwny.com"
                  className="text-gray-600 hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  info@glampingwny.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-lavender-500 flex-shrink-0 mt-0.5" />
                <div>
                  <address className="not-italic text-gray-600">
                    Buffalo Metro Area<br />
                    Hamburg, NY 14075
                  </address>
                  <p className="text-sm text-lavender-500 mt-1 font-medium">
                    FREE delivery within 20 miles
                  </p>
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Newsletter</h3>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-lavender-400"
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-lavender-500 to-lavender-600 rounded-r-lg hover:from-lavender-600 hover:to-lavender-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 text-white"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Glamping WNY. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-sm text-gray-500">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-lavender-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;