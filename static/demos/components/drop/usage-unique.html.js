const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <button
      type="button"
      class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      data-xt-drop="{ targets: '#drop--unique-1, #drop--unique-2' }"
    >
      drop
    </button>

    <div class="*** xt-drop *** p-4" id="drop--unique-1">
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

    <div class="*** xt-drop *** p-4" id="drop--unique-2" data-xt-position="right-end">
      <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.cardWhite()}">
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
