const markupSlider = require('src/gatsby/components/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div id="ref--">
    <div
      class="xt-slider demo--slider-other"
      data-xt-slider="{ loop: false, jumpOverflow: true, autoHeight: '.xt-slides' }"
    >
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
