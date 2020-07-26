module.exports = {
  theme: require('./src/tailwind-theme')(),
  variants: {
    typography: [],
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
    require('./src/tailwind-plugins'),
  ],
}
