const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <button type="button" class="xt-list *** group ***">
        <div
          class="xt-button ${classes.buttonMd()} rounded-l${classes.groupRadius()} *** ${classes.buttonPrimaryGroup()} ***"
        >
          Search
        </div>

        <div
          class="xt-button ${classes.buttonMd()} rounded-r${classes.groupRadius()} *** ${classes.buttonDefaultGroup()} ***"
        >
          ${classes.iconSearch({ classes: 'text-xl -my-1' })}
        </div>
      </button>
    </form>
  </div>
`

export const object = {
  html: html,
}
