const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ position: 'auto' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          auto
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
            <div class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="/"
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
            </div>
          </div>
          <div class="xt-arrow rotate-45 z-below -inset-1 m-3 w-3 h-3 bg-gray-200"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'auto-start' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          auto start
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
            <div class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="/"
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
            </div>
          </div>
          <div class="xt-arrow rotate-45 z-below -inset-1 m-3 w-3 h-3 bg-gray-200"></div>
        </div>
      </div>

      <div data-xt-drop="{ position: 'auto-end' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          auto end
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
            <div class="xt-list flex-col ${classes.groupMd()}">
              <a
                href="/"
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
            </div>
          </div>
          <div class="xt-arrow rotate-45 z-below -inset-1 m-3 w-3 h-3 bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
