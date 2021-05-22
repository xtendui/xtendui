const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="inline-block align-middle ${classes.badgeRadius()} ${classes.badgeMd()} ${classes.badgeDefaultInteractive()}"
      >
        Gray
      </button>

      <button
        type="button"
        class="inline-block align-middle ${classes.badgeRadius()} ${classes.badgeMd()} ${classes.badgePrimaryInteractive()}"
      >
        Primary
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
