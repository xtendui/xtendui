const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-2">
      <div class="inline-flex *** group ***">
        <a
          href="#"
          class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonDefault()} ${classes.buttonDefaultGroup()}"
        >
          Back
        </a>
        <a
          href="#"
          class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonPrimary()} ${classes.buttonPrimaryGroup()}"
        >
          Clear
        </a>
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
