const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <button type="button" class="xt-list flex-col *** group ***">
        <div class="xt-button ${classes.buttonMd()} rounded-t${classes.groupRadius()} ${classes.buttonPrimaryGroup()}">
          Lorem ipsum dolor sit amet
        </div>

        <div class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} ${classes.buttonDefaultGroup()}">
          Et dictum felis vestibulum sed
        </div>
      </button>
    </form>
  </div>
`

export const object = {
  html: html,
}
