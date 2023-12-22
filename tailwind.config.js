/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Kanit', 'serif'],
        'sans': ['Kanit', 'sans-serif'],
      },
      colors: {
        'minsk': {
          '50': '#edf2ff',
          '100': '#dfe6ff',
          '200': '#c5d2ff',
          '300': '#a2b3ff',
          '400': '#7d8bfc',
          '500': '#5e63f6',
          '600': '#4840eb',
          '700': '#3d33cf',
          '800': '#312ca7',
          '900': '#2e2c87',
          '950': '#1b194d',
        },
        'storm-gray': {
          '50': '#f7f7f8',
          '100': '#eeeef0',
          '200': '#d9d9de',
          '300': '#b8b8c1',
          '400': '#91929f',
          '500': '#707180',
          '600': '#5d5e6c',
          '700': '#4c4c58',
          '800': '#41414b',
          '900': '#393941',
          '950': '#26262b',
        },
        'hillary': {
          '50': '#f8f8f4',
          '100': '#efefe5',
          '200': '#deddca',
          '300': '#c9c6a8',
          '400': '#b2ab85',
          '500': '#aaa179',
          '600': '#958861',
          '700': '#7c6f52',
          '800': '#665b46',
          '900': '#534b3b',
          '950': '#2c271e',
      },
      
      }
    },
  },
  plugins: [],
}