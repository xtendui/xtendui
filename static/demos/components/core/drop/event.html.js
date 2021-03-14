const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
      <div class="xt-drop-item">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          mouse
        </button>

        <div class="xt-drop p-4">
          <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave', position: 'right-start' }">
                <div class="xt-drop-item">
                  <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                    nested
                  </button>

                  <div class="xt-drop p-4">
                    <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardPrimary()}">
                      <nav class="xt-list flex-col">
                        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonPrimaryDrop()}">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </a>
                        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonPrimaryDrop()}">
                          Dolor sit
                        </button>
                        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonPrimaryDrop()}">
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
      <div data-xt-drop="{ elements: ':scope > input', on: 'focus', off: false }">
        <input
          type="text"
          class="xt-input rounded-md ${classes.inputDefault()}"
          aria-label="Focus"
          placeholder="Focus"
        />

        <div class="xt-drop p-4">
          <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
            <nav class="xt-list flex-col">
              <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
                Dolor sit
              </button>
              <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">Amet</button>
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
