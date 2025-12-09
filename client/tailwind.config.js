/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: {
          light: '#fdfbf7', // Ultra light parchment
          DEFAULT: '#f4f1ea', // Light parchment
          dark: '#e6e2d6', // Darker parchment for contrast
        },
        paper: {
          DEFAULT: '#ffffff',
          hover: '#fcfbf9',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Ocean Blue
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        treasure: {
          gold: '#d4af37', // Classic Gold
          amber: '#f59e0b', // Bright Amber
          bronze: '#b45309', // Aged Bronze
        },
        jungle: {
          light: '#34d399',
          medium: '#10b981',
          deep: '#065f46',
        },
        map: {
          sepia: '#705c3e', // Ink color
          grid: '#e5e0d1', // Grid lines
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Space Grotesk', 'sans-serif'],
        script: ['Pirata One', 'cursive'],
      },
      animation: {
        'float': 'float 6s infinite ease-in-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'shine': 'shine 3s infinite',
        'pulse-gold': 'pulseGold 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(112, 92, 62, 0.1)',
        'card': '0 10px 30px -5px rgba(112, 92, 62, 0.15)',
        'floating': '0 20px 40px -5px rgba(112, 92, 62, 0.2)',
        'inner-map': 'inset 0 0 30px rgba(112, 92, 62, 0.1)',
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
      },
      backgroundImage: {
        'parchment-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        'dots-pattern': "radial-gradient(#e5e0d1 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
