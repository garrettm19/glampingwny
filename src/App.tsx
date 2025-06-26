import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';
import SmoothScroll from './components/SmoothScroll';
import AdvancedSearch from './components/AdvancedSearch';
import LiveChat from './components/LiveChat';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityWidget from './components/AccessibilityWidget';
import NotificationProvider from './components/NotificationSystem';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <HelmetProvider>
      <NotificationProvider>
        <ErrorBoundary>
          <SmoothScroll>
            <Analytics />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="testimonials" element={<Testimonials />} />
              </Route>
            </Routes>
            <CookieConsent />
            <BackToTop />
            <AdvancedSearch />
            <LiveChat />
            <PerformanceMonitor />
            <AccessibilityWidget />
            <PWAInstallPrompt />
            <ThemeSwitcher />
            <Toaster position="top-right" />
          </SmoothScroll>
        </ErrorBoundary>
      </NotificationProvider>
    </HelmetProvider>
  );
}

export default App;