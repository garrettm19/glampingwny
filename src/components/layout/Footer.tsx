import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Tent, Heart, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-nature-pattern opacity-10"></div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-lavender-600 rounded-xl flex items-center justify-center mr-4">
                <Tent className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold">Glamping WNY</div>
                <div className="text-sm text-gray-400">LUXURY EXPERIENCES</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Creating unforgettable luxury glamping experiences for families across Western New York. 
              From magical indoor sleepovers to outdoor adventures under the stars.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-400">200+ Happy Families</span>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/glampingwny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@glampingwny.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lavender-600 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-lavender-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-lavender-400 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-lavender-400 transition-colors">Our Services</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-lavender-400 transition-colors">Gallery</Link></li>
                <li><Link to="/testimonials" className="text-gray-300 hover:text-lavender-400 transition-colors">Testimonials</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-lavender-400 transition-colors">FAQ</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-lavender-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+17165551234"
                    className="text-gray-300 hover:text-lavender-400 transition-colors font-medium"
                  >
                    (716) 555-1234
                  </a>
                  <p className="text-sm text-gray-400">Call or text anytime</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-lavender-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@glampingwny.com"
                    className="text-gray-300 hover:text-lavender-400 transition-colors font-medium"
                  >
                    info@glampingwny.com
                  </a>
                  <p className="text-sm text-gray-400">24hr response time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-lavender-400 mt-1 flex-shrink-0" />
                <div>
                  <address className="not-italic text-gray-300">
                    Buffalo Metro Area<br />
                    Hamburg, NY 14075
                  </address>
                  <p className="text-sm text-lavender-400 font-medium">FREE delivery within 20 miles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <Heart className="w-4 h-4 mr-2 text-lavender-400" />
            <span>© {new Date().getFullYear()} Glamping WNY. All rights reserved.</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-lavender-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-lavender-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;