/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
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
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
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
        'glow': '0 0 20px rgba(255, 255, 255, 0.2)',
        'glow-lg': '0 0 30px rgba(255, 255, 255, 0.3)',
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
        }
      },
      animation: {
        sparkle: 'sparkle 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        firefly: 'firefly 3s ease-in-out infinite',
      },
      backgroundImage: {
        'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
        'glass-hover': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.85))',
      },
    },
  },
  plugins: [],
}