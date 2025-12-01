/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          light: '#f4e8d0',
          medium: '#e8d7b8',
          dark: '#d4c4a0',
        },
        gold: {
          light: '#ffd700',
          medium: '#d4af37',
          dark: '#b8860b',
          antique: '#c9a961',
        },
        brown: {
          dark: '#3a2618',
          medium: '#5c4033',
          light: '#8b4513',
        },
        burgundy: '#6b1f1f',
        ink: {
          black: '#1a1410',
          brown: '#3d2817',
        },
        mystical: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        medieval: ['UnifrakturMaguntia', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        medievalSharp: ['MedievalSharp', 'cursive'],
        pirata: ['Pirata One', 'cursive'],
      },
      animation: {
        'float': 'float 6s infinite ease-in-out',
        'torch-glow': 'torchGlow 4s infinite alternate',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in': 'fadeIn 1.5s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'spin-once': 'spin 0.6s ease-in-out',
        'shimmer': 'shimmer 2s infinite',
        'mystical-glow': 'mysticalGlow 3s infinite alternate',
        'sparkle': 'sparkle 1.5s infinite',
        'reveal': 'reveal 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.6' },
        },
        torchGlow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.6' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        mysticalGlow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.3)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4)' },
        },
      },
      boxShadow: {
        'medieval': '0 4px 15px rgba(58, 38, 24, 0.4)',
        'medieval-lg': '0 8px 25px rgba(58, 38, 24, 0.6)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.5)',
        'mystical': '0 0 30px rgba(139, 92, 246, 0.5)',
        'mystical-lg': '0 0 50px rgba(139, 92, 246, 0.7)',
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)',
        'mystical-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
      },
    },
  },
  plugins: [],
}
