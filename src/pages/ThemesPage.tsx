import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, 
  Sparkles, 
  Star, 
  Heart, 
  Music, 
  Camera, 
  Wine, 
  Coffee, 
  Calendar, 
  Palette,
  Upload,
  Image as ImageIcon,
  Cake,
  Gift,
  PartyPopper,
  Tent,
  TreePine,
  Wand2,
  Gamepad2,
  Flower,
  Rocket,
  Cat,
  Zap,
  Waves,
  Sun,
  Moon,
  Snowflake,
  Leaf,
  ArrowRight
} from 'lucide-react';

// Comprehensive theme data with photos
const adultThemes = [
  {
    id: 'romantic-evening',
    name: 'Romantic Evening',
    icon: Heart,
    color: 'from-red-400 to-pink-400',
    popular: true,
    description: 'Intimate candlelit setup perfect for date nights and romantic celebrations',
    features: ['Candlelit ambiance', 'Rose petals', 'Wine service', 'Soft music'],
    photos: []
  },
  {
    id: 'wine-dine',
    name: 'Wine & Dine',
    icon: Wine,
    color: 'from-purple-400 to-red-400',
    popular: true,
    description: 'Sophisticated wine tasting experience with gourmet pairings',
    features: ['Wine selection', 'Cheese boards', 'Elegant setup', 'Sommelier guide'],
    photos: []
  },
  {
    id: 'wellness-retreat',
    name: 'Wellness Retreat',
    icon: Sparkles,
    color: 'from-green-400 to-blue-400',
    description: 'Peaceful spa-like environment for relaxation and rejuvenation',
    features: ['Meditation space', 'Aromatherapy', 'Yoga mats', 'Calming music'],
    photos: []
  },
  {
    id: 'corporate-event',
    name: 'Corporate Event',
    icon: Coffee,
    color: 'from-blue-400 to-gray-400',
    description: 'Professional outdoor meeting space with team-building activities',
    features: ['Presentation setup', 'Team activities', 'Catering options', 'WiFi access'],
    photos: []
  },
  {
    id: 'anniversary',
    name: 'Anniversary Celebration',
    icon: Calendar,
    color: 'from-gold-400 to-red-400',
    popular: true,
    description: 'Elegant celebration of love milestones with personalized touches',
    features: ['Memory displays', 'Photo timeline', 'Champagne service', 'Custom decorations'],
    photos: []
  },
  {
    id: 'girls-night',
    name: 'Girls Night Out',
    icon: Star,
    color: 'from-pink-400 to-purple-400',
    description: 'Fun and glamorous setup for ladies\' celebrations',
    features: ['Glam decorations', 'Photo booth', 'Cocktail setup', 'Music playlist'],
    photos: []
  },
  {
    id: 'boho-chic',
    name: 'Boho Chic',
    icon: Flower,
    color: 'from-orange-400 to-pink-400',
    description: 'Free-spirited bohemian style with natural elements',
    features: ['Macrame details', 'Dried flowers', 'Earth tones', 'Vintage rugs'],
    photos: []
  },
  {
    id: 'elegant-garden',
    name: 'Elegant Garden Party',
    icon: Leaf,
    color: 'from-green-400 to-emerald-400',
    description: 'Sophisticated outdoor garden party with floral arrangements',
    features: ['Fresh flowers', 'Garden lighting', 'Elegant linens', 'Natural decor'],
    photos: []
  }
];

