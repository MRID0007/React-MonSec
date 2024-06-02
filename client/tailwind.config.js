/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: 'rgb(250, 250, 250)',
          100: 'rgb(244, 244, 245)',
          300: 'rgb(212, 212, 216)',
          400: 'rgb(161, 161, 170)',
          600: 'rgb(82, 82, 91)',
          700: 'rgb(63, 63, 70)',
          800: 'rgb(39, 39, 42)',
          900: 'rgb(24, 24, 27)',
        },
        primary: {
          400: 'rgb(167, 139, 250)',
          500: 'rgb(139, 92, 246)',
          600: 'rgb(124, 58, 237)',
          700: 'rgb(109, 40, 217)',
          800: 'rgb(91, 33, 182)',
          900: 'rgb(76, 29, 149)',
          1000: 'rgb(106, 208, 157)',
        },
      },
      fontSize: {
        'header': ['36px', '40px'],
      },
    },
  },
  plugins: [],
};
