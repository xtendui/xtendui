const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip>
      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          asset
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div class="*** xt-card w-80 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()} ***">
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-media-container bg-gray-300 rounded-md pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div data-xt-tooltip-element>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          asset and text
        </button>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div class="xt-card w-80 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
              aria-label="Close"
            >
              ${classes.iconX()}
            </button>
            <div class="xt-media-container bg-gray-300 rounded-t-md pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div class="${classes.cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
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
