const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
          <div class="*** ${classes.cardSm()} ***">
            <div class="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
          <div class="*** ${classes.cardMd()} ***">
            <div class="xt-h4">Medium</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
          <div class="*** ${classes.cardLg()} ***">
            <div class="xt-h3">Large</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
