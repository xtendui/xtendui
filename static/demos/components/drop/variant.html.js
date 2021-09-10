const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Gray
        </button>
        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-80 rounded${classes.dropRadius()} ${classes.dropShadow()} *** ${classes.textDefault()} ${classes.cardWhite()} ***">
            <nav class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()} ***">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()} ***">
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()} ***">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Primary
        </button>
        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-80 rounded${classes.dropRadius()} ${classes.dropShadow()} *** ${classes.textInverse()} ${classes.cardPrimary()} ***">
            <nav class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()} ***">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()} ***">
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()} ***">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
