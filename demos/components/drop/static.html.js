const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="relative py-4 px-6 bg-primary-500">
      <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          static
        </button>

        <div class="xt-drop xt-drop-static">
          <div class="xt-card w-full ${classes.cardRadius()} shadow-drop ${classes.cardWhite()}">
            <div class="md:xt-card-group">
              <div class="${classes.cardMd()} md:w-7/12 bg-gray-300">
                <div class="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
              <div class="md:w-5/12">
                <div class="${classes.cardMd()} bg-gray-300">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </div>
                <div class="${classes.cardMd()}">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
                </div>
              </div>
            </div>
            <div class="xt-media-container bg-gray-600 rounded-b-md xt-ratio-25">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
