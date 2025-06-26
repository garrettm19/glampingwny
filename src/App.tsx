import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Analytics />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <CookieConsent />
        <BackToTop />
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;