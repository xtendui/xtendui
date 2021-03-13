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
    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}">small</button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        medium
      </button>

      <button type="button" class="xt-button ${classes.buttonLg()} rounded-md ${classes.buttonPrimary()}">large</button>
    </div>
  </div>
`

export const object = {
  html: html,
}
