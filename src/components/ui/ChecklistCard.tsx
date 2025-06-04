import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Sparkles, Bath, Utensils, Flame, Camera, Droplet } from 'lucide-react';

interface ChecklistItem {
  icon: React.FC<{ className?: string }>;
  label: string;
  emoji: string;
}

const items: ChecklistItem[] = [
  { icon: Tent, label: 'Decorated Tent', emoji: '🎀' },
  { icon: Sparkles, label: 'Fairy Lights', emoji: '✨' },
  { icon: Bath, label: 'Private Bathroom Access', emoji: '🚽' },
  { icon: Utensils, label: 'Picnic Table', emoji: '🍉' },
  { icon: Flame, label: 'Firepit', emoji: '🔥' },
  { icon: Camera, label: 'Photo-Ready Decor', emoji: '📸' },
  { icon: Droplet, label: 'Water & Sanitizer', emoji: '💧' }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ChecklistCard: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {items.map((checkItem, index) => (
        <motion.div
          key={index}
          variants={item}
          className="glass-card p-4 relative overflow-hidden group"
          whileHover={{ y: -5 }}
        >
          {/* Sparkle effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-400 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.2, 1],
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${20 + i * 20}%`,
                  top: '50%',
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <checkItem.icon className="w-6 h-6 text-primary-600" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center text-white text-xs"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                ✓
              </motion.div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-primary-900">
                  {checkItem.label}
                </span>
                <span className="text-xl">{checkItem.emoji}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ChecklistCard;