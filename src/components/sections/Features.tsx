import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Sparkles, Bath, Clock, PartyPopper, Shield, Heart, Star, Calendar, Users, Camera, Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Tent,
    title: "Indoor & Outdoor Fun",
    description: "Year-round adventures for the whole family",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
    stats: "Available 365 days"
  },
  {
    icon: Sparkles,
    title: "Magical Decorations",
    description: "Themed setups that spark imagination and wonder",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
    stats: "25+ kid-friendly themes"
  },
  {
    icon: Bath,
    title: "Real Bathrooms",
    description: "Comfort and convenience for families",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=400&q=80",
    stats: "100% family comfort"
  },
  {
    icon: Clock,
    title: "Easy Booking",
    description: "Simple planning for busy parents",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&w=400&q=80",
    stats: "Book in under 5 minutes"
  },
  {
    icon: PartyPopper,
    title: "Complete Setup",
    description: "We handle everything so you can enjoy family time",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&w=400&q=80",
    stats: "Zero stress for parents"
  },
  {
    icon: Shield,
    title: "Safe & Clean",
    description: "Kid-safe equipment and sanitized supplies",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&w=400&q=80",
    stats: "Family safety first"
  }
];

const services = [
  "Birthday Parties",
  "Family Celebrations", 
  "Slumber Parties",
  "Sweet Sixteens",
  "Graduation Parties",
  "Holiday Celebrations",
  "Sibling Parties",
  "Playdate Adventures",
  "Anniversary Celebrations",
  "Girls' Night Out",
  "Date Night Experiences"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-white relative overflow-hidden">
      {/* Playful background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-3 h-3 bg-orange-400 rounded-full animate-pulse-glow" />
        <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-yellow-400 rounded-full animate-sparkle animation-delay-700" />
        <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-orange-400 rounded-full animate-float" />
        <div className="absolute bottom-[10%] right-[25%] w-3 h-3 bg-yellow-400 rounded-full animate-pulse-glow animation-delay-700" />
        
        {/* Warm gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Family-Friendly Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mb-6"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Families Love Glamping WNY! 🏕️
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            We're here to make your family celebrations extra special! From cozy indoor sleepovers to magical outdoor adventures, we create safe, fun experiences that bring families together and create memories that last a lifetime.
          </p>
          
          {/* Family-Focused Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <span className="group-hover:text-orange-600 transition-all duration-300">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Family-Friendly Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`bg-white/95 backdrop-blur-sm border border-orange-200 rounded-xl overflow-hidden ${feature.shadowColor} hover:shadow-2xl transition-all duration-500 group`}
            >
              {/* Feature Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Stats overlay */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {feature.stats}
                </motion.div>
              </div>
              
              {/* Feature Content */}
              <div className="p-6">
                <div className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Family Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              See Happy Families in Action! 📸
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real photos from real family celebrations. Every setup is unique and designed to create magical moments for your loved ones.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=300&q=80",
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=300&q=80"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer border border-orange-200"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={image} 
                  alt={`Happy family glamping experience ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
          
          {/* View Gallery CTA */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group"
            >
              See More Happy Families
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Family-Friendly Policies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm border border-orange-200 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Important Family Guidelines 👨‍👩‍👧‍👦
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "All equipment is kid-safe and thoroughly cleaned. Adult supervision required at all times.",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Heart,
                title: "Family-Friendly Food",
                description: "Light snacks welcome! Clear beverages only to keep everything clean and safe.",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Star,
                title: "Smoke-Free Environment",
                description: "We maintain a completely smoke-free environment for the health and safety of all families.",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Users,
                title: "Pet Guidelines",
                description: "Well-behaved pets welcome with advance notice. Pet fee applies for safety and cleanliness.",
                color: "bg-orange-50 text-orange-600"
              }
            ].map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50/50 transition-colors duration-300"
              >
                <div className={`w-12 h-12 ${policy.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <policy.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;