const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-disable">
    <div data-xt-drop="{ mouseParent: true, matches: { '(min-width: 768px)': { disabled: true } } }">
      <div>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-drop-element>
          Drop
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
              <div
                data-xt-drop="{ mouseParent: true, elements: '[data-xt-drop-element-nested]', targets: '[data-xt-drop-target-nested]' }">
                <div>
                  <button
                    type="button"
                    class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
                    data-xt-drop-element-nested>
                    nested
                  </button>

                  <div class="xt-drop p-3" data-xt-drop-target-nested>
                    <div class="xt-backdrop z-below bg-gray-900 opacity-25"></div>
                    <div
                      class="xt-card w-64 rounded${classes.dropRadius()} ${classes.dropShadow()} ${classes.textInverse()} ${classes.cardPrimary()}">
                      <div class="xt-list flex-col ${classes.groupMd()}">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
