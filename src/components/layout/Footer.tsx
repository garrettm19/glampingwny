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
    <footer className="bg-gradient-to-br from-lavender-900 via-slate-900 to-sage-900 text-white pt-16 pb-8 relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-lavender-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-sage-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4">
              <Logo footer />
            </div>
            <p className="text-gray-300 mb-6">
              Creating unforgettable family glamping experiences throughout the Buffalo Metro Area.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-lavender-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-sage-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@glampingwny.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center text-lavender-300">
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm">Family-Owned • Buffalo Metro</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Our Services</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Gallery</Link></li>
                <li><Link to="/testimonials" className="text-gray-300 hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded">Testimonials</Link></li>
              </ul>
            </nav>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <nav aria-label="Support navigation">
              <ul className="space-y-3">
                <li><Link to="/faq" className="text-gray-300 hover:text-sage-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-sage-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded">Contact Us</Link></li>
                <li><Link to="/book-now" className="text-gray-300 hover:text-sage-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded">Book Now</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-sage-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded">Blog</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact & Service Area */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact & Service Area</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-lavender-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+17165551234"
                  className="hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  (716) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-lavender-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@glampingwny.com"
                  className="hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  info@glampingwny.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-sage-400 flex-shrink-0 mt-0.5" />
                <div>
                  <address className="not-italic">
                    Buffalo Metro Area<br />
                    Hamburg, NY 14075
                  </address>
                  <p className="text-sm text-sage-400 mt-1">
                    FREE delivery within 20 miles
                  </p>
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lavender-400"
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-lavender-500 to-sage-500 rounded-r-full hover:from-lavender-600 hover:to-sage-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Glamping WNY. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-lavender-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-400 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-sage-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
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