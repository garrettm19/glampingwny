/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#71E4D4', // Magical Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#CDB4DB', // Lavender Purple
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#624674', // Deep Plum
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#FFC8DD', // Accent Pink
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        cream: {
          50: '#FFFDF9', // Soft Cream
          100: '#fefcf3',
          200: '#fef7e0',
          300: '#feecb3',
          400: '#fdd174',
          500: '#fbb042',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
          950: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(113, 228, 212, 0.3)',
        'glow-lg': '0 0 30px rgba(113, 228, 212, 0.4)',
        'glow-pink': '0 0 20px rgba(255, 200, 221, 0.3)',
        'glow-purple': '0 0 20px rgba(205, 180, 219, 0.3)',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        firefly: {
          '0%, 100%': { opacity: 0, transform: 'translate(0, 0)' },
          '50%': { opacity: 1, transform: 'translate(10px, -10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        sparkle: 'sparkle 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        firefly: 'firefly 3s ease-in-out infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
      },
      backgroundImage: {
        'glass': 'linear-gradient(to right bottom, rgba(255, 253, 249, 0.95), rgba(255, 253, 249, 0.8))',
        'glass-hover': 'linear-gradient(to right bottom, rgba(255, 253, 249, 0.98), rgba(255, 253, 249, 0.85))',
        'gradient-teal': 'linear-gradient(135deg, #71E4D4, #5eead4)',
        'gradient-purple': 'linear-gradient(135deg, #CDB4DB, #e9d5ff)',
        'gradient-pink': 'linear-gradient(135deg, #FFC8DD, #fbcfe8)',
        'gradient-magical': 'linear-gradient(135deg, #71E4D4, #CDB4DB, #FFC8DD)',
      },
    },
  },
  plugins: [],
}