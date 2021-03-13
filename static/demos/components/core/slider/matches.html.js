const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = `
  <div id="ref--">
    <div
      class="xt-slider"
      data-xt-slider="{ drag: { wrap: true }, matches: { '(min-width: 768px)': { align: 'left', drag: { wrap: false } } } }"
    >
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
