// https://tailwindcss.com/docs/plugins/#adding-variants

module.exports = function () {
  return function ({ addVariant, e }) {
    addVariant('in', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`in${separator}${className}`)}.in`
      })
    })
    addVariant('out', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`out${separator}${className}`)}.out`
      })
    })
  }
}
