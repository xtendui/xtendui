module.exports = {
  theme: require('./src/tailwind-theme')({
    extend: {
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
      borderWidth: {
        3: '3px',
      },
    },
  }),
  variants: require('./src/tailwind-variants')({}),
  plugins: [require('./src/tailwind-plugin')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true
    removeDeprecatedGapUtilities: true,
  },
}
