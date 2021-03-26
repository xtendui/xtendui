const markupFade = require('src/gatsby/components/snippets/markup-fade').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--fade-inside">
    <div class="xt-row xt-row-6">${indentString(markupFade(), 2)}</div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
