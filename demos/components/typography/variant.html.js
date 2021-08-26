const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-card ${classes.cardMd()} rounded${classes.cardRadius()} *** ${classes.textInverse()} *** ${classes.cardPrimary()}"
    >
      <h2>Lorem Ipsum</h2>

      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>

      <div
        class="xt-card ${classes.cardMd()} rounded${classes.cardRadius()} *** ${classes.textDefault()} *** ${classes.cardWhite()}"
      >
        <h2>Lorem Ipsum</h2>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
          velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
          vitae magna eget, vehicula scelerisque elit.
        </p>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
