/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm' : '0px',
      'md' : '481px',
      'lg' : '769px',
      'xl' : '1280px',

      'shopCarts': '500px'
    }
  },
  plugins: [],
}

