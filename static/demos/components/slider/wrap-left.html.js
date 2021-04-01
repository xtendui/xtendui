const markupSlider = require('src/gatsby/templates/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-wrap-left">
    <div class="xt-slider">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
  overflowHidden: true,
}
