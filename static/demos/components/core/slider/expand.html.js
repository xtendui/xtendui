const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="CCC--slider-expand">
    <div
      class="xt-slider"
      data-xt-slider="{ drag: { wrap: true }, matches: { '(max-width: 767px)':
    { disabled: true } } }"
    >
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
