const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          Asset
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div class="*** xt-card w-64 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()} ***">
            <div class="xt-media-container bg-gray-300 rounded-md pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div data-xt-drop>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-drop-element
        >
          Asset and text
        </button>

        <div class="xt-drop p-4" data-xt-drop-target>
          <div class="*** xt-card w-64 ${classes.cardRadius()} shadow-drop ${classes.cardWhite()} ***">
            <div class="xt-media-container bg-gray-300 rounded-t-md pb-[37.5%]">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div class="*** ${classes.cardSm()} ***">
              <div class="xt-h5">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis.
              </p>
            </div>
            <div class="*** ${classes.cardSm()} rounded-b-md bg-gray-200 ***">
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
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
