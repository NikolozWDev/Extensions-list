/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      hp: '1200px',
      xl: '1280px',
      xxl: '1536px',
    },

    fontFamily: {
      noto: ['"Noto Sans"', 'sans-serif'],
    },

    extend: {
      colors: {
        dneu9: 'hsl(227, 75%, 14%)',
        dneu8: 'hsl(226, 25%, 17%)',
        dneu7: 'hsl(225, 23%, 24%)',
        dneu6: 'hsl(226, 11%, 37%)',

        lneu5: 'hsl(0, 0%, 78%)',
        lneu4: 'hsl(217, 61%, 90%)',
        lneu3: 'hsl(0, 0%, 93%)',
        lneu2: 'hsl(200, 60%, 99%)',
      }
    },


  },
  plugins: [],
}