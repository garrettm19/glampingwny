import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Star, Quote, Sparkles, Clock, Camera, Home, Sparkle, Calendar, Award, Rocket, Video, Palette, Phone, Mail, MapPin, Tent, Dog, Book, Sun, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Meet the Glamping WNY Team</title>
        <meta 
          name="description" 
          content="Meet Holly, the founder of Glamping WNY, and learn how we're creating magical outdoor experiences for families in Western New York." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Star className="w-1 h-1 text-white" />
            </motion.div>
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90">
              From backyard dreams to magical memories across Western New York.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Founder's Story */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <img 
                  src="/src/assets/image.png"
                  alt="Holly - Glamping WNY Founder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-600">
                    Founded in 2021
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary-900">Meet Holly</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Hey there! I'm Holly, the founder of Glamping WNY and a proud small-town business owner with big dreams. When I'm not creating magical experiences for families, you can find me working as a Product Manager at Independent Health, cuddling with my dogs, or planning the next exciting glamping adventure.
                </p>
                
                <div className="grid grid-cols-2 gap-4 my-8">
                  {[
                    { icon: Dog, text: "Dog Mom" },
                    { icon: Book, text: "Book Lover" },
                    { icon: Sun, text: "Sunshine Seeker" },
                    { icon: Coffee, text: "Coffee Enthusiast" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-primary-600">
                      <item.icon className="w-5 h-5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <p>
                  I founded Glamping WNY in 2021 with a simple vision: to create unforgettable experiences that bring families together. As a fitness enthusiast and recycling advocate, I believe in living life to the fullest while being mindful of our impact on the world.
                </p>

                <p>
                  When I'm not setting up magical glamping experiences, you might find me trying new foods, hiking with my hunky husband Joe, or showing off my (admittedly terrible) singing abilities. And of course, like any true Buffalonian - GO BILLS! 🦬
                </p>
              </div>

              <motion.blockquote 
                className="relative p-6 bg-primary-50 rounded-xl border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary-500 bg-white rounded-full p-1" />
                <p className="text-lg italic text-primary-900">
                  "I believe in creating magical moments that families will remember forever. Every tent we set up is a new opportunity to bring joy and wonder to someone's special day."
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the existing sections... */}
      
    </>
  );
};

export default AboutPage;