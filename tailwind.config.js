/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // dark theme
        'dark-primary': '#b687fb', // primary color
        'dark-secondary': '#d5bafd', // hover state
        'dark-bg-primary': '#121212', // main background
        'dark-bg-secondary': '#1e1e1e', // complementary background
        'dark-bg-alternative': '#2b2b2b', // complementary background
        'dark-text-primary': '#fff', // primary text
        'dark-text-secondary': '#8b8b8b', // lower contrast text
        // light theme
        'light-primary': '#8129de', // primary color
        'light-secondary': '#9c57e5', // hover state
        'light-bg-primary': '#fefefe', // main background
        'light-bg-secondary': '#f9f7fd', // complementary background
        'light-bg-alternative': '#ede7f9', // complementary background
        'light-text-primary': '#000', // primary text
        // lower it more
        'light-text-secondary': '#646464', // lower contrast text
      },
    },
  },
  plugins: [],
}
