const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-disable">
    <div data-xt-drop="{ matches: { '(min-width: 768px)': { disabled: true } } }">
      <div data-xt-drop-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          drop
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
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
              <div
                data-xt-drop="{ elements: '[data-xt-drop-element-nested]', targets: '[data-xt-drop-target-nested]' }"
              >
                <div data-xt-drop-element-nested>
                  <button
                    type="button"
                    class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                  >
                    nested
                  </button>

                  <div class="xt-drop p-3" data-xt-drop-target-nested>
                    <div class="xt-backdrop z-below bg-black opacity-25"></div>
                    <div
                      class="xt-card w-64 ${classes.dropGroupMd()} rounded${classes.dropCardRadius()} shadow-drop ${classes.cardPrimary()}"
                    >
                      <nav class="xt-list flex-col">
                        <a
                          href="#"
                          class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonPrimary()}"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </a>
                        <button
                          type="button"
                          class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonPrimary()}"
                        >
                          Dolor sit
                        </button>
                        <button
                          type="button"
                          class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonPrimary()}"
                        >
                          Amet
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
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
