/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        devlyGreen: '#0DA16C',
        devlyMint: '#EBFBEF',
        devlyWhite: '#F4FFFA',
        devlyDark: '#001D13',
        darkBackground: '#03160F',
        darkDevlyGreen: '#0DA16C',
        darkDevlyMint: '#BBFFE7',
      },
      fontFamily: {
        'cascadia': ['Cascadia Mono', 'monospace'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        buttonBlink: {
          '0%, 100%': { backgroundColor: '#0DA16C' },
          '50%': { backgroundColor: '#0A8054' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.9s ease-out forwards',
        blink: 'blink 1s infinite',
        buttonBlink: 'buttonBlink 1s infinite',
      },
    },
  },
  plugins: [],
};



