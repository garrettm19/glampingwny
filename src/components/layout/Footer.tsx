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
    <footer className="bg-secondary-800 text-cream-50 pt-16 pb-8 relative overflow-hidden" role="contentinfo">
      {/* Magical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-primary-400 rounded-full animate-sparkle" />
        <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-accent-300 rounded-full animate-sparkle animation-delay-700" />
        <div className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 bg-primary-400 rounded-full animate-sparkle" />
        <div className="absolute bottom-[10%] right-[25%] w-1.5 h-1.5 bg-accent-300 rounded-full animate-sparkle animation-delay-700" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4">
              <Logo footer />
            </div>
            <p className="text-cream-200 mb-6">
              Creating magical outdoor birthday experiences for kids in Western New York.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@glampingwny.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-primary-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center text-primary-300">
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm">Family-Owned Near Buffalo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li><Link to="/" className="text-cream-200 hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded">Home</Link></li>
                <li><Link to="/about" className="text-cream-200 hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded">About Us</Link></li>
                <li><Link to="/services" className="text-cream-200 hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded">Our Services</Link></li>
                <li><Link to="/gallery" className="text-cream-200 hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded">Gallery</Link></li>
                <li><Link to="/contact" className="text-cream-200 hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+17165551234"
                  className="hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                >
                  (716) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@glampingwny.com"
                  className="hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                >
                  info@glampingwny.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <address className="not-italic">
                  Western New York<br />
                  Buffalo, NY 14221
                </address>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-500 rounded-r-full hover:bg-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Find Us</h3>
            <div className="w-full h-48 bg-white/10 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187179.45006577424!2d-78.87433459754272!3d42.88644610607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3126152dfe5a1%3A0x982304a5181f8171!2sBuffalo%2C%20NY!5e0!3m2!1sen!2sus!4v1709347721813!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glamping WNY Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream-200/20 text-center md:flex md:justify-between md:items-center">
          <p className="text-cream-300 text-sm">
            &copy; {new Date().getFullYear()} Glamping WNY. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-sm text-cream-300">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-primary-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
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