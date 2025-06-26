import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4
    const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
    
    if (GA_TRACKING_ID) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Track page views on route changes
    const handleRouteChange = () => {
      if (window.gtag && GA_TRACKING_ID) {
        window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackBookingClick = (packageType: string) => {
  trackEvent('booking_click', {
    package_type: packageType,
    event_category: 'engagement',
    event_label: 'Book Now Button'
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'Phone Number'
  });
};

export const trackFormSubmit = (formType: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    event_category: 'lead_generation'
  });
};