import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Palette } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get saved theme
    const savedTheme = localStorage.getItem('color-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to system
      setTheme('system');
      applyTheme('system');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
    
    localStorage.setItem('color-theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-44 right-4 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110"
        aria-label="Theme Settings"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Theme Selector */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed top-56 right-4 z-40 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-48"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Theme</h3>
            
            <div className="space-y-2">
              <button
                onClick={() => handleThemeChange('light')}
                className={`w-full flex items-center justify-between p-2 rounded-lg ${
                  theme === 'light' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Sun className="w-4 h-4 mr-2" />
                  <span>Light</span>
                </div>
                {theme === 'light' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-blue-600 rounded-full"
                  />
                )}
              </button>
              
              <button
                onClick={() => handleThemeChange('dark')}
                className={`w-full flex items-center justify-between p-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Moon className="w-4 h-4 mr-2" />
                  <span>Dark</span>
                </div>
                {theme === 'dark' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                  />
                )}
              </button>
              
              <button
                onClick={() => handleThemeChange('system')}
                className={`w-full flex items-center justify-between p-2 rounded-lg ${
                  theme === 'system' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 flex items-center justify-center">
                    <Sun className="w-3 h-3 absolute" />
                    <Moon className="w-3 h-3 relative top-0 left-1" />
                  </div>
                  <span>System</span>
                </div>
                {theme === 'system' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                  />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;