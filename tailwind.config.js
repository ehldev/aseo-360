/** @type {import('tailwindcss').Config} */

const COLOR_PRIMARY = '#39AAB2'
const COLOR_SECONDARY = '#1E7178'
const COLOR_DARK = '#101828'
const COLOR_DARK_2 = '#1A1D23'
const COLOR_GRAY = '#343A40'
const COLOR_GRAY_2 = '#929292'
const COLOR_GRAY_3 = '#A7A8A9'
const COLOR_LIGHT = '#F9FAFB'
// const COLOR_BLACK = '#101828'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      // // screens: {
      //   'lg': '1440px'
      // },
      padding: {
        DEFAULT: '24px',
        md: '36px',
        lg: '36px',
        xl: '0px',
        '2xl': '0px',
      },
    },
    extend: {
      screens: {
        // 'sm': '640px',  // Personalizar el breakpoint para pantallas pequeñas
        // 'md': '768px',  // Personalizar el breakpoint para pantallas medianas
        // 'lg': '1024px', // Personalizar el breakpoint para pantallas grandes
        'xl': '1116px',
        '2xl': '1116px'
      },
      colors: {
        'aseo-primary': COLOR_PRIMARY,
        'aseo-secondary': COLOR_SECONDARY,
        'aseo-dark': COLOR_DARK,
        'aseo-dark-2': COLOR_DARK_2,
        // 'aseo-black': COLOR_BLACK,
        'aseo-gray': COLOR_GRAY,
        'aseo-gray-2': COLOR_GRAY_2,
        'aseo-gray-3': COLOR_GRAY_3,
        'aseo-light': COLOR_LIGHT,
        'aseo-gray-medium': '#E5E5E5'
      },
      backgroundColor: {
        'aseo-primary-30': `rgba(255, 170, 0, 0.05)`
      }
    },
  },
  plugins: [],
}
