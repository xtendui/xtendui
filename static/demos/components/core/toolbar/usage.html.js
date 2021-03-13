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
    <form class="text-xs">
      <div class="xt-list xt-list-2 w-full justify-end" role="toolbar">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Back
        </button>

        <div class="xt-list-inner flex-auto">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="xt-input rounded-r-md ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <div class="xt-list-inner">
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-l-md ${classes.buttonDefault()}">
            Clear
          </button>
          <button type="button" class="xt-button ${classes.buttonMd()} rounded-r-md ${classes.buttonPrimary()}">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
