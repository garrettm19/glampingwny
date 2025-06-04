import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Star, Quote, Sparkles, Clock, Camera, Home, Sparkle, Calendar, Award, Rocket, Video, Palette, Phone, Mail, MapPin, Tent } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About | Why We Created Glamping WNY</title>
        <meta 
          name="description" 
          content="Learn how one local family turned backyard birthdays into magical glamping moments." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glamping WNY",
            "image": "https://glampingwny.com/wp-content/uploads/2024/03/og-image.jpg",
            "description": "Magical outdoor birthday experiences and glamping parties in Western New York.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Buffalo",
              "addressRegion": "NY",
              "postalCode": "14221",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.8864,
              "longitude": -78.8784
            },
            "url": "https://glampingwny.com",
            "telephone": "+17165551234",
            "email": "info@glampingwny.com",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-900 text-white relative overflow-hidden">
        {/* Floating particles */}
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
              Built for Our Kids. Now It's Here for Yours.
            </h1>
            <p className="text-xl text-white/90">
              A local family's journey to create magical birthday experiences.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-amber-50" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/6969833/pexels-photo-6969833.jpeg" 
                alt="Sarah with her family enjoying a glamping setup" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  "300+ Magical Birthdays Created"
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary-900">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  It all started with a simple wish: to create an unforgettable birthday experience for our daughter. As parents, we wanted something beyond the usual party venues – something magical that would spark imagination and create lasting memories.
                </p>
                <p>
                  What began as a backyard experiment with a few tents and fairy lights quickly grew into something bigger. Friends started asking us to recreate the magic for their children's birthdays, and soon, word spread throughout Western New York.
                </p>
              </div>

              <motion.blockquote 
                className="relative p-6 bg-white rounded-xl shadow-lg border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary-500 bg-white rounded-full p-1" />
                <p className="text-lg italic text-primary-900">
                  "We wanted a space where families could just show up and celebrate — no stress, no setup, just joy."
                </p>
              </motion.blockquote>

              <p className="text-gray-700">
                Today, Glamping WNY has transformed hundreds of backyards into magical wonderlands, but our mission remains the same: to create birthday experiences that children will remember forever, and to make it as stress-free as possible for parents.
              </p>

              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Core Values</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                The principles that guide every magical moment we create.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Family First</h3>
              <p className="text-gray-700">
                Every decision we make is guided by what's best for families and their children.
              </p>
            </motion.div>
            
            <motion.div
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Safety & Quality</h3>
              <p className="text-gray-700">
                Premium materials and rigorous safety standards in every setup.
              </p>
            </motion.div>
            
            <motion.div
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Local Heart</h3>
              <p className="text-gray-700">
                Proudly serving and supporting our Western New York community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: Shield, label: "Safe & Clean", emoji: "🧼" },
              { icon: Home, label: "Local & Family-Owned", emoji: "🏡" },
              { icon: Sparkle, label: "Magical Setup", emoji: "✨" },
              { icon: Clock, label: "Day-Only Simplicity", emoji: "🕒" },
              { icon: Camera, label: "Built for Memories", emoji: "📸" }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center group relative overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ width: '200%' }}
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <p className="text-2xl mb-2">{value.emoji}</p>
                  <h3 className="text-lg font-bold text-primary-900">{value.label}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-primary-50 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Journey</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                From backyard dreams to Western New York's favorite birthday experience.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

            {/* Timeline items */}
            {[
              {
                year: '2020',
                title: 'The Dream Begins',
                description: 'First backyard birthday idea sparked during lockdown',
                icon: Calendar,
                color: 'bg-pink-100',
                iconColor: 'text-pink-600'
              },
              {
                year: '2021',
                title: 'First Tent Launch',
                description: 'Successfully hosted our first official glamping party',
                icon: Rocket,
                color: 'bg-purple-100',
                iconColor: 'text-purple-600'
              },
              {
                year: '2022',
                title: 'Summer Success',
                description: 'Fully booked summer season with 100+ parties',
                icon: Award,
                color: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
              {
                year: '2023',
                title: 'Virtual Experience',
                description: 'Launched interactive 3D virtual tour system',
                icon: Video,
                color: 'bg-green-100',
                iconColor: 'text-green-600'
              },
              {
                year: '2024',
                title: 'Complete Refresh',
                description: 'New brand identity and online booking platform',
                icon: Palette,
                color: 'bg-orange-100',
                iconColor: 'text-orange-600'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-8 md:mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 md:w-1/2" />
                <div 
                  className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full ${milestone.color} flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10`}
                >
                  <milestone.icon className={`w-4 h-4 ${milestone.iconColor}`} />
                </div>
                <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <motion.div
                    className={`glass-card p-6 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`inline-block px-3 py-1 rounded-full ${milestone.color} ${milestone.iconColor} text-sm font-semibold mb-3`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Visit Our Office
                </h2>
                <p className="text-gray-700 mb-8">
                  Stop by our showroom to see our tents and discuss your perfect glamping party.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <address className="not-italic text-gray-700">
                      123 Main Street<br />
                      Buffalo, NY 14221
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <a 
                      href="tel:+17165551234"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      (716) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a 
                      href="mailto:info@glampingwny.com"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      info@glampingwny.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary-50 rounded-lg">
                <h3 className="font-bold text-primary-900 mb-4">Hours of Operation</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=42.8864,-78.8784&zoom=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glamping WNY Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
                <div className="flex items-center gap-2">
                  <Tent className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-primary-900">Glamping WNY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Magical Memories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our growing family of happy parents and delighted children.
            </p>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Experience
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;