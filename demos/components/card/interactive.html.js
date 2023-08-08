const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <button
          type="button"
          class="xt-card rounded${classes.cardRadius()} *** ${classes.textDefault()} ${classes.cardGray()} ${classes.cardGrayInteractive()} ***">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
              tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
              magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </button>
      </div>

      <div class="w-full md:w-6/12">
        <button
          type="button"
          class="xt-card rounded${classes.cardRadius()} *** ${classes.textInverse()} ${classes.cardPrimary()} ${classes.cardPrimaryInteractive()} ***">
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Primary</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
              tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
              magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
