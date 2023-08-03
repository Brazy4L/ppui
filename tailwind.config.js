/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // dark theme
        'dark-primary': '#955bf1', // primary color
        'dark-secondary': '#a472f3', // hover state
        'dark-bg-primary': '#121212', // main background
        'dark-bg-secondary': '#303030', // complementary background
        'dark-bg-alternative': '#505050', // complementary background
        'dark-text-primary': '#fff', // primary text
        'dark-text-secondary': '#9b9b9b', // lower contrast text
        // light theme
        'light-primary': '#8c4ffb', // primary color
        'light-secondary': '#7c37fb', // hover state
        'light-bg-primary': '#fefefe', // main background
        'light-bg-secondary': '#F7F7F7', // complementary background
        'light-bg-alternative': '#c2c2c2', // complementary background
        'light-text-primary': '#000', // primary text
        'light-text-secondary': '#646464', // lower contrast text
      },
    },
  },
  plugins: [],
}
