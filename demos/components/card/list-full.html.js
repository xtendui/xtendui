const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-card ${classes.cardRadius()} ${classes.cardDefaultFull()}">
      <div class="text-base">
        <div class="xt-list xt-list-6 md:flex-nowrap items-baseline">
          <div>${classes.iconPackage({ classes: 'text-3xl' })}</div>
          <div>
            <div class="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <div class="self-end justify-self-end">${classes.iconChevronRight({ classes: 'text-3xl' })}</div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
