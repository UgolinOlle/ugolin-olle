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
      supreme: ['Supreme', 'sans-serif'],
    },
    colors: {
      dark: '#23272a',
      sdark: '#343a40',
      blue: '#7289da',
      white: '#ffffff',
      red: '#d62828',
      green: '#6a994e',
      yellow: '#ffc300',
    },
  },
  plugins: [],
};
