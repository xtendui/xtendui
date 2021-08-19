const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div
        class="inline-block align-middle *** ${classes.badgeSm()} rounded${classes.badgeRadius()} *** ${classes.badgeGray()}"
      >
        Small
      </div>

      <div
        class="inline-block align-middle *** ${classes.badgeMd()} rounded${classes.badgeRadius()} *** ${classes.badgeGray()}"
      >
        Medium
      </div>

      <div
        class="inline-block align-middle *** ${classes.badgeLg()} rounded${classes.badgeRadius()} *** ${classes.badgeGray()}"
      >
        Large
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
