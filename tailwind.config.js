const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Gibson', ...fontFamily.sans],
      serif: ['Midnight Chalker', ...fontFamily.serif],
      display: ['Gibson', ...fontFamily.sans],
      body: ['Gibson', ...fontFamily.sans],
    },
    extend: {
      colors: {
        'primary-dark': '#1F145D',
        primary: '#2157D6',
        'primary-light': '#99E3FA',
        secondary: '#F8564B',
        'secondary-light': '#FFD0D3',
        accent: '#FFCF34',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
