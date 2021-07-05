const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--drop-reset-to-current">
    <div class="relative py-4 px-6 bg-primary-500">
      <div class="xt-list items-center" data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Drop
          </button>

          <div class="xt-drop off:hidden out:pointer-events-none xt-drop-static" data-xt-drop-target>
            <div class="xt-card w-full shadow-drop ${classes.cardWhite()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 0</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Drop
          </button>

          <div class="xt-drop off:hidden out:pointer-events-none xt-drop-static on current" data-xt-drop-target>
            <div class="xt-card w-full shadow-drop ${classes.cardWhite()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 1</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop-element>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          >
            Drop
          </button>

          <div class="xt-drop off:hidden out:pointer-events-none xt-drop-static" data-xt-drop-target>
            <div class="xt-card w-full shadow-drop ${classes.cardWhite()}">
              <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="xt-h4">Drop static 2</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
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
