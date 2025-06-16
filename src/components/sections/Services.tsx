import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';
import { trackEvent } from '../../utils/analytics';

const indoorPackages = [
  {
    title: 'Family Base Package',
    description: 'Perfect for intimate family celebrations',
    price: '$225',
    image: 'https://picsum.photos/400/300?random=2',
    features: [
      '1 Cozy Glamping Tent',
      'Comfortable Memory Foam Mattress',
      'Soft Blankets and Linens',
      'Custom Family Letter Board',
      'Decorative Pillows',
      'Breakfast Tray with Lantern',
      'Magical Fairy Lights',
      'Complete Setup and Cleanup',
      'Your Choice of Fun Theme'
    ]
  },
  {
    title: 'Family Group Package',
    description: '4-6 Tents for the Whole Gang',
    price: '$375-$475',
    image: 'https://picsum.photos/400/300?random=3',
    features: [
      '4-6 Family Glamping Tents',
      'All Base Package Features',
      'Coordinated Family Theme',
      'Group Activity Space',
      'Extended Family Setup Area',
      'Perfect for Family Sleepovers'
    ]
  },
  {
    title: 'Ultimate Family Package',
    description: '7-10 Tents for Big Celebrations',
    price: '$525-$675',
    image: 'https://picsum.photos/400/300?random=4',
    features: [
      '7-10 Family Glamping Tents',
      'All Group Package Features',
      'Premium Family Party Space',
      'Enhanced Family Decorations',
      'Special Group Family Activities',
      'Perfect for Large Family Gatherings'
    ]
  }
];

const outdoorPackages = [
  {
    title: 'Family Adventure Tent',
    description: '16ft Bell Tent (2-6 Family Members)',
    price: '$500-$600',
    image: 'https://picsum.photos/400/300?random=5',
    features: [
      'Spacious Family Bell Tent',
      'Comfortable Memory Foam Beds',
      'Kid-Friendly Themed Décor',
      'Family Side Tables & Rugs',
      'Safe Ambient Lighting',
      'Complete Setup and Cleanup',
      'Free Family Delivery (20-mile radius)'
    ]
  },
  {
    title: 'Grand Family Tent',
    description: '23ft Bell Tent (7-12 Family Members)',
    price: '$825-$950',
    image: 'https://picsum.photos/400/300?random=6',
    features: [
      'Extra Large Family Bell Tent',
      'Premium Family Furnishings',
      'Enhanced Family Décor Package',
      'Comfortable Family Lounge Area',
      'Premium Safe Lighting',
      'Complete Setup and Cleanup',
      'Free Family Delivery (20-mile radius)'
    ]
  },
  {
    title: 'Family Day Adventure',
    description: 'Perfect for Daytime Family Fun',
    price: '$500',
    image: 'https://picsum.photos/400/300?random=7',
    features: [
      '16ft Family Bell Tent',
      'Family Chairs & Floor Seating',
      'Kid-Safe Side Tables & Rugs',
      'Family-Friendly Ambient Lighting',
      'Fun Themed Family Décor',
      'Complete Setup and Cleanup',
      'Perfect for Family Day Events'
    ]
  }
];

const addons = [
  {
    title: 'Family Balloon Garland',
    price: '$25',
    description: 'Custom balloon garland perfect for family photos'
  },
  {
    title: 'Deluxe Family Teepee',
    price: '$65',
    description: 'Premium family teepee with beautiful decorations'
  },
  {
    title: 'Family Picnic Add-On',
    price: '$200',
    description: 'Complete family picnic setup with kid-friendly decorations'
  },
  {
    title: 'Family Movie Night',
    price: '$35',
    description: 'Family movie setup with screen for all ages'
  },
  {
    title: "Family S'mores Bar",
    price: '$65',
    description: 'Complete family s\'mores station with all the treats'
  },
  {
    title: 'Family Spa Experience',
    price: '$250',
    description: 'Family-friendly spa activities and supplies'
  },
  {
    title: 'Family Yard Games',
    price: '$10',
    description: 'Choice of giant family Jenga or Connect 4'
  },
  {
    title: 'Family Comfort AC',
    price: '$50',
    description: 'Portable AC unit for family comfort outdoors'
  },
  {
    title: 'Family Memory Camera',
    price: '$20',
    description: 'Instant camera rental with film for family memories'
  },
  {
    title: 'Pet Family Package',
    price: '$20',
    description: 'Pet-friendly accommodations for the whole family'
  }
];

