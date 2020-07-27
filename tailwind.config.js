module.exports = {
  theme: require('./src/tailwind-theme')({
    extend: {
      // theme
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
      },
      // typography plugin
      typography: theme => ({
        default: {
          css: {
            color: theme('colors.gray.900'),
            strong: {
              fontWeight: '600',
            },
            h1: {
              color: 'inherit',
              fontWeight: '600',
            },
            h2: {
              color: 'inherit',
              fontWeight: '600',
            },
            h3: {
              color: 'inherit',
              fontWeight: '600',
            },
            h4: {
              color: 'inherit',
              fontWeight: '600',
            },
            a: {
              color: theme('colors.accent.500'),
              '&:hover': {
                color: theme('colors.accent.600'),
              },
            },
          },
        },
      }),
    },
  }),
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    textOpacity: ['responsive', 'hover', 'focus', 'active'],
    typography: [],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
    require('./src/tailwind-plugin'),
  ],
}
