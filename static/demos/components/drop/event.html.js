const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      data-xt-drop="{ elements: '[data-xt-drop-el]', targets: '[data-xt-drop-tr]', on: 'mouseenter', off: 'mouseleave' }"
    >
      <div data-xt-drop-el>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          mouse
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <div
                data-xt-drop="{ elements: '[data-xt-drop-el]', targets: '[data-xt-drop-tr]', on: 'mouseenter', off: 'mouseleave', position: 'right-start' }"
              >
                <div data-xt-drop-el>
                  <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                    nested
                  </button>

                  <div class="xt-drop p-4" data-xt-drop-tr>
                    <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardPrimary()}">
                      <nav class="xt-list flex-col">
                        <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonPrimaryDrop()}">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </a>
                        <button
                          type="button"
                          class="xt-button ${classes.buttonMdDrop()} ${classes.buttonPrimaryDrop()}"
                        >
                          Dolor sit
                        </button>
                        <button
                          type="button"
                          class="xt-button ${classes.buttonMdDrop()} ${classes.buttonPrimaryDrop()}"
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
      <div data-xt-drop="{ elements: '[data-xt-drop-el]', targets: '[data-xt-drop-tr]', on: 'focus', off: false }">
        <input
          type="text"
          class="${classes.input()} ${classes.inputRadius()} ${classes.inputDefault()}"
          aria-label="Focus"
          placeholder="Focus"
          data-xt-drop-el
        />

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card w-64 py-3.5 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button ${classes.buttonMdDrop()} ${classes.buttonDefaultDrop()}">
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
