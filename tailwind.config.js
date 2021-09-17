module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#5C82F6',
      black: {
        25: '#CACAD0',
        50: '#9697A1',
        75: '#616272',
        100: '#2C2E43'
      },
      white: {
        25: '#EFEFEF',
        50: '#FEFEFE',
        75: '#FFFFFF',
        100: '#FAFAFD'
      },
      red: {
        100: '#F23730',
        75: '#F56964',
        50: '#F99B98',
        25: '#FBCDCB'
      }
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '13px',
      '3xl': '16px',
      '4xl': '21px',
      '5xl': '28px',
      '6xl': '41px',
      '7xl': '51px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
