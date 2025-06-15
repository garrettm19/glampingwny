import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Star, 
  Camera, 
  Popcorn, 
  Tent, 
  PartyPopper, 
  Monitor,
  Check,
  ArrowRight,
  Gift,
  Crown,
  Palette
} from 'lucide-react';

const KidsSpaPartyPage: React.FC = () => {
  const basePackages = [
    {
      id: 'spa-party-only',
      title: 'Spa Party Only',
      price: '$325.00',
      description: 'Complete spa experience for your little ones',
      icon: Crown,
      popular: false,
      features: [
        'Professional spa setup and decorations',
        'Kid-safe spa treatments and activities',
        'Relaxing ambiance with soft lighting',
        'Spa-themed party supplies',
        'Complete setup and cleanup',
        'Age-appropriate spa activities',
        'Themed decorations and accessories',
        'Professional guidance materials'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=400&q=80'
    },
    {
      id: 'spa-party-addon',
      title: 'Spa Party Add-On',
      price: '$250.00',
      description: 'Perfect addition to your existing glamping package',
      icon: Sparkles,
      popular: true,
      features: [
        'Spa activities added to glamping setup',
        'Coordinated spa and glamping themes',
        'Enhanced relaxation experience',
        'Spa supplies and materials',
        'Seamless integration with tents',
        'Extended party entertainment',
        'Professional spa guidance',
        'Complete spa cleanup included'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=400&q=80'
    }
  ];

  const addOns = [
    {
      id: 'balloon-garland',
      title: 'Balloon Garland Topper for Indoor Teepee Tent',
      price: '$25.00',
      description: 'Beautiful balloon garland to enhance your teepee setup',
      icon: PartyPopper,
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600'
    },
    {
      id: 'luxe-lace-teepee',
      title: 'Luxe Lace Teepee + Balloons',
      price: '$65.00',
      description: 'Premium lace teepee with elegant balloon decorations',
      icon: Tent,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 'in-home-theater',
      title: 'In-Home Theater',
      price: '$35.00',
      description: 'Movie experience with projector and screen setup',
      icon: Monitor,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 'instant-camera',
      title: 'Instant Print Camera',
      price: '$20.00',
      description: 'Capture memories with instant photo printing',
      icon: Camera,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 'smores-bar',
      title: "S'Mores Bar Station",
      price: '$65.00',
      description: 'Complete s\'mores setup with all the treats',
      icon: Popcorn,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kids Spa Party Packages | Relaxing Fun for Little Ones | Glamping WNY</title>
        <meta 
          name="description" 
          content="Create a magical spa experience for kids with our professional spa party packages. Complete setup, kid-safe treatments, and relaxing fun in the Buffalo Metro Area." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-300 rounded-full"
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
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kids Spa Party Experiences 👑✨
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Pamper your little ones with a magical spa experience they'll never forget. 
              Professional setup, kid-safe treatments, and pure relaxation fun!
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Kid-Safe Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Ages 5+</div>
                <div className="text-sm text-white/80">Perfect Age Range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2-3hrs</div>
                <div className="text-sm text-white/80">Relaxing Fun</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Base Packages Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-3 bg-pink-100 rounded-full mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Choose Your Spa Experience 🧖‍♀️
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Select the perfect spa package for your little princess or prince. Each package includes everything needed for a magical, relaxing celebration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {basePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                  pkg.popular ? 'border-pink-300 ring-4 ring-pink-100' : 'border-gray-200'
                }`}
                whileHover={{ y: -8 }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Package Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-2xl font-bold text-gray-800">{pkg.price}</span>
                    </div>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <pkg.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{pkg.title}</h3>
                      <p className="text-gray-600">{pkg.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/book-now"
                    className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 group ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 hover:bg-pink-50 text-gray-800 hover:text-pink-600 border-2 border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book This Spa Experience
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Package Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-pink-50 border border-pink-200 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Which Package is Right for You? 🤔
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Spa Party Only</h4>
                <p className="text-gray-700 text-sm">
                  Perfect for dedicated spa experiences. Includes everything needed for a complete spa party without glamping tents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Spa Party Add-On</h4>
                <p className="text-gray-700 text-sm">
                  Enhance your existing glamping package with spa activities. Perfect combination of adventure and relaxation!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="section bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-3 bg-purple-100 rounded-full mb-6">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Enhance Your Spa Experience ✨
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Make your spa party even more special with these magical add-ons. Each enhancement adds extra fun and memories to your celebration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${addon.color}`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${addon.color.replace('border-', 'bg-').replace('50', '100')} rounded-full flex items-center justify-center`}>
                    <addon.icon className={`w-6 h-6 ${addon.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-bold ${addon.iconColor}`}>
                      {addon.price}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                  {addon.title}
                </h3>
                
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {addon.description}
                </p>

                <Link
                  to="/book-now"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 group border-2 ${
                    addon.color.replace('50', '200')
                  } ${addon.iconColor.replace('text-', 'hover:bg-').replace('600', '50')} hover:border-opacity-100`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Add to Package
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Add-On Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Add These Enhancements? 🌟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-8 h-8 text-pink-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">More Activities</h4>
                  <p className="text-gray-700 text-sm">
                    Keep the fun going longer with additional entertainment options
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Camera className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Better Memories</h4>
                  <p className="text-gray-700 text-sm">
                    Capture and enhance special moments with photo opportunities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Extra Special</h4>
                  <p className="text-gray-700 text-sm">
                    Make your celebration truly unique and unforgettable
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-300 rounded-full"
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
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create a Magical Spa Experience? 👑✨
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your kids spa party today and give your little ones the royal treatment they deserve!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/book-now"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Crown className="w-5 h-5" />
                  Book Your Spa Experience
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Ask Questions
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Safe Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm text-white/80">Local Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default KidsSpaPartyPage;