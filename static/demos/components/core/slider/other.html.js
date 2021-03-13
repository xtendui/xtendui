const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
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
    <div
      class="xt-slider demo--slider-other"
      data-xt-slider="{ loop: false, jumpOverflow: true, autoHeight: '.xt-slides' }"
    >
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
