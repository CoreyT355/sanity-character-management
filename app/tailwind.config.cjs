import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        }
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans]
      },
      maxWidth: {
        '8xl': '90rem'
      }
    }
  },

  plugins: [require('flowbite/plugin')]
};

module.exports = config;