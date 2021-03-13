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
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} xt-disabled"
        aria-disabled="true"
      >
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} xt-disabled"
        aria-disabled="true"
      >
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()} xt-disabled"
        aria-disabled="true"
      >
        Text
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link xt-disabled" aria-disabled="true">
        link
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
