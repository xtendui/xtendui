
const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-slider" data-xt-slider="{ group: 1 }">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
