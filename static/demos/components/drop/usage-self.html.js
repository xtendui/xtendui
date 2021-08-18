const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** xt-drop *** p-4 relative inline-block *** on ***" data-xt-drop="{ closeOutside: false }">
      <div
        class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}"
      >
        <nav class="xt-list flex-col">
          <a
            href="#"
            class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button
            type="button"
            class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
          >
            Dolor sit
          </button>
          <button
            type="button"
            class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
          >
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
