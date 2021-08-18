const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-xs">
      <div class="*** xt-list xt-list-2 flex-full justify-end ***" role="toolbar">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
        >
          Back
        </button>

        <div class="*** inline-flex flex-auto ***">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded-l${classes.groupRadius()} *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input
            type="text"
            class="${classes.input()} *** rounded-r${classes.groupRadius()} *** ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <div class="*** inline-flex ***">
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded-l${classes.groupRadius()} *** ${classes.buttonDefault()}"
          >
            Clear
          </button>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} *** rounded-r${classes.groupRadius()} *** ${classes.buttonPrimary()}"
          >
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
