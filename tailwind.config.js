/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        secondary: {
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce4ad',
          300: '#fbd27a',
          400: '#f9b942',
          500: '#f79815',
          600: '#e17b0c',
          700: '#bb5d0b',
          800: '#964a11',
          900: '#7a3d12',
          950: '#461e05',
        },
        accent: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fcdcff',
          300: '#fbb9ff',
          400: '#f786ff',
          500: '#ed53ff',
          600: '#d631e8',
          700: '#b421c4',
          800: '#931ca0',
          900: '#791a82',
          950: '#500754',
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
        'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-lg': '0 0 30px rgba(20, 184, 166, 0.4)',
        'glow-xl': '0 0 40px rgba(20, 184, 166, 0.5)',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: 1, transform: 'scale(1.2) rotate(180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(5px) rotate(240deg)' },
        },
        firefly: {
          '0%, 100%': { opacity: 0, transform: 'translate(0, 0)' },
          '50%': { opacity: 1, transform: 'translate(10px, -10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(20, 184, 166, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.8), 0 0 30px rgba(20, 184, 166, 0.4)',
          },
        },
        'slide-in': {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      animation: {
        sparkle: 'sparkle 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        firefly: 'firefly 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out forwards',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      backgroundImage: {
        'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
        'glass-hover': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.85))',
        'gradient-primary': 'linear-gradient(135deg, #14b8a6, #0d9488)',
        'gradient-secondary': 'linear-gradient(135deg, #f79815, #e17b0c)',
        'gradient-accent': 'linear-gradient(135deg, #ed53ff, #d631e8)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}