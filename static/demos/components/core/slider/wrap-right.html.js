const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = `
  <div id="ref--">
    <div class="xt-slider" data-xt-slider="{ align: 'right', drag: { wrap: true } }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
