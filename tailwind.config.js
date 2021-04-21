const formsPlugin = require('windicss/plugin/forms');
module.exports = {
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          light: 'hsl(223, 100%, 88%)',
          DEFAULT: 'hsl(223, 87%, 63%)',
          dark: 'hsl(209, 33%, 12%)',
        },
        red: {
          light: 'hsl(354, 100%, 66%)',
        },
        gray: {
          DEFAULT: 'hsl(0, 0%, 59%)',
        },
      },
      fontFamily: {
        libre: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [formsPlugin],
};
