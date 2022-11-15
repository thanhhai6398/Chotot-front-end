/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffba00',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      maxWidth: {
        100: '100px'
      },
      maxHeight: {
        100: '100px'
      },
      minHeight: {
        300: '300px'
      },
      minWidth: {
        300: '300px'
      },
    },
  },
  plugins: [],
}
