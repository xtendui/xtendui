const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center" data-xt-tooltip>
      <div class="xt-tooltip-item">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          asset
        </button>

        <div class="xt-tooltip p-2">
          <div class="xt-card w-80 rounded-md shadow-drop ${classes.cardWhite()}">
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
              aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="xt-media-container bg-gray-200 rounded-md xt-ratio-37.5">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xt-tooltip-item">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          asset and text
        </button>

        <div class="xt-tooltip p-2">
          <div class="xt-card w-80 rounded-md shadow-drop ${classes.cardWhite()}">
            <button
              type="button"
              class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
              aria-label="Close">
              ${classes.iconX()}
            </button>
            <div class="xt-media-container bg-gray-200 rounded-t-md xt-ratio-37.5">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
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
