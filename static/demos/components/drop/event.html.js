const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-event">
    <div data-xt-drop="{ mouseParent: true, on: 'mouseenter focus', off: 'mouseleave' }">
      <div>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          mouse
        </button>

        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
            <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
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
              <div
                data-xt-drop="{ mouseParent: true, on: 'mouseenter focus', off: 'mouseleave', position: 'right-start' }">
                <div>
                  <button
                    type="button"
                    class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
                    data-xt-drop-element>
                    nested
                  </button>

                  <div class="xt-drop p-3" data-xt-drop-target>
                    <div
                      class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textInverse()} ${classes.cardPrimary()}">
                      <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
                        <a
                          href="/"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </a>
                        <button
                          type="button"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
                          Dolor sit
                        </button>
                        <button
                          type="button"
                          class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.groupButtonPrimary()} ${classes.buttonPrimaryAnim()}">
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
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
          aria-label="Focus"
          placeholder="Focus"
          data-xt-drop-element />

        <div class="xt-drop p-3" data-xt-drop-target>
          <div
            class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
            <nav aria-label="Drop" class="xt-list flex-col ${classes.groupMd()}">
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
