const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-drop-element
      >
        Drop
      </button>

      <div class="xt-drop p-3" data-xt-drop-target>
        <div
          class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.textBlack()} ${classes.cardGray()}"
        >
          <nav class="xt-list flex-col ${classes.groupMd()}">
            <a
              href="#"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
            >
              Dolor sit
            </button>
            <button
              type="button"
              class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
            >
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
