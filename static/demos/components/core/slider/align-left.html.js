const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = `
  <div id="ref--">
    <div class="xt-slider" data-xt-slider="{ align: 'left' }">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
