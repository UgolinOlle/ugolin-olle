/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      '2xl': '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
    },
    colors: {
      dark: '#23272a',
      sdark: '#343a40',
      blue: '#777BB3',
      sblue: '#38bdf9',
      tblue: '#2f71bc',
      white: '#ffffff',
      red: '#d62828',
      green: '#40b883',
      yellow: '#ffc300',
    },
    extend: {
      backgroundImage: {
        mesh: 'url(../public/mesh.png)',
      },
    },
  },
  plugins: [],
};