const kidsThemes = [
  {
    id: 'princess-party',
    name: 'Princess Party',
    icon: Crown,
    color: 'from-pink-400 to-purple-400',
    popular: true,
    description: 'Royal treatment with tiaras, gowns, and fairy tale magic',
    features: ['Tiaras & crowns', 'Princess gowns', 'Castle decorations', 'Royal activities'],
    photos: []
  },
  {
    id: 'unicorn-dreams',
    name: 'Unicorn Dreams',
    icon: Sparkles,
    color: 'from-purple-400 to-pink-400',
    popular: true,
    description: 'Magical unicorn wonderland with rainbows and sparkles',
    features: ['Unicorn decorations', 'Rainbow colors', 'Glitter details', 'Magic wands'],
    photos: []
  },
  {
    id: 'superhero-adventure',
    name: 'Superhero Adventure',
    icon: Zap,
    color: 'from-blue-400 to-red-400',
    description: 'Action-packed superhero training camp experience',
    features: ['Superhero capes', 'Training course', 'Comic decorations', 'Hero badges'],
    photos: []
  },
  {
    id: 'spa-party',
    name: 'Kids Spa Party',
    icon: Heart,
    color: 'from-lavender-400 to-pink-400',
    popular: true,
    description: 'Relaxing spa experience with kid-safe treatments',
    features: ['Face masks', 'Nail art', 'Spa robes', 'Relaxation activities'],
    photos: []
  },
  {
    id: 'video-game',
    name: 'Video Game Night',
    icon: Gamepad2,
    color: 'from-green-400 to-blue-400',
    description: 'Ultimate gaming setup with multiple consoles and tournaments',
    features: ['Gaming consoles', 'Tournament setup', 'Gaming chairs', 'Snack station'],
    photos: []
  },
  {
    id: 'taylor-swift',
    name: 'Taylor Swift Swifties',
    icon: Music,
    color: 'from-purple-400 to-gold-400',
    popular: true,
    description: 'Swiftie celebration with music, friendship bracelets, and fun',
    features: ['Friendship bracelets', 'Music playlist', 'Photo booth', 'Swiftie activities'],
    photos: []
  },
  {
    id: 'space-adventure',
    name: 'Space Adventure',
    icon: Rocket,
    color: 'from-blue-400 to-purple-400',
    description: 'Out-of-this-world space exploration theme',
    features: ['Space decorations', 'Astronaut gear', 'Planet models', 'Space activities'],
    photos: []
  },
  {
    id: 'mermaid-magic',
    name: 'Mermaid Magic',
    icon: Waves,
    color: 'from-blue-400 to-teal-400',
    description: 'Under-the-sea adventure with mermaids and ocean treasures',
    features: ['Mermaid tails', 'Ocean decorations', 'Seashells', 'Water activities'],
    photos: []
  },
  {
    id: 'safari-adventure',
    name: 'Safari Adventure',
    icon: Cat,
    color: 'from-yellow-400 to-orange-400',
    description: 'Wild safari expedition with jungle animals and exploration',
    features: ['Animal decorations', 'Safari hats', 'Jungle setup', 'Adventure activities'],
    photos: []
  },
  {
    id: 'winter-wonderland',
    name: 'Winter Wonderland',
    icon: Snowflake,
    color: 'from-blue-400 to-white',
    description: 'Magical winter theme with snow and ice decorations',
    features: ['Snow decorations', 'Winter activities', 'Cozy blankets', 'Hot cocoa'],
    photos: []
  },
  {
    id: 'fairy-garden',
    name: 'Fairy Garden',
    icon: Wand2,
    color: 'from-green-400 to-pink-400',
    description: 'Enchanted fairy garden with magical creatures and flowers',
    features: ['Fairy wings', 'Garden decorations', 'Flower crowns', 'Magic activities'],
    photos: []
  },
  {
    id: 'camping-adventure',
    name: 'Camping Adventure',
    icon: TreePine,
    color: 'from-green-400 to-brown-400',
    description: 'Outdoor camping experience with nature activities',
    features: ['Camping gear', 'Nature crafts', 'Campfire setup', 'Outdoor games'],
    photos: []
  }
];

const ThemesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'adults' | 'kids'>('kids');
  const [selectedTheme, setSelectedTheme] = useState<any>(null);

  const currentThemes = activeTab === 'adults' ? adultThemes : kidsThemes;

  return (
    <>
      <Helmet>
        <title>Glamping Themes Gallery | Adult & Kids Party Themes | Glamping WNY</title>
        <meta name="description" content="Explore our extensive collection of glamping themes for adults and kids. From romantic evenings to princess parties - see photos and details of all our magical themes." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-lilac-night-sky"></div>
          
          <div className="absolute inset-0 opacity-90">
            {[...Array(100)].map((_, i) => {
              const size = Math.random() > 0.8 ? '3px' : Math.random() > 0.6 ? '2px' : '1px';
              const animationType = Math.random() > 0.7 ? 'animate-twinkle-fast' : 
                                   Math.random() > 0.4 ? 'animate-twinkle' : 'animate-twinkle-slow';
              
              return (
                <motion.div
                  key={i}
                  className={`absolute bg-white rounded-full ${animationType}`}
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Theme Gallery ✨
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our extensive collection of magical themes for every age and occasion. 
              From romantic adult experiences to enchanting kids' parties.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm text-white/80">Total Themes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-white/80">Kids Themes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm text-white/80">Adult Themes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Customizable</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-full p-2 flex">
              <button
                onClick={() => setActiveTab('kids')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'kids'
                    ? 'bg-lavender-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Crown className="w-5 h-5" />
                Kids Themes ({kidsThemes.length})
              </button>
              <button
                onClick={() => setActiveTab('adults')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'adults'
                    ? 'bg-lavender-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Wine className="w-5 h-5" />
                Adult Themes ({adultThemes.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className={`section ${activeTab === 'kids' ? 'bg-gradient-to-br from-pink-50 via-purple-50 to-lavender-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className={`inline-block p-4 ${activeTab === 'kids' ? 'bg-gradient-to-r from-pink-100 to-purple-100' : 'bg-gradient-to-r from-red-100 to-purple-100'} rounded-full mb-6`}>
                {activeTab === 'kids' ? (
                  <Crown className="w-8 h-8 text-purple-600" />
                ) : (
                  <Wine className="w-8 h-8 text-purple-600" />
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                {activeTab === 'kids' ? 'Kids Party Themes 🎉' : 'Adult Experience Themes 🍷'}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {activeTab === 'kids' 
                  ? 'Magical themes designed to spark imagination and create unforgettable childhood memories.'
                  : 'Sophisticated themes crafted for elegant adult celebrations and memorable experiences.'
                }
              </p>
            </motion.div>

            {/* Photo Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                📸 Add Theme Photos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Theme Setups', 'Decorations', 'Activities', 'Happy Guests'].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${activeTab === 'kids' ? 'bg-white border-pink-300 hover:border-purple-400 hover:bg-purple-50' : 'bg-gray-50 border-gray-300 hover:border-lavender-400 hover:bg-lavender-50'} border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group`}
                  >
                    <div className={`w-16 h-16 ${activeTab === 'kids' ? 'bg-pink-100 group-hover:bg-purple-200' : 'bg-gray-200 group-hover:bg-lavender-200'} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                      <ImageIcon className={`w-8 h-8 ${activeTab === 'kids' ? 'text-pink-400 group-hover:text-purple-600' : 'text-gray-400 group-hover:text-lavender-600'}`} />
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2">{category}</h4>
                    <p className="text-sm text-gray-500 mb-3">Upload photos of {category.toLowerCase()}</p>
                    <div className={`flex items-center justify-center gap-2 ${activeTab === 'kids' ? 'text-purple-600' : 'text-lavender-600'} font-medium`}>
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Add Photos</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Themes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentThemes.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedTheme(theme)}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                    {/* Popular Badge */}
                    {theme.popular && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      </div>
                    )}

                    {/* Theme Icon/Image */}
                    <div className={`h-48 bg-gradient-to-br ${theme.color} flex items-center justify-center relative overflow-hidden`}>
                      {/* Photo placeholder */}
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm opacity-75">Add Photos</p>
                        </div>
                      </div>
                      
                      {/* Theme Icon */}
                      <theme.icon className="w-16 h-16 text-white relative z-10" />
                    </div>

                    {/* Theme Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{theme.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{theme.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {theme.features.slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-lavender-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                        {theme.features.length > 2 && (
                          <div className="text-sm text-gray-500 italic">
                            +{theme.features.length - 2} more features
                          </div>
                        )}
                      </div>

                      {/* View Details Button */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Click to view details</span>
                          <div className="w-8 h-8 bg-lavender-100 rounded-full flex items-center justify-center group-hover:bg-lavender-200 transition-colors">
                            <ArrowRight className="w-4 h-4 text-lavender-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Theme Detail Modal */}
      <AnimatePresence>
        {selectedTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTheme(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${selectedTheme.color} p-8 text-white relative`}>
                <button
                  onClick={() => setSelectedTheme(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                <div className="flex items-center gap-4">
                  <selectedTheme.icon className="w-12 h-12" />
                  <div>
                    <h2 className="text-3xl font-bold">{selectedTheme.name}</h2>
                    {selectedTheme.popular && (
                      <div className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold mt-2">
                        <Star className="w-3 h-3 fill-current" />
                        Popular Choice
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">{selectedTheme.description}</p>

                {/* Photo Gallery Placeholder */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center text-gray-400">
                          <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm">Add Photo</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedTheme.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-lavender-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-lavender-600 hover:bg-lavender-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    Book This Theme
                  </button>
                  <button className="px-6 py-3 border-2 border-lavender-600 text-lavender-600 hover:bg-lavender-50 font-semibold rounded-xl transition-colors">
                    Customize
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-lavender-500 to-lavender-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-night-sky opacity-40"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Bring Your Theme to Life? ✨
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Choose from our extensive theme collection or let us create a custom theme just for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-lavender-600 hover:bg-lavender-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Theme
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Request Custom Theme
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ThemesPage;