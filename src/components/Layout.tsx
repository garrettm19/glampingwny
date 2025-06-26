import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;