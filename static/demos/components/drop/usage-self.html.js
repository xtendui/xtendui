const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** xt-drop *** p-4 relative inline-block *** on ***" data-xt-drop="{ closeOutside: false }">
      <div
        class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
        <nav class="xt-list flex-col ${classes.groupMd()}">
          <a
            href="#"
            class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button
            type="button"
            class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
            Dolor sit
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
`

export const object = {
  html: html,
}
