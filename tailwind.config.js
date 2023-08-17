/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
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
        'light-primary': '#7402ed', // primary color
        'light-secondary': '#5102a7', // close to ↑
        'light-bg-primary': '#fefefe', // main background
        'light-bg-secondary': '#f9f7fd', // complementary background
        'light-bg-alternative': '#ede7f9', // complementary background
        'light-text-primary': '#000', // primary text
        'light-text-secondary': '#727272', // lower contrast text
      },
      containers: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
