import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Star, Quote, Sparkles, Clock, Camera, Home, Sparkle, Calendar, Award, Rocket, Video, Palette, Phone, Mail, MapPin, Tent, Dog, Book, Sun, Coffee } from 'lucide-react';
import TestimonialWidget from '../components/ui/TestimonialWidget';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Meet the Glamping WNY Family Team</title>
        <meta 
          name="description" 
          content="Meet Holly, the founder of Glamping WNY, and learn how we're creating unforgettable family glamping experiences in Western New York. Family-owned and operated since 2021." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="page-content pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full lilac-night-gradient"></div>
          
          {/* Simple star field */}
          <div className="absolute inset-0 opacity-60">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle w-0.5 h-0.5"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container-custom relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white text-center mx-auto"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Our Family Story
            </h1>
            <p className="text-xl text-white/90 leading-relaxed body-text">
              From backyard dreams to unforgettable family celebrations across Western New York.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Founder's Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative lg:col-span-5"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg max-w-sm mx-auto border-4 border-lavender-200">
                <div className="aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&q=80"
                    alt="Holly - Glamping WNY Founder" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-2 border-lavender-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-lavender-500" />
                  <span className="text-sm text-gray-600 font-medium body-text">
                    Family-Founded 2021
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 lg:col-span-7"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 leading-tight">
                Meet Holly
                <span className="block text-2xl md:text-3xl font-normal text-lavender-600 mt-2">
                  Your Family Glamping Expert
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed body-text">
                <p>
                  Hey there, families! I'm Holly, the founder of Glamping WNY and a proud small-town business owner with big dreams for creating magical family memories. When I'm not setting up enchanting glamping experiences for amazing families like yours, you can find me working as a Product Manager at Independent Health, cuddling with my dogs, or planning the next exciting family adventure.
                </p>
                
                <div className="grid grid-cols-2 gap-4 my-8">
                  {[
                    { icon: Dog, text: "Dog Mom", color: "text-lavender-500" },
                    { icon: Book, text: "Book Lover", color: "text-slate-500" },
                    { icon: Sun, text: "Sunshine Seeker", color: "text-cream-500" },
                    { icon: Coffee, text: "Coffee Enthusiast", color: "text-sage-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="font-medium text-gray-800 body-text">{item.text}</span>
                    </div>
                  ))}
                </div>

                <p>
                  I founded Glamping WNY in 2021 with a simple vision: to create unforgettable experiences that bring families together and make every celebration extra special. Whether it's a child's birthday party, a family anniversary celebration, or a fun sleepover with cousins, I believe every family moment deserves to be extraordinary.
                </p>

                <p>
                  When I'm not creating magical family experiences, you might find me trying new foods, hiking with my amazing husband Joe, or showing off my (admittedly terrible) singing abilities. And of course, like any true Buffalonian - GO BILLS! Our family business is all about bringing joy to YOUR family!
                </p>
              </div>

              <motion.blockquote 
                className="relative p-6 bg-lavender-50 rounded-xl border-l-4 border-lavender-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-lavender-500 bg-white rounded-full p-1" />
                <p className="text-lg italic text-gray-800 quote-text">
                  "I believe in creating memorable family moments that people will treasure forever. Every tent we set up is a new opportunity to bring joy and wonder to a family's special day. There's nothing better than seeing kids' faces light up and parents relax knowing everything is taken care of!"
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="section bg-lavender-50">
        <div className="container-custom">
          {/* Clean Header */}
          <div className="text-center subsection-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-3 bg-lavender-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-lavender-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 leading-tight">
                Our Family Values
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg body-text">
                These core family values guide everything we do at Glamping WNY.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Families First",
                description: "We believe in creating experiences that bring families closer together and create lasting memories for all ages.",
                color: "bg-lavender-100 text-lavender-600"
              },
              {
                icon: Shield,
                title: "Safety & Quality",
                description: "Every piece of equipment is kid-safe, thoroughly cleaned, and safety-checked before each family event.",
                color: "bg-slate-100 text-slate-600"
              },
              {
                icon: Sparkles,
                title: "Magical Experiences",
                description: "We go above and beyond to ensure every detail contributes to a truly special family celebration.",
                color: "bg-lavender-100 text-lavender-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-lavender-200 p-6 text-center rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-700 body-text">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Clean Header */}
          <div className="text-center subsection-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-3 bg-lavender-100 rounded-full mb-6">
                <Star className="w-8 h-8 text-lavender-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 leading-tight">
                What Families Say About Holly
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg body-text">
                Real feedback from real families about their experience with our team.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialWidget
              quote="I cannot say enough good things about Holly + her team! They setup quickly, everything was beautiful, they went above + beyond to make our experience customized + special! We will definitely be Glamping with them again! Highly recommend!!"
              name="Kelly K."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80"
              rating={5}
              tag="Amazing Service"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-lavender-50 to-lavender-100 rounded-3xl p-12 border border-lavender-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-4 bg-lavender-500 rounded-full mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-800 leading-tight">
              Ready to Create Family Magic Together?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed body-text">
              Let's start planning your most memorable family celebration yet!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/book-now"
                className="bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Family Experience
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-lavender-500 text-lavender-600 hover:bg-lavender-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;