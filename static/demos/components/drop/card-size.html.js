const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop="{ elements: '[data-xt-drop-el]', targets: '[data-xt-drop-tr]' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-el
        >
          small
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card *** w-64 *** ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-lg" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="*** ${classes.cardSm()} ***">
              <div class="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-drop="{ elements: '[data-xt-drop-el]', targets: '[data-xt-drop-tr]' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-el
        >
          medium
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card *** w-80 *** ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="*** ${classes.cardMd()} ***">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-drop="{ elements: '[data-xt-drop-el]', targets: '[data-xt-drop-tr]' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-el
        >
          large
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card *** w-96 *** ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="*** ${classes.cardLg()} ***">
              <div class="xt-h3">Lorem ipsum</div>
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
`

export const object = {
  html: html,
}
