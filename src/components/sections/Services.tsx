import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';
import { trackEvent } from '../../utils/analytics';

const indoorPackages = [
  {
    title: 'Indoor Base Package',
    description: 'Perfect for intimate celebrations',
    price: '$225',
    image: 'https://picsum.photos/400/300?random=2',
    features: [
      '1 Glamping Tent',
      'Memory Foam Mattress',
      'Cozy Blanket and Linens',
      'Custom Letter Board',
      'Décor Pillows',
      'Breakfast Tray with Lantern',
      'Fairy Lights',
      'Setup and Cleanup',
      'Your Choice of Theme'
    ]
  },
  {
    title: 'Indoor Group Package',
    description: '4-6 Tents Setup',
    price: '$375-$475',
    image: 'https://picsum.photos/400/300?random=3',
    features: [
      '4-6 Glamping Tents',
      'All Base Package Features',
      'Coordinated Theme',
      'Group Activity Space',
      'Extended Setup Area',
      'Perfect for Sleepovers'
    ]
  },
  {
    title: 'Indoor Ultimate Package',
    description: '7-10 Tents Setup',
    price: '$525-$675',
    image: 'https://picsum.photos/400/300?random=4',
    features: [
      '7-10 Glamping Tents',
      'All Group Package Features',
      'Premium Party Space',
      'Enhanced Decorations',
      'Special Group Activities',
      'Perfect for Large Parties'
    ]
  }
];

const outdoorPackages = [
  {
    title: 'Fully Furnished Tent',
    description: '16ft Bell Tent (2-6 Glampers)',
    price: '$500-$600',
    image: 'https://picsum.photos/400/300?random=5',
    features: [
      'Spacious Bell Tent',
      'Memory Foam Beds',
      'Themed Décor',
      'Side Tables & Rugs',
      'Ambient Lighting',
      'Setup and Cleanup',
      'Free Delivery (20-mile radius)'
    ]
  },
  {
    title: 'Luxury Bell Tent',
    description: '23ft Bell Tent (7-12 Glampers)',
    price: '$825-$950',
    image: 'https://picsum.photos/400/300?random=6',
    features: [
      'Extra Large Bell Tent',
      'Premium Furnishings',
      'Enhanced Décor Package',
      'Lounge Area',
      'Premium Lighting',
      'Setup and Cleanup',
      'Free Delivery (20-mile radius)'
    ]
  },
  {
    title: 'Day Dreamer Lounge',
    description: 'Perfect for Daytime Events',
    price: '$500',
    image: 'https://picsum.photos/400/300?random=7',
    features: [
      '16ft Bell Tent',
      'Chairs & Floor Seating',
      'Side Tables & Rugs',
      'Ambient Lighting',
      'Themed Décor',
      'Setup and Cleanup',
      'Perfect for Day Events'
    ]
  }
];

const addons = [
  {
    title: 'Balloon Garland',
    price: '$25',
    description: 'Custom balloon garland for indoor teepee'
  },
  {
    title: 'Luxe Lace Teepee',
    price: '$65',
    description: 'Premium lace teepee with balloon decoration'
  },
  {
    title: 'Picnic Party Add-On',
    price: '$200',
    description: 'Complete picnic setup with decorations'
  },
  {
    title: 'Movie Experience',
    price: '$35',
    description: 'Indoor/outdoor movie setup with screen'
  },
  {
    title: "S'mores Bar",
    price: '$65',
    description: 'Complete s\'mores station with treats'
  },
  {
    title: 'Spa Party Add-On',
    price: '$250',
    description: 'Spa-themed activities and supplies'
  },
  {
    title: 'Yard Games',
    price: '$10',
    description: 'Choice of giant Jenga or Connect 4'
  },
  {
    title: 'Air Conditioner',
    price: '$50',
    description: 'Portable AC unit for outdoor tents'
  },
  {
    title: 'Instant Camera',
    price: '$20',
    description: 'Camera rental with film included'
  },
  {
    title: 'Pet Package',
    price: '$20',
    description: 'Pet-friendly accommodations'
  }
];

const themes = [
  "Barbie's World",
  "Boho Blush",
  "Bold N' Gold",
  "Buffalo Bills",
  "Calling All Video Gamers",
  "Cow-abunga",
  "Cozy Cabin",
  "Dreamy Cloud Party",
  "Galaxy Getaway",
  "Gotta Catch Them All - Pokémon",
  "Harry Potter",
  "Holiday (Valentines, Halloween, Xmas, NYE)",
  "Into the Jungle",
  "Let's GLOW Crazy",
  "Mermaid Magic",
  "Preppy Party",
  "Retro Rewind: 90's Edition",
  "Simply Sage",
  "Sloth Soiree",
  "Sports (Baseball, Basketball, Football, Hockey, Soccer)",
  "Star Wars",
  "Super Hero (Spider-man/ Hulk/ Marvel)",
  "Taylor's Swifties",
  "The Eras Tour",
  "Tropical Paradise",
  "Unicorn Dream",
  "Winter Wonderland"
];

const Services: React.FC = () => {
  const handleAddonClick = (addonTitle: string) => {
    trackEvent('Addon', 'addon_click', addonTitle);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Indoor Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Indoor Glamping Packages
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Transform your living room into a magical wonderland with our indoor glamping experiences.
                Available year-round!
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>

        {/* Outdoor Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Outdoor Glamping Packages
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Experience the magic of outdoor glamping in your own backyard.
                Available Spring/Summer 2025!
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>

        {/* Add-ons */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Magical Add-ons
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Enhance your glamping experience with these special touches.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary-900">{addon.title}</h3>
                  <span className="text-accent-600 font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{addon.description}</p>
                <Link 
                  to="/book-now"
                  onClick={() => handleAddonClick(addon.title)}
                  className="btn btn-primary mt-auto py-2 px-4 text-sm"
                >
                  Add to Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Available Themes
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Choose from our magical selection of themes, or let us create a custom theme just for you!
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <p className="text-primary-900 font-medium">{theme}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-600">
            * Custom theme designs available upon request for an additional fee
          </div>
        </div>

        {/* Space Requirements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Space Requirements
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Make sure you have enough space for your magical experience!
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Indoor Tents
              </h3>
              <p className="text-gray-700 mb-4">
                Each tent is approximately 4ft wide x 7ft long. We suggest leaving 1-2 feet of walkway space in front of the tents.
              </p>
            </motion.div>
            
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Outdoor Bell Tents
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Standard 16ft Bell Tent: 20' x 20' grassy area for staking</li>
                <li>• Large 23ft Bell Tent: 26' x 26' grassy area for staking</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;