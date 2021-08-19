const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div
        class="inline-block align-middle ${classes.badgeMd()} rounded${classes.badgeRadius()} *** ${classes.badgeGray()} ***"
      >
        Gray
      </div>

      <div
        class="inline-block align-middle ${classes.badgeMd()} rounded${classes.badgeRadius()} *** ${classes.badgePrimary()} ***"
      >
        Primary
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
