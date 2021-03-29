const markupSlider = require('src/gatsby/templates/snippets/markup-slider-other').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div>
    <div class="xt-slider" data-xt-slider="{ loop: false, jump: false, jumpOverflow: true, autoHeight: '.xt-slides' }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
