import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
    </>
  );
}