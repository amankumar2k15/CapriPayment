module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx,ts}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {},
    boxShadow: {
      'bottom': '0 2px 0 #FBBF24'
    }, skew: {
      '-3': '-3deg',
    },
    boxShadow: {
      'darkblack': '8px 8px 20px rgba(0, 0, 0, 1)',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'custom': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }

  },
  variants: {},
  plugins: [],
}


