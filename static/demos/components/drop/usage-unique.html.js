const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
      data-xt-drop="{ targets: '#drop--unique-1, #drop--unique-2' }"
    >
      Drop
    </button>

    <div class="*** xt-drop *** p-4" id="drop--unique-1">
      <div
        class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textBlack()} ${classes.cardGray()}"
      >
        <nav class="xt-list flex-col ${classes.groupMd()}">
          <a
            href="#"
            class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button
            type="button"
            class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
          >
            Dolor sit
          </button>
          <button
            type="button"
            class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
          >
            Amet
          </button>
        </nav>
      </div>
    </div>

    <div class="*** xt-drop *** p-4" id="drop--unique-2" data-xt-position="right-end">
      <div
        class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textBlack()} ${classes.cardGray()}"
      >
        <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
          ${classes.iconX()}
        </button>
        <div class="${classes.cardSm()}">
          <div class="xt-h5">Lorem ipsum</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis.
          </p>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
