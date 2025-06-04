import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Custom event tracking
export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// Specific event tracking functions
export const trackBookNowClick = () => {
  trackEvent('Conversion', 'book_now_click');
};

export const trackVirtualTourView = () => {
  trackEvent('Engagement', 'virtual_tour_viewed');
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('Form', 'form_submit', formName);
};

export const trackEmailSignup = () => {
  trackEvent('Conversion', 'email_signup');
};

export const trackConfirmationView = () => {
  trackEvent('Conversion', 'confirmation_page_view');
};