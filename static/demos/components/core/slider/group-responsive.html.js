const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const markupSlider = resolve
  ? require(`${resolve}components/snippets/markup-slider`).default
  : require('components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-slider" data-xt-slider="{ group: 0.8, matches: { '(min-width: 768px)': { group: 1 } } }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
