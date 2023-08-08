const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-reset-to-current">
    <div
      class="xt-card ${classes.cardMd()} rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
      <div class="xt-list items-center" data-xt-drop="{ mouseParent: true, on: 'mouseenter focus', off: 'mouseleave' }">
        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-drop-element>
            Drop
          </button>

          <div class="xt-drop xt-drop-static" data-xt-drop-target>
            <div class="xt-card w-full ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 0</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-drop-element>
            Drop
          </button>

          <div class="xt-drop xt-drop-static on current" data-xt-drop-target>
            <div class="xt-card w-full ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 1</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-drop-element>
            Drop
          </button>

          <div class="xt-drop xt-drop-static" data-xt-drop-target>
            <div class="xt-card w-full ${classes.dropShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 2</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
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
