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
    <div class="bg-primary-500 py-5 px-6">
      <div class="xt-list xt-list-3 items-center text-white xt-links-inverse">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Gray
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          Primary
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md text-white ${classes.buttonText()}">
          Text
        </button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link">Link</button>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
