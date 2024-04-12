/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'light-green': '#54E6AF',
        'dark-blueish-gray': '#2C344B',
        'dark-midnight-blue': '#121725',
        'white': '#FFFFFF',
        'light-blueish-gray': '#C2CBE5',
        'slate-grayish': '#5A668A',
      },
      fontFamily: {
        'chivo': ['chivo', 'sans-serif'],
      },
      fontSize: {
        '16px': '16px',
      },
    },
  },
  plugins: [],
}

