const selectorParser = require('postcss-selector-parser');

module.exports = function () {
  return function ({ addVariant }) {
    addVariant('in', ({ modifySelectors, separator }) => {
      modifySelectors(({ selector }) => {
        return selectorParser((selectors) => {
          const clonedSelectors = selectors.clone()
          ;[selectors, clonedSelectors].forEach((sel, i) => {
            sel.walkClasses((classNode) => {
              classNode.value = `in${separator}${classNode.value}`
              classNode.parent.insertAfter(classNode, selectorParser.pseudo({ value: '.in' }))
            })
          })
          selectors.append(clonedSelectors)
        }).processSync(selector)
      })
    })
    addVariant('out', ({ modifySelectors, separator }) => {
      modifySelectors(({ selector }) => {
        return selectorParser((selectors) => {
          const clonedSelectors = selectors.clone()
          ;[selectors, clonedSelectors].forEach((sel, i) => {
            sel.walkClasses((classNode) => {
              classNode.value = `out${separator}${classNode.value}`
              classNode.parent.insertAfter(classNode, selectorParser.pseudo({ value: '.out' }))
            })
          })
          selectors.append(clonedSelectors)
        }).processSync(selector)
      })
    })
  }
}
