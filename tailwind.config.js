/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important : true,
  theme: {
    screens : {
      'xsm': '550px',
      // => @media (min-width: 450px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'xmd': '790px',
      // => @media (min-width: 790px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'mlg': '1150px',
      // => @media (min-width: 1150px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'mainDark' : '#555',
        'mainColor' : '#2577E7'
      },
    },
  },
  plugins: [],
}

