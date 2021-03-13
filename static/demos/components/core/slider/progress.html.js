
const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-slider demo--slider-progress">${indentString(markupSlider(), 2)}</div>
  </div>
`

export const object = {
  html: html,
}
