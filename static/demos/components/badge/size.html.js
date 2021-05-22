const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div class="inline-block align-middle ${classes.badgeRadius()} ${classes.badgeSm()} ${classes.badgeDefault()}">
        Small
      </div>

      <div class="inline-block align-middle ${classes.badgeRadius()} ${classes.badgeMd()} ${classes.badgeDefault()}">
        Medium
      </div>

      <div class="inline-block align-middle ${classes.badgeRadius()} ${classes.badgeLg()} ${classes.badgeDefault()}">
        Large
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
