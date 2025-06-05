/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        secondary: {
          50: '#fff9ed',
          100: '#fff3d6',
          200: '#ffe4ad',
          300: '#ffd17a',
          400: '#ffb342',
          500: '#ff9419',
          600: '#ff7b0f',
          700: '#cc5a0b',
          800: '#a14610',
          900: '#823b11',
          950: '#461c05',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
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
        'glow': '0 0 20px rgba(255, 182, 193, 0.2)',
        'glow-lg': '0 0 30px rgba(255, 182, 193, 0.3)',
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
        'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
        'glass-hover': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
      },
    },
  },
  plugins: [],
}