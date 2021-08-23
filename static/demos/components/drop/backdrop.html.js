const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} on:z-drop"
          data-xt-drop-element
        >
          backdrop
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
          <div class="*** xt-backdrop z-below bg-gray-800 opacity-25 ***"></div>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardGray()}"
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
          <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100"></div>
        </div>
      </div>

      <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} on:z-drop"
          >
            backdrop mouse
          </button>

          <div class="xt-drop p-3" data-xt-drop-target>
            <div class="*** xt-backdrop z-below bg-gray-800 opacity-25 ***"></div>
            <div
              class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardGray()}"
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
            <div class="xt-arrow -inset-1 m-3 w-3 h-3 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
