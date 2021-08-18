const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
      <div data-xt-drop-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          mouse
        </button>

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
              <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave', position: 'right-start' }">
                <div data-xt-drop-element>
                  <button
                    type="button"
                    class="xt-button ${classes.dropButtonMd()} rounded${classes.dropButtonRadius()} ${classes.dropButtonDefault()}"
                  >
                    nested
                  </button>

                  <div class="xt-drop p-4" data-xt-drop-target>
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

    <form class="text-sm mt-4">
      <div data-xt-drop="{ on: 'focus', off: false }">
        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Focus"
          placeholder="Focus"
          data-xt-drop-element
        />

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
    </form>
  </div>
`

export const object = {
  html: html,
}
