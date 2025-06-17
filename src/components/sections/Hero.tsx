import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Heart, Tent, TreePine, Sparkles, Award, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackBookNowClick } from '../../utils/analytics';
import Logo from '../ui/Logo';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToVirtualTour = useCallback(() => {
    const virtualTourSection = document.getElementById('virtual-tour');
    if (virtualTourSection) {
      virtualTourSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Professional Background with Subtle Pattern */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Professional glamping experience"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        
        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-neutral-900/80" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      </div>

      {/* Clean floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => {
          const icons = [Tent, TreePine, Award, Shield, Users, Sparkles];
          const Icon = icons[i % icons.length];
          
          return (
            <motion.div
              key={i}
              className="absolute opacity-10"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            >
              <Icon size={32} className="text-white" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl text-center">
          {/* Professional Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 mb-12 shadow-2xl"
          >
            <Logo size="sm" />
            <div className="w-px h-6 bg-neutral-300" />
            <span className="text-neutral-800 text-sm font-semibold tracking-wide">
              Western New York's Premier Glamping Rental
            </span>
          </motion.div>

          {/* Clean, Professional Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              fontWeight: 800,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block">Premium</span>
            <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-400 bg-clip-text text-transparent">
              Glamping
            </span>
            <span className="block">Experiences</span>
          </motion.h1>

          {/* Professional Subheadline */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-medium mb-8 leading-relaxed max-w-5xl mx-auto"
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.8)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxury outdoor accommodations and indoor experiences for 
            <span className="text-primary-300 font-semibold"> unforgettable celebrations</span>
          </motion.h2>
          
          {/* Professional Value Proposition */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From intimate gatherings to grand celebrations, we provide complete setup, premium amenities, and professional service throughout the Buffalo Metro Area.
          </motion.p>
          
          {/* Professional CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-xl rounded-xl transition-all duration-300 shadow-2xl hover:shadow-glow-lg border border-primary-500"
                onClick={() => trackBookNowClick()}
              >
                <span className="font-bold">Reserve Your Experience</span>
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </motion.div>
            
            <motion.button
              onClick={scrollToVirtualTour}
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-xl rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Our Services</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
          </motion.div>

          {/* Professional Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: Star, title: "5.0 Rating", subtitle: "200+ Reviews" },
              { icon: Shield, title: "Fully Insured", subtitle: "Professional Service" },
              { icon: Users, title: "All Ages", subtitle: "Family Friendly" },
              { icon: Award, title: "3+ Years", subtitle: "Trusted Experience" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Professional Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer z-20 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={scrollToVirtualTour}
        aria-label="Scroll down to see more"
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Explore Services
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70 transition-colors">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;