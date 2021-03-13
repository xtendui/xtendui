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
    <form class="text-sm">
      <button type="button" class="xt-list group">
        <div class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonPrimaryGroup()}">Search</div>

        <div class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonDefaultGroup()}">
          ${classes.iconSearch({ classes: 'text-xl -my-1' })}
        </div>
      </button>
    </form>
  </div>
`

export const object = {
  html: html,
}
