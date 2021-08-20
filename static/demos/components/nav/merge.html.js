const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <a href="#" type="button" class="xt-list flex-col *** group ***">
      <div
        class="xt-button ${classes.groupButtonMd()} rounded-t${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()} ${classes.buttonPrimaryAnimGroup()}"
      >
        Lorem ipsum dolor sit amet
      </div>

      <div
        class="xt-button ${classes.groupButtonMd()} rounded-b${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()} ${classes.buttonPrimaryAnimGroup()}"
      >
        Et dictum felis vestibulum sed
      </div>
    </a>
  </div>
`

export const object = {
  html: html,
}
