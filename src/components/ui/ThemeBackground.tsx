import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeBackgroundProps {
  theme: string;
}

const ThemeBackground: React.FC<ThemeBackgroundProps> = ({ theme }) => {
  const getThemeClass = () => {
    switch (theme) {
      case 'bills':
        return 'theme-bg-bills';
      case 'barbie':
        return 'theme-bg-barbie';
      case 'pokemon':
        return 'theme-bg-pokemon';
      case 'galaxy':
        return 'theme-bg-galaxy';
      case 'unicorn':
        return 'theme-bg-unicorn';
      case 'superhero':
        return 'theme-bg-superhero';
      case 'jungle':
        return 'theme-bg-jungle';
      case 'winter':
        return 'theme-bg-winter';
      case 'retro':
        return 'theme-bg-retro';
      case 'taylor':
        return 'theme-bg-taylor';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence mode="wait">
      {theme && (
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`theme-bg ${getThemeClass()}`}
        />
      )}
    </AnimatePresence>
  );
};

export default ThemeBackground;