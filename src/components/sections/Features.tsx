import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Sparkles, Users, Clock, Shield, Heart, Star, TreePine, Home, Palette } from 'lucide-react';

const features = [
  {
    icon: Tent,
    title: "Premium Tents",
    description: "Luxury bell tents and cozy indoor setups with premium bedding and decor",
    color: "from-emerald-500 to-teal-500",
    delay: 0.1
  },
  {
    icon: Sparkles,
    title: "Themed Experiences",
    description: "25+ magical themes from princess parties to outdoor adventures",
    color: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: Users,
    title: "All Ages Welcome",
    description: "Perfect for kids, teens, and adults - creating memories for the whole family",
    color: "from-blue-500 to-cyan-500",
    delay: 0.3
  },
  {
    icon: Clock,
    title: "Full Service",
    description: "Complete setup, styling, and cleanup - you just enjoy the experience",
    color: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    icon: Shield,
    title: "Safe & Clean",
    description: "Professionally sanitized equipment and safety-first approach",
    color: "from-green-500 to-emerald-500",
    delay: 0.5
  },
  {
    icon: Heart,
    title: "Memory Making",
    description: "Creating unforgettable moments that families treasure forever",
    color: "from-pink-500 to-rose-500",
    delay: 0.6
  }
];

const experiences = [
  {
    icon: Home,
    title: "Indoor Glamping",
    description: "Cozy teepee sleepovers perfect for any weather",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
    price: "From $225"
  },
  {
    icon: TreePine,
    title: "Outdoor Adventures",
    description: "Authentic bell tent experiences under the stars",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
    price: "From $500"
  },
  {
    icon: Palette,
    title: "Spa Experiences",
    description: "Relaxing spa parties with professional treatments",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&w=400&q=80",
    price: "From $325"
  }
];

const Features: React.FC = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-nature-pattern opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Families Choose
              <span className="gradient-text block">Glamping WNY</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just about tents - we're about creating magical experiences 
              that bring families together and create memories that last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card p-8 h-full hover:shadow-large transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Types Section */}
      <section className="section nature-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From cozy indoor experiences to outdoor adventures under the stars, 
              we have the perfect setup for your celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="glass-card overflow-hidden hover:shadow-large transition-all duration-500 group-hover:-translate-y-3">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <experience.icon className="w-6 h-6" />
                        <span className="font-semibold">{experience.title}</span>
                      </div>
                      <div className="text-2xl font-bold">{experience.price}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                      <span>Learn More</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Trusted by Families Across WNY
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Join hundreds of families who have created magical memories with us
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Happy Families" },
              { number: "25+", label: "Unique Themes" },
              { number: "5.0", label: "Star Rating" },
              { number: "3+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;