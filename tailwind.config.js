/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    lineHeight: {
      md: '1.3',
      lg: '1.5',
    },
    colors: {
      violet: {
        light000: '#E4DEFF',
        light100: '#C3B5FF',
        light200: '#9880FF',
        pure: '#6F4DFF',
        dark000: '#5E41D9',
        dark100: '#452EA6',
        dark200: '#2D1980',
      },
      green: {
        light200: '#42EC9D',
        pure: '#35BD78',
      },
      white: {
        100: '#FEFDFF',
      },
      red: {
        200: '#FF7171',
        300: '#E64444',
      },
      gray: {
        '000': '#DDDCE5',
        100: '#BBBBC7',
        200: '#7A7A98',
        300: '#474760',
        400: '#313145',
        500: '#242333',
      },
      brand: {},
    },
    extend: {
      extend: {
        borderRadius: {
          sm: '.25rem',
        },
      },
    },
  },
  plugins: [],
};
