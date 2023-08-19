/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/App.svelte', './src/components/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        // dark theme
        'dark-primary': '#b687fb', // primary color
        'dark-secondary': '#d5bafd', // close to ↑
        'dark-bg-primary': '#121212', // main background
        'dark-bg-secondary': '#1e1e1e', // complementary background
        'dark-bg-alternative': '#2b2b2b', // complementary background
        'dark-text-primary': '#fff', // primary text
        'dark-text-secondary': '#858585', // lower contrast text
        // light theme
        'light-primary': '#7303f0', // primary color
        'light-secondary': '#5102a7', // close to ↑
        'light-bg-primary': '#fefefe', // main background
        'light-bg-secondary': '#f9f7fd', // complementary background
        'light-bg-alternative': '#ede7f9', // complementary background
        'light-text-primary': '#000', // primary text
        'light-text-secondary': '#727272', // lower contrast text
      },
    },
  },
  plugins: [],
}
