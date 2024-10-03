/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      //to make a section occupy whole screen
      screens:{
        'widescreen': {'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw':'(min-aspect-ratio: 1/2)'}
      }
    },
  },
  plugins: [],
}

