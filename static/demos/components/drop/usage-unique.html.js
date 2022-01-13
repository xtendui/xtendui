const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-drop="{ targets: '#drop--unique' }">
        Drop
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-drop="{ targets: '#drop--unique' }">
        Drop Same
      </button>

      <div class="*** xt-drop *** p-4" id="drop--unique">
        <div
          class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
          <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
            <a
              href="/"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
              A Dolor sit
            </button>
            <button
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
