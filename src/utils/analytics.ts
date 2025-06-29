// Type definitions for analytics events
type EventParams = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

/**
 * Initialize Google Analytics
 */
export const initGA = (): void => {
  // Analytics initialization would go here
  if (typeof window !== 'undefined' && import.meta.env.VITE_GA_TRACKING_ID) {
    console.log('Analytics initialized');
  }
};

/**
 * Track page views
 */
export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined') {
    console.log('Page view tracked:', path);
  }
};

/**
 * Track "Book Now" button clicks
 */
export const trackBookNowClick = (service?: string): void => {
  console.log('Book Now clicked', service ? `for service: ${service}` : '');
};

/**
 * Track generic events
 */
export const trackEvent = (params: EventParams | string, action?: string, label?: string): void => {
  if (typeof params === 'string') {
    console.log('Event tracked:', { category: params, action, label });
  } else {
    console.log('Event tracked:', params);
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string): void => {
  console.log('Form submitted:', formName);
};