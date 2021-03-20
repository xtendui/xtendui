const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div class="xt-badge ${classes.badgeSm()} ${classes.badgeDefault()}">Small</div>

      <div class="xt-badge ${classes.badgeMd()} ${classes.badgeDefault()}">Medium</div>

      <div class="xt-badge ${classes.badgeLg()} ${classes.badgeDefault()}">Large</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
