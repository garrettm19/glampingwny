import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ui/ServiceCard';
import { 
  Tent, 
  TreePine, 
  Sparkles, 
  MapPin, 
  Check, 
  ArrowRight, 
  Star,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const services = [
  {
    title: "Indoor Glamping Experience",
    description: "Cozy teepee sleepovers perfect for any weather, featuring themed decorations and comfortable bedding.",
    price: "From $225",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Weather-proof indoor setup",
      "Themed decorations included",
      "Comfortable memory foam bedding",
      "Complete setup and cleanup",
      "Perfect for year-round celebrations",
      "Accommodates 2-8 guests"
    ],
    category: "Indoor Experience"
  },
  {
    title: "Outdoor Bell Tent Adventure",
    description: "Authentic glamping under the stars with luxury bell tents and outdoor amenities.",
    price: "From $500",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Authentic 16ft or 23ft bell tents",
      "Weather-resistant canvas",
      "Outdoor lighting and ambiance",
      "Stargazing experience",
      "Professional outdoor setup",
      "Accommodates 6-12 guests"
    ],
    popular: true,
    category: "Outdoor Adventure"
  },
  {
    title: "Luxury Spa Experience",
    description: "Relaxing spa parties with professional treatments and pampering activities for all ages.",
    price: "From $325",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&w=400&q=80",
    features: [
      "Professional spa setup",
      "Age-appropriate treatments",
      "Relaxing ambiance",
      "Spa-themed decorations",
      "Pampering activities",
      "Perfect for special occasions"
    ],
    category: "Spa Experience"
  }
];

const addOns = [
  { name: "Movie Night Setup", price: "$35", description: "Projector and screen for outdoor movies" },
  { name: "S'mores Station", price: "$65", description: "Complete s'mores setup with treats" },
  { name: "Balloon Decorations", price: "$25", description: "Beautiful balloon arrangements" },
  { name: "Extra Bedding", price: "$25", description: "Additional comfortable sleeping space" },
  { name: "Spa Add-on", price: "$250", description: "Complete spa experience package" },
  { name: "Photography Package", price: "$150", description: "Professional event photography" }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Glamping Services | Indoor & Outdoor Experiences | Glamping WNY</title>
        <meta name="description" content="Discover our premium glamping services in Western New York. Indoor teepee sleepovers, outdoor bell tent adventures, and luxury spa experiences. Professional setup included." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury glamping services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-teal-900/80"></div>
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Our Luxury
              <span className="block text-emerald-300">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Choose from our carefully crafted glamping experiences, 
              each designed to create unforgettable memories
            </p>
            
            {/* Service Area Highlight */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Serving Buffalo Metro • FREE delivery within 20 miles</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Banner */}
      <section className="py-6 bg-emerald-50 border-b border-emerald-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-emerald-900">Proudly Serving the Buffalo Metro Area</span>
            </div>
            <p className="text-emerald-700">
              <strong>FREE delivery within 20 miles of Hamburg, NY</strong> • 
              Extended delivery: 21-31 miles ($50) • 32-42 miles ($100)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Signature Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each experience is carefully designed and professionally executed 
              to create magical memories that last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Why Families Choose Glamping WNY
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're not just about tents - we're about creating complete experiences 
                that bring families together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "All Ages Welcome", description: "Perfect for kids, teens, and adults" },
                { icon: Clock, title: "Full Service", description: "Complete setup and cleanup included" },
                { icon: Shield, title: "Safe & Clean", description: "Professionally sanitized equipment" },
                { icon: Star, title: "5-Star Rated", description: "200+ happy families served" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Enhance Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add these special touches to make your glamping experience even more magical
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-large transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-emerald-600 font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Available as add-on</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Create Your Perfect Experience?
            </h2>
            <p className="text-xl text-emerald-100 mb-10">
              Contact us today to check availability and start planning your magical glamping adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-now"
                className="btn btn-secondary text-lg px-8 py-4 group"
              >
                <span>Book Your Experience</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-ghost text-lg px-8 py-4"
              >
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;