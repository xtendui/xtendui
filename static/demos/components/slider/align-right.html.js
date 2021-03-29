const markupSlider = require('src/gatsby/templates/snippets/markup-slider').default
const indentString = require('indent-string')
const html = /* HTML */ `
  <div>
    <div class="xt-slider" data-xt-slider="{ align: 'right' }">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
