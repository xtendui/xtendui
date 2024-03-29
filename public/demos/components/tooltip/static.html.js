const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-card ${classes.cardMd()} rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
      <div data-xt-tooltip>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-tooltip-element>
          static
        </button>

        <div class="xt-tooltip *** xt-tooltip-static ***" data-xt-tooltip-target>
          <div class="xt-card w-full ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="${classes.cardMd()}">
              <div class="xt-h4">Tooltip static</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
