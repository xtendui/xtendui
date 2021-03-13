const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const markupFade = resolve
  ? require(`${resolve}components/snippets/markup-fade`).default
  : require('components/snippets/markup-fade').default
const indentString = require('indent-string')

const html = /* HTML */ ` <div class="xt-row xt-row-6 demo--fade-infinite">${indentString(markupFade(), 2)}</div> `

export const object = {
  html: html,
  container: true,
}
