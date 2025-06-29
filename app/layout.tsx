import React from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'GlampingWNY - Premium Glamping Experiences in Western New York',
  description: 'Creating unforgettable glamping experiences for every celebration. Outdoor bell tent glamping, indoor teepee sleepovers, and luxury spa parties in Buffalo Metro Area.',
  keywords: 'glamping, Western New York, Buffalo, camping, outdoor experiences, party planning, celebrations',
  openGraph: {
    title: 'GlampingWNY - Premium Glamping Experiences',
    description: 'Creating unforgettable glamping experiences for every celebration in Western New York.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}