const themes = [
  "Princess & Prince Party",
  "Family Boho Bliss",
  "Golden Family Celebration",
  "Buffalo Bills Family Fun",
  "Video Game Family Night",
  "Farm Family Adventure",
  "Cozy Family Cabin",
  "Cloud Family Dreams",
  "Space Family Adventure",
  "Pokémon Family Fun",
  "Harry Potter Family Magic",
  "Holiday Family Celebrations",
  "Jungle Family Safari",
  "Glow Family Party",
  "Mermaid Family Magic",
  "Family Preppy Party",
  "90's Family Throwback",
  "Sage Family Serenity",
  "Sloth Family Soiree",
  "Sports Family Fun",
  "Star Wars Family Force",
  "Superhero Family Squad",
  "Taylor Swift Family Swifties",
  "Family Eras Tour",
  "Tropical Family Paradise",
  "Unicorn Family Dreams",
  "Winter Family Wonderland"
];

const Services: React.FC = () => {
  const handleAddonClick = (addonTitle: string) => {
    trackEvent('Addon', 'addon_click', addonTitle);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Starry Night Header for Indoor Packages */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <div 
            className="relative py-16 px-8"
            style={{
              background: `linear-gradient(135deg, 
                #0f172a 0%, 
                #1e293b 25%, 
                #334155 50%, 
                #1e293b 75%, 
                #0f172a 100%)`
            }}
          >
            {/* Animated Stars */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0.5, 1, 0.8, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
              
              {/* Shooting Star */}
              <motion.div
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                initial={{ 
                  x: -50,
                  y: 50,
                  opacity: 0 
                }}
                animate={{
                  x: typeof window !== 'undefined' ? window.innerWidth + 50 : 1200,
                  y: 150,
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 8,
                  ease: "easeOut"
                }}
                style={{
                  boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8), 0 0 12px 4px rgba(255, 255, 255, 0.4)'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Indoor Family Glamping Packages 🏠
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Transform your home into a magical family wonderland! Perfect for year-round family fun and celebrations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {indoorPackages.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Starry Night Header for Outdoor Packages */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <div 
            className="relative py-16 px-8"
            style={{
              background: `linear-gradient(135deg, 
                #0f172a 0%, 
                #1e293b 25%, 
                #334155 50%, 
                #1e293b 75%, 
                #0f172a 100%)`
            }}
          >
            {/* Animated Stars */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(45)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0.5, 1, 0.8, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Outdoor Family Adventure Packages 🏕️
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Experience the magic of outdoor family glamping in your own backyard!
                  Available Spring/Summer 2025!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {outdoorPackages.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Starry Night Header for Add-ons */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <div 
            className="relative py-16 px-8"
            style={{
              background: `linear-gradient(135deg, 
                #0f172a 0%, 
                #1e293b 25%, 
                #334155 50%, 
                #1e293b 75%, 
                #0f172a 100%)`
            }}
          >
            {/* Animated Stars */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0.5, 1, 0.8, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Family Fun Add-ons ✨
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Make your family glamping experience even more special with these magical touches.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-lavender-200 p-6 rounded-xl flex flex-col h-full hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">{addon.title}</h3>
                <span className="text-lavender-600 font-bold">{addon.price}</span>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">{addon.description}</p>
              <Link 
                to="/book-now"
                onClick={() => handleAddonClick(addon.title)}
                className="bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm"
              >
                Add to Family Package
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Starry Night Header for Themes */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <div 
            className="relative py-16 px-8"
            style={{
              background: `linear-gradient(135deg, 
                #0f172a 0%, 
                #1e293b 25%, 
                #334155 50%, 
                #1e293b 75%, 
                #0f172a 100%)`
            }}
          >
            {/* Animated Stars */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(35)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0.5, 1, 0.8, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Family-Friendly Themes 🎨
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Choose from our magical selection of family themes, or let us create a custom theme just for your family!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-lavender-200 p-4 text-center rounded-xl hover:bg-lavender-50 hover:border-lavender-300 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-800 font-medium">{theme}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 text-gray-600">
          * Custom family theme designs available upon request for an additional fee
        </div>

        {/* Starry Night Header for Space Requirements */}
        <div className="relative mt-20 mb-16 rounded-2xl overflow-hidden">
          <div 
            className="relative py-16 px-8"
            style={{
              background: `linear-gradient(135deg, 
                #0f172a 0%, 
                #1e293b 25%, 
                #334155 50%, 
                #1e293b 75%, 
                #0f172a 100%)`
            }}
          >
            {/* Animated Stars */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0.5, 1, 0.8, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Family Space Requirements 📏
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Make sure you have enough space for your magical family experience!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-lavender-50 border border-lavender-200 p-6 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Indoor Family Tents
            </h3>
            <p className="text-gray-700 mb-4">
              Each family tent is approximately 4ft wide x 7ft long. We suggest leaving 1-2 feet of walkway space for safe family movement.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-teal-50 border border-teal-200 p-6 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Outdoor Family Bell Tents
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Standard 16ft Family Bell Tent: 20' x 20' grassy area for safe staking</li>
              <li>• Large 23ft Family Bell Tent: 26' x 26' grassy area for safe staking</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;