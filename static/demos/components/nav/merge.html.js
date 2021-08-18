const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <a href="#" type="button" class="xt-list flex-col *** group ***">
      <div
        class="xt-button ${classes.dropButtonMd()} rounded-t${classes.groupRadius()} ${classes.dropButtonDefault()} ${classes.dropButtonDefaultGroup()}"
      >
        Lorem ipsum dolor sit amet
      </div>

      <div
        class="xt-button ${classes.dropButtonMd()} rounded-b${classes.groupRadius()} ${classes.dropButtonPrimary()} ${classes.dropButtonPrimaryGroup()}"
      >
        Et dictum felis vestibulum sed
      </div>
    </a>
  </div>
`

export const object = {
  html: html,
}
