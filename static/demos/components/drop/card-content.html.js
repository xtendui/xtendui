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
          asset
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card w-80 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="xt-media-container bg-gray-500 rounded-md xt-ratio-37.5">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
          asset and text
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card w-80 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="xt-media-container bg-gray-500 rounded-t-md xt-ratio-37.5">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
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
          text
        </button>

        <div class="xt-drop p-4" data-xt-drop-tr>
          <div class="xt-card w-80 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <div class="*** ${classes.cardMd()} rounded-t-md ${classes.cardDefault()} ***">
              <div class="xt-h4">Lorem ipsum</div>
            </div>
            <div class="*** ${classes.cardMd()} bg-gray-200 ***">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div class="*** ${classes.cardSm()} rounded-b-md ${classes.cardPrimary()} ***">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
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
