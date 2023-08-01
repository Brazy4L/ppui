/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // prefix 'dark' for dark theme, 'light' for light theme
        'dark-primary': '#955bf1', // primary color
        'dark-secondary': '#a472f3', // hover state
        'dark-bg-primary': '#121212', // main background
        'dark-bg-secondary': '#303030', // complementary background
        'dark-text-primary': '#fff', // primary text
        'dark-text-secondary': '#9b9b9b', // lower contrast text

        'light-primary': '#8c4ffb', // primary color
        'light-secondary': '#7c37fb', // hover state
        'light-bg-primary': '#fefefe', // main background
        'light-bg-secondary': '#e1e1e1', // complementary background
        'light-text-primary': '#000', // primary text
        'light-text-secondary': '#646464', // lower contrast text
      },
    },
  },
  plugins: [],
}
