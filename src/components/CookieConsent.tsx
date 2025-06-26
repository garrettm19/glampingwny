import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
    // Initialize analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setShowBanner(false);
    // Only essential cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    // Reject all non-essential cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start">
              <Cookie className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">We use cookies</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 ml-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                <Settings className="w-4 h-4 mr-1" />
                Settings
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Cookie Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">Required for basic site functionality</p>
                </div>
                <div className="text-sm text-gray-500">Always Active</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors use our site</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Save Settings
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;