const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-touch-overflow">
    <div class="xt-slider" data-xt-slider="{ matches: { '(hover: none)': { disabled: true } } }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
