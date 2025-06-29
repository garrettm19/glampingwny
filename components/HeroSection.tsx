'use client';
import React from 'react';
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=1080&fit=crop&crop=center"
          alt="Luxury glamping setup under starry sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 pt-20">
        {/* Logo Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-lg font-semibold">GlampingWNY</span>
            <span className="ml-3 text-sm opacity-80 border-l border-white/30 pl-3">PREMIUM EXPERIENCES</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
          <span className="block text-white">Glamping</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-500 to-purple-600">
            WNY
          </span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-blue-100 text-shadow">
          Creating Unforgettable <span className="text-primary-400 font-semibold">Experiences</span> for Every Celebration
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
          We take the stress out of party planning and turn your special occasion into a celebration to remember! 
          From cozy indoor sleepovers to outdoor glamping adventures - we handle everything so you can relax and enjoy the moment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="flex items-center justify-center">
              Book Your Experience
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="btn-secondary text-xl px-12 py-5">
            Explore the Details
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium">200+ Happy Families</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-primary-400 mb-2" />
            <span className="text-sm font-medium">All Ages Welcome</span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 text-primary-400 mb-2" />
            <span className="text-sm font-medium">Professional Service</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-primary-400 mb-2" />
            <span className="text-sm font-medium">Stress-Free Planning</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;