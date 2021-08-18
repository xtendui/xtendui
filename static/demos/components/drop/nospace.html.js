const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ position: 'bottom' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          bottom
        </button>

        <div class="xt-drop" data-xt-drop-target>
          <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
            <nav class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'bottom-start' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          bottom start
        </button>

        <div class="xt-drop" data-xt-drop-target>
          <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
            <nav class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'right-end' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          right end
        </button>

        <div class="xt-drop" data-xt-drop-target>
          <div class="xt-card w-64 rounded${classes.dropCardRadius()} shadow-drop ${classes.dropCardDefault()}">
            <nav class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="#"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Dolor sit
              </button>
              <button
                type="button"
                class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
              >
                Amet
              </button>
            </nav>
          </div>
          <div class="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
