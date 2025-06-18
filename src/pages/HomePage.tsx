import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Users, Shield, Star, Tent, TreePine, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Glamping WNY | Luxury Outdoor Experiences in Western New York</title>
        <meta name="description" content="Create unforgettable memories with premium glamping experiences in Western New York. Professional setup, luxury amenities, and magical moments for all occasions." />
      </Helmet>

      <Hero />
      
      {/* Service Area Banner */}
      <section className="py-6 bg-sage-50 border-b border-sage-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-sage-600" />
              <span className="font-semibold text-sage-900">Serving the Buffalo Metro Area</span>
            </div>
            <p className="text-sage-700">
              <strong>FREE delivery within 20 miles of Hamburg, NY</strong> • Extended delivery available
            </p>
          </motion.div>
        </div>
      </section>
      
      <Features />
      
      {/* Services Preview */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-nature-pattern opacity-20"></div>
        
        <div className="container-custom relative z-10">
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
              From intimate indoor gatherings to grand outdoor adventures, 
              we create the perfect setting for your special moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Tent,
                title: "Indoor Glamping",
                description: "Cozy teepee sleepovers perfect for any weather",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400&q=80",
                price: "From $225",
                features: ["Weather-proof", "Year-round", "All ages"],
                color: "from-lavender-500 to-sage-500"
              },
              {
                icon: TreePine,
                title: "Outdoor Adventures",
                description: "Authentic bell tent experiences under the stars",
                image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&w=400&q=80",
                price: "From $500",
                features: ["Authentic camping", "Stargazing", "Nature immersion"],
                color: "from-sage-500 to-teal-500",
                popular: true
              },
              {
                icon: Sparkles,
                title: "Spa Experiences",
                description: "Relaxing spa parties with premium treatments",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&w=400&q=80",
                price: "From $325",
                features: ["Luxury treatments", "Relaxation", "Pampering"],
                color: "from-cream-500 to-lavender-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-card overflow-hidden hover:shadow-large transition-all duration-500 group-hover:-translate-y-3">
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <service.icon className="w-6 h-6" />
                        <span className="font-semibold">{service.title}</span>
                      </div>
                      <div className="text-2xl font-bold">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to="/services"
                      className={`w-full btn bg-gradient-to-r ${service.color} text-white hover:shadow-lg`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Customer Reviews Link Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Loved by 200+ Families
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't just take our word for it. Read what families across Western New York 
                are saying about their magical glamping experiences.
              </p>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 bg-lavender-600 hover:bg-lavender-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Read All Reviews</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-lavender-600">5.0</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lavender-600">200+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lavender-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="section earthy-night text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-starry-night opacity-30"></div>
        
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
            <p className="text-xl text-sage-100 mb-10 leading-relaxed">
              Join hundreds of families who have created magical memories with Glamping WNY. 
              Your adventure awaits.
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
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;