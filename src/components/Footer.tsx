import React from 'react';
import { Tent, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Tent className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Glamping WNY</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating unforgettable glamping experiences in Western New York.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(716) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@glampingwny.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Hamburg, NY 14075</span>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Area</h3>
            <p className="text-gray-300">
              Serving the Buffalo Metro Area with FREE delivery within 20 miles.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Glamping WNY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;