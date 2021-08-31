const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element
        >
          Drop
        </button>
        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-80 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}"
          >
            <nav class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
              >
                Amet
              </button>
            </nav>
            <button
              type="button"
              class="xt-button *** xt-dismiss *** ${classes.buttonMd()} rounded-b${classes.dropRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
