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
  console.log('Analytics initialized');
};

/**
 * Track page views
 * @param path - The path of the page being viewed
 */
export const trackPageView = (path: string): void => {
  console.log('Page view tracked:', path);
};

/**
 * Track "Book Now" button clicks
 * @param service - The service being booked
 */
export const trackBookNowClick = (service: string): void => {
  console.log('Book Now clicked for service:', service);
};

/**
 * Track generic events
 * @param params - Event parameters including category, action, label, and value
 */
export const trackEvent = (params: EventParams): void => {
  console.log('Event tracked:', params);
};

/**
 * Track form submissions
 * @param formName - The name/identifier of the form being submitted
 */
export const trackFormSubmit = (formName: string): void => {
  console.log('Form submitted:', formName);
};