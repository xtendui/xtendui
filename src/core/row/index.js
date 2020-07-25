// https://tailwindcss.com/docs/plugins/#css-in-js-syntax

module.exports = function () {
  return function ({ addComponents, theme }) {
    addComponents({
      '.row': {
      },
    })
  }
}
