const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full md:w-6/12">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
          <button
            type="button"
            class="*** xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl ***"
            aria-label="Close">
            ${classes.iconX()}
          </button>
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Default</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
          <button
            type="button"
            class="*** xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl ***"
            aria-label="Close">
            ${classes.iconX()}
          </button>
          <div class="${classes.cardMd()}">
            <div class="xt-h4">Primary</div>
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
