const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <a role="button" class="xt-list flex-col *** group ***">
      <div
        class="xt-button ${classes.groupButtonMd()} rounded-t${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()} ${classes.buttonPrimaryAnimGroup()}">
        Lorem ipsum dolor sit amet
      </div>

      <div
        class="xt-button ${classes.groupButtonMd()} rounded-b${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()} ${classes.buttonPrimaryAnimGroup()}">
        Et dictum felis vestibulum sed
      </div>
    </a>
  </div>
`

export const object = {
  html: html,
}
