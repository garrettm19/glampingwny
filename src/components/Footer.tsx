import React from 'react';
import { Tent, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Tent className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold">Glamping WNY</span>
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Bringing luxury sleepovers & bell tent glamping straight to your doorstep.
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Founded in 2021 • Serving Western New York families
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="text-sm sm:text-base">(716) 200-7692</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="text-sm sm:text-base break-all">reservations@glampingwny.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="text-sm sm:text-base">Hamburg, NY 14075</span>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Service Area</h3>
            <p className="text-gray-300 mb-2 text-sm sm:text-base">
              Western New York • Buffalo Metro Area
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
              FREE delivery within 20 miles of Hamburg, NY
            </p>
            <div className="text-xs sm:text-sm">
              <div>21-31 miles: $50</div>
              <div>32-42 miles: $100</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2024 Glamping WNY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;