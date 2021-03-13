const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div
      class="xt-list xt-list-3 items-center demo--toggle-animation-inverse"
      data-xt-toggle="{ targets: ':scope > .xt-toggle-inverse, .xt-toggle-item > .xt-toggle-inverse' }"
    >
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <div class="xt-card xt-toggle-inverse rounded-md ${classes.cardToggle()}" data-xt-duration="500">Target 0</div>

      <div class="xt-card xt-toggle-inverse rounded-md ${classes.cardToggle()}" data-xt-duration="500">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
