const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="*** xt-list xt-list-2 ***">
      <div class="*** inline-flex mr-auto ***">
        <a
          href="#"
          class="xt-button ${classes.buttonMd()} *** rounded-l${classes.groupButtonRadius()} *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
          Clear
        </a>
        <a
          href="#"
          class="xt-button ${classes.buttonMd()} *** rounded-r${classes.groupButtonRadius()} *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
          Submit
        </a>
      </div>

      <a
        href="#"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
        Back
      </a>

      <a
        href="#"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Edit
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
