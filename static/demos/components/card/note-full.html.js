const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="*** xt-card text-sm p-0 rounded${classes.cardRadius()} my-4 xt-my-auto ${classes.cardDefaultFull()} ***"
    >
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
    </div>

    <div
      class="*** xt-card text-sm p-0 rounded${classes.cardRadius()} my-4 xt-my-auto ${classes.cardPrimaryFull()} ***"
    >
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
    </div>
  </div>
`

export const object = {
  html: html,
}
