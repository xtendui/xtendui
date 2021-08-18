const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave', preventEvent: true }">
      <div data-xt-drop-element>
        <a
          href="#drop-with-link-1"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          drop
        </a>

        <div class="xt-drop p-4" data-xt-drop-target>
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
    </div>
  </div>
`

export const object = {
  html: html,
}
