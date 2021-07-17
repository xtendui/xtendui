const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-overlay>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-overlay-element
      >
        Separator
      </button>

      <div class="xt-overlay" data-xt-overlay-target>
        <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <div class="xt-overlay-inner">
            <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="md:xt-card-group">
                <div class="${classes.cardMd()} md:w-7/12">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div class="md:w-5/12 *** border-t md:border-t-0 sm:border-l border-solid border-gray-400 ***">
                  <div class="${classes.cardSm()}">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                  <div class="${classes.cardMd()} *** border-t border-solid border-gray-400 ***">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                </div>
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
