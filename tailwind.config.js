/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xp-blue': {
          'light': '#3A6EA5',
          'dark': '#0A246A',
          'taskbar': '#245EDC',
          'button': '#3A93FF',
        },
        'xp-green': {
          DEFAULT: '#4DB848',
          'dark': '#3E9E3C',
          'border': '#3A6A2F',
        },
        'xp-gray': {
          DEFAULT: '#D4D0C8',
          'light': '#ECE9D8',
          'border': '#9BA1A8',
        },
      },
      fontFamily: {
        'xp': ['Tahoma', 'sans-serif'],
      },
      backgroundImage: {
        'xp-bliss': "url('https://upload.wikimedia.org/wikipedia/en/7/7d/Bliss_%28Windows_XP%29.png')",
        'xp-gradient-blue': 'linear-gradient(to right, #0A246A, #3A6EA5)',
        'xp-gradient-green': 'linear-gradient(to bottom, #4DB848, #3E9E3C)',
        'xp-gradient-taskbar': 'linear-gradient(180deg, #245EDC 0%, #3987FF 3%, #2C86FE 5%, #1F6AF6 95%, #134BDC 100%)',
        'xp-gradient-button': 'linear-gradient(to bottom, #F3F3F3, #CFCFCF)',
        'xp-gradient-button-hover': 'linear-gradient(to bottom, #FFFFFF, #B0B0B0)',
      },
    },
  },
  plugins: [],
} 