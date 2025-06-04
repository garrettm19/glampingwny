import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Sparkles, Bath, Clock, PartyPopper, Shield } from 'lucide-react';

const features = [
  {
    icon: <Tent className="h-8 w-8" />,
    title: "Party-Ready Tents 🎈",
    description: "Cozy, decorated tents that create instant magic",
    color: "bg-pink-50 text-pink-600",
    shadowColor: "shadow-pink-200/50"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Magical Decorations ✨",
    description: "Themed setups with twinkling lights and decor",
    color: "bg-purple-50 text-purple-600",
    shadowColor: "shadow-purple-200/50"
  },
  {
    icon: <Bath className="h-8 w-8" />,
    title: "Real Bathrooms 🚽",
    description: "No roughing it - full bathroom access included",
    color: "bg-blue-50 text-blue-600",
    shadowColor: "shadow-blue-200/50"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Book in Minutes ✅",
    description: "Simple online booking, instant confirmation",
    color: "bg-green-50 text-green-600",
    shadowColor: "shadow-green-200/50"
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: "No Setup Needed 🎉",
    description: "We handle everything - just show up and celebrate",
    color: "bg-yellow-50 text-yellow-600",
    shadowColor: "shadow-yellow-200/50"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Kid-Safe & Clean 🧸",
    description: "Safety-first approach with sanitized equipment",
    color: "bg-orange-50 text-orange-600",
    shadowColor: "shadow-orange-200/50"
  }
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
    <section className="section bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-pink-400 rounded-full animate-sparkle" />
        <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-purple-400 rounded-full animate-sparkle animation-delay-700" />
        <div className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-sparkle" />
        <div className="absolute bottom-[10%] right-[25%] w-1.5 h-1.5 bg-green-400 rounded-full animate-sparkle animation-delay-700" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Parents Love Us
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We take care of everything, so you can focus on making memories with your little ones.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`glass-card rounded-xl p-6 ${feature.shadowColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;