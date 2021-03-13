const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">button</button>
  </div>
`

export const object = {
  html: html,
}
