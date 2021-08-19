const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center justify-center">
      <div class="xt-card rounded${classes.cardRadius()} ${classes.textWhite()} ${classes.cardPrimary()}">
        <div class="${classes.cardSm()}">
          <div class="xt-h5">Small</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
        <div class="*** ${classes.loader()} ***">
          <div class="*** ${classes.spinner()} w-6 h-6 text-white ***">
            ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
      >
        Lorem ipsum
        <span class="*** ${classes.loader()} ***">
          <span class="*** ${classes.spinner()} w-6 h-6 text-white ***">
            ${classes.svgSpinner({ classes: 'animate-xt-spinner' })}
          </span>
        </span>
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
