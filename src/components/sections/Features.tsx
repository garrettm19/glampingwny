import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Sparkles, Bath, Clock, PartyPopper, Shield, Heart, Star, Calendar, Users, Camera, Utensils } from 'lucide-react';

const features = [
  {
    icon: Tent,
    title: "Multiple Event Types 🎪",
    description: "From birthdays to bachelorette parties, we do it all",
    color: "bg-emerald-50 text-emerald-600",
    shadowColor: "shadow-emerald-200/50",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80"
  },
  {
    icon: Sparkles,
    title: "Magical Decorations ✨",
    description: "Themed setups with twinkling lights and decor",
    color: "bg-amber-50 text-amber-600",
    shadowColor: "shadow-amber-200/50",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80"
  },
  {
    icon: Bath,
    title: "Real Bathrooms 🚽",
    description: "No roughing it - full bathroom access included",
    color: "bg-blue-50 text-blue-600",
    shadowColor: "shadow-blue-200/50",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=400&q=80"
  },
  {
    icon: Clock,
    title: "Book in Minutes ✅",
    description: "Simple online booking, instant confirmation",
    color: "bg-green-50 text-green-600",
    shadowColor: "shadow-green-200/50",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&w=400&q=80"
  },
  {
    icon: PartyPopper,
    title: "No Setup Needed 🎉",
    description: "We handle everything - just show up and celebrate",
    color: "bg-rose-50 text-rose-600",
    shadowColor: "shadow-rose-200/50",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&w=400&q=80"
  },
  {
    icon: Shield,
    title: "Kid-Safe & Clean 🧸",
    description: "Safety-first approach with sanitized equipment",
    color: "bg-indigo-50 text-indigo-600",
    shadowColor: "shadow-indigo-200/50",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&w=400&q=80"
  }
];

const services = [
  "Indoor Sleepover Packages",
  "Outdoor Bell Tent Glamping",
  "Outdoor Movie Nights",
  "Birthday Parties",
  "Bachelorette Parties",
  "Sweet Sixteens",
  "Romantic Proposals",
  "Anniversaries",
  "Weddings",
  "Showers",
  "Graduations"
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-emerald-400 rounded-full animate-sparkle" />
        <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-amber-400 rounded-full animate-sparkle animation-delay-700" />
        <div className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-sparkle" />
        <div className="absolute bottom-[10%] right-[25%] w-1.5 h-1.5 bg-green-400 rounded-full animate-sparkle animation-delay-700" />
      </div>

      <div className="container-custom relative z-10">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Your Go-to Glamping Experts in Western New York!
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            At Glamping WNY, we're here to take the stress out of party planning and turn your special occasion into a celebration to remember! Whether it's a cozy indoor sleepover or an unforgettable outdoor glamping experience, we've got everything you need to make your event shine.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card px-4 py-2 text-sm font-medium text-primary-900"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid with Images */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`glass-card rounded-xl overflow-hidden ${feature.shadowColor} hover:shadow-lg transition-all duration-300`}
            >
              {/* Feature Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Feature Content */}
              <div className="p-6">
                <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  {<feature.icon className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center">
            See Our Magic in Action
          </h2>
          
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
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img 
                  src={image} 
                  alt={`Glamping experience ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Policies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center">
            Important Policies & Guidelines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Rental Care",
                description: "Items will be examined after return. Any damage will incur replacement or repair costs.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Heart,
                title: "Food & Beverage",
                description: "Light snacks only in tent areas. Clear/light-colored beverages only to prevent stains.",
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                icon: Star,
                title: "Smoke Free Environment",
                description: "NO smoking allowed. Additional cleaning fees apply if supplies smell of smoke.",
                color: "bg-amber-50 text-amber-600"
              },
              {
                icon: Users,
                title: "Pet Policy",
                description: "Pets discouraged in party areas. Customers responsible for any pet-related damages.",
                color: "bg-rose-50 text-rose-600"
              }
            ].map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className={`w-12 h-12 ${policy.color} rounded-full flex items-center justify-center mb-4`}>
                  <policy.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">
                  {policy.title}
                </h3>
                <p className="text-gray-700">
                  {policy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;