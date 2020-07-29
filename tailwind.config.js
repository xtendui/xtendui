module.exports = {
  theme: {
    extend: {
      // override theme waiting for https://github.com/tailwindlabs/tailwindcss/issues/660 https://github.com/tailwindlabs/tailwindcss/issues/677
      fontFamily: {
        sans: [
          '"Open Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        // https://javisperez.github.io/tailwindcolorshades/#/?hawkes-blue=d0e6fe
        gray: {
          100: '#FAFDFF',
          200: '#F3F9FF',
          300: '#ECF5FF',
          400: '#DEEEFE',
          500: '#D0E6FE',
          600: '#BBCFE5',
          700: '#7D8A98',
          800: '#5E6872',
          900: '#3E454C',
        },
        // https://javisperez.github.io/tailwindcolorshades/#/?Azure%20Radiance=0078ff&tv=1
        accent: {
          100: '#E6F2FF',
          200: '#BFDDFF',
          300: '#99C9FF',
          400: '#4DA1FF',
          500: '#0078FF',
          600: '#006CE6',
          700: '#004899',
          800: '#003673',
          900: '#00244D',
        },
      },
      gradients: theme => ({
        accent: `${theme('colors.accent.500')} 33%, ${theme('colors.accent.600')} 100%`,
      }),
      zIndex: {
        base: '0',
        active: '2',
        out: '1',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        out: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    textOpacity: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('./src/tailwind-plugin')],
}
