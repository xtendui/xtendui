const markupSlider = require('src/gatsby/components/snippets/markup-slider-overflow').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-overflow-auto">
    <div class="xt-slider" data-xt-slider="{ align: 'center', drag: { wrap: true } }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
