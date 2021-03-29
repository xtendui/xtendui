const markupSlider = require('src/gatsby/templates/snippets/markup-slider-media').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-media-loaded">
    <div class="xt-slider" data-xt-slider="{ mediaLoaded: true, mediaLoadedReinit: true }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}
