const markupFade = require('src/gatsby/components/snippets/markup-fade').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="CCC--fade-infinite">
    <div class="xt-row xt-row-6 demo--fade-infinite">${indentString(markupFade(), 2)}</div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
