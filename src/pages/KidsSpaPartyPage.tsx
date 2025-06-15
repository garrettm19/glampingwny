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
  Palette,
  DollarSign,
  TrendingDown
} from 'lucide-react';

const KidsSpaPartyPage: React.FC = () => {
  const spaPackageInfo = {
    standalonePrice: 325,
    addonPrice: 250,
    baseGlampingPrice: 225,
    bundleTotal: 475, // 225 + 250
    savings: 75 // 325 + 225 - 475
  };

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
        <title>Kids Spa Party Add-On | Save $75 with Glamping Bundle | Glamping WNY</title>
        <meta 
          name="description" 
          content="Add magical spa experiences to your glamping package and save $75! Professional spa activities, kid-safe treatments, and relaxing fun in the Buffalo Metro Area." 
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
              Kids Spa Party Add-On 👑✨
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transform your glamping experience into the ultimate spa adventure! 
              Add magical spa activities to any glamping package and save money.
            </p>
            
            {/* Savings Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-8"
            >
              <TrendingDown className="w-5 h-5 inline mr-2" />
              Save $75 when you bundle with glamping!
            </motion.div>
            
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

      {/* Pricing Comparison Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block p-3 bg-green-100 rounded-full mb-6">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Smart Savings with Our Spa Bundle! 💰
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Why pay more when you can get the best of both worlds? Our spa add-on gives you incredible value when combined with any glamping package.
              </p>
            </motion.div>
          </div>

          {/* Pricing Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Separate Packages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 relative"
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                More Expensive
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Separately</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="font-medium">Indoor Glamping Base</span>
                  <span className="font-bold text-gray-800">${spaPackageInfo.baseGlampingPrice}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="font-medium">Spa Party (Standalone)</span>
                  <span className="font-bold text-gray-800">${spaPackageInfo.standalonePrice}</span>
                </div>
              </div>
              
              <div className="border-t-2 border-gray-300 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total Cost:</span>
                  <span className="text-3xl font-bold text-red-600">
                    ${spaPackageInfo.baseGlampingPrice + spaPackageInfo.standalonePrice}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bundle Package */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 relative ring-4 ring-green-100"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Best Value!
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Smart Bundle Package</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                  <span className="font-medium">Indoor Glamping Base</span>
                  <span className="font-bold text-gray-800">${spaPackageInfo.baseGlampingPrice}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                  <span className="font-medium">Spa Party Add-On</span>
                  <span className="font-bold text-green-600">${spaPackageInfo.addonPrice}</span>
                </div>
              </div>
              
              <div className="border-t-2 border-green-300 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-bold text-gray-800">Bundle Total:</span>
                  <span className="text-3xl font-bold text-green-600">
                    ${spaPackageInfo.bundleTotal}
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                    You Save ${spaPackageInfo.savings}!
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why Bundle Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Our Bundle Makes Perfect Sense 🧠
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Save Money</h4>
                <p className="text-gray-700 text-sm">
                  Get both experiences for $75 less than booking separately
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">More Fun</h4>
                <p className="text-gray-700 text-sm">
                  Adventure AND relaxation in one amazing experience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">One Setup</h4>
                <p className="text-gray-700 text-sm">
                  Everything coordinated perfectly in one visit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section bg-gradient-to-br from-pink-50 to-purple-50">
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
                What's Included in Your Spa Add-On 🧖‍♀️
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Our spa add-on transforms your glamping experience into a complete relaxation adventure with professional-grade, kid-safe spa activities.
              </p>
            </motion.div>
          </div>

          {/* Spa Package Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mb-12"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Spa Party Add-On</h3>
              <p className="text-gray-600">Add to any glamping package for just $250</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  Spa Activities Included
                </h4>
                <div className="space-y-3">
                  {[
                    'Professional spa setup and decorations',
                    'Kid-safe spa treatments and activities',
                    'Relaxing ambiance with soft lighting',
                    'Spa-themed party supplies',
                    'Age-appropriate spa activities',
                    'Themed decorations and accessories'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  Service Benefits
                </h4>
                <div className="space-y-3">
                  {[
                    'Coordinated with glamping theme',
                    'Enhanced relaxation experience',
                    'Extended party entertainment',
                    'Professional spa guidance materials',
                    'Complete spa cleanup included',
                    'Seamless integration with tents'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Perfect Combination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                The Perfect Combination! 🎯
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Start with exciting glamping adventures, then wind down with relaxing spa activities. 
                It's the perfect balance of fun and relaxation that kids absolutely love!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="section bg-white">
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
                Make It Even More Special ✨
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Add these magical enhancements to create the ultimate spa and glamping experience.
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
                    <span className={`text-xl font-bold ${addon.iconColor}`}>
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
                    Add Enhancement
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
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
              Ready to Book Your Glamping + Spa Bundle? 👑✨
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Save $75 and give your kids the ultimate adventure and relaxation experience!
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
                  Book Bundle & Save $75
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

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold mb-4">Bundle Value Breakdown:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-bold text-lg">${spaPackageInfo.bundleTotal}</div>
                  <div className="text-white/80">Bundle Price</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-green-300">${spaPackageInfo.savings}</div>
                  <div className="text-white/80">You Save</div>
                </div>
                <div>
                  <div className="font-bold text-lg">2-in-1</div>
                  <div className="text-white/80">Experiences</div>
                </div>
              </div>
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