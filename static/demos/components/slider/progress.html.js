const markupSlider = require('src/gatsby/components/snippets/markup-slider-progress').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-progress">
    <div class="xt-slider">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
