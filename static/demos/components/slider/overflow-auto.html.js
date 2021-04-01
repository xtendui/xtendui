const markupSlider = require('src/gatsby/templates/snippets/markup-slider-overflow').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-overflow-auto">
    <div class="xt-slider">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
